import { Badge, Icon, Table, TableBody, TableCell, TableHead, TableHeaderCell, TableRow } from '@tremor/react'
import { GetStaticProps, InferGetStaticPropsType, NextPage } from 'next'

import { IModel, models } from '~/const/models'
import { getFulfillmentUrl } from '~/utils/helpers'

import QuestionMarkCircleIcon from '@heroicons/react/24/solid/QuestionMarkCircleIcon'
import LinkIcon from '@heroicons/react/24/solid/LinkIcon'
import XCircleIcon from '@heroicons/react/24/solid/XCircleIcon'

import { NextSeo } from 'next-seo'
import dayjs from 'dayjs'
import { useEffect, useState } from 'react'
import Link from 'next/link'

export const getStaticProps: GetStaticProps<
  { model: IModel; stores: any[]; delivery: Record<string, any>; updatedAt: string },
  {
    category: string
    model: string
  }
> = async (context) => {
  const { params } = context

  if (!params) {
    return {
      notFound: true,
      revalidate: 1,
    }
  }

  const { category, model } = params

  const selectedModel = models[category].models[model]

  if (!selectedModel) {
    return {
      notFound: true,
      revalidate: 1,
    }
  }

  const partNumbers = selectedModel.partNumbers.map(({ partNumber }) => partNumber)
  const fulfillmentUrl = getFulfillmentUrl(partNumbers)
  const fulfillment = await fetch(fulfillmentUrl)
  const timestamp = new Date().toISOString()

  console.log(fulfillmentUrl)

  console.log(fulfillment.status)

  if (fulfillment.status !== 200) {
    return {
      notFound: true,
      revalidate: 1,
    }
  }

  const fulfillmentData = await fulfillment.json()

  // console.log(fulfillmentData)

  const {
    body: { content },
  } = fulfillmentData

  // console.log(content)

  const pickupStores = content.pickupMessage.stores
  const deliveryItems = Object.entries(content.deliveryMessage || {})
    .filter(([key]) => partNumbers.includes(key))
    .reduce((acc, [key, value]) => {
      acc[key] = (value as any).regular
      return acc
    }, {} as Record<string, any>)

  return {
    props: {
      model: selectedModel,
      stores: pickupStores,
      delivery: deliveryItems,
      updatedAt: timestamp,
    },
    revalidate: 1,
  }
}

export const getStaticPaths = async () => {
  const paths = Object.entries(models).reduce((acc, [category, { models }]) => {
    const categoryPaths = Object.entries(models).map(([model]) => ({
      params: { category, model },
    }))

    return [...acc, ...categoryPaths]
  }, [] as { params: { category: string; model: string } }[])

  return {
    paths,
    fallback: 'blocking',
  }
}

const Page: NextPage<InferGetStaticPropsType<typeof getStaticProps>> = ({ model, stores, delivery, updatedAt }) => {
  console.log(stores)
  console.log(delivery)

  const [lastUpdated, setLastUpdated] = useState('')

  useEffect(() => {
    setLastUpdated(dayjs(updatedAt).format('DD MMM YYYY [at] h:mm:ss A'))
  }, [updatedAt])

  return (
    <div className="max-w-screen-lg mx-auto px-10 pb-10 pt-16">
      <NextSeo title={model.name} />
      <div className="space-y-8">
        <div>
          <h1 className="font-bold text-2xl">{model.name}</h1>
          <p className="text-sm text-gray-500">Last updated: {lastUpdated}</p>
          <div className="-mx-4">
            <Table marginTop="mt-0">
              <TableHead>
                <TableRow>
                  <TableHeaderCell textAlignment="text-left">Model Name</TableHeaderCell>
                  <TableHeaderCell textAlignment="text-center">Model Number</TableHeaderCell>
                  <TableHeaderCell textAlignment="text-center">Delivery Status</TableHeaderCell>
                  {stores.map((store) => (
                    <TableHeaderCell key={store.storeNumber} textAlignment="text-center">
                      {store.storeName} ({store.storeNumber})
                    </TableHeaderCell>
                  ))}
                </TableRow>
              </TableHead>
              <TableBody>
                {Object.entries(delivery).map(([partNumber, delivery]) => {
                  const addtionalInfo = model.partNumbers.find(
                    (number) => number.partNumber === partNumber
                  )?.productName

                  const dateRegex = /(\d{1,2}\/\d{1,2}\/\d{4})/
                  const deliveryStatus = delivery?.deliveryOptionMessages[0]['displayName']
                  const deliveryDate = deliveryStatus.match(dateRegex)?.[0]

                  const isReadyToDeliver =
                    !!deliveryDate || deliveryStatus.includes('พร้อมขาย') || deliveryStatus.includes('พรุ่งนี้')

                  const deliveryRelative = deliveryStatus.includes('พร้อมขาย')
                    ? 'พร้อมขาย'
                    : deliveryStatus.includes('พรุ่งนี้')
                    ? 'พรุ่งนี้'
                    : undefined

                  return (
                    <TableRow key={partNumber}>
                      <TableCell textAlignment="text-left">
                        <div className="flex items-center">
                          {stores[0].partsAvailability[partNumber].messageTypes.regular.storePickupProductTitle}
                          {addtionalInfo ? (
                            <Icon
                              icon={QuestionMarkCircleIcon}
                              variant="simple"
                              tooltip={addtionalInfo}
                              size="sm"
                              color="gray"
                              marginTop="mt-0"
                            />
                          ) : null}
                          <Link href={`https://www.apple.com/th/shop/product/${partNumber}`} target="_blank">
                            <Icon
                              icon={LinkIcon}
                              variant="simple"
                              size="sm"
                              color="gray"
                              marginTop="mt-0"
                              tooltip="Link to Apple Store"
                            />
                          </Link>
                        </div>
                      </TableCell>
                      <TableCell textAlignment="text-center">{partNumber}</TableCell>
                      <TableCell textAlignment="text-center">
                        {isReadyToDeliver ? (
                          <Badge
                            text={deliveryDate || deliveryRelative || deliveryStatus}
                            color="green"
                            size="sm"
                            tooltip={deliveryStatus}
                          />
                        ) : (
                          <Icon
                            icon={XCircleIcon}
                            variant="simple"
                            size="sm"
                            color="red"
                            marginTop="mt-0"
                            tooltip={deliveryStatus}
                          />
                        )}
                      </TableCell>
                      {stores.map((store) => {
                        const storeAvailability = store.partsAvailability[partNumber]
                        const storeStatus = storeAvailability.pickupSearchQuote

                        const isReadyToPickup = storeStatus.includes('พร้อมจำหน่าย')

                        const pickupDate = storeStatus.match(dateRegex)?.[0]

                        const pickupRelative = storeStatus.includes('วันนี้')
                          ? 'วันนี้'
                          : storeStatus.includes('พรุ่งนี้')
                          ? 'พรุ่งนี้'
                          : undefined

                        return (
                          <TableCell key={`${store.storeNumber}.${partNumber}`} textAlignment="text-center">
                            {isReadyToPickup ? (
                              <Badge
                                text={pickupDate || pickupRelative || storeStatus}
                                color="green"
                                size="sm"
                                tooltip={storeStatus}
                              />
                            ) : (
                              <Icon icon={XCircleIcon} color="red" size="sm" tooltip={storeStatus} />
                            )}
                          </TableCell>
                        )
                      })}
                    </TableRow>
                  )
                })}
              </TableBody>
            </Table>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Page

import { Icon, Table, TableBody, TableCell, TableHead, TableHeaderCell, TableRow } from '@tremor/react'
import { GetServerSideProps, InferGetServerSidePropsType, NextPage } from 'next'

import { IModel, models } from '~/const/models'
import { getFulfillmentUrl } from '~/utils/helpers'

import QuestionMarkCircleIcon from '@heroicons/react/24/solid/QuestionMarkCircleIcon'
import { NextSeo } from 'next-seo'
import dayjs from 'dayjs'

export const getServerSideProps: GetServerSideProps<
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
    }
  }

  const { category, model } = params

  const selectedModel = models[category].models[model]

  if (!selectedModel) {
    return {
      notFound: true,
    }
  }

  const partNumbers = selectedModel.partNumbers.map(({ partNumber }) => partNumber)
  const fulfillmentUrl = getFulfillmentUrl(partNumbers)
  const fulfillment = await fetch(fulfillmentUrl)
  const timestamp = new Date().toISOString()

  console.log(fulfillment.status)

  if (fulfillment.status !== 200) {
    return {
      notFound: true,
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

const Page: NextPage<InferGetServerSidePropsType<typeof getServerSideProps>> = ({
  model,
  stores,
  delivery,
  updatedAt,
}) => {
  console.log(stores)
  console.log(delivery)

  return (
    <div className="max-w-screen-lg mx-auto px-10 pb-10 pt-16">
      <NextSeo title={model.name} />
      <div className="space-y-8">
        <div>
          <h1 className="font-bold text-2xl">{model.name}</h1>
          <p className="text-sm text-gray-500">Last updated: {dayjs(updatedAt).format('DD MMM YYYY [at] h:mm:ss A')}</p>
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
                const addtionalInfo = model.partNumbers.find((number) => number.partNumber === partNumber)?.productName

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
                      </div>
                    </TableCell>
                    <TableCell textAlignment="text-center">{partNumber}</TableCell>
                    <TableCell textAlignment="text-center">
                      {delivery.deliveryOptionMessages[0]['displayName']}
                    </TableCell>
                    {stores.map((store) => (
                      <TableCell key={`${store.storeNumber}.${partNumber}`} textAlignment="text-center">
                        {store.partsAvailability[partNumber]
                          ? `${store.partsAvailability[partNumber].pickupSearchQuote}`
                          : null}
                      </TableCell>
                    ))}
                  </TableRow>
                )
              })}
            </TableBody>
          </Table>
        </div>
      </div>
    </div>
  )
}

export default Page

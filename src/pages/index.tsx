import { InferGetStaticPropsType, NextPage } from 'next'
import Image from 'next/image'
import Link from 'next/link'

import models from '~/const/models.json'

export const getStaticProps = async () => {
  return {
    props: {
      models,
    },
  }
}

const Page: NextPage<InferGetStaticPropsType<typeof getStaticProps>> = ({ models }) => {
  return (
    <div className="max-w-screen-lg mx-auto px-10 pb-10 pt-16">
      <div className="space-y-8">
        {Object.entries(models)
          .sort(([, a], [, b]) => a.order - b.order)
          .map(([key, model]) => {
            return (
              <div id={key} className="scroll-m-16" key={key}>
                <h1 className="text-2xl font-medium">{model.name}</h1>
                <div className="h-px bg-gray-300" />
                <div className="grid grid-cols-3 gap-5 mt-4">
                  {Object.entries(model.models).map(([subKey, subModel]) => (
                    <Link
                      key={subKey}
                      href={`/${key}/${subKey}`}
                      className="relative flex flex-col-reverse justify-center items-center p-6 bg-white border border-gray-300 rounded-xl hover:-translate-y-1 transition-all gap-3"
                    >
                      <span>{subModel.name}</span>
                      <div className="h-40 relative w-full">
                        <Image
                          src={`https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/${subModel.imageKey}?wid=500&hei=500&fmt=png-alpha&qlt=80`}
                          fill
                          alt={subModel.name}
                          className="object-contain"
                        />
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            )
          })}
      </div>
    </div>
  )
}

export default Page

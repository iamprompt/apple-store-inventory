import { AppProps } from 'next/app'
import { Header } from '~/components/Header'

import '~/styles/globals.scss'
import '@tremor/react/dist/esm/tremor.css'

import SEO from '~/utils/defaultSeo'
import { DefaultSeo } from 'next-seo'

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <DefaultSeo {...SEO} />
      <Header />
      <Component {...pageProps} />
    </>
  )
}

export default App

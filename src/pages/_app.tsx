import { AppProps } from 'next/app'
import { Header } from '~/components/Header'

import '~/styles/globals.scss'
import '@tremor/react/dist/esm/tremor.css'

import SEO from '~/utils/defaultSeo'
import { DefaultSeo } from 'next-seo'
import { GoogleAnalytics } from '~/components/Analytics/GoogleAnalytics'

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <GoogleAnalytics />
      <DefaultSeo {...SEO} />
      <Header />
      <Component {...pageProps} />
    </>
  )
}

export default App

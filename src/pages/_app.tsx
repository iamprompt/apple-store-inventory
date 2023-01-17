import { AppProps } from 'next/app'
import { Header } from '~/components/Header'

import '~/styles/globals.scss'
import '@tremor/react/dist/esm/tremor.css'

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Header />
      <Component {...pageProps} />
    </>
  )
}

export default App

import { Head, Html, Main, NextScript } from 'next/document'

const Document = () => {
  return (
    <Html className="scroll-smooth">
      <Head />
      <body className="bg-[#f5f5f7] font-sans">
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}

export default Document

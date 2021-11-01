import Document, { Html, Head, Main, NextScript } from 'next/document'
import { Colors } from 'utils/theme'

export default class TipToeDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <meta name="theme-color" content={Colors.black} />

        </Head>
        <body className="antialiased text-black bg-gray">
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
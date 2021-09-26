import Document, { Html, Head, Main, NextScript, DocumentContext } from 'next/document'

class TipToeDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx)

    return initialProps
  }

  render() {
    return (
      <Html>
        <Head />
        <body className="antialiased text-black">
          <div className="bg-gray">
            <Main />
          </div>
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default TipToeDocument
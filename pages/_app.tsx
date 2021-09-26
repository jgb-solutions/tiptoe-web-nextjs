import '../styles/globals.css'

import type { AppProps } from 'next/app'

function TipToeApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default TipToeApp

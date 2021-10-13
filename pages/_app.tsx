import { SessionProvider } from "next-auth/react"

import '../styles/globals.css'

import type { AppProps } from 'next/app'

function TipToeApp({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  return (
    <SessionProvider session={pageProps.session}>
      <Component {...pageProps} />
    </SessionProvider>
  )
}

export default TipToeApp

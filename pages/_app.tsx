import type { AppProps } from 'next/app'
import { ApolloProvider } from '@apollo/client'
import { SessionProvider } from "next-auth/react"

import '../styles/globals.css'
import { apolloClient } from 'utils/clients'

function TipToeApp({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  return (
    <ApolloProvider client={apolloClient}>
      <SessionProvider session={pageProps.session}>
        <Component {...pageProps} />
      </SessionProvider>
    </ApolloProvider>
  )
}

export default TipToeApp

import theme from "mui/theme"
import type { AppProps } from 'next/app'
import { SessionProvider } from "next-auth/react"
import { ThemeProvider } from '@mui/material/styles'
import createEmotionCache from "mui/createEmotionCache"
import { CacheProvider, EmotionCache } from '@emotion/react'

import '../styles/globals.css'

const clientSideEmotionCache = createEmotionCache()

interface TipXToeAppProps extends AppProps {
  emotionCache?: EmotionCache
}

function TipToeApp({ Component, emotionCache = clientSideEmotionCache, pageProps: { session, ...pageProps } }: TipXToeAppProps) {
  return (
    <SessionProvider session={pageProps.session}>
      <CacheProvider value={emotionCache}>
        <ThemeProvider theme={theme}>
          {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
          {/* <CssBaseline /> */}
          <Component {...pageProps} />
        </ThemeProvider>
      </CacheProvider>
    </SessionProvider>
  )
}

export default TipToeApp

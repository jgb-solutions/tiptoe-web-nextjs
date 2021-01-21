import '../styles/globals.css'
import { ThemeProvider } from "styled-components";
import theme from '../utils/theme';

function MyApp(props) {
  const { Component, pageProps } = props;
  
  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} theme={theme} />
    </ThemeProvider>
  )
}

export default MyApp

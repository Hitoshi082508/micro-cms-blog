import type { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components'
import { theme } from 'src/styles/theme'
import 'src/styles/globals.css'
import 'src/styles/reset.css'

const MyApp = ({ Component, pageProps }: AppProps): JSX.Element => {
  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default MyApp

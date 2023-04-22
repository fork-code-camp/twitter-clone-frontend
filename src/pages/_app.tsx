import type { AppProps } from 'next/app'
import { ThemeProvider } from '@mui/material/styles'
import '@/styles/globals.css'
import theme from '../theme/theme'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

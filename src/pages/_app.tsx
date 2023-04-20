import type { AppProps } from 'next/app'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import '@/styles/globals.css'

export const theme = createTheme({
  typography: {
    fontFamily: 'SF Compact Display, sans-serif',
  },
  palette: {
    primary: {
      main: '#1da1f2',
    },
  },
})

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

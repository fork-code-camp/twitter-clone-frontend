import type { AppProps } from 'next/app';
import { ThemeProvider } from '@mui/material/styles';
import '@/styles/globals.css';
import theme from '../theme/theme';
import { QueryClient, QueryClientProvider } from 'react-query';

export default function App({ Component, pageProps }: AppProps) {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </QueryClientProvider>
  );
}

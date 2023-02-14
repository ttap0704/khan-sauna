import Layout from '@/src/components/common/Layout';
import theme from '@/src/utils/theme';
import { ThemeProvider } from '@mui/material';
import type { AppProps } from 'next/app';
import '@/src/assets/styles/globals.scss';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  );
}

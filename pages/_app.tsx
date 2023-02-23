import Layout from '@/src/components/common/Layout';
import theme from '@/src/utils/theme';
import { ThemeProvider } from '@mui/material';
import type { AppProps } from 'next/app';
import '@/src/assets/styles/globals.scss';
import Head from 'next/head';
import ModalProvider from '@/src/provider/ModalProvider';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta property='og:title' name='title' content={pageProps.meta_props ? pageProps.meta_props.title : ''} />
        <meta property='og:url' name='url' content={pageProps.meta_props ? pageProps.meta_props.url : ''} />
        <meta
          property='og:description'
          name='description'
          content={pageProps.meta_props ? pageProps.meta_props.description : ''}
        />
        <meta property='og:image' name='image' content={pageProps.meta_props ? pageProps.meta_props.image : ''} />
        <meta property='og:type' name='type' content='website' />
      </Head>
      <ThemeProvider theme={theme}>
        <ModalProvider>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </ModalProvider>
      </ThemeProvider>
    </>
  );
}

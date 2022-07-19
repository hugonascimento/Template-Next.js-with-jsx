import '@fontsource/roboto';
import '../styles/globals.css';
import '../styles/burger.css';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import Layout from '../components/layout';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>NextJS TSX</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

export default MyApp;

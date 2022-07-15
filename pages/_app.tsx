import '@fontsource/roboto';
import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import { Footer } from '../src/footer';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>NextJS TSX</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <Component {...pageProps} />
      <Footer />
    </>
  );
}

export default MyApp;

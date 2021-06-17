import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Head from 'next/head';

import { META } from 'helper/constTexts';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>{META.TITLE}</title>
        <meta name="description" content={META.DESC} />
        <link rel="icon" href="/images/shopee.svg" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}
export default MyApp;

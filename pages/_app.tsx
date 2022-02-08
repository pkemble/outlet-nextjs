import React from 'react';
import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { Layout, Main } from '../components';


function MyApp({ pageProps }: AppProps) {
  return (
    <Layout>
      <Main {...pageProps} />
    </Layout>
  )
}

export default MyApp

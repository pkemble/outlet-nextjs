import React from 'react';
import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { Layout, Main } from '../components';
import { DataContextProvider } from '../context/DataContext';


function MyApp({ pageProps }: AppProps) {
  return (
    <DataContextProvider>
      <Layout>
        <Main {...pageProps} />
      </Layout>
    </DataContextProvider>
  )
}

export default MyApp

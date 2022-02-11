import { Layout, Main } from '../components';
import React from 'react';
import { DataContextProvider } from '../context/DataContext';
export default function Home({ ...pageProps }) {
  return (
    <DataContextProvider>
      <Main {...pageProps} />
    </DataContextProvider>
  )
}

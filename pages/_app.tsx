import '../styles/globals.css'
import '../components/PostFormEditor/PostFormEditor.css';
import type { AppProps } from 'next/app'
import { DataContextProvider } from '../context/DataContext'
import { Layout } from '../components'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <DataContextProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </DataContextProvider>
  )
}

export default MyApp


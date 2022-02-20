import '../styles/globals.css'
import '../components/PostFormEditor/PostFormEditor.css';
import type { AppProps } from 'next/app'
import { Layout } from '../components'
import { SessionProvider } from 'next-auth/react';

function App({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  return (
    <SessionProvider session={session} refetchInterval={5 * 60}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
    </SessionProvider>
  )
}

export default App


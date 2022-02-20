import { Main, Login } from '../components';
import React from 'react';
import { DataContextProvider } from '../context/DataContext';
import { useSession } from 'next-auth/react';

export default function Home({ ...pageProps }) {
  const { data: session, status } = useSession();

  if (session && session.user?.email === "pkemble@gmail.com") {
    return (
        <Main {...pageProps} />
    )
  }
  return (
    <Login />
  )
}

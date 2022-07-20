import React from 'react'
import App from 'next/app'
import Head from 'next/head'
import '../styles/globals.css'
import 'tailwindcss/tailwind.css'
import MainProvider from 'provider'

export default function MyApp({ Component, pageProps }) {

  return (
    <MainProvider>
      <Head>
        <title>Print order</title>
        <meta name={'description'} content={'PrintOrder'} />
        <link rel={'icon'} href={'/favicon.ico'} />
      </Head>
      <Component {...pageProps} />
    </MainProvider>
  )
}

MyApp.getInitialProps = async (appContext) => {
  const { pageProps } = await App.getInitialProps(appContext)
  return { pageProps }
}

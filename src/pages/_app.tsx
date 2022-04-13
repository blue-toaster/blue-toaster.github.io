import type { AppProps } from 'next/app'
import Head from 'next/head'
import '../styles/globals.scss'

function Raven({ Component, pageProps }: AppProps) {
  return (
    <>
    <Head>
      <title>Raven Invite</title>
    </Head>
      <Component {...pageProps} />
    </>
  )
}

export default Raven

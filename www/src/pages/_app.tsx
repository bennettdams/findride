import '@/styles/globals.css'
import { Inter } from '@next/font/google'
import { Analytics } from '@vercel/analytics/react'
import type { AppProps } from 'next/app'
import Head from 'next/head'

const globalFont = Inter({
  subsets: ['latin'],
  variable: '--global-findride-font',
  display: 'swap',
})

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>FindRide</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main
        className={`${globalFont.className} w-full bg-dsecondary text-dsecondary h-screen`}
      >
        <Analytics />
        <Component {...pageProps} />
      </main>
    </>
  )
}

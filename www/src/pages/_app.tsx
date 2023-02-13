import '@/styles/globals.css'
import { Inter } from '@next/font/google'
import { Analytics } from '@vercel/analytics/react'
import type { AppProps } from 'next/app'

const globalFont = Inter({
  subsets: ['latin'],
  variable: '--global-findride-font',
  display: 'swap',
})

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main
      className={`${globalFont.className} w-full bg-dsecondary text-dsecondary h-screen`}
    >
      <Analytics />
      <Component {...pageProps} />
    </main>
  )
}

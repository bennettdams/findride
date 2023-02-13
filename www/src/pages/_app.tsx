import '@/styles/globals.css'
import { Nunito } from '@next/font/google'
import type { AppProps } from 'next/app'

const globalFont = Nunito({
  subsets: ['latin'],
  weight: ['400', '500', '600', '800'],
  variable: '--global-condun-font',
  display: 'swap',
})

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={`${globalFont.className} w-full h-screen`}>
      <Component {...pageProps} />
    </main>
  )
}

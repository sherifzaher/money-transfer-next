import '../styles/globals.css'
import "@fontsource/inter"
import "@fontsource/open-sans"
import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default MyApp

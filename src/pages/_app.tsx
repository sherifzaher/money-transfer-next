import '../styles/globals.css'
import "@fontsource/inter"
import "@fontsource/inter/500.css"
import "@fontsource/inter/600.css"
import "@fontsource/open-sans"
import type { AppProps } from 'next/app'
import {AppPropsWithLayout} from "../types";

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? ((page) => page);
  return getLayout(<Component {...pageProps} />);
}

export default MyApp

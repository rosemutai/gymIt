import {useEffect } from 'react'

import type { AppProps } from 'next/app'

import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styl
import '../styles/globals.css'


function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    AOS.init({
      easing: "ease-in-cubic",
      once: true,
      offset: 50,
    });
  }, []);

  return <Component {...pageProps} />
}

export default MyApp

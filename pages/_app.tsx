import 'swiper/css/bundle';
import '../styles/globals.css';

import { IntlError, NextIntlProvider } from 'next-intl';
import { AppProps } from 'next/app';
import SwiperCore, { Autoplay } from 'swiper';
import Script from 'next/script';
import { Analytics } from '@vercel/analytics/react';

function MyApp({ Component, pageProps }: AppProps) {
  SwiperCore.use([Autoplay]);

  return (
    <NextIntlProvider
      messages={pageProps.messages || {}}
      onError={(_: IntlError) => null}
    >
      <Script
        id="gtag"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
                      new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
                      j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
                      'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
                      })(window,document,'script','dataLayer','GTM-XXXXXXX');`
        }}
      />
      {/* @ts-ignore */}
      <Component {...pageProps} />
      <Analytics />
    </NextIntlProvider>
  );
}

export default MyApp;

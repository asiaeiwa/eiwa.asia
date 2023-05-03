/* eslint-disable @next/next/no-img-element */
import 'assets/styles/index.scss';
import { appWithTranslation } from 'next-i18next';
import { AppProps } from 'next/app';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { ReactElement, useCallback, useEffect, useRef } from 'react';
import Script from 'next/script';
import { ASIAEIWA } from 'libs/constants';

const EIWAApp = ({ Component, pageProps }: AppProps): ReactElement => {
  const router = useRouter();
  const refLoading = useRef<HTMLDivElement>(null);

  const handleRouteStart = useCallback(() => {
    refLoading.current?.classList.remove('loaded');
  }, []);

  const handleRouteEnd = useCallback(() => {
    refLoading.current?.classList.add('loaded');
  }, []);

  useEffect(() => {
    router.events.on('routeChangeStart', handleRouteStart);
    router.events.on('routeChangeComplete', handleRouteEnd);
    return () => {
      router.events.off('routeChangeStart', handleRouteStart);
      router.events.off('routeChangeComplete', handleRouteEnd);
    };
  }, [router.events]);

  return (
    <>
      <div id="preloader" ref={refLoading}>
        <div>
          <img src="/images/eiwa-logo.png" width={172} height={60} alt={ASIAEIWA} />
          <img src="/images/loading.svg" width={150} height={4} alt="loading..." />
        </div>
      </div>
      <Head>
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
        <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0" />
        <style
          dangerouslySetInnerHTML={{
            __html:
              '#preloader{position:fixed;top:0;left:0;width:100%;height:100%;z-index:9999;background-color: #ffffff;display:flex;align-items:center;justify-content:center;opacity:1;visibility:visible;pointer-events:all;transition: 0.5s ease;}#preloader.loaded{opacity:0;visibility:hidden;pointer-events:none}#preloader div{display:flex;flex-direction:column;align-items:center}#preloader img:last-child{margin-top:20px}',
          }}
        />
      </Head>
      <Component {...pageProps} />
      <Script
        id="preloader-script"
        dangerouslySetInnerHTML={{
          __html: `setTimeout(function(){document.getElementById('preloader').classList.add('loaded');}, 1000);`,
        }}
      />
    </>
  );
};
export default appWithTranslation(EIWAApp);

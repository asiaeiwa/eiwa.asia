import { SEO } from 'libs/constants';
import Document, { Head, Html, Main, NextScript } from 'next/document';

class EIWADocument extends Document {
  render = (): JSX.Element => {
    return (
      <Html>
        <Head>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
          <link
            href="https://fonts.googleapis.com/css2?family=Noto+Serif+Display&family=Nunito+Sans:wght@400;600;700&display=swap"
            rel="stylesheet"
          />
          <script async src={`https://www.googletagmanager.com/gtag/js?id=${SEO.GAID}`} />
          <script
            dangerouslySetInnerHTML={{
              __html: `window.dataLayer = window.dataLayer || []; function gtag(){dataLayer.push(arguments);} gtag('js', new Date()); gtag('config', '${SEO.GAID}');`,
            }}
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  };
}

export default EIWADocument;

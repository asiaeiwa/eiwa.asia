import { mapModifiers } from 'libs/component';
import { ASIAEIWA, SEO } from 'libs/constants';
import { useRouter } from 'next/router';
import Head from 'next/head';
import styles from './style.module.scss';
import { FC, ReactNode } from 'react';

interface PageProps {
  children?: ReactNode;
  className?: string;
  id: string;
  title: string;
  description?: string;
  keywords?: string;
  isNeedH1?: boolean;
  imgFeatureSrc?: string;
}

export const Page: FC<PageProps> = ({
  children,
  className: additionalClassName = '',
  id,
  title,
  description,
  keywords,
  isNeedH1,
  imgFeatureSrc,
}) => {
  const componentClassName = mapModifiers('page', styles);
  const className = `${componentClassName} ${additionalClassName}`.trim();
  const { pathname, locale } = useRouter();

  const newTitle = `${title ? `${title} | ` : ''}${ASIAEIWA}${!title ? ' | Make Believe, Make Business' : ''}`;
  const newDesc = description || SEO.description;
  const newURL = `https://eiwa.asia${pathname}`;
  const lngURL = `https://eiwa.asia/{lang}${pathname}`;
  const newImageFeature = imgFeatureSrc ? `https://eiwa.asia${imgFeatureSrc}` : 'https://eiwa.asia/og.jpg';

  return (
    <div id={id} className={className}>
      <Head>
        <title>{newTitle}</title>
        <meta name="description" content={newDesc} />
        <meta name="keywords" content={keywords || SEO.keywords} />
        <meta name="robots" content="index" />
        <link rel="canonical" href={newURL} />

        {/* TODO: Lang */}
        {locale !== 'en' && <link rel="alternate" href={newURL} hrefLang="en" type="text/html" />}
        {locale !== 'vi' && (
          <link rel="alternate" href={lngURL.replace('{lang}', 'vi')} hrefLang="vi" type="text/html" />
        )}
        {locale !== 'ja' && (
          <link rel="alternate" href={lngURL.replace('{lang}', 'ja')} hrefLang="ja" type="text/html" />
        )}

        {/* TODO: Update OG */}
        <meta property="og:url" content={newURL} />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={newTitle} />
        <meta property="og:description" content={newDesc} />
        <meta property="og:image" content={newImageFeature} />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={newTitle} />
        <meta name="twitter:description" content={newDesc} />
        <meta name="twitter:image" content={newImageFeature} />
        <meta property="twitter:domain" content="eiwa.asia" />
        <meta property="twitter:url" content={newURL} />
      </Head>
      {isNeedH1 && <h1 className={styles['page__h1']}>{title}</h1>}
      {children}
    </div>
  );
};

import { GeneralTemplate } from 'components/general-template';
import { Link } from 'components/link';
import { Page } from 'components/page';
import { SectionVision } from 'components/section-vision';
import { ServiceIntro } from 'components/service-intro';
import { Text } from 'components/text';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { FC } from 'react';
import styles from './style.module.scss';

const Service: FC = () => {
  const { t } = useTranslation('service');

  return (
    <Page
      id="service"
      className={styles['service']}
      title={t('title')}
      description={t('description')}
      keywords={t('keywords')}
      imgFeatureSrc="/images/service/start-up-consulting/image-3.jpg"
    >
      <GeneralTemplate modifiers="no-top">
        <ServiceIntro isHiddenBreadcrumb title={t('title')} imgSrc="/images/service/start-up-consulting/intro-bg.jpeg">
          <Text>{t('description')}</Text>
        </ServiceIntro>
        <SectionVision
          title={t('section-01.title')}
          imgSrc="/images/service/start-up-consulting/image-2.jpg"
          link={
            <Link modifiers="arrow" href="/service/start-up-consulting">
              {t('read-more', { ns: 'common' })}
            </Link>
          }
        >
          <Text>{t('section-01.description.01')}</Text>
        </SectionVision>
        <SectionVision
          modifiers="invert"
          title={t('section-02.title')}
          imgSrc="/images/service/it-solution-consulting/image-2.jpg"
          link={
            <Link modifiers="arrow" href="/service/it-solution-consulting">
              {t('read-more', { ns: 'common' })}
            </Link>
          }
        >
          <Text>{t('section-02.description.01')}</Text>
        </SectionVision>
        <SectionVision
          title={t('section-03.title')}
          imgSrc="/images/service/enterprise-sofware-development/image-3.jpg"
          link={
            <Link modifiers="arrow" href="/service/enterprise-sofware-development">
              {t('read-more', { ns: 'common' })}
            </Link>
          }
        >
          <Text>{t('section-03.description.01')}</Text>
        </SectionVision>
        <SectionVision
          modifiers="invert"
          title={t('section-04.title')}
          imgSrc="/images/service/real-estate-invest-consulting/image-1.jpg"
          link={
            <Link modifiers="arrow" href="/service/real-estate-invest-consulting">
              {t('read-more', { ns: 'common' })}
            </Link>
          }
        >
          <Text>{t('section-04.description.01')}</Text>
        </SectionVision>
      </GeneralTemplate>
    </Page>
  );
};

export const getStaticProps = async ({ locale }: { locale: string }) => ({
  props: {
    ...(await serverSideTranslations(locale, ['common', 'service'])),
  },
});

export default Service;

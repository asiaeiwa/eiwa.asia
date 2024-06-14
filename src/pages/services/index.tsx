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
      imgFeatureSrc="/images/services/enterprise-solutions/image-3.jpg"
    >
      <GeneralTemplate modifiers="no-top">
        <ServiceIntro
          isHiddenBreadcrumb
          title={t('title')}
          imgSrc="/images/services/enterprise-solutions/intro-bg.jpeg"
        >
          <Text>{t('description')}</Text>
        </ServiceIntro>
        <SectionVision
          title={t('section-01.title')}
          imgSrc="/images/services/enterprise-solutions/image-2.jpg"
          link={
            <Link modifiers="arrow" href="/services/enterprise-solutions">
              {t('read-more', { ns: 'common' })}
            </Link>
          }
        >
          <Text>{t('section-01.description.01')}</Text>
        </SectionVision>
        <SectionVision
          modifiers="invert"
          title={t('section-02.title')}
          imgSrc="/images/services/it-solution-consulting/image-2.jpg"
          link={
            <Link modifiers="arrow" href="/services/it-solution-consulting">
              {t('read-more', { ns: 'common' })}
            </Link>
          }
        >
          <Text>{t('section-02.description.01')}</Text>
        </SectionVision>
        <SectionVision
          title={t('section-03.title')}
          imgSrc="/images/services/enterprise-sofware-development/image-3.jpg"
          link={
            <Link modifiers="arrow" href="/services/enterprise-sofware-development">
              {t('read-more', { ns: 'common' })}
            </Link>
          }
        >
          <Text>{t('section-03.description.01')}</Text>
        </SectionVision>
        <SectionVision
          modifiers="invert"
          title={t('section-04.title')}
          imgSrc="/images/services/real-estate-invest-consulting/image-1.jpg"
          link={
            <Link modifiers="arrow" href="/services/real-estate-invest-consulting">
              {t('read-more', { ns: 'common' })}
            </Link>
          }
        >
          <Text>{t('section-04.description.01')}</Text>
        </SectionVision>
        <SectionVision
          title={t('section-05.title')}
          imgSrc="/images/services/elearning/image-1.jpg"
          link={
            <Link modifiers="arrow" href="https://elearning.eiwa.asia/" target="_blank">
              {t('read-more', { ns: 'common' })}
            </Link>
          }
        >
          <Text>{t('section-05.description.01')}</Text>
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

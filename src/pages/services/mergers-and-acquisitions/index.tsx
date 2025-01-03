import { GeneralTemplate } from 'components/general-template';
import { Page } from 'components/page';
import { ServiceArticle } from 'components/service-article';
import { ServiceIntro } from 'components/service-intro';
import { Text } from 'components/text';
import { templateLocale } from 'libs/component';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { FC } from 'react';

const ServiceMergersAndAcquisitions: FC = () => {
  const { t } = useTranslation('service-page-4');

  return (
    <Page
      id="service-mergers-and-acquisitions"
      title={`${t('title')} | ${t('menu.service', { ns: 'common' })}`}
      description={t('description')}
      keywords={t('keywords')}
      imgFeatureSrc="/images/services/mergers-and-acquisitions/image-2.jpg"
    >
      <GeneralTemplate modifiers="no-top">
        <ServiceIntro
          parentTitle={t('menu.service', { ns: 'common' })}
          title={t('title')}
          imgSrc="/images/services/mergers-and-acquisitions/intro-bg.jpeg"
        >
          <Text>{t('description')}</Text>
        </ServiceIntro>
        <ServiceArticle
          title={templateLocale(t('section-01.title'))}
          imgSrc="/images/services/mergers-and-acquisitions/image-1.jpg"
        >
          <Text>{t('section-01.description.01')}</Text>
        </ServiceArticle>
        <ServiceArticle
          modifiers="invert"
          title={templateLocale(t('section-02.title'))}
          imgSrc="/images/services/mergers-and-acquisitions/image-2.jpg"
        >
          <ul>
            <li>{t('section-02.ul.01')}</li>
            <li>{t('section-02.ul.02')}</li>
            <li>{t('section-02.ul.03')}</li>
            <li>{t('section-02.ul.04')}</li>
          </ul>
        </ServiceArticle>
        <ServiceArticle
          title={templateLocale(t('section-03.title'))}
          imgSrc="/images/services/mergers-and-acquisitions/image-3.jpg"
        >
          <ul>
            <li>{t('section-03.ul.01')}</li>
            <li>{t('section-03.ul.02')}</li>
            <li>{t('section-03.ul.03')}</li>
            <li>{t('section-03.ul.04')}</li>
          </ul>
        </ServiceArticle>
      </GeneralTemplate>
    </Page>
  );
};

export const getStaticProps = async ({ locale }: { locale: string }) => ({
  props: {
    ...(await serverSideTranslations(locale, ['common', 'service-page-4'])),
  },
});

export default ServiceMergersAndAcquisitions;

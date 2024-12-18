import { GeneralTemplate } from 'components/general-template';
import { Page } from 'components/page';
import { ServiceArticle } from 'components/service-article';
import { ServiceIntro } from 'components/service-intro';
import { Text } from 'components/text';
import { templateLocale } from 'libs/component';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { FC } from 'react';

const ServiceEnterpriseSolutions: FC = () => {
  const { t } = useTranslation('service-page-1');

  return (
    <Page
      id="service-enterprise-solutions"
      title={`${t('title')} | ${t('menu.service', { ns: 'common' })}`}
      description={t('description')}
      keywords={t('keywords')}
      imgFeatureSrc="/images/services/enterprise-solutions/image-1.png"
    >
      <GeneralTemplate modifiers="no-top">
        <ServiceIntro
          parentTitle={t('menu.service', { ns: 'common' })}
          title={t('title')}
          imgSrc="/images/services/enterprise-solutions/intro-bg.jpeg"
        >
          <Text>{t('description')}</Text>
        </ServiceIntro>
        <ServiceArticle
          title={templateLocale(t('section-01.title'))}
          imgSrc="/images/services/enterprise-solutions/image-1.png"
        >
          <Text>{t('section-01.description.01')}</Text>
          <Text>{t('section-01.description.02')}</Text>
        </ServiceArticle>
        <ServiceArticle
          modifiers="invert"
          title={templateLocale(t('section-02.title'))}
          imgSrc="/images/services/enterprise-solutions/image-2.jpg"
        >
          <Text>{t('section-02.description.01')}</Text>
          <Text>{t('section-02.description.02')}</Text>
          <Text>{t('section-02.description.03')}</Text>
          <Text>{t('section-02.description.04')}</Text>
        </ServiceArticle>
        <ServiceArticle title={t('section-03.title')} imgSrc="/images/services/enterprise-solutions/image-3.jpg">
          <Text>{t('section-03.description.01')}</Text>
        </ServiceArticle>
      </GeneralTemplate>
    </Page>
  );
};

export const getStaticProps = async ({ locale }: { locale: string }) => ({
  props: {
    ...(await serverSideTranslations(locale, ['common', 'service-page-1'])),
  },
});

export default ServiceEnterpriseSolutions;

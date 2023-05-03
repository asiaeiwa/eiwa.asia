import { GeneralTemplate } from 'components/general-template';
import { Page } from 'components/page';
import { ServiceArticle } from 'components/service-article';
import { ServiceIntro } from 'components/service-intro';
import { Text } from 'components/text';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { FC } from 'react';

const ServiceStartup: FC = () => {
  const { t } = useTranslation('service-startup');

  return (
    <Page
      id="service-startup"
      title={`${t('title')} | ${t('menu.service', { ns: 'common' })}`}
      description={t('description')}
      keywords={t('keywords')}
      imgFeatureSrc="/images/service/start-up-consulting/image-1.jpg"
    >
      <GeneralTemplate modifiers="no-top">
        <ServiceIntro title={t('title')} imgSrc="/images/service/start-up-consulting/intro-bg.jpeg">
          <Text>{t('description')}</Text>
        </ServiceIntro>
        <ServiceArticle title={t('section-01.title')} imgSrc="/images/service/start-up-consulting/image-1.jpg">
          <Text>{t('section-01.description.01')}</Text>
          <Text>{t('section-01.description.02')}</Text>
        </ServiceArticle>
        <ServiceArticle
          modifiers="invert"
          title={t('section-02.title')}
          imgSrc="/images/service/start-up-consulting/image-2.jpg"
        >
          <Text>{t('section-02.description.01')}</Text>
          <Text>{t('section-02.description.02')}</Text>
        </ServiceArticle>
        <ServiceArticle title={t('section-03.title')} imgSrc="/images/service/start-up-consulting/image-3.jpg">
          <Text>{t('section-03.description.01')}</Text>
          <Text>{t('section-03.description.02')}</Text>
        </ServiceArticle>
      </GeneralTemplate>
    </Page>
  );
};

export const getStaticProps = async ({ locale }: { locale: string }) => ({
  props: {
    ...(await serverSideTranslations(locale, ['common', 'service-startup'])),
  },
});

export default ServiceStartup;

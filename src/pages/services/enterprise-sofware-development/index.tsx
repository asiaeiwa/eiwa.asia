import { GeneralTemplate } from 'components/general-template';
import { Page } from 'components/page';
import { ServiceArticle } from 'components/service-article';
import { ServiceIntro } from 'components/service-intro';
import { Text } from 'components/text';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { FC } from 'react';

const ServiceEnterprise: FC = () => {
  const { t } = useTranslation('service-enterprise');

  return (
    <Page
      id="service-enterprise"
      title={`${t('title')} | ${t('menu.service', { ns: 'common' })}`}
      description={t('description')}
      keywords={t('keywords')}
      imgFeatureSrc="/images/services/enterprise-sofware-development/image-3.jpg"
    >
      <GeneralTemplate modifiers="no-top">
        <ServiceIntro
          parentTitle={t('menu.service', { ns: 'common' })}
          title={t('title')}
          imgSrc="/images/services/enterprise-sofware-development/intro-bg.jpeg"
        >
          <Text>{t('description')}</Text>
        </ServiceIntro>
        <ServiceArticle
          title={t('section-01.title')}
          imgSrc="/images/services/enterprise-sofware-development/image-1.jpg"
        >
          <Text>{t('section-01.description.01')}</Text>
          <Text>{t('section-01.description.02')}</Text>
        </ServiceArticle>
        <ServiceArticle
          modifiers="invert"
          title={t('section-02.title')}
          imgSrc="/images/services/enterprise-sofware-development/image-2.jpg"
        >
          <Text>{t('section-02.description.01')}</Text>
          <Text>{t('section-02.description.02')}</Text>
        </ServiceArticle>
        <ServiceArticle
          title={t('section-03.title')}
          imgSrc="/images/services/enterprise-sofware-development/image-3.jpg"
        >
          <Text>{t('section-03.description.01')}</Text>
          <Text>{t('section-03.description.02')}</Text>
          <ol>
            <li>{t('section-03.ul.01')}</li>
            <li>{t('section-03.ul.02')}</li>
            <li>{t('section-03.ul.03')}</li>
            <li>{t('section-03.ul.04')}</li>
            <li>{t('section-03.ul.05')}</li>
            <li>{t('section-03.ul.06')}</li>
          </ol>
        </ServiceArticle>
      </GeneralTemplate>
    </Page>
  );
};

export const getStaticProps = async ({ locale }: { locale: string }) => ({
  props: {
    ...(await serverSideTranslations(locale, ['common', 'service-enterprise'])),
  },
});

export default ServiceEnterprise;

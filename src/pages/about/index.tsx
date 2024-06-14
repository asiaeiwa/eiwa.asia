import { AboutImage } from 'components/about-image';
import { AboutText } from 'components/about-text';
import { GeneralTemplate } from 'components/general-template';
import { Page } from 'components/page';
import { Text } from 'components/text';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { FC } from 'react';
import styles from './style.module.scss';

const About: FC = () => {
  const { t } = useTranslation('about');

  return (
    <Page
      id="about"
      className={styles['about']}
      title={t('title')}
      description={t('description')}
      keywords={t('keywords')}
      isNeedH1
    >
      <GeneralTemplate modifiers="no-top">
        <AboutImage
          imgSrc="/images/about/ms-anh-01.jpg"
          quote={t('section.01.quote')}
          name={t('section.01.name')}
          position={t('section.01.position')}
          modifiers="bottom"
        />
        <AboutText title={'"Make Believe, Make Business"'}>
          <Text>{t('section.02.description.01')}</Text>
          <Text>{t('section.02.description.02')}</Text>
          <Text>{t('section.02.description.03')}</Text>
          <ol>
            <li>{t('section.02.description.04.01')}</li>
            <li>{t('section.02.description.04.02')}</li>
            <li>{t('section.02.description.04.03')}</li>
          </ol>
        </AboutText>
        <AboutImage imgSrc="/images/about/ms-anh-02.jpg" />
        <AboutText title={t('section.04.title')} sub={t('section.04.description.01')} />
        <AboutImage
          imgSrc="/images/about/uy.jpg"
          quote={t('section.05.quote')}
          name={t('section.05.name')}
          position={t('section.05.position')}
        />
        <AboutText title={t('section.06.title')}>
          <Text>{t('section.06.description.01')}</Text>
          <Text>{t('section.06.description.02')}</Text>
        </AboutText>
        <AboutImage
          imgSrc="/images/about/tin.jpg"
          quote={t('section.07.quote')}
          name={t('section.07.name')}
          position={t('section.07.position')}
          modifiers="bottom"
        />
        <AboutText title={t('section.08.title')}>
          <Text>{t('section.08.description.01')}</Text>
          <Text>{t('section.08.description.02')}</Text>
        </AboutText>
      </GeneralTemplate>
    </Page>
  );
};

export const getStaticProps = async ({ locale }: { locale: string }) => ({
  props: {
    ...(await serverSideTranslations(locale, ['common', 'about'])),
  },
});

export default About;

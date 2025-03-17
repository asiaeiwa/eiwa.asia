import { AboutImage } from 'components/about-image';
import { AboutText } from 'components/about-text';
import { GeneralTemplate } from 'components/general-template';
import { Page } from 'components/page';
import { Text } from 'components/text';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { FC } from 'react';
import styles from './style.module.scss';
import { templateLocale } from 'libs/component';

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
          quote={t('section.anh-01.quote')}
          name={t('section.anh-01.name')}
          position={t('section.anh-01.position')}
          modifiers="bottom"
        />
        <AboutText title={'"Make Believe, Make Business"'}>
          <Text>{t('section.anh-02.description.01')}</Text>
          <Text>{t('section.anh-02.description.02')}</Text>
          <Text>{t('section.anh-02.description.03')}</Text>
          <ol>
            <li>{t('section.anh-02.description.04.01')}</li>
            <li>{t('section.anh-02.description.04.02')}</li>
            <li>{t('section.anh-02.description.04.03')}</li>
          </ol>
        </AboutText>
        <AboutImage
          imgSrc="/images/about/ms-hien-01.jpg"
          name={t('section.hien-01.name')}
          position={t('section.hien-01.position')}
          modifiers="bottom"
        />
        <AboutText title={t('section.hien-02.title')}>
          <Text>{t('section.hien-02.description.01')}</Text>
          <ul>
            <li>{t('section.hien-02.description.02.01')}</li>
            <li>{t('section.hien-02.description.02.02')}</li>
            <li>{t('section.hien-02.description.02.03')}</li>
            <li>{t('section.hien-02.description.02.04')}</li>
          </ul>
          <Text>{templateLocale(t('section.hien-02.description.03'))}</Text>
        </AboutText>
        <AboutImage
          imgSrc="/images/about/mr-tuan-01.jpeg"
          name={t('section.tuan-01.name')}
          position={t('section.tuan-01.position')}
          modifiers="bottom"
        />
        <AboutText title={t('section.tuan-02.title')}>
          <Text>{t('section.tuan-02.description.01')}</Text>
          <Text>{t('section.tuan-02.description.02')}</Text>
          <Text>{t('section.tuan-02.description.03')}</Text>
        </AboutText>
        <AboutImage
          imgSrc="/images/about/mr-minh-01.jpeg"
          name={t('section.minh-01.name')}
          position={t('section.minh-01.position')}
          modifiers="bottom"
        />
        <AboutText title={t('section.minh-02.title')}>
          <Text>{t('section.minh-02.description.01')}</Text>
          <Text>{templateLocale(t('section.minh-02.description.02'))}</Text>
          <Text>{t('section.minh-02.description.03')}</Text>
        </AboutText>
        <AboutImage
          imgSrc="/images/about/ms-trang-01.jpeg"
          name={t('section.trang-01.name')}
          position={t('section.trang-01.position')}
          modifiers="bottom"
        />
        <AboutText title={t('section.trang-02.title')}>
          <Text>{t('section.trang-02.description.01')}</Text>
          <Text>{t('section.trang-02.description.02')}</Text>
          <Text>{templateLocale(t('section.trang-02.description.03'))}</Text>
        </AboutText>
        <AboutImage
          imgSrc="/images/about/ms-nga-01.jpeg"
          quote={t('section.nga-01.quote')}
          name={t('section.nga-01.name')}
          position={t('section.nga-01.position')}
          modifiers="bottom"
        />
        <AboutText title={t('section.nga-02.title')}>
          <Text>{t('section.nga-02.description.01')}</Text>
          <Text>{t('section.nga-02.description.02')}</Text>
          <ul>
            <li>{t('section.nga-02.description.03.01')}</li>
            <li>{t('section.nga-02.description.03.02')}</li>
            <li>{t('section.nga-02.description.03.03')}</li>
          </ul>
        </AboutText>
        <AboutImage
          imgSrc="/images/about/uy.jpg"
          quote={t('section.uy-01.quote')}
          name={t('section.uy-01.name')}
          position={t('section.uy-01.position')}
        />
        <AboutText title={t('section.uy-02.title')}>
          <Text>{t('section.uy-02.description.01')}</Text>
          <Text>{t('section.uy-02.description.02')}</Text>
        </AboutText>
        <AboutImage
          imgSrc="/images/about/tin.jpg"
          quote={t('section.tin-01.quote')}
          name={t('section.tin-01.name')}
          position={t('section.tin-01.position')}
          modifiers="bottom"
        />
        <AboutText title={t('section.tin-02.title')}>
          <Text>{t('section.tin-02.description.01')}</Text>
          <Text>{t('section.tin-02.description.02')}</Text>
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

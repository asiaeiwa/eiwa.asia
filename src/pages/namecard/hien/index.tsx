import { Page } from 'components/page';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { FC } from 'react';
import { NameCardTemplate } from 'components/namecard-template';
import { SectionBio } from 'components/section-bio';
import { useTranslation } from 'next-i18next';

import styles from '../detail.module.scss';

const NameCardDetail: FC = () => {
  const { t } = useTranslation('namecard');

  return (
    <Page id="namecared-detail" className={styles['namecard-detail']} title="Ms.Hien">
      <NameCardTemplate>
        <SectionBio
          imgSrc="/images/namecard/ms-hien.jpeg"
          name="NGUYEN AI HIEN"
          position="Investment Consultant"
          phone="+84 903 739 774"
          email="hien.nguyen@eiwa.asia"
          social={{
            facebook: 'https://www.facebook.com/asiaeiwa',
            linkedin: 'https://www.linkedin.com/in/hien-nguyen-98987919b/',
            zalo: 'https://zalo.me/0903739774',
          }}
          addContactText={t('add-contact-text')}
          phoneText={t('phone-text')}
          vcardSrc="/vcards/ms-hien.vcf"
        />
      </NameCardTemplate>
    </Page>
  );
};

export const getStaticProps = async ({ locale }: { locale: string }) => ({
  props: {
    ...(await serverSideTranslations(locale, ['common', 'namecard'])),
  },
});

export default NameCardDetail;

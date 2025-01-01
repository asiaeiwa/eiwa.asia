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
    <Page id="namecared-detail" className={styles['namecard-detail']} title="Ms.Anh">
      <NameCardTemplate>
        <SectionBio
          imgSrc="/images/namecard/ms-anh.jpeg"
          name="NGO ANH"
          position="CO-FOUNDER/General and Operations Manager"
          phone="+84 908 748 289"
          email="anh@eiwa.asia"
          social={{
            facebook: 'https://www.facebook.com/asiaeiwa',
            linkedin: 'https://www.linkedin.com/in/anh-ngo265/',
            tiktok: 'https://www.tiktok.com/@anhngo.tiengnhatit',
          }}
          addContactText={t('add-contact-text')}
          phoneText={t('phone-text')}
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

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
    <Page id="namecared-detail" className={styles['namecard-detail']} title="Ms.Nga">
      <NameCardTemplate>
        <SectionBio
          imgSrc="/images/namecard/ms-nga.jpeg"
          name="NAOMI NGA DOAN"
          position="Business Development Consultant"
          phone="+84 903 669 956"
          email="nga.doan@eiwa.asia"
          social={{
            facebook: 'https://www.facebook.com/asiaeiwa',
            zalo: 'https://zalo.me/0903669956',
          }}
          addContactText={t('add-contact-text')}
          phoneText={t('phone-text')}
          vcardSrc="/vcards/ms-nga.vcf"
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

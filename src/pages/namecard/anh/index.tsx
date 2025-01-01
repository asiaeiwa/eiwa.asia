import { Page } from 'components/page';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { FC } from 'react';
// import { useTranslation } from 'react-i18next';
import styles from '../detail.module.scss';
import { NameCardTemplate } from 'components/namecard-template';

const NameCardDetail: FC = () => {
  // const { t } = useTranslation('namecard');

  return (
    <Page id="namecared-detail" className={styles['namecard-detail']} title="Namecard: Ms.Anh">
      <NameCardTemplate>Namecard: Ms.Anh</NameCardTemplate>
    </Page>
  );
};

export const getStaticProps = async ({ locale }: { locale: string }) => ({
  props: {
    ...(await serverSideTranslations(locale, ['common', 'namecard'])),
  },
});

export default NameCardDetail;

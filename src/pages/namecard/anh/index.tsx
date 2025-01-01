import { Page } from 'components/page';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { FC } from 'react';
// import { useTranslation } from 'react-i18next';
import styles from '../detail.module.scss';
import { NameCardTemplate } from 'components/namecard-template';
import { SectionBio } from 'components/section-bio';

const NameCardDetail: FC = () => {
  // const { t } = useTranslation('namecard');

  return (
    <Page id="namecared-detail" className={styles['namecard-detail']} title="Ms.Anh">
      <NameCardTemplate>
        <SectionBio imgSrc="/images/blog/image-2.jpeg" name="Ngo Thi Huynh Anh" position="Founder" />
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

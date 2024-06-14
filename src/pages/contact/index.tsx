import { BranchItem } from 'components/branch-item';
import { Column } from 'components/column';
import { Container } from 'components/container';
import { GeneralTemplate } from 'components/general-template';
import { Heading } from 'components/heading';
import { Map } from 'components/map';
import { Page } from 'components/page';
import { Row } from 'components/row';
import { Text } from 'components/text';
import { ASIAEIWA_EMAIL, ASIAEIWA_GEO } from 'libs/constants';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { FC } from 'react';
import styles from './style.module.scss';

const Contact: FC = () => {
  const { t } = useTranslation('contact');

  return (
    <Page
      id="contact"
      className={styles['contact']}
      title={t('title')}
      description={t('description')}
      keywords={t('keywords')}
    >
      <GeneralTemplate modifiers="padding-bottom">
        <section>
          <Container className={styles['contact__container']}>
            <Heading tag="h1" className={styles['contact__heading']} modifiers={['page', 'gradient']}>
              {t('heading')}
            </Heading>
            <Text className={styles['contact__description']}>{t('description')}</Text>
            <Row gutter="24" className={styles['contact__list']}>
              <Column col={9}>
                <BranchItem
                  imgSrc="/images/contact/hcm.jpeg"
                  title={t('branch.01.title')}
                  address={t('branch.01.address')}
                  tel="+84908 748 289"
                  email={ASIAEIWA_EMAIL}
                >
                  <Map height={400} src={ASIAEIWA_GEO} />
                </BranchItem>
              </Column>
            </Row>
          </Container>
        </section>
      </GeneralTemplate>
    </Page>
  );
};

export const getStaticProps = async ({ locale }: { locale: string }) => ({
  props: {
    ...(await serverSideTranslations(locale, ['common', 'contact'])),
  },
});

export default Contact;

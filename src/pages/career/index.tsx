import { Button } from 'components/button';
import { Column } from 'components/column';
import { Container } from 'components/container';
import { GeneralTemplate } from 'components/general-template';
import { Heading } from 'components/heading';
import { JobItem } from 'components/job-item';
import { ModalApplyJob } from 'components/modal-apply-job';
import { Page } from 'components/page';
import { Row } from 'components/row';
import { Text } from 'components/text';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { FC, useCallback, useState } from 'react';
import styles from './style.module.scss';

const Career: FC = () => {
  const { t } = useTranslation('career');
  const [isModalActive, setIsModalActive] = useState(false);

  const onModalOpen = useCallback(() => setIsModalActive(true), []);
  const onModalClose = useCallback(() => setIsModalActive(false), []);

  return (
    <Page
      id="career"
      className={styles['career']}
      title={t('title')}
      description={t('description')}
      keywords={t('keywords')}
    >
      <GeneralTemplate modifiers="padding-bottom">
        <Heading className={styles['career__title']} modifiers={['page', 'border-bottom']} tag="h1">
          {t('title')}
        </Heading>
        <Container className={styles['career__container']}>
          <Row gutter="24">
            <Column col={8} className={styles['career__recent']}>
              <Heading tag="h2" className={styles['career__heading']}>
                {t('recent.heading')}
              </Heading>
              <JobItem
                className={styles['career__item']}
                imgSrc="/images/career/image-1.jpeg"
                title={t('recent.01.title')}
                salary={{ from: 1000, to: 2500 }}
                type={t('recent.01.type')}
                href="/career/frontend-developer"
              />
              <JobItem
                className={styles['career__item']}
                imgSrc="/images/career/image-1.jpeg"
                title={t('recent.02.title')}
                salary={{ from: 1000, to: 3000 }}
                type={t('recent.02.type')}
                href="/career/backend-developer"
              />
            </Column>
            <Column col={4} className={styles['career__hot']}>
              <Heading tag="h2" className={styles['career__heading']}>
                {t('hot.heading')}
              </Heading>
              <JobItem
                modifiers="hot"
                className={styles['career__hot-item']}
                title={t('hot.title')}
                location={t('hot.location')}
                salary={{ from: 1000, to: 3000 }}
                type={t('hot.type')}
                href="/career/backend-developer"
                button={<Button onClick={onModalOpen}>{t('apply-job', { ns: 'common' })}</Button>}
              >
                <Text>{t('hot.desc.p1')}</Text>
                <Text>{t('hot.desc.p2')}</Text>
                <Text>{t('hot.desc.p3')}</Text>
                <Text>{t('hot.desc.p4')}</Text>
              </JobItem>
            </Column>
          </Row>
        </Container>
        <ModalApplyJob isActive={isModalActive} onClose={onModalClose} />
      </GeneralTemplate>
    </Page>
  );
};

export const getStaticProps = async ({ locale }: { locale: string }) => ({
  props: {
    ...(await serverSideTranslations(locale, ['common', 'career'])),
  },
});

export default Career;

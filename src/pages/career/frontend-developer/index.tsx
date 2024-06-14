import { Breadcrumb } from 'components/breadcrumb';
import { Button } from 'components/button';
import { Column } from 'components/column';
import { Container } from 'components/container';
import { GeneralTemplate } from 'components/general-template';
import { Heading } from 'components/heading';
import { Icon } from 'components/icon';
import { JobOverview } from 'components/job-overview';
import { Link } from 'components/link';
import { ModalApplyJob } from 'components/modal-apply-job';
import { Page } from 'components/page';
import { Row } from 'components/row';
import { Text } from 'components/text';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { FC, useCallback, useState } from 'react';
import styles from '../detail.module.scss';

const CareerDetail: FC = () => {
  const { t } = useTranslation('career');
  const [isModalActive, setIsModalActive] = useState(false);

  const onModalOpen = useCallback(() => setIsModalActive(true), []);
  const onModalClose = useCallback(() => setIsModalActive(false), []);

  return (
    <Page id="career-detail" className={styles['career-detail']} title={t('recent.02.title')}>
      <GeneralTemplate modifiers={'padding-bottom'}>
        <Container className={styles['career-detail__container']}>
          <Breadcrumb>
            <Link href="/">{t('menu.home', { ns: 'common' })}</Link>
            <Link href="/career">{t('menu.career', { ns: 'common' })}</Link>
          </Breadcrumb>
          <div className={styles['career-detail__header']}>
            <Heading tag="h1" modifiers="section" className={styles['career-detail__heading']}>
              {t('recent.02.title')}
            </Heading>
            <div className={styles['career-detail__type']}>{t('recent.02.type')}</div>
            <ul className={styles['career-detail__props']}>
              <li>
                <Icon modifiers="location" />
                <span>{t('recent.02.location')}</span>
              </li>
              <li>
                <Icon modifiers="salary" />
                <span className={styles['career-detail__price']}>{t('recent.02.salary')}</span>
              </li>
            </ul>
          </div>
          <Row gutter="24">
            <Column col={4} className={styles['career-detail__column-overview']}>
              <Heading tag="h2" className={styles['career-detail__header-overview']}>
                {t('job-overview.title', { ns: 'common' })}
              </Heading>
              <JobOverview
                button={<Button onClick={onModalOpen}>{t('apply-job', { ns: 'common' })}</Button>}
                dateExp={t('recent.02.dateExp')}
                location={t('recent.02.location')}
                salary={{ from: 2500 }}
                title={t('recent.02.title')}
              />
            </Column>
            <Column col={8} className={styles['career-detail__column-content']}>
              <div className={styles['career-detail__content']}>
                <Heading tag="h2" className={styles['career-detail__header-desc']}>
                  {t('job-description', { ns: 'common' })}
                </Heading>
                <Text>University degree in Computer Sciences, or equivalent.</Text>
                <Text>Having +1 year of experience in Front-End development.</Text>
                <Text>Good experience in modern JS frameworks/libraries such as React, Angular, Vue,…</Text>
                <Text>
                  Experienced in HTML/CSS, JavaScript/TypeScript and pre-processing languages such as LESS/SASS/SCSS
                </Text>
              </div>
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

export default CareerDetail;

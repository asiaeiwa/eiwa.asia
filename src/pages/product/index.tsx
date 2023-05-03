import { Button } from 'components/button';
import { CheckList } from 'components/check-list';
import { Column } from 'components/column';
import { Container } from 'components/container';
import { GeneralTemplate } from 'components/general-template';
import { Heading } from 'components/heading';
import { ModalChoosePlan } from 'components/modal-choose-plan';
import { PackItem } from 'components/pack-item';
import { Page } from 'components/page';
import { Row } from 'components/row';
import { SectionPack } from 'components/section-pack';
import { SectionProPack } from 'components/section-pro-pack';
import { Text } from 'components/text';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { FC, useCallback, useState } from 'react';
import styles from './style.module.scss';

const Product: FC = () => {
  const { t } = useTranslation('product');
  const [isModalActive, setIsModalActive] = useState(false);

  const onModalOpen = useCallback(() => setIsModalActive(true), []);
  const onModalClose = useCallback(() => setIsModalActive(false), []);

  return (
    <Page
      id="product"
      className={styles['product']}
      title={t('title')}
      description={t('description')}
      keywords={t('keywords')}
    >
      <GeneralTemplate modifiers="padding-bottom">
        <Heading className={styles['product__title']} modifiers={['page']} tag="h1">
          {t('heading')}
        </Heading>
        <Text className={styles['product__title-desc']}>{t('desc')}</Text>
        <section className={styles['product__section-service']}>
          <Container>
            <Row className={styles['product__service']}>
              <Column col={3}>
                <PackItem
                  desc={t('pacts.intro.desc')}
                  className={styles['product__pack-item']}
                  price={t('pacts.intro.price')}
                  title={t('pacts.intro.title')}
                  button={
                    <Button modifiers={['little']} onClick={onModalOpen}>
                      {t('choose-plan', { ns: 'common' })}
                    </Button>
                  }
                >
                  <CheckList
                    items={[
                      t('pacts.intro.checklist.01'),
                      t('pacts.intro.checklist.02'),
                      t('pacts.intro.checklist.03'),
                      t('pacts.intro.checklist.04'),
                      t('pacts.intro.checklist.05'),
                      t('pacts.intro.checklist.06'),
                    ]}
                  />
                </PackItem>
              </Column>
              <Column col={3}>
                <PackItem
                  desc={t('pacts.base.desc')}
                  className={styles['product__pack-item']}
                  price={t('pacts.base.price')}
                  title={t('pacts.base.title')}
                  button={
                    <Button modifiers={['little']} onClick={onModalOpen}>
                      {t('choose-plan', { ns: 'common' })}
                    </Button>
                  }
                >
                  <CheckList
                    items={[
                      t('pacts.base.checklist.01'),
                      t('pacts.base.checklist.02'),
                      t('pacts.base.checklist.03'),
                      t('pacts.base.checklist.04'),
                      t('pacts.base.checklist.05'),
                      t('pacts.base.checklist.06'),
                    ]}
                  />
                </PackItem>
              </Column>
              <Column col={3} className={styles['product__highlight']}>
                <PackItem
                  desc={t('pacts.pro.desc')}
                  modifiers={'highlight'}
                  className={styles['product__pack-item']}
                  price={t('pacts.pro.price')}
                  title={t('pacts.pro.title')}
                  button={
                    <Button modifiers={['pink']} onClick={onModalOpen}>
                      {t('choose-plan', { ns: 'common' })}
                    </Button>
                  }
                >
                  <CheckList
                    modifiers="white"
                    items={[
                      t('pacts.pro.checklist.01'),
                      t('pacts.pro.checklist.02'),
                      t('pacts.pro.checklist.03'),
                      t('pacts.pro.checklist.04'),
                      t('pacts.pro.checklist.05'),
                      t('pacts.pro.checklist.06'),
                    ]}
                  />
                </PackItem>
              </Column>
              <Column col={3}>
                <PackItem
                  desc={t('pacts.enterprise.desc')}
                  className={styles['product__pack-item']}
                  price={t('pacts.enterprise.price')}
                  title={t('pacts.enterprise.title')}
                  button={
                    <Button modifiers={['little']} onClick={onModalOpen}>
                      {t('choose-plan', { ns: 'common' })}
                    </Button>
                  }
                >
                  <CheckList
                    items={[
                      t('pacts.enterprise.checklist.01'),
                      t('pacts.enterprise.checklist.02'),
                      t('pacts.enterprise.checklist.03'),
                      t('pacts.enterprise.checklist.04'),
                      t('pacts.enterprise.checklist.05'),
                      t('pacts.enterprise.checklist.06'),
                    ]}
                  />
                </PackItem>
              </Column>
            </Row>
          </Container>
        </section>
        <SectionPack
          className={styles['product__pack']}
          title={t('pacts.base.long-title')}
          checkList={[
            t('pacts.base.checklist.01'),
            t('pacts.base.checklist.02'),
            t('pacts.base.checklist.03'),
            t('pacts.base.checklist.04'),
            t('pacts.base.checklist.05'),
            t('pacts.base.checklist.06'),
            t('pacts.base.checklist.07'),
            t('pacts.base.checklist.08'),
            t('pacts.base.checklist.09'),
            t('pacts.base.checklist.10'),
            t('pacts.base.checklist.11'),
            t('pacts.base.checklist.12'),
          ]}
          button={
            <Button href="/product/base-pack" modifiers={['pink']} tag="a">
              {t('read-more', { ns: 'common' })}
            </Button>
          }
          imgSrc="/images/product/image-1.png"
        >
          <Text>
            {t('pacts.base.paragraph01')}
            <br />
            <br />
            {t('pacts.base.paragraph02')}
          </Text>
        </SectionPack>
        <SectionProPack
          className={styles['product__pro-pack']}
          title={t('pacts.pro.long-title')}
          button={
            <Button href="/product/pro-pack" tag="a">
              {t('read-more', { ns: 'common' })}
            </Button>
          }
          items={[
            {
              imgSrc: '/images/product/pro-1.jpg',
              name: t('pacts.pro.highlight.01.name'),
            },
            {
              imgSrc: '/images/product/pro-1.jpg',
              name: t('pacts.pro.highlight.02.name'),
            },
            {
              imgSrc: '/images/product/pro-1.jpg',
              name: t('pacts.pro.highlight.03.name'),
            },
          ]}
        />
        <SectionPack
          className={styles['product__pack']}
          title={t('pacts.enterprise.long-title')}
          checkList={[
            t('pacts.enterprise.checklist.01'),
            t('pacts.enterprise.checklist.02'),
            t('pacts.enterprise.checklist.03'),
            t('pacts.enterprise.checklist.04'),
            t('pacts.enterprise.checklist.05'),
            t('pacts.enterprise.checklist.06'),
            t('pacts.enterprise.checklist.07'),
            t('pacts.enterprise.checklist.08'),
            t('pacts.enterprise.checklist.09'),
            t('pacts.enterprise.checklist.10'),
            t('pacts.enterprise.checklist.11'),
            t('pacts.enterprise.checklist.12'),
            t('pacts.enterprise.checklist.13'),
            t('pacts.enterprise.checklist.14'),
            t('pacts.enterprise.checklist.15'),
          ]}
          button={
            <Button href="/product/enterprise-pack" modifiers={['pink']} tag="a">
              {t('read-more', { ns: 'common' })}
            </Button>
          }
          imgSrc="/images/product/image-1.png"
        >
          <Text>
            {t('pacts.enterprise.paragraph01')}
            <br />
            <br />
            {t('pacts.enterprise.paragraph02')}
          </Text>
        </SectionPack>
        <ModalChoosePlan
          idPack="pro"
          titlePack={`${t('pacts.pro.title')} ($${t('pacts.pro.price')}/month)`}
          isActive={isModalActive}
          onClose={onModalClose}
        />
      </GeneralTemplate>
    </Page>
  );
};

export const getStaticProps = async ({ locale }: { locale: string }) => ({
  props: {
    ...(await serverSideTranslations(locale, ['common', 'product'])),
  },
});

export default Product;

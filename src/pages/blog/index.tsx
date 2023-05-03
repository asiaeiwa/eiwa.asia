import { BlogItem } from 'components/blog-item';
import { BoxSubscribe } from 'components/box-subscribe';
import { BoxTitle } from 'components/box-title';
import { Button } from 'components/button';
import { Column } from 'components/column';
import { Container } from 'components/container';
import { GeneralTemplate } from 'components/general-template';
import { Heading } from 'components/heading';
import { ModalChoosePlan } from 'components/modal-choose-plan';
import { PackItem } from 'components/pack-item';
import { Page } from 'components/page';
import { Row } from 'components/row';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { FC, useCallback, useState } from 'react';
import { useTranslation } from 'next-i18next';
import styles from './style.module.scss';

const Blog: FC = () => {
  const { t } = useTranslation('blog');
  const [isModalActive, setIsModalActive] = useState(false);

  const onModalOpen = useCallback(() => setIsModalActive(true), []);
  const onModalClose = useCallback(() => setIsModalActive(false), []);

  return (
    <Page
      id="blog"
      className={styles['blog']}
      title={t('title')}
      description={t('description')}
      keywords={t('keywords')}
    >
      <GeneralTemplate modifiers="padding-bottom">
        <Heading className={styles['blog__title']} modifiers={['page', 'border-bottom']} tag="h1">
          {t('heading')}
        </Heading>
        <Container className={styles['blog__container']}>
          <Row gutter="24">
            <Column col={8} className={styles['blog__column-content']}>
              <BlogItem
                date={t('content.01.date')}
                imgSrc="/images/blog/image-1.jpeg"
                sub={t('content.01.sub')}
                title={t('content.01.title')}
                modifiers="big"
                href="/blog/post-1"
              />
              <Row gutter="24" className={styles['blog__list']}>
                <Column col="6" className={styles['blog__column']}>
                  <BlogItem
                    date={t('content.02.date')}
                    imgSrc="/images/blog/image-2.jpeg"
                    sub={t('content.02.sub')}
                    title={t('content.02.title')}
                    href="/blog/post-2"
                  />
                </Column>
                <Column col="6" className={styles['blog__column']}>
                  <BlogItem
                    date={t('content.03.date')}
                    imgSrc="/images/blog/image-3.jpeg"
                    sub={t('content.03.sub')}
                    title={t('content.03.title')}
                    href="/blog/post-3"
                  />
                </Column>
                <Column col="6" className={styles['blog__column']}>
                  <BlogItem
                    date={t('content.04.date')}
                    imgSrc="/images/blog/image-4.jpeg"
                    sub={t('content.04.sub')}
                    title={t('content.04.title')}
                    href="/blog/post-4"
                  />
                </Column>
                <Column col="6" className={styles['blog__column']}>
                  <BlogItem
                    date={t('content.05.date')}
                    imgSrc="/images/blog/image-5.jpeg"
                    sub={t('content.05.sub')}
                    title={t('content.05.title')}
                    href="/blog/post-5"
                  />
                </Column>
              </Row>
              <div className={styles['blog__load-more']}>
                <Button modifiers="blue"> {t('load-more', { ns: 'common' })}</Button>
              </div>
            </Column>
            <Column col={4} className={styles['blog__column-sidebar']}>
              <BoxSubscribe submitText={t('sidebar.subscribe.submit')} title={t('sidebar.subscribe.title')} />
              <BoxTitle className={styles['blog__box-title']} title={t('sidebar.box-news.title')}>
                <BlogItem
                  date={t('sidebar.box-news.01.date')}
                  imgSrc="/images/blog/hot-new-1.jpeg"
                  modifiers="horizontal"
                  sub={t('sidebar.box-news.01.sub')}
                  title={t('sidebar.box-news.01.title')}
                  href="/blog/post-1"
                  className={styles['blog__blog-item']}
                />
                <BlogItem
                  date={t('sidebar.box-news.02.date')}
                  imgSrc="/images/blog/hot-new-2.jpeg"
                  modifiers="horizontal"
                  sub={t('sidebar.box-news.02.sub')}
                  title={t('sidebar.box-news.02.title')}
                  href="/blog/post-2"
                  className={styles['blog__blog-item']}
                />
                <BlogItem
                  date={t('sidebar.box-news.03.date')}
                  imgSrc="/images/blog/hot-new-3.jpeg"
                  modifiers="horizontal"
                  sub={t('sidebar.box-news.03.sub')}
                  title={t('sidebar.box-news.03.title')}
                  href="/blog/post-3"
                  className={styles['blog__blog-item']}
                />
              </BoxTitle>
              <BoxTitle className={styles['blog__box-title']} title={t('sidebar.box-service.titie')}>
                <PackItem
                  modifiers="small"
                  desc={t('sidebar.box-service.01.desc')}
                  price={t('sidebar.box-service.01.price')}
                  title={t('sidebar.box-service.01.title')}
                  button={
                    <Button modifiers={['outline', 'pink']} onClick={onModalOpen}>
                      {t('choose-plan', { ns: 'common' })}
                    </Button>
                  }
                  className={styles['blog__pack-item']}
                />
                <PackItem
                  modifiers={['small', 'highlight']}
                  desc={t('sidebar.box-service.02.desc')}
                  price={t('sidebar.box-service.02.price')}
                  title={t('sidebar.box-service.02.title')}
                  button={
                    <Button modifiers={['pink']} onClick={onModalOpen}>
                      {t('choose-plan', { ns: 'common' })}
                    </Button>
                  }
                  tag={t('sidebar.box-service.02.tag')}
                  className={styles['blog__pack-item']}
                />
                <PackItem
                  modifiers="small"
                  desc={t('sidebar.box-service.03.desc')}
                  price={t('sidebar.box-service.03.price')}
                  title={t('sidebar.box-service.03.title')}
                  button={
                    <Button modifiers={['outline', 'pink']} onClick={onModalOpen}>
                      {t('choose-plan', { ns: 'common' })}
                    </Button>
                  }
                  className={styles['blog__pack-item']}
                />
                <PackItem
                  modifiers="small"
                  desc={t('sidebar.box-service.04.desc')}
                  price={t('sidebar.box-service.04.price')}
                  title={t('sidebar.box-service.04.title')}
                  button={
                    <Button modifiers={['outline', 'pink']} onClick={onModalOpen}>
                      {t('choose-plan', { ns: 'common' })}
                    </Button>
                  }
                  className={styles['blog__pack-item']}
                />
              </BoxTitle>
            </Column>
          </Row>
        </Container>
        {/* TODO: Update modal later */}
        <ModalChoosePlan titlePack={'title pack'} idPack="enterprise" isActive={isModalActive} onClose={onModalClose} />
      </GeneralTemplate>
    </Page>
  );
};

export const getStaticProps = async ({ locale }: { locale: string }) => ({
  props: {
    ...(await serverSideTranslations(locale, ['common', 'blog'])),
  },
});

export default Blog;

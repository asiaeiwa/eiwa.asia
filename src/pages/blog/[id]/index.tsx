import { BlogItem } from 'components/blog-item';
import { BlogRelated } from 'components/blog-related';
import { BoxSubscribe } from 'components/box-subscribe';
import { BoxTitle } from 'components/box-title';
import { Breadcrumb } from 'components/breadcrumb';
import { Button } from 'components/button';
import { Column } from 'components/column';
import { Container } from 'components/container';
import { GeneralTemplate } from 'components/general-template';
import { Heading } from 'components/heading';
import { Image } from 'components/image';
import { Link } from 'components/link';
import { ModalChoosePlan } from 'components/modal-choose-plan';
import { PackItem } from 'components/pack-item';
import { Page } from 'components/page';
import { Row } from 'components/row';
import { Text } from 'components/text';
// import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { FC, useCallback, useState } from 'react';
import styles from './style.module.scss';

const BlogDetail: FC = () => {
  const [isModalActive, setIsModalActive] = useState(false);

  const onModalOpen = useCallback(() => setIsModalActive(true), []);
  const onModalClose = useCallback(() => setIsModalActive(false), []);

  const d = new Date('2021-05-23');
  return (
    <Page
      id="blog-detail"
      className={styles['blog-detail']}
      title="How To Write A Business Plan – Starting A Business Beginning | Blog"
    >
      <GeneralTemplate modifiers="padding-bottom">
        <Heading className={styles['blog-detail__title']} modifiers={['page', 'border-bottom']} tag="div">
          Blog & News
        </Heading>
        <Container className={styles['blog-detail__container']}>
          <Breadcrumb className={styles['blog-detail__breadcrumb']}>
            <Link href="/">Home</Link>
            <Link href="/blog">Blogs</Link>
          </Breadcrumb>
          <Row gutter="24">
            <Column col={8} className={styles['blog-detail__column-content']}>
              <section>
                <time
                  className={styles['blog-detail__time']}
                  dateTime={`${d.getFullYear()}-${d.getMonth() + 1}-${d.getDate()}`}
                >
                  {d.toDateString()}
                </time>
                <Heading tag="h1" modifiers="section" className={styles['blog-detail__heading']}>
                  How to Write A Business Plan - Starting A Business beginning
                </Heading>
                <Image
                  width={752}
                  height={485}
                  src="/images/career/image-1.jpeg"
                  isLazy
                  alt="How to Write A Business Plan - Starting A Business beginning"
                />
                <Text tag="div" className="blog-detail__content">
                  <p>
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut
                    laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation
                    ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.
                  </p>
                  <blockquote>
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut
                    laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation
                    ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.
                  </blockquote>
                  <p>
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut
                    laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation
                    ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.
                  </p>
                  <p>
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut
                    laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation
                    ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.
                  </p>
                  <Heading tag="h2" modifiers="section">
                    Lorem ipsum dolor sit amet
                  </Heading>
                  <p>
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut
                    laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation
                    ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.
                  </p>
                  <p>
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut
                    laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation
                    ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.
                  </p>
                  <p>
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut
                    laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation
                    ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.
                  </p>
                  <p>
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut
                    laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation
                    ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.
                  </p>
                </Text>
              </section>
              <BlogRelated className={styles['blog-detail__blog-related']} title="You may like these too">
                <BlogItem
                  date="2021-05-23"
                  imgSrc="/images/blog/image-3.jpeg"
                  modifiers="small"
                  sub="Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam laoreet dolore magna aliquam"
                  title="How to Write A Business Plan – Starting A Business beginning"
                  href="/blog/post-2"
                />
                <BlogItem
                  date="2021-05-23"
                  imgSrc="/images/blog/image-4.jpeg"
                  modifiers="small"
                  sub="Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam laoreet dolore magna aliquam"
                  title="How to Write A Business Plan – Starting A Business beginning"
                  href="/blog/post-3"
                />
                <BlogItem
                  date="2021-05-23"
                  imgSrc="/images/blog/image-5.jpeg"
                  modifiers="small"
                  sub="Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam laoreet dolore magna aliquam"
                  title="How to Write A Business Plan – Starting A Business beginning"
                  href="/blog/post-4"
                />
              </BlogRelated>
            </Column>
            <Column col={4} className={styles['blog-detail__column-sidebar']}>
              <BoxSubscribe submitText="Submit" title="Subscribe to Our Newsletter" />
              <BoxTitle className={styles['blog-detail__box-title']} title="Hot News">
                <BlogItem
                  date="2021-05-23"
                  imgSrc="/images/blog/hot-new-1.jpeg"
                  modifiers="horizontal"
                  sub="Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam laoreet dolore magna aliquam"
                  title="The Study Shows Who the Leading Who the Leading"
                  href="/blog/post-2"
                  className={styles['blog-detail__blog-item']}
                />
                <BlogItem
                  date="2021-05-23"
                  imgSrc="/images/blog/hot-new-2.jpeg"
                  modifiers="horizontal"
                  sub="Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam laoreet dolore magna aliquam"
                  title="The Study Shows Who the Leading Who the Leading"
                  href="/blog/post-3"
                  className={styles['blog-detail__blog-item']}
                />
                <BlogItem
                  date="2021-05-23"
                  imgSrc="/images/blog/hot-new-3.jpeg"
                  modifiers="horizontal"
                  sub="Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam laoreet dolore magna aliquam"
                  title="The Study Shows Who the Leading Who the Leading"
                  href="/blog/post-4"
                  className={styles['blog-detail__blog-item']}
                />
              </BoxTitle>
              <BoxTitle className={styles['blog-detail__box-title']} title="Service packages">
                <PackItem
                  modifiers="small"
                  desc="For most businesses that want to optimize web queries"
                  price="20"
                  title="Intro"
                  button={
                    <Button modifiers={['outline', 'pink']} onClick={onModalOpen}>
                      Choose plan
                    </Button>
                  }
                  className={styles['blog-detail__pack-item']}
                />
                <PackItem
                  modifiers={['small', 'highlight']}
                  desc="For most businesses that want to optimize web queries"
                  price="100"
                  title="Pro"
                  button={
                    <Button modifiers={['pink']} onClick={onModalOpen}>
                      Choose plan
                    </Button>
                  }
                  tag="MOST POPULAR"
                  className={styles['blog-detail__pack-item']}
                />
                <PackItem
                  modifiers="small"
                  desc="For most businesses that want to optimize web queries"
                  price="50"
                  title="Base"
                  button={
                    <Button modifiers={['outline', 'pink']} onClick={onModalOpen}>
                      Choose plan
                    </Button>
                  }
                  className={styles['blog-detail__pack-item']}
                />
                <PackItem
                  modifiers="small"
                  desc="For most businesses that want to optimize web queries"
                  price="200"
                  title="Enterprise"
                  button={
                    <Button modifiers={['outline', 'pink']} onClick={onModalOpen}>
                      Choose plan
                    </Button>
                  }
                  className={styles['blog-detail__pack-item']}
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

// export const getStaticProps = async ({ locale }: { locale: string }) => ({
//   props: {
//     ...(await serverSideTranslations(locale, ['common', 'blog'])),
//   },
// });

export default BlogDetail;

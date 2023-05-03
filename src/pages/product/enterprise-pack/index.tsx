import { Accordion, AccordionItem } from 'components/accordion';
import { Button } from 'components/button';
import { Column } from 'components/column';
import { Container } from 'components/container';
import { GeneralTemplate } from 'components/general-template';
import { Heading } from 'components/heading';
import { ModalChoosePlan } from 'components/modal-choose-plan';
import { Page } from 'components/page';
import { Row } from 'components/row';
import { SectionPack } from 'components/section-pack';
import { Sticky } from 'components/sticky';
import { Text } from 'components/text';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { FC, useCallback, useState } from 'react';
import styles from '../detail.module.scss';

const ProductDetail: FC = () => {
  const { t } = useTranslation('product');
  const [isModalActive, setIsModalActive] = useState(false);

  const onModalOpen = useCallback(() => setIsModalActive(true), []);
  const onModalClose = useCallback(() => setIsModalActive(false), []);

  return (
    <Page id="product-detail" className={styles['product-detail']} title={t('pacts.enterprise.long-title')} isNeedH1>
      <GeneralTemplate modifiers="padding-bottom">
        <SectionPack
          className={styles['product-detail__section-pack']}
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
          imgSrc="/images/product/image-1.png"
        >
          <Text>
            {t('pacts.enterprise.paragraph01')}
            <br />
            <br />
            {t('pacts.enterprise.paragraph02')}
          </Text>
        </SectionPack>
        <section className={styles['product-detail__section-faq']}>
          <Container>
            <div className={styles['product-detail__blue-bg']}>
              <Heading tag="h2" modifiers={['border-bottom', 'page']} className={styles['product-detail__heading-faq']}>
                Frequently asked questions
              </Heading>
              <Container className={styles['product-detail__small-container']}>
                <Row gutter="88">
                  <Column col="6">
                    <Accordion title="The basic" className={styles['product-detail__accordion']}>
                      <AccordionItem title="How does it work?">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit consequatur fugiat, ad placeat
                        omnis enim blanditiis quos porro reprehenderit dolore?
                      </AccordionItem>
                      <AccordionItem title="Which platform do you support?">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit consequatur fugiat, ad placeat
                        omnis enim blanditiis quos porro reprehenderit dolore?
                      </AccordionItem>
                      <AccordionItem title="How does it work?">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit consequatur fugiat, ad placeat
                        omnis enim blanditiis quos porro reprehenderit dolore?
                      </AccordionItem>
                      <AccordionItem title="How does it work?">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit consequatur fugiat, ad placeat
                        omnis enim blanditiis quos porro reprehenderit dolore?
                      </AccordionItem>
                    </Accordion>
                    <Accordion title="Manage your plan" className={styles['product-detail__accordion']}>
                      <AccordionItem title="How does it work?">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit consequatur fugiat, ad placeat
                        omnis enim blanditiis quos porro reprehenderit dolore?
                      </AccordionItem>
                      <AccordionItem title="Which platform do you support?">
                        We&apos;re a growing family of 382,081 designers and makers from around the world. 4,730 curated
                        design resources to energize your creative workflow.
                      </AccordionItem>
                      <AccordionItem title="How to delete an account?">
                        We&apos;re a growing family of 382,081 designers and makers from around the world. 4,730 curated
                        design resources to energize your creative workflow.
                      </AccordionItem>
                      <AccordionItem title="Refund policy">
                        We&apos;re a growing family of 382,081 designers and makers from around the world. 4,730 curated
                        design resources to energize your creative workflow.
                      </AccordionItem>
                    </Accordion>
                  </Column>
                  <Column col="6">
                    <Accordion title="Using Solo" className={styles['product-detail__accordion']}>
                      <AccordionItem title="How to upgrade a free to a paid plan?">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit consequatur fugiat, ad placeat
                        omnis enim blanditiis quos porro reprehenderit dolore?
                      </AccordionItem>
                      <AccordionItem title="How to cancel a paid plan?">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit consequatur fugiat, ad placeat
                        omnis enim blanditiis quos porro reprehenderit dolore?
                      </AccordionItem>
                      <AccordionItem title="Using Solo">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit consequatur fugiat, ad placeat
                        omnis enim blanditiis quos porro reprehenderit dolore?
                      </AccordionItem>
                      <AccordionItem title="How to create a new workspace?">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit consequatur fugiat, ad placeat
                        omnis enim blanditiis quos porro reprehenderit dolore?
                      </AccordionItem>
                    </Accordion>
                    <Accordion title="Security & private" className={styles['product-detail__accordion']}>
                      <AccordionItem title="How to invite team members?">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit consequatur fugiat, ad placeat
                        omnis enim blanditiis quos porro reprehenderit dolore?
                      </AccordionItem>
                      <AccordionItem title="Which platform do you support?">
                        We&apos;re a growing family of 382,081 designers and makers from around the world. 4,730 curated
                        design resources to energize your creative workflow.
                      </AccordionItem>
                      <AccordionItem title="How does it work?">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit consequatur fugiat, ad placeat
                        omnis enim blanditiis quos porro reprehenderit dolore?
                      </AccordionItem>
                      <AccordionItem title="Change password">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit consequatur fugiat, ad placeat
                        omnis enim blanditiis quos porro reprehenderit dolore?
                      </AccordionItem>
                    </Accordion>
                  </Column>
                </Row>
              </Container>
            </div>
          </Container>
        </section>
        <Sticky
          price={`$${t('pacts.enterprise.price')}`}
          title={t('pacts.enterprise.long-title')}
          button={<Button onClick={onModalOpen}>{t('choose-plan', { ns: 'common' })}</Button>}
        />
        <ModalChoosePlan
          idPack="enterprise"
          titlePack={`${t('pacts.enterprise.title')} ($${t('pacts.enterprise.price')}/month)`}
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

export default ProductDetail;

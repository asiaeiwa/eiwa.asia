import { Button } from 'components/button';
import { CheckList } from 'components/check-list';
import { GeneralTemplate } from 'components/general-template';
import { Link } from 'components/link';
import { OptimiseItem } from 'components/optimise-item';
import { PackItem } from 'components/pack-item';
import { Page } from 'components/page';
import { Partner } from 'components/partner';
import { SectionBanner } from 'components/section-banner';
import { SectionOptimise } from 'components/section-optimise';
import { SectionPartner } from 'components/section-partner';
import { SectionProduct } from 'components/section-product';
import { SectionService } from 'components/section-service';
import { ServiceItem } from 'components/service-item';
import { Text } from 'components/text';
import { SectionVision } from 'components/section-vision';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { FC } from 'react';
import { templateLocale } from 'libs/component';

export const Home: FC = () => {
  const { t } = useTranslation('home');

  return (
    <Page id="home" title="" description={t('description')} keywords={t('keywords')}>
      <GeneralTemplate modifiers="no-top">
        <SectionBanner imgSrc="/images/home/intro.jpeg">
          <Text>{templateLocale(t('description'))}</Text>
        </SectionBanner>
        <SectionService title={t('section-service.title')} desc={templateLocale(t('section-service.desc'))}>
          <ServiceItem imgSrc="/images/home/service-investment.svg" title={t('section-service.list.01')} />
          <ServiceItem imgSrc="/images/home/service-it.svg" title={t('section-service.list.02')} />
          <ServiceItem imgSrc="/images/home/service-offshore.svg" title={t('section-service.list.03')} />
        </SectionService>
        <SectionProduct title={t('section-product.title')} desc={templateLocale(t('section-product.desc'))}>
          <PackItem
            title={t('section-product.list.01.title')}
            modifiers="cate"
            button={
              <Button modifiers="outline" tag="a" href="/contact">
                {t('view-detail', { ns: 'common' })}
              </Button>
            }
          >
            <CheckList items={t('section-product.list.01.features', { returnObjects: true })} />
          </PackItem>
          <PackItem
            title={t('section-product.list.02.title')}
            modifiers="cate"
            button={
              <Button modifiers="outline" tag="a" href="/contact">
                {t('view-detail', { ns: 'common' })}
              </Button>
            }
          >
            <CheckList items={t('section-product.list.02.features', { returnObjects: true })} />
          </PackItem>
          <PackItem
            title={t('section-product.list.03.title')}
            modifiers="cate"
            button={
              <Button modifiers="outline" tag="a" href="/contact">
                {t('view-detail', { ns: 'common' })}
              </Button>
            }
          >
            <CheckList items={t('section-product.list.03.features', { returnObjects: true })} />
          </PackItem>
        </SectionProduct>
        <SectionVision
          title={t('section-vision.title')}
          imgSrc="/images/home/vision-1.jpg"
          link={<Link modifiers="arrow">{t('read-more', { ns: 'common' })}</Link>}
        >
          <Text>{t('section-vision.desc')}</Text>
        </SectionVision>
        <SectionVision
          title={t('section-mission.title')}
          imgSrc="/images/home/mission.jpeg"
          modifiers="invert"
          link={<Link modifiers="arrow">{t('read-more', { ns: 'common' })}</Link>}
        >
          <Text>{templateLocale(t('section-mission.desc'))}</Text>
        </SectionVision>
        <SectionOptimise title={t('section-optimise.title')} desc={templateLocale(t('section-optimise.desc'))}>
          <OptimiseItem heading={t('section-optimization.01.bold')} desc={t('section-optimization.01.paragraph')} />
          <OptimiseItem heading={t('section-optimization.02.bold')} desc={t('section-optimization.02.paragraph')} />
          <OptimiseItem heading={t('section-optimization.03.bold')} desc={t('section-optimization.03.paragraph')} />
          <OptimiseItem heading={t('section-optimization.04.bold')} desc={t('section-optimization.04.paragraph')} />
          <OptimiseItem heading={t('section-optimization.05.bold')} desc={t('section-optimization.05.paragraph')} />
          <OptimiseItem heading={t('section-optimization.06.bold')} desc={t('section-optimization.06.paragraph')} />
          <OptimiseItem heading={t('section-optimization.07.bold')} desc={t('section-optimization.07.paragraph')} />
        </SectionOptimise>
        <SectionPartner>
          <Partner
            srcImg="/images/partner/Ccft_logo.png"
            width={300}
            height={124}
            href="https://www.francothaicc.com/en.html"
            alt="Chambre de Commerce Franco-Thaïe"
          />
          <Partner
            srcImg="/images/partner/itpc_logo.png"
            width={120}
            height={120}
            href="http://itpc.hochiminhcity.gov.vn/home"
            alt="ITPC Ho Chi Minh City"
          />
          <Partner srcImg="/images/partner/city-group.jpg" width={300} height={94} alt="CityGroup" />
          <Partner srcImg="/images/partner/city-event.jpg" width={300} height={98} alt="CityEvent" />
          <Partner srcImg="/images/partner/city-floral.jpg" width={300} height={107} alt="CityFloral" />
          <Partner srcImg="/images/partner/city-travel.jpg" width={300} height={101} alt="CityTravel" />

          <Partner
            srcImg="/images/partner/vjp.png"
            width={306}
            height={75}
            href="https://vj-partner.com/"
            alt="Viet Japan"
          />
          <Partner srcImg="/images/partner/Okuro.png" width={100} height={100} href="https://okuro.vn/" alt="Okuro" />
          <Partner srcImg="/images/partner/Minh-Long.png" width={100} height={100} alt="Minh Long" />
          <Partner
            srcImg="/images/partner/DolphinSolutions1.png"
            width={200}
            height={108}
            href="https://dolphinsolutions.vn/"
            alt="Dolphin Solutions"
          />
          <Partner
            srcImg="/images/partner/Becamex-Tokyu.png"
            width={100}
            height={100}
            href="https://www.becamex-tokyu.com/"
            alt="Becamex Tokyu"
          />
        </SectionPartner>
      </GeneralTemplate>
    </Page>
  );
};

export const getStaticProps = async ({ locale }: { locale: string }) => ({
  props: {
    ...(await serverSideTranslations(locale, ['common', 'home'])),
  },
});

export default Home;

import { Column } from 'components/column';
import { Container } from 'components/container';
import { Icon } from 'components/icon';
import { Link } from 'components/link';
import { Logo } from 'components/logo';
import { Row } from 'components/row';
import { Text } from 'components/text';
import { mapClassnames, mapModifiers } from 'libs/component';
import { ASIAEIWA_EMAIL, MenuItem } from 'libs/constants';
import { useTranslation } from 'next-i18next';
import { useRouter } from 'next/router';
import { FC } from 'react';
import styles from './style.module.scss';

interface Props {
  className?: string;
  menuList?: MenuItem[];
}

export const Footer: FC<Props> = ({ className: additionalClassName = '', menuList }) => {
  const { t } = useTranslation('common');
  const componentClassName = mapModifiers('footer', styles);
  const className = mapClassnames(componentClassName, additionalClassName);
  const { pathname } = useRouter();

  return (
    <footer className={className}>
      <Container className={styles['footer__container']}>
        <Row className={styles['footer__wrapper']}>
          <Column className={styles['footer__column-menu']}>
            {menuList && (
              <ul className={styles['footer__menu']}>
                {menuList.map((menu, index) => (
                  <li
                    key={index}
                    className={
                      (pathname.indexOf(menu.href) > -1 && menu.href !== '/') || (menu.href === '/' && pathname === '/')
                        ? styles['active']
                        : undefined
                    }
                  >
                    {menu.key === 'home' && <Link href={menu.href}>{t('menu.home')}</Link>}
                    {menu.key === 'about' && <Link href={menu.href}>{t('menu.about')}</Link>}
                    {menu.key === 'product' && <Link href={menu.href}>{t('menu.product')}</Link>}
                    {menu.key === 'service' && <Link href={menu.href}>{t('menu.service')}</Link>}
                    {menu.key === 'team' && <Link href={menu.href}>{t('menu.team')}</Link>}
                    {menu.key === 'blog' && (
                      <Link href={menu.href} target={menu?.target}>
                        {t('menu.blog')}
                      </Link>
                    )}
                    {menu.key === 'career' && <Link href={menu.href}>{t('menu.career')}</Link>}
                    {menu.key === 'contact' && <Link href={menu.href}>{t('menu.contact')}</Link>}
                  </li>
                ))}
              </ul>
            )}
          </Column>
          <Column className={styles['footer__column-subscribe']}>
            {/* <Text>{t('subscribe-our')}</Text>
            <form className={styles['footer__form']}>
              <div className={styles['footer__input-group']}>
                <Input
                  modifiers="white"
                  name="fullname"
                  placeholder="example@gmail.com"
                  id="subscribe-email"
                  type="email"
                  className={styles['footer__input']}
                />
                <Button modifiers={['outline']} type="submit">
                  {t('submit')}
                </Button>
              </div>
            </form> */}
          </Column>
          <Column className={styles['footer__column-logo']}>
            <Logo className={styles['footer__logo']} width={149} height={52} />
          </Column>
          <Column className={styles['footer__column-social']}>
            <Text>{t('follow-us')}</Text>
            <ul className={styles['footer__social-list']}>
              <Icon modifiers={['facebook', 'social']} href="https://www.facebook.com/asiaeiwa" target="_blank" />
              <Icon modifiers={['twitter', 'social']} href="https://twitter.com/asiaeiwa" target="_blank" />
              <Icon
                modifiers={['linkedin', 'social']}
                href="https://www.linkedin.com/company/asia-eiwa/"
                target="_blank"
              />
              <Icon modifiers={['instagram', 'social']} href="https://www.instagram.com/asiaeiwa/" target="_blank" />
            </ul>
          </Column>
          <Column className={styles['footer__column-info']}>
            <ul className={styles['footer__menu-info']}>
              {/* <li>
                <Link href="tel:123-456-7890">123-456-7890</Link>
              </li> */}
              <li>
                <Link href={`mailto:${ASIAEIWA_EMAIL}`}>{ASIAEIWA_EMAIL}</Link>
              </li>
              <li>
                <Link href="https://goo.gl/maps/CUBG3vN3jSWPHkiu5" target="_blank">
                  {t('address-company')}
                </Link>
              </li>
            </ul>
          </Column>
          <Column className={styles['footer__column-copyright']}>
            <Text>
              <span className={styles['footer__copyright']}>&copy; 2021-{new Date().getFullYear()} by ASIA EIWA.</span>
              <br /> {t('all-rights')}
            </Text>
          </Column>
        </Row>
      </Container>
    </footer>
  );
};

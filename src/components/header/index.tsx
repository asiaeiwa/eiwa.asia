import { Container } from 'components/container';
import { Icon } from 'components/icon';
import { Link } from 'components/link';
import { Logo } from 'components/logo';
import { mapClassnames, mapModifiers } from 'libs/component';
import { MenuItem, langSupport } from 'libs/constants';
import { useTranslation } from 'next-i18next';
import { useRouter } from 'next/router';
import { FC, useCallback, useEffect, useRef, useState } from 'react';
import styles from './style.module.scss';

interface Props {
  className?: string;
  menuList?: MenuItem[];
}

export const Header: FC<Props> = ({ className: additionalClassName = '', menuList }) => {
  const ref = useRef<HTMLHeadElement>(null);
  const { t } = useTranslation('common');
  const [state, setState] = useState({ isOpen: false, isLangOpen: false });
  const { pathname, asPath, locale, defaultLocale } = useRouter();
  const componentClassName = mapModifiers('header', styles, state.isOpen && 'open');
  const className = mapClassnames(componentClassName, additionalClassName);

  const handlerToggle = useCallback(() => setState(prev => ({ ...prev, isOpen: !prev.isOpen })), []);
  const handlerLangToggle = useCallback(() => setState(prev => ({ ...prev, isLangOpen: !prev.isLangOpen })), []);

  useEffect(() => {
    const onScroll = () => {
      const headerElement = ref.current;
      if (!headerElement) return;
      if (window.scrollY > 20 && !headerElement.classList.contains('fixed')) {
        headerElement.classList.add('fixed');
      } else if (window.scrollY <= 20 && headerElement.classList.contains('fixed')) {
        headerElement.classList.remove('fixed');
      }
    };
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className={className} ref={ref}>
      <Container className={styles['header__container']}>
        <Logo width={114} height={40} href="/" className={styles['header__logo']} />
        {menuList && (
          <div className={styles['header__menu-wrap']}>
            <ul className={styles['header__menu']}>
              {menuList.map((menu, index) => (
                <li
                  key={index}
                  className={`${
                    (pathname.indexOf(menu.href) > -1 && menu.href !== '/') || (menu.href === '/' && pathname === '/')
                      ? styles['active']
                      : ''
                  } ${menu.key === 'service' ? styles['has-child'] : ''}`.trim()}
                >
                  {menu.key === 'home' && <Link href={menu.href}>{t('menu.home')}</Link>}
                  {menu.key === 'about' && <Link href={menu.href}>{t('menu.about')}</Link>}
                  {menu.key === 'product' && <Link href={menu.href}>{t('menu.product')}</Link>}
                  {menu.key === 'service' && (
                    <>
                      <Link href={menu.href}>
                        {t('menu.service')}
                        <Icon modifiers="arrow-down" />
                      </Link>
                      <ul className={styles['header__sub-menu']}>
                        <li>
                          <Link href="/services/enterprise-solutions">{t('menu.service-child.01')}</Link>
                        </li>
                        <li>
                          <Link href="/services/it-management">{t('menu.service-child.02')}</Link>
                        </li>
                        <li>
                          <Link href="/services/enterprise-sofware-development">{t('menu.service-child.03')}</Link>
                        </li>
                        <li>
                          <Link href="/services/real-estate-invest-consulting">{t('menu.service-child.04')}</Link>
                        </li>
                        <li>
                          <Link href="https://elearning.eiwa.asia/" target="_blank">
                            {t('menu.service-child.05')}
                          </Link>
                        </li>
                      </ul>
                    </>
                  )}
                  {menu.key === 'team' && <Link href={menu.href}>{t('menu.team')}</Link>}
                  {menu.key === 'blog' && (
                    <Link href={menu.href} target={menu.target}>
                      {t('menu.blog')}
                    </Link>
                  )}
                  {menu.key === 'career' && <Link href={menu.href}>{t('menu.career')}</Link>}
                  {menu.key === 'contact' && <Link href={menu.href}>{t('menu.contact')}</Link>}
                </li>
              ))}
            </ul>
          </div>
        )}
        <div className={styles['header__controls']}>
          <div className={mapClassnames(styles['header__lang-wrap'], state.isLangOpen && styles['open'])}>
            <span onClick={handlerLangToggle}>
              <Icon modifiers="global" />
              <Icon modifiers="arrow-down" />
            </span>
            <ul>
              {langSupport.map((lang, index) => (
                <li key={index} className={lang.value.toString() === locale ? styles['current'] : undefined}>
                  <Link
                    href={`${lang.value === defaultLocale ? '' : `/${lang.value.toString()}`}${asPath}` || '/'}
                    locale={lang.value.toString()}
                  >
                    {lang.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <button
            className={mapClassnames(styles['header__toggle'], state.isOpen && styles['open'])}
            onClick={handlerToggle}
          >
            <span />
          </button>
        </div>
      </Container>
    </header>
  );
};

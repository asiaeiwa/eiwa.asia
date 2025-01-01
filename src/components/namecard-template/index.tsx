import { Main } from 'components/main';
import { mapClassnames, mapModifiers } from 'libs/component';

import { FC, ReactNode, useCallback, useState } from 'react';
import styles from './style.module.scss';
import { Icon } from 'components/icon';
import { langSupport } from 'libs/constants';
import { Link } from 'components/link';
import { useRouter } from 'next/router';

interface NameCardTemplateProps {
  children?: ReactNode;
  className?: string;
}

export const NameCardTemplate: FC<NameCardTemplateProps> = ({ children, className: additionalClassName = '' }) => {
  const componentClassName = mapModifiers('namecard-template', styles);
  const className = `${componentClassName} ${additionalClassName}`.trim();

  const { asPath, locale, defaultLocale } = useRouter();

  const [state, setState] = useState({ isOpen: false, isLangOpen: false });
  const handlerLangToggle = useCallback(() => setState(prev => ({ ...prev, isLangOpen: !prev.isLangOpen })), []);

  return (
    <div className={className}>
      <div className={styles['namecard-template__lang']}>
        <div className={mapClassnames(styles['namecard-template__lang-wrap'], state.isLangOpen && styles['open'])}>
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
      </div>
      <Main modifiers="no-top">{children}</Main>
      <div className={styles['namecard-template__bg-1']} />
      <div className={styles['namecard-template__bg-2']} />
    </div>
  );
};

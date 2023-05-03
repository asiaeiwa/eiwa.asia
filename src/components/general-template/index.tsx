import { Main } from 'components/main';
import { Footer } from 'components/footer';
import { Header } from 'components/header';
import { mapModifiers } from 'libs/component';
import { MenuList } from 'libs/constants';

import styles from './style.module.scss';
import { FC, ReactNode } from 'react';

interface GeneralTemplateProps {
  children?: ReactNode;
  className?: string;
  modifiers?: 'padding-bottom' | 'no-top';
}

export const GeneralTemplate: FC<GeneralTemplateProps> = ({
  children,
  modifiers,
  className: additionalClassName = '',
}) => {
  const componentClassName = mapModifiers('general-template', styles, modifiers);
  const className = `${componentClassName} ${additionalClassName}`.trim();
  return (
    <div className={className}>
      <Header menuList={MenuList} />
      <Main modifiers={modifiers}>{children}</Main>
      <Footer menuList={MenuList} />
    </div>
  );
};

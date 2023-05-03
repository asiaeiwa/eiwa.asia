import { mapModifiers } from 'libs/component';
import { FC, ReactNode } from 'react';

import styles from './style.module.scss';

interface MainProps {
  children?: ReactNode;
  className?: string;
  modifiers?: 'padding-bottom' | 'no-top';
}

export const Main: FC<MainProps> = ({ children, className: additionalClassName = '', modifiers }) => {
  const componentClassName = mapModifiers('main', styles, modifiers);
  const className = `${componentClassName} ${additionalClassName}`.trim();
  return <main className={className}>{children}</main>;
};

import { mapModifiers } from 'libs/component';
import { Children, FC, ReactNode } from 'react';

import styles from './style.module.scss';

interface BreadcrumbProps {
  children: ReactNode;
  className?: string;
}

export const Breadcrumb: FC<BreadcrumbProps> = ({ children, className: additionalClassName = '' }) => {
  const componentClassName = mapModifiers('breadcrumb', styles);
  const className = `${componentClassName} ${additionalClassName}`.trim();
  return (
    <ul className={className}>
      {Children.toArray(children).map((item, index) => (
        <li className={styles['breadcrumb__item']} key={index}>
          {item}
        </li>
      ))}
    </ul>
  );
};

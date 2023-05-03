import { mapModifiers } from 'libs/component';
import { FC, ReactNode } from 'react';

import styles from './style.module.scss';

interface ColumnProps {
  children?: ReactNode;
  className?: string;
  col?: number | string;
}

export const Column: FC<ColumnProps> = ({ children, className: additionalClassName = '', col }) => {
  const componentClassName = mapModifiers('column', styles);
  const className = `${componentClassName} ${additionalClassName}`.trim();
  return (
    <div className={className} data-col={col}>
      {children}
    </div>
  );
};

import { mapModifiers } from 'libs/component';
import { FC, ReactNode } from 'react';
import styles from './style.module.scss';

interface RowProps {
  className?: string;
  gutter?: '24' | '30' | '88';
  children: ReactNode;
}

export const Row: FC<RowProps> = ({ className: additionalClassName = '', children, gutter }) => {
  const componentClassName = mapModifiers('row', styles, gutter && `gutter-${gutter}`);
  const className = `${componentClassName} ${additionalClassName}`.trim();
  return <div className={className}>{children}</div>;
};

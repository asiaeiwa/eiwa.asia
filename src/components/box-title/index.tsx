import { Heading } from 'components/heading';
import { mapClassnames, mapModifiers } from 'libs/component';
import { FC, ReactNode } from 'react';
import styles from './style.module.scss';

interface BoxTitleProps {
  children?: ReactNode;
  className?: string;
  title: string;
}

export const BoxTitle: FC<BoxTitleProps> = ({ children, title, className: additionalClassName = '' }) => {
  const componentClassName = mapModifiers('box-title', styles);
  const className = mapClassnames(componentClassName, additionalClassName);
  return (
    <div className={className}>
      <Heading className={styles['box-title__title']} tag="h6">
        {title}
      </Heading>
      <div className={styles['box-title__content']}>{children}</div>
    </div>
  );
};

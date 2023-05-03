import { mapModifiers } from 'libs/component';
import { FC, ReactNode } from 'react';
import styles from './style.module.scss';

interface TextProps {
  children: ReactNode;
  className?: string;
  tag?: 'p' | 'div' | 'span';
}

export const Text: FC<TextProps> = ({ children, className: additionalClassName = '', tag: Tag = 'p' }) => {
  const componentClassName = mapModifiers('text', styles);
  const className = `${componentClassName} ${additionalClassName}`.trim();
  return <Tag className={className}>{children}</Tag>;
};

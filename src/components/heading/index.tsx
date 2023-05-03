import { ModifierProp, mapModifiers } from 'libs/component';
import { FC, ReactNode } from 'react';
import styles from './style.module.scss';

export interface HeadingProps {
  children?: ReactNode;
  modifiers?: ModifierProp<'page' | 'section' | 'border-inline' | 'border-bottom' | 'gradient'>;
  className?: string;
  tag: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'div';
}

export const Heading: FC<HeadingProps> = ({ tag: Tag, children, modifiers, className: additionalClassName = '' }) => {
  const componentClassName = mapModifiers('heading', styles, modifiers);
  const className = `${componentClassName} ${additionalClassName}`.trim();
  return <Tag className={className}>{children}</Tag>;
};

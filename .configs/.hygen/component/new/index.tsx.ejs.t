---
to: src/components/<%= h.changeCase.param(name) %>/index.tsx
---
import { ModifierProp, mapClassnames, mapModifiers } from 'libs/component';
import { FC, ReactNode } from 'react';

import styles from './style.module.scss';

interface Props {
  children?: ReactNode;
  className?: string;
  modifiers?: ModifierProp<'xx'>;
}

export const <%= h.changeCase.pascal(name) %>: FC<Props> = ({ children, modifiers, className: additionalClassName = '' }) => {
  const componentClassName = mapModifiers('<%= h.changeCase.param(name) %>', styles, modifiers);
  const className = mapClassnames(componentClassName, additionalClassName);
  return <div className={className}>{children}</div>;
};

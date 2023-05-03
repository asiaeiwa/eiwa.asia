---
to: src/examples/<%= h.changeCase.param(name) %>/index.tsx
---
import { GeneralTemplate } from 'components/general-template';
import { Page } from 'components/page';
import { ModifierProp, mapClassnames, mapModifiers } from 'libs/component';
import { FC, ReactNode } from 'react';

import styles from './style.module.scss';

interface <%= h.changeCase.pascal(name) %>Props {
  children?: ReactNode;
  className?: string;
  modifiers?: ModifierProp<'simple'>;
}

export const <%= h.changeCase.pascal(name) %>: FC<<%= h.changeCase.pascal(name) %>Props> = ({ children, modifiers, className: additionalClassName = '' }) => {
  const componentClassName = mapModifiers('<%= h.changeCase.param(name) %>', styles, modifiers);
  const className = mapClassnames(componentClassName, additionalClassName);
  return (
    <Page id="<%= h.changeCase.param(name) %>" className={className}>
      <GeneralTemplate modifiers={modifiers?.includes('simple') ? 'padding-bottom' : undefined}>
        {children}
      </GeneralTemplate>
    </Page>
  );
};

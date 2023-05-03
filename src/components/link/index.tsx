import { ModifierProp, mapClassnames, mapModifiers } from 'libs/component';
import NextLink, { LinkProps } from 'next/link';
import { FC, MouseEventHandler, ReactNode } from 'react';
import styles from './style.module.scss';

interface Props {
  children?: ReactNode;
  className?: string;
  href?: string;
  target?: string;
  locale?: LinkProps['locale'];
  onClick?: MouseEventHandler<HTMLAnchorElement>;
  modifiers?: ModifierProp<'arrow' | 'normal'>;
}

export const Link: FC<Props> = ({
  children,
  modifiers,
  className: additionalClassName = '',
  href = '#',
  locale,
  ...rest
}) => {
  const componentClassName = mapModifiers('link', styles, modifiers);
  const className = mapClassnames(componentClassName, additionalClassName);
  return (
    <NextLink href={href} locale={locale}>
      <a className={className} href={href} {...rest}>
        {children}
      </a>
    </NextLink>
  );
};

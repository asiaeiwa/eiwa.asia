import { Link } from 'components/link';
import { ModifierProp, mapModifiers } from 'libs/component';
import { AnchorHTMLAttributes, ButtonHTMLAttributes, FC, ReactNode } from 'react';
import styles from './style.module.scss';

interface ButtonProps {
  children?: ReactNode;
  className?: string;
  href?: AnchorHTMLAttributes<HTMLAnchorElement>['href'];
  modifiers?: ModifierProp<'outline' | 'blue' | 'pink' | 'little' | 'white'>;
  tag?: 'a' | 'button';
  target?: AnchorHTMLAttributes<HTMLAnchorElement>['target'];
  type?: ButtonHTMLAttributes<HTMLButtonElement>['type'];
  onClick?: ButtonHTMLAttributes<HTMLButtonElement>['onClick'];
  download?: boolean;
}

export const Button: FC<ButtonProps> = ({
  children,
  className: additionalClassName = '',
  href,
  modifiers = 'pink',
  tag = 'button',
  target,
  type,
  download,
  ...rest
}) => {
  const componentClassName = mapModifiers('button', styles, modifiers);
  const className = `${componentClassName} ${additionalClassName}`.trim();
  if (tag === 'a') {
    return (
      <Link href={href} target={target} {...{ download }}>
        <span className={className} {...rest}>
          {children}
        </span>
      </Link>
    );
  }
  return (
    <button className={className} type={type} {...rest}>
      {children}
    </button>
  );
};

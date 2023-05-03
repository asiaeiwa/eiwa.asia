import { Link } from 'components/link';
import { ModifierProp, mapModifiers } from 'libs/component';
import { AnchorHTMLAttributes, FC } from 'react';
import styles from './style.module.scss';

export interface IconProps {
  modifiers?: ModifierProp<
    | 'arrow-down'
    | 'calendar'
    | 'clock'
    | 'close'
    | 'facebook'
    | 'global'
    | 'instagram'
    | 'linkedin'
    | 'location'
    | 'mail'
    | 'profile'
    | 'salary'
    | 'social'
    | 'twitter'
  >;
  className?: string;
  href?: string;
  onClick?: () => void;
  target?: AnchorHTMLAttributes<HTMLAnchorElement>['target'];
}

export const Icon: FC<IconProps> = ({ modifiers, className: additionalClassName = '', href, onClick, target }) => {
  const componentClassName = mapModifiers('icon', styles, modifiers);
  const className = `${componentClassName} ${additionalClassName}`.trim();
  if (modifiers?.includes('social')) {
    return (
      <Link href={href} target={target}>
        <i className={className} />
      </Link>
    );
  }
  return <i className={className} onClick={onClick} />;
};

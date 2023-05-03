import { Image } from 'components/image';
import { Link } from 'components/link';
import { ModifierProp, mapModifiers } from 'libs/component';
import { ASIAEIWA } from 'libs/constants';
import { FC } from 'react';
import styles from './style.module.scss';

interface Props {
  className?: string;
  height?: number;
  width?: number;
  modifiers?: ModifierProp<'white'>;
  href?: string;
}

export const Logo: FC<Props> = ({ className: additionalClassName = '', modifiers, href = '#', ...rest }) => {
  const componentClassName = mapModifiers('logo', styles, modifiers);
  const className = `${componentClassName} ${additionalClassName}`.trim();
  return (
    <Link href={href} className={className}>
      <Image src="/images/eiwa-logo.png" alt={ASIAEIWA} isLazy={false} {...rest} />
    </Link>
  );
};

import { Image } from 'components/image';
import { Link } from 'components/link';
import { mapClassnames, mapModifiers } from 'libs/component';
import { FC, ReactNode } from 'react';
import styles from './style.module.scss';

interface PartnerProps {
  children?: ReactNode;
  className?: string;
  alt: string;
  srcImg?: string;
  href?: string;
  width?: number | string;
  height?: number | string;
}

export const Partner: FC<PartnerProps> = ({
  className: additionalClassName = '',
  alt,
  href,
  srcImg = '/images/eiwa-logo.png',
  width = 143,
  height = 50,
}) => {
  const componentClassName = mapModifiers('partner', styles);
  const className = mapClassnames(componentClassName, additionalClassName);
  if (href) {
    return (
      <Link href={href} target="__blank">
        <Image className={className} alt={alt} src={srcImg} width={width} height={height} />
      </Link>
    );
  }
  return <Image className={className} alt={alt} src={srcImg} width={width} height={height} />;
};

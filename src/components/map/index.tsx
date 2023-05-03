import { mapModifiers } from 'libs/component';
import { FC } from 'react';
import styles from './style.module.scss';

interface MapProps {
  className?: string;
  src: string;
  width?: string | number;
  height?: string | number;
}

export const Map: FC<MapProps> = ({ className: additionalClassName = '', src, width = '100%', height = 300 }) => {
  const componentClassName = mapModifiers('map', styles);
  const className = `${componentClassName} ${additionalClassName}`.trim();
  return <iframe className={className} src={src} width={width} height={height} allowFullScreen loading="lazy" />;
};

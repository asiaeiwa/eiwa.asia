import { ModifierProp, mapModifiers } from 'libs/component';
import NextImage, { ImageLoaderProps, ImageProps as NextImageProps } from 'next/image';
import { FC, ReactNode, useCallback, useState } from 'react';
import styles from './style.module.scss';

type ImageProps = NextImageProps & {
  children?: ReactNode;
  className?: string;
  modifiers?: ModifierProp<'rounded'>;
  isLazy?: boolean;
  objectFit?: NextImageProps['objectFit'];
  alt: string;
};

const loaderImage = ({ src, width, quality }: ImageLoaderProps) => {
  const param = [width && `width=${width}`, quality && `quality=${quality}`].filter(item => !!item).join('&');
  return [src, param].filter(item => !!item).join('?');
};

export const Image: FC<ImageProps> = ({
  modifiers,
  className: additionalClassName = '',
  isLazy = true,
  objectFit,
  ...rest
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const componentClassName = mapModifiers('image', styles, modifiers, isLazy && 'lazy', isLoaded && 'loaded');
  const className = `${componentClassName} ${additionalClassName}`.trim();

  const handlerLoaded = useCallback(() => setIsLoaded(true), []);

  if (!rest.src) return null;

  return (
    <NextImage
      className={className}
      loader={loaderImage}
      unoptimized={process.env.STORYBOOK === 'true'}
      onLoad={handlerLoaded}
      loading={isLazy ? 'lazy' : undefined}
      objectFit={objectFit || 'cover'}
      {...rest}
    />
  );
};

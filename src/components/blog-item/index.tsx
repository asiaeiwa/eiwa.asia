import { Heading } from 'components/heading';
import { Image } from 'components/image';
import { Link } from 'components/link';
import { Text } from 'components/text';
import { ModifierProp, mapClassnames, mapModifiers } from 'libs/component';
import { FC } from 'react';
import styles from './style.module.scss';

interface BlogItemProps {
  className?: string;
  modifiers?: ModifierProp<'big' | 'small' | 'horizontal'>;
  imgSrc: string;
  date?: string;
  title: string;
  sub: string;
  href: string;
}

export const BlogItem: FC<BlogItemProps> = ({
  modifiers,
  className: additionalClassName = '',
  title,
  imgSrc,
  sub,
  date,
  href,
}) => {
  const componentClassName = mapModifiers('blog-item', styles, modifiers);
  const className = mapClassnames(componentClassName, additionalClassName);
  const d = date ? new Date(date) : new Date();

  const isBig = modifiers?.includes('big');
  const isSmall = modifiers?.includes('small');
  const isHorizontal = modifiers?.includes('horizontal');
  const imageSize = isBig
    ? { width: 752, height: 785 }
    : isSmall
    ? { width: 228, height: 153 }
    : isHorizontal
    ? { width: 143, height: 96 }
    : { width: 364, height: 205 };

  return (
    <article className={className}>
      <Link href={href} className={styles['blog-item__image']}>
        <Image src={imgSrc} {...imageSize} layout="responsive" modifiers="rounded" isLazy alt={title} />
      </Link>
      <time className={styles['blog-item__time']} dateTime={`${d.getFullYear()}-${d.getMonth() + 1}-${d.getDate()}`}>
        {d.toDateString()}
      </time>
      <Link href={href} className={styles['blog-item__link']}>
        <Heading
          className={styles['blog-item__title']}
          tag={isBig ? 'h2' : isSmall || isHorizontal ? 'h6' : 'h5'}
          modifiers={isBig ? 'section' : undefined}
        >
          {title}
        </Heading>
      </Link>
      <Text className={styles['blog-item__sub']}>{sub}</Text>
    </article>
  );
};

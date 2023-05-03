import { Heading } from 'components/heading';
import { Image } from 'components/image';
import { mapClassnames, mapModifiers } from 'libs/component';
import { FC, ReactNode } from 'react';

import styles from './style.module.scss';

interface Props {
  className?: string;
  children?: ReactNode;
  imgSrc: string;
  title: string;
  address: string;
  tel: string;
  email: string;
}

export const BranchItem: FC<Props> = ({
  children,
  className: additionalClassName = '',
  imgSrc,
  title,
  address,
  tel,
  email,
}) => {
  const componentClassName = mapModifiers('branch-item', styles);
  const className = mapClassnames(componentClassName, additionalClassName);
  return (
    <article className={className}>
      <div className={styles['branch-item__title-wrap']}>
        <Image src={imgSrc} isLazy objectFit="cover" layout="fill" alt={title} />
        <Heading tag="h2" className={styles['branch-item__title']}>
          {title}
        </Heading>
      </div>

      <div className={styles['branch-item__address']}>
        <address>{address}</address>
      </div>
      <div className={styles['branch-item__tel']}>
        <a href={`tel:${tel.replace(/\D/g, '')}`}>{tel}</a>
      </div>
      <div className={styles['branch-item__email']}>
        <a href={`mailto:${email}`}>{email}</a>
      </div>
      <div className={styles['branch-item__map']}>{children}</div>
    </article>
  );
};

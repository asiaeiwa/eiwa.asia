import { Heading } from 'components/heading';
import { Image } from 'components/image';
import { mapClassnames, mapModifiers } from 'libs/component';
import { FC } from 'react';
import styles from './style.module.scss';

interface Props {
  className?: string;
  imgSrc: string;
  title: string;
}

export const ServiceItem: FC<Props> = ({ className: additionalClassName = '', imgSrc, title }) => {
  const componentClassName = mapModifiers('service-item', styles);
  const className = mapClassnames(componentClassName, additionalClassName);
  return (
    <div className={className}>
      <Image src={imgSrc} width={64} height={64} alt={title} />
      <Heading tag="h5" className={styles['service-item__title']}>
        {title}
      </Heading>
    </div>
  );
};

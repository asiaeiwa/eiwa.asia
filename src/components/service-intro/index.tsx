import { Container } from 'components/container';
import { Heading } from 'components/heading';
import { Image } from 'components/image';
import { Link } from 'components/link';
import { mapClassnames, mapModifiers } from 'libs/component';
import { FC, ReactNode } from 'react';

import styles from './style.module.scss';

interface Props {
  children?: ReactNode;
  className?: string;
  title: string;
  bigTitle?: string;
  imgSrc: string;
  isHiddenBreadcrumb?: boolean;
}

export const ServiceIntro: FC<Props> = ({
  children,
  className: additionalClassName = '',
  title,
  bigTitle,
  imgSrc,
  isHiddenBreadcrumb,
}) => {
  const componentClassName = mapModifiers('service-intro', styles);
  const className = mapClassnames(componentClassName, additionalClassName);
  return (
    <section className={className}>
      <div className={styles['service-intro__background']}>
        <Image src={imgSrc} layout="fill" objectFit="cover" isLazy alt={title} />
      </div>
      <Container className={styles['service-intro__container']}>
        <ul>
          {!isHiddenBreadcrumb && (
            <>
              <li>
                <Link href="/service" modifiers="normal">
                  Service
                </Link>
              </li>
              <li>{title}</li>
            </>
          )}
        </ul>

        <div className={styles['service-intro__box-text']}>
          <Heading tag="h1" className={styles['service-intro__title']} modifiers="gradient">
            {bigTitle || title}
          </Heading>
          <div className={styles['service-intro__description']}>{children}</div>
        </div>
      </Container>
    </section>
  );
};

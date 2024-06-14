import { Column } from 'components/column';
import { Container } from 'components/container';
import { Heading } from 'components/heading';
import { Image } from 'components/image';
import { Row } from 'components/row';
import { ModifierProp, mapClassnames, mapModifiers } from 'libs/component';
import { FC, ReactNode } from 'react';

import styles from './style.module.scss';

interface Props {
  className?: string;
  modifiers?: ModifierProp<'invert'>;
  title: ReactNode;
  children?: ReactNode;
  imgSrc: string;
}

export const ServiceArticle: FC<Props> = ({
  children,
  modifiers,
  className: additionalClassName = '',
  title,
  imgSrc,
}) => {
  const componentClassName = mapModifiers('service-article', styles, modifiers);
  const className = mapClassnames(componentClassName, additionalClassName);
  return (
    <section className={className}>
      <Container>
        <Row className={styles['service-article__row']} gutter="24">
          <Column col={6} className={styles['service-article__wrap-text']}>
            <Heading tag="h2" modifiers={['border-inline', 'section']} className={styles['service-article__title']}>
              {title}
            </Heading>
            <div className={styles['service-article__description']}>{children}</div>
          </Column>
          <Column col={6}>
            <Image
              src={imgSrc}
              width={548}
              height={282}
              modifiers="rounded"
              isLazy
              alt={typeof title === 'string' ? String(title) : 'Service Image'}
            />
          </Column>
        </Row>
      </Container>
    </section>
  );
};

import { Column } from 'components/column';
import { Container } from 'components/container';
import { Heading } from 'components/heading';
import { Image } from 'components/image';
import { Row } from 'components/row';
import { ModifierProp, mapClassnames, mapModifiers } from 'libs/component';
import { FC, ReactNode } from 'react';
import styles from './style.module.scss';

interface Props {
  children?: ReactNode;
  className?: string;
  modifiers?: ModifierProp<'invert'>;
  title: string;
  imgSrc: string;
  link?: ReactNode;
}

export const SectionVision: FC<Props> = ({
  children,
  modifiers,
  className: additionalClassName = '',
  title,
  imgSrc,
  link,
}) => {
  const componentClassName = mapModifiers('section-vision', styles, modifiers);
  const className = mapClassnames(componentClassName, additionalClassName);
  return (
    <section className={className}>
      <Container>
        <Row gutter="24" className={styles['section-vision__row']}>
          <Column col={6}>
            <Image width={548} height={368} src={imgSrc} className={styles['section-vision__image']} alt={title} />
          </Column>
          <Column col={6}>
            <div className={styles['section-vision__info']}>
              <Heading tag="h2" modifiers={['section', 'border-inline']} className={styles['section-vision__title']}>
                {title}
              </Heading>
              {children}
              {link && <div className={styles['section-vision__link']}>{link}</div>}
              <div className={styles['section-vision__bg']} />
            </div>
          </Column>
        </Row>
      </Container>
    </section>
  );
};

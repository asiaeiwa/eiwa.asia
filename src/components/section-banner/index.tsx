import { Column } from 'components/column';
import { Container } from 'components/container';
import { Heading } from 'components/heading';
import { Image } from 'components/image';
import { Row } from 'components/row';
import { mapClassnames, mapModifiers } from 'libs/component';
import { FC, ReactNode } from 'react';
import styles from './style.module.scss';

interface Props {
  children?: ReactNode;
  className?: string;
  imgSrc: string;
}

export const SectionBanner: FC<Props> = ({ children, className: additionalClassName = '', imgSrc }) => {
  const componentClassName = mapModifiers('section-banner', styles);
  const className = mapClassnames(componentClassName, additionalClassName);
  return (
    <div className={className}>
      <Container className={styles['section-banner__container']}>
        <div className={styles['section-banner__box-border']}>
          <div className={styles['section-banner__box']}>
            <Row className={styles['section-banner__row']}>
              <Column col={6} className={styles['section-banner__image-wrapper']}>
                <Image
                  src={imgSrc}
                  width={546}
                  height={362}
                  className={styles['section-banner__image']}
                  alt="Make Believe, Make Business"
                />
              </Column>
              <Column col={6} className={styles['section-banner__text']}>
                <Heading tag="h1" className={styles['section-banner__title']} modifiers="gradient">
                  Make Believe, Make Business
                </Heading>
                <div className={styles['section-banner__description']}>{children}</div>
              </Column>
            </Row>
          </div>
        </div>
        <div className={styles['section-banner__bg-1']} />
        <div className={styles['section-banner__bg-2']} />
        <div className={styles['section-banner__bg-3']} />
      </Container>
    </div>
  );
};

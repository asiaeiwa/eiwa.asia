import { CheckList } from 'components/check-list';
import { Column } from 'components/column';
import { Container } from 'components/container';
import { Heading } from 'components/heading';
import { Image } from 'components/image';
import { Row } from 'components/row';
import { mapClassnames, mapModifiers } from 'libs/component';
import { FC, ReactNode } from 'react';
import styles from './style.module.scss';

interface SectionPackProps {
  className?: string;
  imgSrc: string;
  children?: ReactNode;
  checkList?: string[];
  button?: ReactNode;
  title: string;
}

export const SectionPack: FC<SectionPackProps> = ({
  className: additionalClassName = '',
  imgSrc,
  children,
  checkList,
  button,
  title,
}) => {
  const componentClassName = mapModifiers('section-pack', styles);
  const className = mapClassnames(componentClassName, additionalClassName);

  return (
    <section className={className}>
      <Container>
        <Heading className={styles['section-pack__heading']} modifiers={['page', 'border-inline']} tag="h2">
          {title}
        </Heading>
        <Row gutter="24" className={styles['section-pack__wrapper']}>
          <Column col="6" className={styles['section-pack__column-image']}>
            <Image src={imgSrc} width="570" height="320" layout="responsive" isLazy alt={title} />
          </Column>
          <Column col="6" className={styles['section-pack__column-info']}>
            <div className={styles['section-pack__desc']}>{children}</div>
            {checkList && <CheckList className={styles['section-pack__check-list']} items={checkList} />}
            {button && <div className={styles['section-pack__button']}>{button}</div>}
          </Column>
        </Row>
      </Container>
    </section>
  );
};

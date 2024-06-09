import { Column } from 'components/column';
import { Container } from 'components/container';
import { Heading } from 'components/heading';
import { Row } from 'components/row';
import { Text } from 'components/text';
import { mapClassnames, mapModifiers } from 'libs/component';
import { Children, FC, ReactNode } from 'react';
import styles from './style.module.scss';

interface Props {
  children?: ReactNode;
  className?: string;
  title: string;
  desc: ReactNode;
}

export const SectionService: FC<Props> = ({ children, className: additionalClassName = '', title, desc }) => {
  const componentClassName = mapModifiers('section-service', styles);
  const className = mapClassnames(componentClassName, additionalClassName);
  return (
    <div className={className}>
      <Container className={styles['section-service__container']}>
        <Row className={styles['section-service__row-main']}>
          <Column col={6} className={styles['section-service__text']}>
            <Heading tag="h2" modifiers={['page', 'border-inline']} className={styles['section-service__title']}>
              {title}
            </Heading>
            <Text>{desc}</Text>
          </Column>
          <Column col={6} className={styles['section-service__list']}>
            <Row gutter="24" className={styles['section-service__row']}>
              {Children.toArray(children).map((item, index) => (
                <Column col={4} key={index}>
                  {item}
                </Column>
              ))}
            </Row>
          </Column>
        </Row>
        <div className={styles['section-service__bg-1']} />
        <div className={styles['section-service__bg-2']} />
      </Container>
    </div>
  );
};

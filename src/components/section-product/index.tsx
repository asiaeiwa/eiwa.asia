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
  desc?: string;
}

export const SectionProduct: FC<Props> = ({ children, className: additionalClassName = '', title, desc }) => {
  const componentClassName = mapModifiers('section-product', styles);
  const className = mapClassnames(componentClassName, additionalClassName);
  return (
    <div className={className}>
      <Container className={styles['section-product__container']}>
        <div className={styles['section-product__text']}>
          <Heading tag="h2" modifiers="section" className={styles['section-product__title']}>
            {title}
          </Heading>
          {desc && <Text>{desc}</Text>}
        </div>
        <Row gutter="24" className={styles['section-product__row']}>
          {Children.toArray(children).map((item, index) => (
            <Column key={index} col={4}>
              {item}
            </Column>
          ))}
        </Row>
        <div className={styles['section-product__bg-1']} />
        <div className={styles['section-product__bg-2']} />
      </Container>
    </div>
  );
};

import { Container } from 'components/container';
import { Heading } from 'components/heading';
import { mapClassnames, mapModifiers } from 'libs/component';
import { FC, ReactNode } from 'react';
import styles from './style.module.scss';

interface StickyProps {
  className?: string;
  title: string;
  price: string;
  button: ReactNode;
}

export const Sticky: FC<StickyProps> = ({ className: additionalClassName = '', title, price, button }) => {
  const componentClassName = mapModifiers('sticky', styles);
  const className = mapClassnames(componentClassName, additionalClassName);
  return (
    <div className={className}>
      <Container className={styles['sticky__container']}>
        <Heading className={styles['sticky__heading']} tag="div" modifiers="page">
          {title}
        </Heading>
        <div className={styles['sticky__right']}>
          <div className={styles['sticky__price']}>
            {price}
            <span className={styles['sticky__month']}>/month</span>
          </div>
          <div className={styles['sticky__button']}>{button}</div>
        </div>
      </Container>
    </div>
  );
};

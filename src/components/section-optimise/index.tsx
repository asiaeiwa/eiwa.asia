import { Container } from 'components/container';
import { Heading } from 'components/heading';
import { Text } from 'components/text';
import { mapModifiers } from 'libs/component';
import { FC, ReactNode } from 'react';
import styles from './style.module.scss';

interface ServiceProps {
  className?: string;
  title: string;
  desc: ReactNode;
  children: ReactNode;
}

export const SectionOptimise: FC<ServiceProps> = ({ className: additionalClassName = '', title, desc, children }) => {
  const componentClassName = mapModifiers('section-optimise', styles);
  const className = `${componentClassName} ${additionalClassName}`.trim();

  return (
    <section className={className}>
      <Container className={styles['section-optimise__container']}>
        <div className={styles['section-optimise__info']}>
          <Heading tag="h2" modifiers={['section', 'border-bottom']} className={styles['section-optimise__title']}>
            {title}
          </Heading>
          <Text className={styles['section-optimise__desc']}>{desc}</Text>
        </div>
        <div className={styles['section-optimise__wrapper']}>{children}</div>
      </Container>
    </section>
  );
};

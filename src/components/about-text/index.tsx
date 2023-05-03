import { Container } from 'components/container';
import { Heading } from 'components/heading';
import { mapClassnames, mapModifiers } from 'libs/component';
import { FC, ReactNode } from 'react';
import styles from './style.module.scss';

interface Props {
  children?: ReactNode;
  className?: string;
  title?: string;
  sub?: string;
}

export const AboutText: FC<Props> = ({ children, className: additionalClassName = '', title, sub }) => {
  const componentClassName = mapModifiers('about-text', styles);
  const className = mapClassnames(componentClassName, additionalClassName);
  return (
    <div className={className}>
      <Container className={styles['about-text__container']}>
        <div className={styles['about-text__wrapper-text']}>
          {title && (
            <Heading tag="h2" modifiers="section" className={styles['about-text__title']}>
              {title}
            </Heading>
          )}
          <div className={styles['about-text__content']}>
            {sub && (
              <Heading tag="h4" className={styles['about-text__sub']}>
                {sub}
              </Heading>
            )}
            {children}
          </div>
        </div>
      </Container>
    </div>
  );
};

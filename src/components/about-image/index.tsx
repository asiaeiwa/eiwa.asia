import { Container } from 'components/container';
import { ModifierProp, mapClassnames, mapModifiers } from 'libs/component';
import { FC } from 'react';
import styles from './style.module.scss';

interface Props {
  className?: string;
  imgSrc: string;
  name?: string;
  position?: string;
  quote?: string;
  modifiers?: ModifierProp<'bottom'>;
}

export const AboutImage: FC<Props> = ({
  quote,
  className: additionalClassName = '',
  imgSrc,
  position,
  name,
  modifiers,
}) => {
  const componentClassName = mapModifiers('about-image', styles, modifiers);
  const className = mapClassnames(componentClassName, additionalClassName);
  return (
    <section className={className} style={{ backgroundImage: `url('${imgSrc}')` }}>
      <Container className={styles['about-image__container']}>
        {quote && position && name && (
          <div className={styles['about-image__wrapper-text']}>
            <div className={styles['about-image__quote']}>{quote}</div>
            <div className={styles['about-image__name']}>{name}</div>
            <div className={styles['about-image__position']}>{position}</div>
          </div>
        )}
      </Container>
    </section>
  );
};

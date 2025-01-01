import { mapClassnames, mapModifiers } from 'libs/component';
import { FC } from 'react';
import styles from './style.module.scss';
import { Image } from 'components/image';
import { Button } from 'components/button';
import { Icon } from 'components/icon';
import { Container } from 'components/container';

interface Props {
  className?: string;
  imgSrc?: string;
  name?: string;
  position?: string;
}

export const SectionBio: FC<Props> = ({ className: additionalClassName = '', imgSrc, name, position }) => {
  const componentClassName = mapModifiers('section-bio', styles);
  const className = mapClassnames(componentClassName, additionalClassName);

  return (
    <section className={className}>
      <Container>
        <div className={styles['section-bio__main-box']}>
          <div className={styles['section-bio__avatar']}>
            <Image
              src={imgSrc || ''}
              width={100}
              height={100}
              layout="responsive"
              modifiers="circle"
              isLazy
              alt={name || ''}
            />
          </div>
          <h2>{name}</h2>
          <h5>{position}</h5>
          <div className={styles['section-bio__connect']}>
            <Button>
              <Icon modifiers="add-contact" /> Add Contact
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
};

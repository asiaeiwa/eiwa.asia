import { Column } from 'components/column';
import { Container } from 'components/container';
import { Heading } from 'components/heading';
import { Image } from 'components/image';
import { Row } from 'components/row';
import { mapClassnames, mapModifiers } from 'libs/component';
import styles from './style.module.scss';
import { Text } from 'components/text';
import { FC, ReactNode } from 'react';

interface Props {
  className?: string;
  title: string;
  button?: ReactNode;
  items: { imgSrc: string; name: string }[];
}

export const SectionProPack: FC<Props> = ({ className: additionalClassName = '', title, button, items }) => {
  const componentClassName = mapModifiers('section-pro-pack', styles);
  const className = mapClassnames(componentClassName, additionalClassName);
  return (
    <section className={className}>
      <Container className={styles['section-pro-pack__container']}>
        <div className={styles['section-pro-pack__wrapper-heading']}>
          <Heading className={styles['section-pro-pack__heading']} modifiers={['page', 'border-inline']} tag="h2">
            {title}
          </Heading>
          {button}
        </div>
        <Row gutter="24" className={styles['section-pro-pack__wrapper-content']}>
          {items &&
            items.map((item, index) => (
              <Column key={index} col={4} className={styles['section-pro-pack__item']}>
                <Image
                  src={item.imgSrc}
                  width={364}
                  height={408}
                  alt={item.name}
                  layout="responsive"
                  modifiers="rounded"
                  className={styles['section-pro-pack__item-image']}
                  isLazy
                />
                <Text className={styles['section-pro-pack__item-name']}>{item.name}</Text>
              </Column>
            ))}
        </Row>
      </Container>
    </section>
  );
};

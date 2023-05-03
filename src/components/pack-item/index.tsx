import { Heading } from 'components/heading';
import { Text } from 'components/text';
import { ModifierProp, mapClassnames, mapModifiers } from 'libs/component';
import { FC, ReactNode } from 'react';
import styles from './style.module.scss';

interface Props {
  children?: ReactNode;
  className?: string;
  modifiers?: ModifierProp<'cate' | 'highlight' | 'small'>;
  price?: string;
  title: string;
  desc?: string;
  button: ReactNode;
  tag?: string;
}

export const PackItem: FC<Props> = ({
  modifiers,
  price,
  title,
  desc,
  className: additionalClassName = '',
  button,
  tag,
  children,
}) => {
  const componentClassName = mapModifiers('pack-item', styles, modifiers);
  const className = mapClassnames(componentClassName, additionalClassName);
  return (
    <div className={className}>
      <Heading tag="h3" className={styles['pack-item__title']}>
        {title}
      </Heading>
      {price && (
        <div className={styles['pack-item__price']}>
          <span className={styles['pack-item__number']}>${price}</span>
          <span className={styles['pack-item__unit']}>/month</span>
        </div>
      )}

      {desc && <Text className={styles['pack-item__desc']}>{desc}</Text>}
      {children && <div className={styles['pack-item__check-list']}>{children}</div>}
      {tag && <span className={styles['pack-item__tag']}>{tag}</span>}
      <div className={styles['pack-item__button-container']}>{button}</div>
    </div>
  );
};

import { ModifierProp, mapClassnames, mapModifiers } from 'libs/component';
import { FC } from 'react';
import styles from './style.module.scss';

interface CheckListProps {
  className?: string;
  modifiers?: ModifierProp<'white'>;
  items: string[];
}

export const CheckList: FC<CheckListProps> = ({ modifiers, className: additionalClassName = '', items }) => {
  const componentClassName = mapModifiers('check-list', styles, modifiers);
  const className = mapClassnames(componentClassName, additionalClassName);
  return (
    <ul className={className}>
      {Array.isArray(items) &&
        items.map((item, index) => (
          <li key={index} className={styles['check-list__item']}>
            {item}
          </li>
        ))}
    </ul>
  );
};

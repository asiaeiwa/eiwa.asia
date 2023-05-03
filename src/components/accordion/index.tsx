import { Heading } from 'components/heading';
import { mapClassnames, mapModifiers } from 'libs/component';
import { FC, ReactNode, useCallback, useState } from 'react';
import styles from './style.module.scss';

interface Props {
  className?: string;
  title: string;
  children: ReactNode;
}

export const Accordion: FC<Props> = ({ children, className: additionalClassName = '', title }) => {
  const componentClassName = mapModifiers('accordion', styles);
  const className = mapClassnames(componentClassName, additionalClassName);
  return (
    <div className={className}>
      <Heading tag="h3">{title}</Heading>
      <ul className={styles['accordion__list']}>{children}</ul>
    </div>
  );
};

interface AccordionItemProps {
  className?: string;
  title: string;
  children: ReactNode;
}

export const AccordionItem: FC<AccordionItemProps> = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const componentClassName = mapModifiers('accordion__item', styles, isOpen && 'active');

  const onClick = useCallback(() => setIsOpen(prev => !prev), []);

  return (
    <li className={componentClassName}>
      <div className={styles['accordion__item-title']} onClick={onClick}>
        {title}
      </div>
      <div className={styles['accordion__item-text']}>{children}</div>
    </li>
  );
};

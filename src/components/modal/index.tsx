import { Backdrop } from 'components/backdrop';
import { Icon } from 'components/icon';
import { mapClassnames, mapModifiers } from 'libs/component';
import { FC, ReactNode } from 'react';
import styles from './style.module.scss';

export interface ModalProps {
  className?: string;
  children?: ReactNode;
  isActive?: boolean;
  onClose?: () => void;
}

export const Modal: FC<ModalProps> = ({ children, className: additionalClassName = '', isActive, onClose }) => {
  const componentClassName = mapModifiers('modal', styles, isActive && 'active');
  const className = mapClassnames(componentClassName, additionalClassName);
  return (
    <div className={className}>
      <Backdrop isActive={isActive} onClick={onClose} />
      <div className={styles['modal__wrapper']}>
        <div className={styles['modal__container']}>
          <Icon modifiers="close" onClick={onClose} className={styles['modal__close']} />
          {children}
        </div>
      </div>
    </div>
  );
};

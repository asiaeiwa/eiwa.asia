import { mapModifiers } from 'libs/component';
import { FC, MouseEventHandler, MouseEvent as MouseEventReact, useCallback } from 'react';
import styles from './style.module.scss';

interface BackdropProps {
  className?: string;
  isActive?: boolean;
  onClick?: MouseEventHandler<HTMLDivElement>;
  modifiers?: 'block';
}

export const Backdrop: FC<BackdropProps> = ({ className: additionalClassName = '', isActive, onClick, modifiers }) => {
  const componentClassName = mapModifiers('backdrop', styles, modifiers, isActive && 'show');
  const className = `${componentClassName} ${additionalClassName}`.trim();
  const clickHandler = useCallback(
    (event: MouseEventReact<HTMLDivElement, MouseEvent>) => {
      onClick && onClick(event);
    },
    [onClick]
  );
  return <div className={className} onClick={clickHandler} />;
};

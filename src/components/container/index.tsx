import { mapModifiers } from 'libs/component';
import { CSSProperties, FC, ReactNode } from 'react';

import styles from './style.module.scss';

interface ContainerProps {
  children?: ReactNode;
  className?: string;
  style?: CSSProperties;
}

export const Container: FC<ContainerProps> = ({ children, className: additionalClassName = '', style }) => {
  const componentClassName = mapModifiers('container', styles);
  const className = `${componentClassName} ${additionalClassName}`.trim();
  return (
    <div className={className} style={style}>
      {children}
    </div>
  );
};

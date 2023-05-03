import { ModifierProp, mapModifiers } from 'libs/component';
import { FC, InputHTMLAttributes } from 'react';
import styles from './style.module.scss';

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  modifiers?: ModifierProp<'white' | 'black'>;
  name?: string;
  className?: string;
  placeholder?: string;
};

export const Input: FC<InputProps> = ({ className: additionalClassName = '', modifiers, type = 'text', ...rest }) => {
  const componentClassName = mapModifiers('input', styles, modifiers);
  const className = `${componentClassName} ${additionalClassName}`.trim();
  return (
    <div className={className}>
      <input type={type} {...rest} />
    </div>
  );
};

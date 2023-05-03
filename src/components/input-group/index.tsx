import { Text } from 'components/text';
import { mapModifiers } from 'libs/component';
import { FC, HTMLInputTypeAttribute } from 'react';
import styles from './style.module.scss';

interface Props {
  className?: string;
  label: string;
  name: string;
  required?: boolean;
  type?: HTMLInputTypeAttribute;
  isError?: boolean;
  errorMessage?: string;
  isMultiLine?: boolean;
  maxLength?: number;
  rows?: number;
  placeholder?: string;
  sub?: string;
  accept?: string;
}

export const InputGroup: FC<Props> = ({
  label,
  className: additionalClassName = '',
  isError,
  errorMessage,
  isMultiLine,
  type = 'text',
  sub,
  ...rest
}) => {
  const componentClassName = mapModifiers('input-group', styles, isError && 'error', isMultiLine && 'multi-line');
  const className = `${componentClassName} ${additionalClassName}`.trim();
  const Tag = isMultiLine ? 'textarea' : 'input';

  // TODO: Write logic to show the character limit message.

  return (
    <label className={className}>
      <span className={styles['input-group__label']}>{label}</span>
      <Tag className={styles['input-group__input']} type={type} {...rest} />
      {errorMessage && isError && <span className={styles['input-group__error']}>{errorMessage}</span>}
      {sub && (
        <Text tag="span" className={styles['input-group__sub']}>
          {sub}
        </Text>
      )}
    </label>
  );
};

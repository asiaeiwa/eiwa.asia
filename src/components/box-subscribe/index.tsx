import { Button } from 'components/button';
import { Heading } from 'components/heading';
import { Input } from 'components/input';
import { mapClassnames, mapModifiers } from 'libs/component';
import { FC } from 'react';
import styles from './style.module.scss';

interface BoxSubscribeProps {
  className?: string;
  title: string;
  submitText: string;
}

export const BoxSubscribe: FC<BoxSubscribeProps> = ({ className: additionalClassName = '', title, submitText }) => {
  const componentClassName = mapModifiers('box-subscribe', styles);
  const className = mapClassnames(componentClassName, additionalClassName);
  return (
    <form className={className}>
      <Heading className={styles['box-subscribe__heading']} tag="h3">
        {title}
      </Heading>
      <Input
        className={styles['box-subscribe__email']}
        placeholder="example@gmail.com"
        name="email"
        type="email"
        modifiers="black"
      />
      <Button className={styles['box-subscribe__button']} type="submit">
        {submitText}
      </Button>
    </form>
  );
};

import { Heading } from 'components/heading';
import { Text } from 'components/text';
import { mapModifiers } from 'libs/component';
import { FC } from 'react';
import styles from './style.module.scss';

interface ServicesItemProps {
  className?: string;
  heading: string;
  desc: string;
}

export const OptimiseItem: FC<ServicesItemProps> = ({ className: additionalClassName = '', heading, desc }) => {
  const componentClassName = mapModifiers('optimise-item', styles);
  const className = `${componentClassName} ${additionalClassName}`.trim();
  return (
    <div className={className}>
      <Heading className={styles['optimise-item__heading']} tag="h4">
        {heading}
      </Heading>
      <Text className={styles['optimise-item__desc']}>{desc}</Text>
    </div>
  );
};

import { Heading } from 'components/heading';
import { Icon } from 'components/icon';
import { Image } from 'components/image';
import { Link } from 'components/link';
import { mapClassnames, mapModifiers } from 'libs/component';
import { FC, ReactNode } from 'react';
import styles from './style.module.scss';

interface Props {
  className?: string;
  modifiers?: 'recent' | 'hot';
  imgSrc?: string;
  title: string;
  type: 'Full time' | 'Freelancer' | 'Part time' | 'Intership';
  salary: { from: number; to?: number };
  location?: string;
  children?: ReactNode;
  button?: ReactNode;
  href: string;
}

export const JobItem: FC<Props> = ({
  modifiers = 'recent',
  className: additionalClassName = '',
  imgSrc,
  title,
  type,
  salary,
  location,
  children,
  button,
  href,
}) => {
  const componentClassName = mapModifiers('job-item', styles, modifiers, type && type.toLowerCase().replace(/\s/, '-'));
  const className = mapClassnames(componentClassName, additionalClassName);
  const isRecent = modifiers === 'recent';

  return (
    <article className={className}>
      {isRecent && imgSrc && (
        <Link href={href} className={styles['job-item__image']}>
          <Image src={imgSrc} alt={title} width={112} height={112} />
        </Link>
      )}
      <div className={styles['job-item__wrapper-content']}>
        <Link href={href} className={styles['job-item__link']}>
          <Heading tag="h2" className={styles['job-item__heading']}>
            {title}
          </Heading>
        </Link>
        <ul className={styles['job-item__props']}>
          {location && (
            <li>
              <Icon modifiers="location" />
              {location}
            </li>
          )}
          {salary && (
            <li>
              <Icon modifiers="salary" />${salary.from.toLocaleString()}
              {salary.to && ` - $${salary.to.toLocaleString()}`}
            </li>
          )}
        </ul>
        <div className={styles['job-item__type']}>{type}</div>
        {!isRecent && <div className={styles['job-item__desc']}>{children}</div>}
        {!isRecent && <div className={styles['job-item__button']}>{button}</div>}
      </div>
    </article>
  );
};

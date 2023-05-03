import { Icon } from 'components/icon';
import { mapClassnames, mapModifiers } from 'libs/component';
import { FC, ReactNode } from 'react';
import { useTranslation } from 'react-i18next';
import styles from './style.module.scss';

interface Props {
  className?: string;
  dateExp: string;
  location: string;
  title: string;
  salary: { from: number; to?: number };
  button: ReactNode;
}

export const JobOverview: FC<Props> = ({
  className: additionalClassName = '',
  dateExp,
  location,
  title,
  salary,
  button,
}) => {
  const { t } = useTranslation('common');
  const componentClassName = mapModifiers('job-overview', styles);
  const className = mapClassnames(componentClassName, additionalClassName);
  return (
    <article className={className}>
      <ul className={styles['job-overview__props']}>
        <li>
          <Icon modifiers="clock" />
          <div>
            {t('job-overview.expiration-date')}
            <span>{dateExp}</span>
          </div>
        </li>
        <li>
          <Icon modifiers="location" />
          <div>
            {t('job-overview.location')}
            <span>{location}</span>
          </div>
        </li>
        <li>
          <Icon modifiers="profile" />
          <div>
            {t('job-overview.job-title')}
            <span>{title}</span>
          </div>
        </li>
        <li>
          <Icon modifiers="salary" />
          <div>
            {t('job-overview.salary')}
            <span>
              ${salary.from.toLocaleString()}
              {salary.to && ` - $${salary.to.toLocaleString()}`}
            </span>
          </div>
        </li>
      </ul>
      <div className={styles['job-overview__button']}>{button}</div>
    </article>
  );
};

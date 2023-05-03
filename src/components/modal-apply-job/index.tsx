import { Button } from 'components/button';
import { Heading } from 'components/heading';
import { InputGroup } from 'components/input-group';
import { Modal, ModalProps } from 'components/modal';
import { mapClassnames, mapModifiers } from 'libs/component';
import { useTranslation } from 'next-i18next';
import { FC } from 'react';
import styles from './style.module.scss';

export const ModalApplyJob: FC<ModalProps> = ({ className: additionalClassName = '', ...rest }) => {
  const { t } = useTranslation('common');
  const componentClassName = mapModifiers('modal-apply-job', styles);
  const className = mapClassnames(componentClassName, additionalClassName);
  const errorMsg = t('can-blank');
  return (
    <Modal className={className} {...rest}>
      <Heading tag="div" modifiers="section" className={styles['modal-apply-job__heading']}>
        {t('apply-job')}
      </Heading>
      <form action="">
        <InputGroup
          className={styles['modal-apply-job__input-group']}
          name="name"
          label={t('form-job.name')}
          placeholder={t('form-job.name-placeholder')}
          errorMessage={errorMsg}
        />
        <InputGroup
          className={styles['modal-apply-job__input-group']}
          name="email"
          label={t('form-job.email')}
          placeholder={t('form-job.email-placeholder')}
          errorMessage={errorMsg}
          type="email"
        />
        <InputGroup
          className={styles['modal-apply-job__input-group']}
          name="cv"
          label={t('form-job.cv')}
          errorMessage={errorMsg}
          isError
          type="file"
          sub={t('form-job.cv-sub')}
          accept=".doc,.docx,.pdf"
        />
        <InputGroup
          className={styles['modal-apply-job__input-group']}
          name="introduce"
          label={t('form-job.introduce')}
          placeholder={t('form-job.introduce-placeholder')}
          errorMessage={errorMsg}
          isMultiLine
          rows={5}
        />
        <Button className={styles['modal-apply-job__button']} type="submit">
          {t('apply-job')}
        </Button>
      </form>
    </Modal>
  );
};

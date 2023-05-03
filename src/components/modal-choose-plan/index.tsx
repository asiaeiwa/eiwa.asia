import { Button } from 'components/button';
import { Heading } from 'components/heading';
import { InputGroup } from 'components/input-group';
import { Modal, ModalProps } from 'components/modal';
import { mapClassnames, mapModifiers } from 'libs/component';
import { useTranslation } from 'next-i18next';
import { FC } from 'react';
import styles from './style.module.scss';

interface Props extends ModalProps {
  titlePack: string;
  idPack: 'intro' | 'base' | 'pro' | 'enterprise';
}

export const ModalChoosePlan: FC<Props> = ({ className: additionalClassName = '', titlePack, idPack, ...rest }) => {
  const { t } = useTranslation('common');
  const componentClassName = mapModifiers('modal-choose-plan', styles);
  const className = mapClassnames(componentClassName, additionalClassName);
  const errorMsg = t('can-blank');
  return (
    <Modal className={className} {...rest}>
      <Heading tag="div" modifiers="section" className={styles['modal-choose-plan__heading']}>
        {t('choose-plan')} <span>-</span> <span>{titlePack}</span>
      </Heading>
      <form action="">
        <input type="hidden" name="idpack" value={idPack} />
        <InputGroup
          className={styles['modal-choose-plan__input-group']}
          name="name"
          label={t('form-plan.name')}
          placeholder={t('form-plan.name-placeholder')}
          errorMessage={errorMsg}
        />
        <InputGroup
          className={styles['modal-choose-plan__input-group']}
          name="email"
          label={t('form-plan.email')}
          placeholder={t('form-plan.email-placeholder')}
          errorMessage={errorMsg}
          type="email"
        />
        <InputGroup
          className={styles['modal-choose-plan__input-group']}
          name="phone"
          label={t('form-plan.phone')}
          placeholder={t('form-plan.phone-placeholder')}
          errorMessage={errorMsg}
          isError
        />
        <Button className={styles['modal-choose-plan__button']} type="submit">
          {t('form-plan.submit')}
        </Button>
      </form>
    </Modal>
  );
};

import { TFunction } from 'i18next';
import { EActions } from '@/types';
import { ConmmunitiesIcon, ErrorIcon, SuccessIcon } from '@/components';

export const getConfirmTitle = (t: TFunction, action: EActions, titleDelete?: string) => {
  switch (action) {
    case EActions.DELETE:
      return t('modal.titleDelete', { value: titleDelete });
    case EActions.SHARE:
      return t('modal.titleShare');
    case EActions.DELETE_MUTIPLE:
      return t('modal.titleApplyAll');
    case EActions.HIDE:
      return t('modal.titleApplyAll');
    default:
      return '';
  }
};

export const getConfirmIcon = (action: EActions): React.ReactNode => {
  switch (action) {
    case EActions.DELETE:
      return <ErrorIcon />;
    case EActions.SHARE:
      return <ConmmunitiesIcon />;
    case EActions.DELETE_MUTIPLE:
      return <SuccessIcon />;
    case EActions.HIDE:
      return <SuccessIcon />;
    default:
      return <ErrorIcon />;
  }
};

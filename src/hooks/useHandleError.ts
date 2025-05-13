'use client';

/* eslint-disable @typescript-eslint/no-explicit-any */

import { useTranslation } from 'react-i18next';

import { openNotification } from '@/components';
import { ReactNode } from 'react';
import { upperFirst } from 'lodash';

const useHandleError = () => {
  const { t } = useTranslation();

  return (error: any, description?: ReactNode) => {
    const err = upperFirst(error?.data?.message) || t(`httpErrCodes.${error.code ?? 500}`);

    if (description) {
      openNotification({
        type: 'error',
        message: 'Error!',
        duration: 4,
        description: description,
      });
    } else {
      openNotification({
        type: 'error',
        message: 'Error!',
        duration: 4,
        description: err,
      });
    }
  };
};

export default useHandleError;

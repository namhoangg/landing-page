'use client';

import { openNotification } from '@/components';
import { ReactNode } from 'react';

const useHandleSuccess = () => {
  return (msg: ReactNode, duration?: number) => {
    openNotification({
      type: 'success',
      message: 'Success!',
      duration: duration || 2,
      description: msg,
    });
  };
};

export default useHandleSuccess;

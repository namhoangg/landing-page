import { notification } from 'antd';
import { ReactNode } from 'react';
import { Title } from '@/components';
import './styles.scss';

interface INotificationType {
  type: 'success' | 'info' | 'warning' | 'error';
  message: ReactNode;
  width?: number;
  duration?: number;
  description?: ReactNode;
}

export const openNotification = ({
  type,
  message,
  width,
  duration,
  description,
}: INotificationType) => {
  notification[type]({
    message: <Title level={5}>{message}</Title>,
    placement: 'bottomLeft',
    duration: duration || 2,
    description: description,

    style: {
      width: width,
    },
  });

  return null;
};

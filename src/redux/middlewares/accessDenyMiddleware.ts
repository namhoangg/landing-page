import { isRejectedWithValue, Middleware } from '@reduxjs/toolkit';
import { message } from 'antd';
import { useRouter } from 'next/navigation';

const statusCodeErrorMiddleware: Middleware = () => (next) => (action) => {
  const router = useRouter();
  if (isRejectedWithValue(action)) {
    switch (action.payload.status) {
      case 403:
        message.error({
          key: 403,
          content: 'Access denied, please try again later',
        });
        router.push('/404');
        break;
      case 400:
        message.error({
          key: 400,
          content: 'Bad request, please try again later',
        });

        break;
      default:
        if (action.payload.status >= 500) {
          message.error({
            key: 500,
            content: 'Internal server error, please try again later',
          });
        }
        break;
    }
  }
  return next(action);
};

export default statusCodeErrorMiddleware;

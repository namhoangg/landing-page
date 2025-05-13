/* eslint-disable @typescript-eslint/no-explicit-any */

'use client';
import Loading from '@/app/loading';
import { PublicRoute } from '@/constants';
import { getAccessToken } from '@/utils';
import { useRouter } from 'next/navigation';

import React, { useEffect } from 'react';

const withPrivateRoute = (WrapComponent: any) => {
  const AuthComponent = (props: any) => {
    const router = useRouter();
    const isValidAuth = getAccessToken();

    useEffect(() => {
      if (!isValidAuth) router.push(PublicRoute.LOGIN);
    }, [isValidAuth]);

    return isValidAuth ? <WrapComponent {...props} /> : <Loading />;
  };
  return AuthComponent;
};

export default withPrivateRoute;

/* eslint-disable @typescript-eslint/no-explicit-any */

import { LocalStorageKey, PublicRoute, SessionStorageKey } from '@/constants';
import {
  clearToken,
  getAccessToken,
  getRefreshToken,
  setAccessToken,
  setRefreshToken,
} from '@/utils';
import {
  BaseQueryFn,
  FetchArgs,
  fetchBaseQuery,
  FetchBaseQueryError,
} from '@reduxjs/toolkit/query';

export const baseQuery = fetchBaseQuery({
  baseUrl: process.env['NEXT_PUBLIC_FILE_URL'],
  prepareHeaders: (headers) => {
    const token = getAccessToken();

    if (token) {
      headers.set('Authorization', `Bearer ${token}`);
    }

    return headers;
  },
});

export const baseQueryPublic = fetchBaseQuery({
  baseUrl: process.env['NEXT_PUBLIC_FILE_URL'],
  prepareHeaders: (headers) => {
    // const token = getAccessToken();
    return headers;
  },
});

export const baseQueryWithReAuth: BaseQueryFn<
  string | FetchArgs,
  unknown,
  FetchBaseQueryError
> = async (args, api, extraOptions) => {
  let result = await baseQuery(args, api, extraOptions);
  if (result.error && result.error.status === 401) {
    const refreshArgs = {
      url: `${process.env['NEXT_PUBLIC_API_URL']}/auth/refresh`,

      body: {
        refresh_token: getRefreshToken(),
      },

      method: 'POST',
    };

    const { data }: { [key: string]: any } = await baseQuery(refreshArgs, api, extraOptions);
    if (data) {
      setAccessToken(SessionStorageKey.ACCESS_TOKEN, data.access_token);
      setRefreshToken(LocalStorageKey.REFRESH_TOKEN, data.refresh_token);
    } else {
      clearToken();
      window.location.href = PublicRoute.LOGIN;
    }
    result = await baseQuery(args, api, extraOptions);
  }
  return result;
};

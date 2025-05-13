import { IParamsCommon, IResDetailCommon, IUserRes } from '@/types';
import { createApi } from '@reduxjs/toolkit/query/react';
import { baseQueryWithReAuth } from './baseQuery';

export const UserAPI = createApi({
  reducerPath: 'UserAPI',
  baseQuery: baseQueryWithReAuth,
  endpoints: (builder) => ({
    getUsersSearch: builder.query<IResDetailCommon<IUserRes[]>, IParamsCommon>({
      query: (params) => ({
        url: '/users/search',
        params,
      }),
    }),
  }),
});

export const { useGetUsersSearchQuery } = UserAPI;

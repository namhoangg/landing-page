import { createApi } from '@reduxjs/toolkit/query/react';
import { baseQueryWithReAuth } from './baseQuery';
import { IRequestCommon } from '@/types';

export const UnlocoAPI = createApi({
  reducerPath: 'UnlocoAPI',
  baseQuery: baseQueryWithReAuth,
  endpoints: (builder) => ({
    listUnloco: builder.query({
      query: (params) => ({
        url: `/unloco`,
        params,
      }),
    }),
    getUnloco: builder.query({
      query: ({ id }) => ({
        url: `/unloco/${id}`,
      }),
    }),
    listGoodKind: builder.query<any, any>({
      query: () => ({
        url: `/good-kind/list`,
      }),
    }),
    listContainer: builder.query<any, any>({
      query: (params) => ({
        url: `/container-type/list`,
        params,
      }),
    }),
    listServiceCharge: builder.query<any, any>({
      query: (params) => ({
        url: '/service-charge/',
        params,
      })
    }),
  }),
});

export const {
  useListUnlocoQuery,
  useGetUnlocoQuery,
  useListGoodKindQuery,
  useListContainerQuery,
  useListServiceChargeQuery,
} = UnlocoAPI;

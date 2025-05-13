import { createApi } from '@reduxjs/toolkit/query/react';
import { baseQueryWithReAuth } from './baseQuery';

export const UnlocoAPI = createApi({
  reducerPath: 'UnlocoAPI',
  baseQuery: baseQueryWithReAuth,
  endpoints: (builder) => ({
    listUnloco: builder.query({
      query: (params) => ({
        url: `/unloco`,
        params
      })
    }),
    getUnloco: builder.query({
      query: ({ id }) => ({
        url: `/unloco/${id}`
      })
    })
  })
});

export const { useListUnlocoQuery, useGetUnlocoQuery } = UnlocoAPI;

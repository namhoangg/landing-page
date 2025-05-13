import { createApi } from '@reduxjs/toolkit/query/react';
import { baseQueryWithReAuth } from './baseQuery';
import { EStatusPostQuery, IParamsCommon, IPostsRes, IResCommon } from '@/types';

export const NewPressAPI = createApi({
  reducerPath: 'NewPressAPI',
  tagTypes: ['LIST'],
  baseQuery: baseQueryWithReAuth,
  endpoints: (builder) => ({
    getNewPress: builder.query<IResCommon<IPostsRes[]>, IParamsCommon>({
      query: (params) => {
        return {
          url: '/bvcorps/news',
          params: {
            state: EStatusPostQuery.POST_STATE_PUBLIC,
            ...params,
          },
        };
      },
      providesTags: ['LIST'],
    }),
  }),
});

export const { useGetNewPressQuery } = NewPressAPI;

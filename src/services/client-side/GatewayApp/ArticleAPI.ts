import { createApi } from '@reduxjs/toolkit/query/react';
import { baseQueryWithReAuth } from './baseQuery';
import { IArticles, IParamsCommon, IResCommon } from '@/types';

export const ArticlesAPI = createApi({
  reducerPath: 'ArticlesAPI',
  tagTypes: ['LIST', 'TAG_ERROR'],
  baseQuery: baseQueryWithReAuth,
  endpoints: (builder) => ({
    getArticles: builder.query<IResCommon<IArticles[]>, IParamsCommon>({
      query: (params) => {
        return {
          url: '/bvcorps/articles',
          params,
        };
      },
      providesTags: ['LIST'],
    }),
  }),
});

export const { useGetArticlesQuery } = ArticlesAPI;

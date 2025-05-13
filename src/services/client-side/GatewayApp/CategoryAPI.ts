import { createApi } from '@reduxjs/toolkit/query/react';
import { baseQueryWithReAuth } from './baseQuery';
import {
  EStatusPostQuery,
  ICategoryRes,
  IParamsCommon,
  IResCommon,
  IResDetailCommon,
} from '@/types';
import { isEmpty } from 'lodash';

export const CategoryAPI = createApi({
  reducerPath: 'CategoryAPI',
  tagTypes: ['LIST', 'DETAIL', 'TAG_ERROR'],
  baseQuery: baseQueryWithReAuth,
  endpoints: (builder) => ({
    getCategories: builder.query<IResCommon<ICategoryRes[]>, IParamsCommon>({
      query: (params) => {
        return {
          url: '/bvcorps/categories',
          params: {
            state: EStatusPostQuery.POST_STATE_PUBLIC,
            ...params,
          },
        };
      },
      providesTags: ['LIST'],
    }),
    getCategoryById: builder.query<IResDetailCommon<ICategoryRes>, string | undefined>({
      query: (id) => {
        return {
          url: `/bvcorps/categories/${id}`,
        };
      },
      providesTags: ['DETAIL'],
    }),
    getCategoryBySlug: builder.query<IResDetailCommon<ICategoryRes>, string | undefined>({
      query: (slug) => {
        return {
          url: `/bvcorps/categories/slug/${slug}`,
        };
      },
      providesTags: ['DETAIL'],
    }),
    upsertCategory: builder.mutation({
      query: (body) => {
        return {
          url: '/bvcorps/categories',
          method: 'POST',
          body,
        };
      },
      invalidatesTags: (result, error) => {
        return isEmpty(error) ? ['LIST', 'DETAIL'] : ['TAG_ERROR'];
      },
    }),
    updateCategoryState: builder.mutation({
      query: (body) => {
        return {
          url: '/bvcorps/categories/update-state',
          method: 'POST',
          body,
        };
      },
      invalidatesTags: (result, error) => {
        return isEmpty(error) ? ['LIST', 'DETAIL'] : ['TAG_ERROR'];
      },
    }),

    deleteCategory: builder.mutation({
      query: (body) => {
        return {
          url: `/bvcorps/categories`,
          method: 'DELETE',
          body,
        };
      },
      invalidatesTags: (result, error) => {
        return isEmpty(error) ? ['LIST'] : ['TAG_ERROR'];
      },
    }),
  }),
});

export const {
  useGetCategoriesQuery,
  useDeleteCategoryMutation,
  useUpsertCategoryMutation,
  useUpdateCategoryStateMutation,
  useGetCategoryByIdQuery,
  useGetCategoryBySlugQuery,
} = CategoryAPI;

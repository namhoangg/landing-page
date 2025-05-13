import { createApi } from '@reduxjs/toolkit/query/react';
import { baseQueryWithReAuth } from './baseQuery';
import { IParamsCommon, IResCommon, ITagRes } from '@/types';
import { isEmpty } from 'lodash';

export const TagAPI = createApi({
  reducerPath: 'TagAPI',
  tagTypes: ['LIST', 'TAG_ERROR'],
  baseQuery: baseQueryWithReAuth,
  endpoints: (builder) => ({
    getTags: builder.query<IResCommon<ITagRes[]>, IParamsCommon>({
      query: (params) => {
        return {
          url: '/bvcorps/tags',
          params,
        };
      },
      providesTags: ['LIST'],
    }),
    createTag: builder.mutation({
      query: (body) => {
        return {
          url: '/bvcorps/tags',
          method: 'POST',
          body,
        };
      },
      invalidatesTags: (result, error) => {
        return isEmpty(error) ? ['LIST'] : ['TAG_ERROR'];
      },
    }),
    patchHighlight: builder.mutation({
      query: (body) => {
        return {
          url: `/bvcorps/tags/${body?.id}/highlighted`,
          method: 'PATCH',
          body,
        };
      },
      invalidatesTags: (result, error) => {
        return isEmpty(error) ? ['LIST'] : ['TAG_ERROR'];
      },
    }),
    deleteTag: builder.mutation({
      query: (params) => {
        return {
          url: `/bvcorps/tags`,
          method: 'DELETE',
          params: params,
        };
      },
      invalidatesTags: (result, error) => {
        return isEmpty(error) ? ['LIST'] : ['TAG_ERROR'];
      },
    }),
  }),
});

export const {
  useGetTagsQuery,
  useCreateTagMutation,
  useDeleteTagMutation,
  usePatchHighlightMutation,
} = TagAPI;

import { createApi } from '@reduxjs/toolkit/query/react';
import { baseQueryWithReAuth } from './baseQuery';
import { IParamsCommon, IPostsRes, IResCommon, IResDetailCommon } from '@/types';
import { isEmpty } from 'lodash';

export const PostAPI = createApi({
  reducerPath: 'PostAPI',
  tagTypes: ['LIST', 'DETAIL', 'TAG_ERROR'],
  baseQuery: baseQueryWithReAuth,
  endpoints: (builder) => ({
    getPosts: builder.query<IResCommon<IPostsRes[]>, IParamsCommon>({
      query: (params) => {
        return {
          url: '/bvcorps/news',
          params: {
            ...params,
          },
        };
      },
      providesTags: ['LIST'],
    }),
    getPostById: builder.query<IResDetailCommon<IPostsRes>, IParamsCommon>({
      query: (params) => {
        return {
          url: `/bvcorps/news/detail`,
          params: params,
        };
      },
      providesTags: ['DETAIL'],
    }),
    upsertPost: builder.mutation({
      query: (body) => {
        return {
          url: '/bvcorps/news',
          method: 'POST',
          body,
        };
      },
      invalidatesTags: (result, error) => {
        return isEmpty(error) ? ['LIST', 'DETAIL'] : ['TAG_ERROR'];
      },
    }),
    updatePostState: builder.mutation({
      query: (body) => {
        return {
          url: '/bvcorps/news/batch-update-state',
          method: 'PUT',
          body,
        };
      },
      invalidatesTags: (result, error) => {
        return isEmpty(error) ? ['LIST', 'DETAIL'] : ['TAG_ERROR'];
      },
    }),

    deletePost: builder.mutation({
      query: (body) => {
        return {
          url: `/bvcorps/news`,
          method: 'DELETE',
          body,
        };
      },
      invalidatesTags: (result, error) => {
        return isEmpty(error) ? ['LIST'] : ['TAG_ERROR'];
      },
    }),
    getPostFeatured: builder.query<IResCommon<IPostsRes[]>, IParamsCommon>({
      query: (params) => {
        return {
          url: `/bvcorps/news/featured`,
          params,
        };
      },
    }),
  }),
});

export const {
  useGetPostByIdQuery,
  useGetPostsQuery,
  useDeletePostMutation,
  useUpdatePostStateMutation,
  useUpsertPostMutation,
  useGetPostFeaturedQuery,
} = PostAPI;

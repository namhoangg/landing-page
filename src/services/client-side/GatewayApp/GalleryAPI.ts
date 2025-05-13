import { createApi } from '@reduxjs/toolkit/query/react';
import { baseQueryWithReAuth } from './baseQuery';
import { IGalleryAdminRes, IParamsCommon, IResCommon, IResDetailCommon } from '@/types';
import { isEmpty } from 'lodash';

export const GalleryAPI = createApi({
  reducerPath: 'GalleryAPI',
  tagTypes: ['LIST', 'DETAIL', 'TAG_ERROR'],
  baseQuery: baseQueryWithReAuth,
  endpoints: (builder) => ({
    getGalleries: builder.query<IResCommon<IGalleryAdminRes[]>, IParamsCommon>({
      query: (params) => {
        return {
          url: '/bvcorps/gallery/albums',
          params,
        };
      },
      providesTags: ['LIST'],
    }),

    getGallerytById: builder.query<IResDetailCommon<IGalleryAdminRes>, IParamsCommon>({
      query: ({ id, ...params }) => {
        return {
          url: `/bvcorps/gallery/albums/${id}`,
          params: params,
        };
      },
      providesTags: ['DETAIL'],
    }),
    upsertGallery: builder.mutation({
      query: (body) => {
        return {
          url: '/bvcorps/gallery/albums',
          method: 'POST',
          body,
        };
      },
      invalidatesTags: (_, error) => {
        return isEmpty(error) ? ['LIST', 'DETAIL'] : ['TAG_ERROR'];
      },
    }),
    deleteGallery: builder.mutation({
      query: (id) => {
        return {
          url: `/bvcorps/gallery/albums/${id}`,
          method: 'DELETE',
        };
      },
      invalidatesTags: (_, error) => {
        return isEmpty(error) ? ['LIST'] : ['TAG_ERROR'];
      },
    }),
    getGalleryBySlug: builder.query<IResDetailCommon<IGalleryAdminRes>, IParamsCommon>({
      query: (params) => {
        return {
          url: `/bvcorps/gallery/albums/slug/${params.slug}`,
          params: {
            preload: 'images',
            ...params,
          },
        };
      },
      providesTags: ['DETAIL'],
    }),
  }),
});

export const {
  useGetGalleriesQuery,
  useGetGallerytByIdQuery,
  useUpsertGalleryMutation,
  useDeleteGalleryMutation,
  useGetGalleryBySlugQuery,
} = GalleryAPI;

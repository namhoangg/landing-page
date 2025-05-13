import { createApi } from '@reduxjs/toolkit/query/react';
import { baseQueryPublic } from './baseQuery';

export const StorePublicAPI = createApi({
  reducerPath: 'StorePublicAPI',
  baseQuery: baseQueryPublic,
  endpoints: (builder) => ({
    getFileTrusted: builder.query({
      query: (params) => ({
        url: '/trusted/store/file/pre-signed-url',
        params,
        method: 'GET',
        responseHandler: (response) => response.text(),
      }),
    }),

    uploadFileTrusted: builder.mutation({
      query: (body) => ({
        url: '/trusted/store/file/upload',
        body,
        method: 'POST',
        responseHandler: (response) => response.text(),
      }),
    }),

    getPresignedUrlPublic: builder.query({
      query: (params) => ({
        url: '/trusted/store/file/pre-signed-url',
        params,
        responseHandler: (response) => response.text(),
      }),
    }),

    uploadBase64ToS3: builder.mutation({
      query: (body: { base64: string; contentType: string; preSignedUrl: string }) => ({
        url: body?.preSignedUrl,
        body: Uint8Array.from(atob(body?.base64), (c) => c.charCodeAt(0)),
        method: 'PUT',
        headers: {
          'Content-Type': body?.contentType,
        },
      }),
    }),
  }),
});

export const {
  useGetFileTrustedQuery,
  useUploadFileTrustedMutation,
  useLazyGetFileTrustedQuery,
  useLazyGetPresignedUrlPublicQuery,
  useUploadBase64ToS3Mutation,
} = StorePublicAPI;

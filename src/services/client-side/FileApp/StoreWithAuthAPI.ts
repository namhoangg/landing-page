import { createApi } from '@reduxjs/toolkit/query/react';
import { baseQueryWithReAuth } from './baseQuery';

export const StoreAPI = createApi({
  reducerPath: 'StoreAPI',
  baseQuery: baseQueryWithReAuth,
  endpoints: (builder) => ({
    uploadFile: builder.mutation({
      query: (body) => ({
        url: '/store/file/upload',
        body: body,
        method: 'POST',
        responseHandler: (response) => response.text(),
      }),
    }),
    getFile: builder.query({
      query: (params) => ({
        url: '/store/file/pre-signed-url',
        params,
        method: 'GET',
        responseHandler: (response) => response.text(),
      }),
    }),
  }),
});

export const { useLazyGetFileQuery, useUploadFileMutation } = StoreAPI;

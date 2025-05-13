import { createApi } from '@reduxjs/toolkit/query/react';
import { baseQueryWithReAuth } from './baseQuery';
import { IParamsCommon, IResCommon, IFormRes, IForm } from '@/types';
import { isEmpty } from 'lodash';

export const FormAPI = createApi({
  reducerPath: 'FormAPI',
  tagTypes: ['LIST', 'TAG_ERROR'],
  baseQuery: baseQueryWithReAuth,
  endpoints: (builder) => ({
    submitForm: builder.mutation<IResCommon<IFormRes[]>, IParamsCommon>({
      query: (params) => {
        return {
          url: '/bvcorps/submissions',
          method: 'POST',
          body: params,
        };
      },
      //   invalidateTags: ['LIST'],
    }),
    getForms: builder.query<IResCommon<IForm[]>, IParamsCommon>({
      query: (params) => {
        return {
          url: '/bvcorps/forms',
          params,
        };
      },
      providesTags: ['LIST'],
    }),
    updateFormNotification: builder.mutation({
      query: (body) => {
        return {
          url: '/bvcorps/forms/notification',
          method: 'PUT',
          body,
        };
      },
      invalidatesTags: (_, error) => {
        return isEmpty(error) ? ['LIST'] : ['TAG_ERROR'];
      },
    }),
  }),
});

export const { useSubmitFormMutation, useGetFormsQuery, useUpdateFormNotificationMutation } =
  FormAPI;

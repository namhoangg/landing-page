import { createApi } from '@reduxjs/toolkit/query/react';
import { baseQueryWithReAuth } from './baseQuery';
import { IParamsCommon, IResCommon, IResDetailCommon, IResLatestActivity } from '@/types';
import { isEmpty } from 'lodash';

export const FormSubmissionAPI = createApi({
  reducerPath: 'FormSubmissionAPI',
  tagTypes: ['LIST', 'DETAIL', 'TAG_ERROR'],
  baseQuery: baseQueryWithReAuth,
  endpoints: (builder) => ({
    getLatestActivities: builder.query<IResCommon<IResLatestActivity[]>, IParamsCommon>({
      query: (params) => {
        return {
          url: '/bvcorps/submissions',
          params,
        };
      },
      providesTags: ['LIST'],
    }),
    getDetailLatestActivity: builder.query<
      IResDetailCommon<IResLatestActivity>,
      string | undefined
    >({
      query: (id) => {
        return {
          url: `/bvcorps/submissions/${id}`,
        };
      },
      providesTags: ['DETAIL'],
    }),

    updateSubmissionViewed: builder.mutation({
      query: (id) => {
        return {
          url: `/bvcorps/submissions/${id}/viewed`,
          params: id,
          method: ' PATCH',
        };
      },
    }),

    updateLabels: builder.mutation({
      query: (body) => {
        return {
          url: '/bvcorps/submissions/update-label',
          method: 'PATCH',
          body,
        };
      },
      invalidatesTags: (_, error) => {
        return isEmpty(error) ? ['LIST', 'DETAIL'] : ['TAG_ERROR'];
      },
    }),

    exportLatestActivities: builder.query<string, IParamsCommon>({
      query: (params) => {
        return {
          url: '/bvcorps/submissions/export',
          params,
          responseHandler: (response) => response.blob(),
        };
      },
    }),
  }),
});

export const {
  useGetLatestActivitiesQuery,
  useUpdateLabelsMutation,
  useLazyExportLatestActivitiesQuery,
  useUpdateSubmissionViewedMutation,
  useGetDetailLatestActivityQuery,
} = FormSubmissionAPI;

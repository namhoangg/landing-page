import { createApi } from '@reduxjs/toolkit/query/react';
import { baseQueryWithReAuth } from './baseQuery';
import {
  EStatusPostQuery,
  IEventAdminRes,
  IEventBannerRes,
  IParamsCommon,
  IResCommon,
  IResDetailCommon,
} from '@/types';
import { isEmpty } from 'lodash';

export const EventsAPI = createApi({
  reducerPath: 'EventsAPI',
  tagTypes: ['LIST', 'LIST_FEATUED', 'DETAIL', 'TAG_ERROR', 'LIST_BANNER'],
  baseQuery: baseQueryWithReAuth,
  endpoints: (builder) => ({
    getEvents: builder.query<IResCommon<IEventAdminRes[]>, IParamsCommon>({
      query: (params) => {
        return {
          url: '/bvcorps/events',
          params: {
            state: EStatusPostQuery.POST_STATE_PUBLIC,
            ...params,
          },
        };
      },
      providesTags: ['LIST'],
    }),

    getEventById: builder.query<IResDetailCommon<IEventAdminRes>, IParamsCommon>({
      query: (params) => {
        return {
          url: `/bvcorps/events/detail`,
          params: params,
        };
      },
      providesTags: ['DETAIL'],
    }),
    upsertEvent: builder.mutation({
      query: (body) => {
        return {
          url: '/bvcorps/events',
          method: 'POST',
          body,
        };
      },
      invalidatesTags: (result, error) => {
        return isEmpty(error) ? ['LIST', 'DETAIL'] : ['TAG_ERROR'];
      },
    }),
    updateEventState: builder.mutation({
      query: (body) => {
        return {
          url: '/bvcorps/events/batch-update-state',
          method: 'PUT',
          body,
        };
      },
      invalidatesTags: (result, error) => {
        return isEmpty(error) ? ['LIST', 'DETAIL'] : ['TAG_ERROR'];
      },
    }),

    deleteEvent: builder.mutation({
      query: (body) => {
        return {
          url: `/bvcorps/events`,
          method: 'DELETE',
          body,
        };
      },
      invalidatesTags: (result, error) => {
        return isEmpty(error) ? ['LIST'] : ['TAG_ERROR'];
      },
    }),
    getFeaturedEvents: builder.query<IResCommon<IEventAdminRes[]>, IParamsCommon>({
      query: (params) => {
        return {
          url: '/bvcorps/events/featured',
          params,
        };
      },
      providesTags: ['LIST_FEATUED'],
    }),
    upsertEventBanner: builder.mutation({
      query: (body) => {
        return {
          url: '/bvcorps/events/featured-banner',
          method: 'POST',
          body,
        };
      },
      invalidatesTags: (result, error) => {
        return isEmpty(error) ? ['LIST_BANNER'] : ['TAG_ERROR'];
      },
    }),
    getEventBanner: builder.query<IResDetailCommon<IEventBannerRes>, IParamsCommon>({
      query: () => {
        return {
          url: '/bvcorps/events/featured-banner',
        };
      },
      providesTags: ['LIST_BANNER'],
    }),
  }),
});

export const {
  useGetEventByIdQuery,
  useGetEventsQuery,
  useUpsertEventMutation,
  useUpdateEventStateMutation,
  useDeleteEventMutation,
  useGetFeaturedEventsQuery,
  useUpsertEventBannerMutation,
  useGetEventBannerQuery,
} = EventsAPI;

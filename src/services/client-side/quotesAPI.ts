import { createApi } from '@reduxjs/toolkit/query/react';
import { baseQueryWithReAuth } from './baseQuery';
import {
  Client,
  IResDetailCommon,
  QuoteRequestCreate,
  QuoteRequestLandingPageRequest,
  QuoteRequestResponse,
} from '@/types';

export const QuotesAPI = createApi({
  reducerPath: 'QuotesAPI',
  baseQuery: baseQueryWithReAuth,
  tagTypes: ['QuotesAPI'],
  endpoints: (builder) => ({
    createQuotes: builder.mutation<IResDetailCommon<any>, QuoteRequestLandingPageRequest>({
      query: (body) => ({
        url: '/quote-request/landing-page',
        body,
        method: 'POST'
      }),
      invalidatesTags: ['QuotesAPI']
    }),
    createClient: builder.mutation<Client, Client>({
      query: (body) => ({
        url: '/client/',
        body,
        method: 'POST'
      })
    }),
  })
});

export const {
  useCreateQuotesMutation,
  useCreateClientMutation
} = QuotesAPI;

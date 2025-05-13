import { createApi } from '@reduxjs/toolkit/query/react';
import { baseQuery } from './baseQuery';
import {
  IEvaluateRes,
  IReqLogin,
  IReqPreFlight,
  IResCommon,
  IResLogin,
  IResPreFlight,
} from '@/types';

export const AuthAPI = createApi({
  reducerPath: 'AuthAPI',
  baseQuery,
  endpoints: (builder) => ({
    login: builder.mutation<IResLogin, IReqLogin>({
      query: (body) => ({
        url: '/auth',
        body,
        method: 'POST',
      }),
    }),
    preFlight: builder.mutation<IResPreFlight, IReqPreFlight>({
      query: (body) => ({
        url: '/auth/pre-flight',
        body,
        method: 'POST',
      }),
    }),
    evaluationUser: builder.mutation<IResCommon<IEvaluateRes[]>, any>({
      query: (body) => ({
        url: `/authz/evaluation/user`,
        method: 'POST',
        body,
      }),
    }),
  }),
});

export const { useLoginMutation, usePreFlightMutation, useEvaluationUserMutation } = AuthAPI;

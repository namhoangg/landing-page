import { IParamsCommon, IResCommon } from '@/types';
import { IFeatureNewPressRes } from '@/types';
import { createApi } from '@reduxjs/toolkit/query/react';
import { baseQueryWithReAuth } from './baseQuery';

export const FeatureNewPressAPI = createApi({
  reducerPath: 'FeatureNewPressAPI',
  baseQuery: baseQueryWithReAuth,
  endpoints: (builder) => ({
    getFeatureNewPress: builder.query<IResCommon<IFeatureNewPressRes[]>, IParamsCommon>({
      query: (params) => {
        return {
          url: '/bvcorps/news/featured',
          params,
        };
      },
    }),
  }),
});

export const { useGetFeatureNewPressQuery } = FeatureNewPressAPI;

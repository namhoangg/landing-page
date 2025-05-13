import {
  EStatusPostQuery,
  IParamsCommon,
  IPortfolio,
  IPortfolioCategory,
  IPortfolioDetail,
  IResCommon,
  IResDetailCommon,
  IResMutationCommon,
  IUpdatePortfoliosState,
  IUpsertPortfolioRequest,
} from '@/types';
import { createApi } from '@reduxjs/toolkit/query/react';
import { isEmpty } from 'lodash';
import { baseQueryWithReAuth } from './baseQuery';

export const PortfolioAPI = createApi({
  reducerPath: 'PortfolioAPI',
  tagTypes: [
    'PORTFOLIO',
    'PORTFOLIO_CATEGORY',
    'PORTFOLIO_CATEGORY_DETAILS',
    'TAG_ERROR',
    'DETAIL',
  ],
  baseQuery: baseQueryWithReAuth,
  endpoints: (builder) => ({
    getPortfolioCategories: builder.query<IResCommon<IPortfolioCategory[]>, IParamsCommon>({
      query: (params) => {
        return {
          url: '/bvcorps/portfolio-categories',
          params: {
            state: EStatusPostQuery.POST_STATE_PUBLIC,
            ...params,
          },
        };
      },
      providesTags: ['PORTFOLIO_CATEGORY'],
    }),
    getPortfolios: builder.query<IResCommon<IPortfolio[]>, IParamsCommon>({
      query: (params) => {
        return {
          url: '/bvcorps/portfolios',
          params: {
            state: EStatusPostQuery.POST_STATE_PUBLIC,
            ...params,
          },
        };
      },
      providesTags: ['PORTFOLIO'],
    }),
    getPortfolioCategoriesById: builder.query<
      IResDetailCommon<IPortfolioDetail>,
      string | undefined
    >({
      query: (id) => {
        return {
          url: `/bvcorps/portfolio-categories/${id}`,
        };
      },
      providesTags: ['PORTFOLIO_CATEGORY_DETAILS'],
    }),
    upsertPortfolioCategories: builder.mutation({
      query: (body) => {
        return {
          url: '/bvcorps/portfolio-categories',
          method: 'POST',
          body,
        };
      },
      invalidatesTags: (result, error) => {
        return isEmpty(error)
          ? ['PORTFOLIO_CATEGORY', 'PORTFOLIO_CATEGORY_DETAILS']
          : ['TAG_ERROR'];
      },
    }),
    updateStatePortfolioCategories: builder.mutation({
      query: (body) => {
        return {
          url: '/bvcorps/portfolio-categories/update-status',
          method: 'PUT',
          body,
        };
      },
      invalidatesTags: (result, error) => {
        return isEmpty(error)
          ? ['PORTFOLIO_CATEGORY', 'PORTFOLIO_CATEGORY_DETAILS']
          : ['TAG_ERROR'];
      },
    }),
    deletePortfolioCategories: builder.mutation({
      query: (body) => {
        return {
          url: '/bvcorps/portfolio-categories',
          method: 'DELETE',
          body,
        };
      },
      invalidatesTags: (result, error) => {
        return isEmpty(error) ? ['PORTFOLIO_CATEGORY'] : ['TAG_ERROR'];
      },
    }),
    upsertPortfolio: builder.mutation<IResMutationCommon, IUpsertPortfolioRequest>({
      query: (body) => {
        return {
          url: '/bvcorps/portfolios',
          method: 'POST',
          body,
        };
      },
      invalidatesTags: (result, error) => {
        return isEmpty(error) ? ['PORTFOLIO', 'DETAIL'] : ['TAG_ERROR'];
      },
    }),
    getPortfolioDetail: builder.query<IResDetailCommon<IPortfolio>, IParamsCommon>({
      query: (params) => {
        return {
          url: '/bvcorps/portfolios/detail',
          method: 'GET',
          params,
        };
      },
      providesTags: ['DETAIL'],
    }),
    updatePortfoliosState: builder.mutation<IResMutationCommon, IUpdatePortfoliosState>({
      query: (body) => {
        return {
          url: '/bvcorps/portfolios/state',
          body,
          method: 'PUT',
        };
      },
      invalidatesTags: (result, error) => {
        return isEmpty(error) ? ['PORTFOLIO'] : ['TAG_ERROR'];
      },
    }),
    getPortfoliosFeatured: builder.query<IResCommon<IPortfolio[]>, IParamsCommon>({
      query: (params) => {
        return {
          url: '/bvcorps/portfolios/featured',
          method: 'GET',
          params,
        };
      },
    }),
  }),
});

export const {
  useGetPortfolioCategoriesQuery,
  useGetPortfoliosQuery,
  useLazyGetPortfoliosQuery,
  useUpsertPortfolioCategoriesMutation,
  useGetPortfolioCategoriesByIdQuery,
  useDeletePortfolioCategoriesMutation,
  useUpdateStatePortfolioCategoriesMutation,
  useUpsertPortfolioMutation,
  useGetPortfolioDetailQuery,
  useUpdatePortfoliosStateMutation,
  useGetPortfoliosFeaturedQuery,
} = PortfolioAPI;

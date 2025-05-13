/* eslint-disable @typescript-eslint/no-explicit-any */

import { TFunction } from 'i18next';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { LANGS } from '@/constants';

export const getUpsertAdminCategoryPortfolioSchema = (
  t: TFunction<any, undefined>,
  lang: string,
) => {
  return yupResolver<TUpsertAdminCategoryPortfolio>(
    yup.object().shape({
      nameEn: lang === LANGS.EN ? yup.string().required(t('form.required')) : yup.string(),
      nameVi: lang === LANGS.VI ? yup.string().required(t('form.required')) : yup.string(),
      type: yup.number().required(t('form.required')),
      shortDescriptionEn: yup.string(),
      shortDescriptionVi: yup.string(),
      slugEn: yup.string(),
      slugVi: yup.string(),
    }),
  );
};

export type TUpsertAdminCategoryPortfolio = {
  nameEn?: string;
  nameVi?: string;
  shortDescriptionEn?: string;
  shortDescriptionVi?: string;
  slugEn?: string;
  slugVi?: string;
  type?: number;
};

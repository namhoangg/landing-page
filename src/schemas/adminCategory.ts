/* eslint-disable @typescript-eslint/no-explicit-any */

import { TFunction } from 'i18next';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { LANGS } from '@/constants';

export const getUpsertAdminCategorySchema = (t: TFunction<any, undefined>, lang: string) => {
  return yupResolver(
    yup.object().shape({
      nameEn: lang === LANGS.EN ? yup.string().required(t('form.required')) : yup.string(),
      nameVi: lang === LANGS.VI ? yup.string().required(t('form.required')) : yup.string(),
      shortDescriptionEn: yup.string(),
      shortDescriptionVi: yup.string(),
      slugEn: yup.string(),
      slugVi: yup.string(),
      parentId: yup.string(),
      location: yup.string().required(t('form.required')),
      thumbnail: yup.array().min(1, t('form.required')),
    }),
  );
};

export type TUpsertAdminCategory = {
  nameEn?: string;
  nameVi?: string;
  shortDescriptionEn?: string;
  shortDescriptionVi?: string;
  slugEn?: string;
  slugVi?: string;
  parentId?: string;
  location: string;
  thumbnail?: string[];
};

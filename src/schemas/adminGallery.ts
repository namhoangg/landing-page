/* eslint-disable @typescript-eslint/no-explicit-any */

import { TFunction } from 'i18next';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { LANGS } from '@/constants';
import { Dayjs } from 'dayjs';

export const getUpsertAdminGallerySchema = (t: TFunction<any, undefined>, lang: string) => {
  return yupResolver(
    yup.object().shape({
      coverImage: yup.array().min(1, t('form.required')).required(t('form.required')).nullable(),
      images: yup.array().min(1, t('form.required')).required(t('form.required')).nullable(),
      nameEn: lang === LANGS.EN ? yup.string().required(t('form.required')) : yup.string(),
      nameVi: lang !== LANGS.EN ? yup.string().required(t('form.required')) : yup.string(),
      organizedBy: yup.number(),
      slug: yup.string(),
    }),
  );
};

export type TUpsertAdminGallery = {
  coverImage?: string[] | null;
  images?: string[] | null;
  nameEn: string;
  nameVi: string;
  organizedBy: number;
  slug: string;
  created: Dayjs;
  lastUpdated: Dayjs;
  author: string;
  modifiedBy: string;
};

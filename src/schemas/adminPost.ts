import { TFunction } from 'i18next';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
/* eslint-disable @typescript-eslint/no-explicit-any */
import { LANGS } from '@/constants';
import { dataAdminPost } from '@/data';

const forbiddenChars = /[-/:*?<>|.]/;

export const getUpsertAdminPostSchema = (t: TFunction<any, undefined>, lang: string) => {
  return yupResolver<TUpsertPost>(
    yup.object().shape({
      titleEn:
        lang === LANGS.EN
          ? yup
              .string()
              .trim()
              .required(dataAdminPost.en.required)
              .max(255, dataAdminPost.en.validate.errLength255)
          : yup.string(),
      titleVi:
        lang === LANGS.VI
          ? yup
              .string()
              .trim()
              .required(dataAdminPost.vi.required)
              .max(255, dataAdminPost.en.validate.errLength255)
          : yup.string(),
      category: yup
        .string()
        .required(lang === LANGS.EN ? dataAdminPost.en.required : dataAdminPost.vi.required),
      thumbnailEn:
        lang === LANGS.EN
          ? yup.array().min(1, dataAdminPost.en.required).required(dataAdminPost.en.required)
          : yup.array(),
      thumbnailVi:
        lang === LANGS.VI
          ? yup.array().min(1, dataAdminPost.vi.required).required(dataAdminPost.vi.required)
          : yup.array(),
      shortDescriptionEn:
        lang === LANGS.EN ? yup.string().trim().required(dataAdminPost.en.required) : yup.string(),
      shortDescriptionVi:
        lang === LANGS.VI ? yup.string().trim().required(dataAdminPost.vi.required) : yup.string(),
      articleTextEn:
        lang === LANGS.EN ? yup.string().trim().required(dataAdminPost.en.required) : yup.string(),
      articleTextVi:
        lang === LANGS.VI ? yup.string().trim().required(dataAdminPost.vi.required) : yup.string(),
      slugEn: yup.string().max(255, dataAdminPost.en.validate.errLength255),
      slugVi: yup.string().max(255, dataAdminPost.vi.validate.errLength255),
      tags: yup
        .array()
        .test('validate-tags-en', 'The name cannot contain invalid characters', (tags) => {
          if (!tags) return true;
          return tags.every((tag) => !forbiddenChars.test(tag));
        }),
      statusPost: yup
        .number()
        .required(lang === LANGS.EN ? dataAdminPost.en.required : dataAdminPost.vi.required),
      location: yup
        .number()
        .required(lang === LANGS.EN ? dataAdminPost.en.required : dataAdminPost.vi.required),
    }),
  );
};

export type TUpsertPost = {
  titleEn?: string;
  titleVi?: string;
  category?: string;
  thumbnailEn?: string[];
  thumbnailVi?: string[];
  shortDescriptionEn?: string;
  shortDescriptionVi?: string;
  articleTextEn?: string;
  articleTextVi?: string;
  slugEn?: string;
  slugVi?: string;
  tags?: string[];
  statusPost?: number;
  location?: number;
};

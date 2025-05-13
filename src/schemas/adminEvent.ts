/* eslint-disable @typescript-eslint/no-explicit-any */

import { TFunction } from 'i18next';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { LANGS } from '@/constants';
import { dataAdminEvent } from '@/data';
import dayjs from 'dayjs';

const forbiddenChars = /[-/:*?<>|.]/;

export const getUpsertAdminEventSchema = (t: TFunction<any, undefined>, lang: string) => {
  return yupResolver<TUpsertEvent>(
    yup.object().shape({
      titleEn:
        lang === LANGS.EN
          ? yup
              .string()
              .required(dataAdminEvent.en.required)
              .max(255, dataAdminEvent.en.validate.errLength255)
          : yup.string(),
      titleVi:
        lang === LANGS.VI
          ? yup
              .string()
              .required(dataAdminEvent.vi.required)
              .max(255, dataAdminEvent.en.validate.errLength255)
          : yup.string(),
      thumbnailEn:
        lang === LANGS.EN
          ? yup.array().min(1, dataAdminEvent.en.required).required(dataAdminEvent.en.required)
          : yup.array(),
      thumbnailVi:
        lang === LANGS.VI
          ? yup.array().min(1, dataAdminEvent.vi.required).required(dataAdminEvent.vi.required)
          : yup.array(),
      shortDescriptionEn:
        lang === LANGS.EN ? yup.string().required(dataAdminEvent.en.required) : yup.string(),
      shortDescriptionVi:
        lang === LANGS.VI ? yup.string().required(dataAdminEvent.vi.required) : yup.string(),
      articleTextEn:
        lang === LANGS.EN ? yup.string().required(dataAdminEvent.en.required) : yup.string(),
      articleTextVi:
        lang === LANGS.VI ? yup.string().required(dataAdminEvent.vi.required) : yup.string(),
      slugEn: yup.string().max(255, dataAdminEvent.en.validate.errLength255),
      slugVi: yup.string().max(255, dataAdminEvent.en.validate.errLength255),
      endTime: yup.date(),
      startTime: yup.date(),
      location:
        lang === LANGS.EN ? yup.string().required(dataAdminEvent.en.required) : yup.string(),
      startDate: yup
        .string()
        .required(lang === LANGS.EN ? dataAdminEvent.en.required : dataAdminEvent.vi.required),
      endDate: yup
        .string()
        .required(lang === LANGS.EN ? dataAdminEvent.en.required : dataAdminEvent.vi.required)
        .test('', t('form.errorTimeEndGreaterTimeStart'), (value: any, context: any) => {
          const startDate = +dayjs(+context.parent.startDate).format('YYYYMMDD');
          const endDate = +dayjs(+value).format('YYYYMMDD');
          return context.parent.startDate && startDate >= endDate ? false : true;
        }),
      tags: yup
        .array()
        .test('validate-tags-en', 'The name cannot contain invalid characters', (tags) => {
          if (!tags) return true;
          return tags.every((tag) => !forbiddenChars.test(tag));
        }),
      statusEvent: yup
        .number()
        .required(lang === LANGS.EN ? dataAdminEvent.en.required : dataAdminEvent.vi.required),
    }),
  );
};

export type TUpsertEvent = {
  titleEn?: string;
  titleVi?: string;
  thumbnailEn?: string[];
  thumbnailVi?: string[];
  shortDescriptionEn?: string;
  shortDescriptionVi?: string;
  articleTextEn?: string;
  articleTextVi?: string;
  slugEn?: string;
  slugVi?: string;
  tags?: string[];
  statusEvent?: number;
  startDate?: string;
  endDate?: string;
  startTime?: any;
  endTime?: any;
  location?: string;
};

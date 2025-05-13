/* eslint-disable @typescript-eslint/no-explicit-any */

import { TFunction } from 'i18next';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

export const getUpsertAdminTagSchema = (t: TFunction<any, undefined>) => {
  return yupResolver(
    yup.object().shape({
      name: yup.string().required(t('form.required')),
      shortDescription: yup.string(),
      slug: yup.string(),
    }),
  );
};

export type TUpsertAdminTag = {
  name: string;
  shortDescription?: string;
  slug?: string;
};

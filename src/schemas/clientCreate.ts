import { TFunction } from 'i18next';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

export const createClientSchema = (t: TFunction<any, undefined>) => {
  return yupResolver(
    yup.object({
      name: yup.string().required(t('form.required')),
      email: yup.string().email().required(t('form.required')),
      companyInfo: yup.object().shape({
        name: yup.string().required(t('form.required')),
        address: yup.string().required(t('form.required'))
      }),
      contactPersonInfo: yup.object().shape({
        firstName: yup.string().required(t('form.required')),
        lastName: yup.string().required(t('form.required'))
      })
    }),
  );
};
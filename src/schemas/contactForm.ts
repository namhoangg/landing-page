import { TFunction } from 'i18next';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

export const getContactFormSchema = (t: TFunction<any, undefined>) => {
  return yupResolver(
    yup.object({
      title: yup.number().required(t('form.required')),
      name: yup.string().required(t('form.required')),
      email: yup.string().email(t('form.errorInvalidEmail')).required(t('form.required')),
      phone: yup
        .string()
        .required(t('form.required'))
        .matches(/^(\+)?[0-9]+$/, 'Phone numbers must contain only numbers'),
    }),
  );
};

export type TContactForm = {
  title: number;
  name: string;
  email: string;
  phone: string;
  message?: string;
};

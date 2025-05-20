import { TFunction } from 'i18next';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

export const createQuoteRequestFormSchema = (t: TFunction<any, undefined>, isFCL: boolean) => {
  console.log(isFCL);
  return yupResolver(
    yup.object({
      originId: yup.number().required(t('form.required')).positive(t('form.mustBePositive')),
      destinationId: yup.number().required(t('form.required')).positive(t('form.mustBePositive')),
      note: yup.string().nullable(),
      etd: yup.date().required(t('form.required')).nullable(),
      eta: yup.date().required(t('form.required')).nullable(),
      containerTypeIds: yup.array().of(yup.number()).required(t('form.required')).nullable(),
      goodKindId: yup.number().required(t('form.required')).positive(t('form.mustBePositive')),
    }),
  );
};

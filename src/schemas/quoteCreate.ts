import { TFunction } from 'i18next';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

export const createQuoteRequestFormSchema = (t: TFunction<any, undefined>, isFCL: boolean) => {
  console.log(isFCL);
  return yupResolver(
    yup.object({
      transportType: yup.string().required(t('form.required')),
      shipmentMode: yup.string().required(t('form.required')),
      shipmentType: yup.string().required(t('form.required')),
      originId: yup
        .number()
        .required(t('form.required'))
        .positive(t('form.mustBePositive')),
      destinationId: yup
        .number()
        .required(t('form.required'))
        .positive(t('form.mustBePositive')),
      incoterm: yup.string().required(t('form.required')),
      note: yup.string(),

      cargoVolume: yup.object({
        isFCL: yup.boolean(),

        // FCL container validation
        totalCont20dc: yup.number().default(0),
        totalCont40dc: yup.number().default(0),
        totalCont20rf: yup.number().default(0),
        totalCont40rf: yup.number().default(0),
        totalCont20hc: yup.number().default(0),
        totalCont40hc: yup.number().default(0),
        totalCont45hc: yup.number().default(0),

        // LCL validation
        totalVolume: yup.number().when('isFCL', {
          is: false,
          then: (schema) =>
            schema.positive(t('form.mustBePositive')).required(t('form.required')),
          otherwise: (schema) => schema.optional()
        }),
        totalWeight: yup.number().when('isFCL', {
          is: false,
          then: (schema) =>
            schema.positive(t('form.mustBePositive')).required(t('form.required')),
          otherwise: (schema) => schema.optional()
        })
    }).test('fcl-container-validation', t('form.atLeastOneContainer'), function (values) {
      // Check if at least one container is input when isFCL is true and transport type is FCL
        if (values && isFCL) {
          const containerSum =
            (values.totalCont20dc || 0) +
            (values.totalCont40dc || 0) +
            (values.totalCont20rf || 0) +
            (values.totalCont40rf || 0) +
            (values.totalCont20hc || 0) +
            (values.totalCont40hc || 0) +
            (values.totalCont45hc || 0);
          if (containerSum <= 0) {
            return this.createError({
              path: 'containers',
              message: t('form.atLeastOneContainer')
            });
          }
        }
        return true;
    })}
  ));
};
import { LANGS } from '@/constants';
import { generateSlug } from '@/utils/stringUtils';
import { ChangeEvent } from 'react';
import { UseFormReturn } from 'react-hook-form';

export const handleAutoFillSlug = (
  language: string,
  form: UseFormReturn<any>,
  event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  slug: {
    nameEn: string;
    nameVi: string;
  },
  name: {
    nameEn: string;
    nameVi: string;
  },
) => {
  const value = event?.target?.value;
  const isEnLanguage = language === LANGS.EN;

  if (!value) {
    const formattedValue: string = generateSlug(
      form.getValues(isEnLanguage ? name?.nameEn : name?.nameVi) ?? '',
    );
    form.setValue(isEnLanguage ? slug?.nameEn : slug?.nameVi, formattedValue);
  } else {
    form.setValue(isEnLanguage ? slug?.nameEn : slug?.nameVi, value);
  }
};

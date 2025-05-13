'use client';

import { useEffect, useState } from 'react';
import { RootState, useAppSelector } from '@/redux';

const formatEnDefault = 'MM/DD/YYYY';
const formatVnDefault = 'DD/MM/YYYY';

const useFormat = (formatEn?: string, formatVn?: string): string => {
  const { lang } = useAppSelector((state: RootState) => state.langReducer);
  const [formatDate, setFormatDate] = useState(
    lang === 'en' ? (formatEn ? formatEn : formatEnDefault) : formatVn ? formatVn : formatVnDefault,
  );

  useEffect(() => {
    lang === 'en'
      ? setFormatDate(formatEn ? formatEn : formatEnDefault)
      : setFormatDate(formatVn ? formatVn : formatVnDefault);
  }, [lang, formatEn, formatVn]);

  return formatDate;
};

export default useFormat;

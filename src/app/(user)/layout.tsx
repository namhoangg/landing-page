'use client';

import { DefaultLayout } from '@/layouts';
import { RootState, useCommonSelector } from '@/redux';
import { ReactNode, useEffect } from 'react';
import i18next from '@/i18n';

export default function RootLayout({ children }: { children: ReactNode }) {
  const { lang } = useCommonSelector((state: RootState) => state.langReducer);

  useEffect(() => {
    void i18next.changeLanguage(lang);
  }, [lang]);

  return <DefaultLayout>{children}</DefaultLayout>;
}

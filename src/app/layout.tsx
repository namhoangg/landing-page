'use client';

import { Inter } from 'next/font/google';
import { I18nextProvider } from 'react-i18next';
import i18next from '@/i18n';
import { ThemeProvider } from 'styled-components';
import { antdTheme, theme } from '@/styles';
import './globals.scss';
import { StyledRegistry } from '@/lib';
import { ConfigProvider } from 'antd';
import { Provider } from 'react-redux';
import { store } from '../redux';
import { ReactNode, useEffect } from 'react';
import { getSiteTitleByPath } from '@/constants';
import { usePathname } from 'next/navigation';

const inter = Inter({ subsets: ['vietnamese'], variable: '--inter-default' });

export default function RootLayout({ children }: { children: ReactNode }) {
  const pathname = usePathname();

  useEffect(() => {
    const title = getSiteTitleByPath(pathname);

    document.title = `Freight Flex${title ? ` | ${title}` : ''}`;
  }, [pathname]);

  return (
    <html lang='en'>
      <body
        className={inter.className}
        suppressHydrationWarning={true}
      >
        <Provider store={store}>
          <I18nextProvider i18n={i18next}>
            <ConfigProvider theme={antdTheme}>
              <ThemeProvider theme={theme}>
                <StyledRegistry>{children}</StyledRegistry>
              </ThemeProvider>
            </ConfigProvider>
          </I18nextProvider>
        </Provider>
      </body>
    </html>
  );
}

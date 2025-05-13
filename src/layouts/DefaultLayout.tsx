'use client';

import { StyledDefaultLayout } from './styles';
import { Body, Footer, Header } from '@/components';
import { ReactNode, useEffect } from 'react';
import { usePathname } from 'next/navigation';

interface IProps {
  children: ReactNode;
}

const DefaultLayout = ({ children }: IProps) => {
  const pathName = usePathname();

  useEffect(() => {
    const preventContextMenu = (event: MouseEvent) => {
      event.preventDefault();
    };

    return () => document.removeEventListener('contextmenu', preventContextMenu);
  }, []);

  return (
    <StyledDefaultLayout>
      <Header />
      <Body>{children}</Body>
      <Footer />
    </StyledDefaultLayout>
  );
};

export default DefaultLayout;

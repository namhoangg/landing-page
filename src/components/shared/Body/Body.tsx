'use client';

import { StyledBody } from './styles';
import { ReactNode } from 'react';

const Body = ({ children }: { children: ReactNode }) => {
  return <StyledBody id='body'>{children}</StyledBody>;
};

export default Body;

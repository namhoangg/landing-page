'use client';

import React from 'react';
import { StyledDot, StyledLoading } from '@/app/_styles';

// caling this component before init page.tsx
const Loading = () => {
  return (
    <StyledLoading>
      <div className='dots-loading'>
        <StyledDot $delay='1s' />
        <StyledDot $delay='2s' />
        <StyledDot $delay='3s' />
        <StyledDot $delay='4s' />
      </div>
      <span className='loading__title'>Loading ...</span>
    </StyledLoading>
  );
};

export default Loading;

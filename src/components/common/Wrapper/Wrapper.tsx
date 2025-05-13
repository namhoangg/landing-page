'use client';

import { StyledWrapper } from './styles';
import { HTMLAttributes, ReactNode } from 'react';

export interface WrapperProps extends HTMLAttributes<HTMLDivElement> {
  className?: string;
  $maxWidth?: number;
  $padding?: number;
  $paddingSM?: number;
  $paddingMD?: number;
  $paddingLG?: number;
  children: ReactNode;
}

const Wrapper = ({
  className,
  $maxWidth,
  $padding,
  $paddingSM,
  $paddingMD,
  $paddingLG,
  children,
}: WrapperProps) => {
  return (
    <StyledWrapper
      className={className}
      $maxWidth={$maxWidth}
      $padding={$padding}
      $paddingSM={$paddingSM}
      $paddingMD={$paddingMD}
      $paddingLG={$paddingLG}
    >
      {children}
    </StyledWrapper>
  );
};

export default Wrapper;

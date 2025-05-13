import React from 'react';
import StyledComponentsRegistry from './StyledComponentRegistry';
import AntdRegistry from './AntdRegistry';

interface IProps {
  children: React.ReactNode;
}
const Registry = ({ children }: IProps) => {
  return (
    <StyledComponentsRegistry>
      <AntdRegistry>{children}</AntdRegistry>
    </StyledComponentsRegistry>
  );
};

export default Registry;

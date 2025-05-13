import { ButtonProps as AntButtonProps } from 'antd';
import { BtnFunction, StyledButton } from './styles';
import React from 'react';
import { DesignTokenProviderProps } from 'antd/lib/theme/context';

export interface ButtonProps extends AntButtonProps {
  type?: 'default' | 'dashed' | 'link' | 'text' | 'primary';
  height?: number;
  $colorBtn?: string;
  $bgBtn?: string;
  $colorBtnHover?: string;
  $bgBtnHover?: string;
  $styleToken?: DesignTokenProviderProps;
  isAction?: boolean;
}

const Button: React.FC<ButtonProps> = ({ type = 'default', isAction, ...props }) => {
  return isAction ? (
    <BtnFunction {...props}>{props.children}</BtnFunction>
  ) : (
    <StyledButton
      type={type}
      {...props}
    >
      {props.children}
    </StyledButton>
  );
};

export default Button;

import { Checkbox, CheckboxProps } from 'antd';
import { ReactNode } from 'react';
import { StyledCheckbox } from './styles';

interface CustomCheckboxProps extends CheckboxProps {
  children?: ReactNode;
}

const CustomCheckbox = ({ children, ...props }: CustomCheckboxProps) => {
  return (
    <StyledCheckbox>
      <Checkbox {...props}>{children ?? ''}</Checkbox>
    </StyledCheckbox>
  );
};

export default CustomCheckbox;

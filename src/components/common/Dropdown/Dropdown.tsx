import { StyledDropdown } from './styles';
import { Dropdown, DropdownProps } from 'antd';
import { ReactNode } from 'react';
import './styles.scss';

interface CustomDropdownProps extends DropdownProps {
  className?: string;
  children: ReactNode;
}

const CustomDropdown = ({ className, children, ...props }: CustomDropdownProps) => {
  return (
    <StyledDropdown>
      <Dropdown
        overlayClassName={`${className}-dropdown`}
        trigger={['click']}
        placement='bottom'
        {...props}
      >
        {children}
      </Dropdown>
    </StyledDropdown>
  );
};

export default CustomDropdown;

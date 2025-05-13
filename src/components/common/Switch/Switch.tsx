'use client';
import { Spin, SwitchProps } from 'antd';
import { FC, useEffect, useState } from 'react';
import { CheckedMessage, Container, ContainerSwitch, Label, StyledSwitch } from './styles';

interface ISwitch extends SwitchProps {
  label?: string;
  checkedLabel?: string;
  unCheckedLabel?: string;
  required?: boolean;
}

const Switch: FC<ISwitch> = ({
  label,
  required,
  checkedLabel,
  unCheckedLabel,
  loading,
  ...props
}) => {
  const [isChecked, setIsChecked] = useState(false);

  useEffect(() => {
    setIsChecked(!!props.checked);
  }, [props.checked]);

  return (
    <Spin spinning={loading}>
      <Container>
        {label && (
          <Label>
            {label}
            {required && <span className='required-mark'>*</span>}
          </Label>
        )}
        <ContainerSwitch className={props.className}>
          <StyledSwitch
            onChange={(checked: boolean) => {
              setIsChecked(checked);
              props.onChange;
            }}
            onClick={(checked: boolean) => {
              setIsChecked(checked);
              props.onClick;
            }}
            {...props}
          />
          <CheckedMessage>{isChecked ? checkedLabel : unCheckedLabel}</CheckedMessage>
        </ContainerSwitch>
      </Container>
    </Spin>
  );
};

export default Switch;

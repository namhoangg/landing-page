import { color, fontSize, fontWeight } from '@/styles';
import { Switch } from 'antd';
import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
`;
export const ContainerSwitch = styled.span`
  display: flex;
`;

export const Label = styled.label`
  font-size: ${fontSize.XS};
  font-weight: ${fontWeight.SEMI_BOLD};
  margin-bottom: 0.25em;
  text-align: left;
  display: flex;

  .required-mark {
    color: red;
  }
`;

export const StyledSwitch = styled(Switch)`
  box-shadow: inset;
  opacity: 0.9;

  &.ant-switch-checked {
    background: ${color.GREEN};
  }

  &:focus {
    box-shadow: unset;
  }

  &:hover {
    opacity: 1;
  }

  &.ant-switch-disabled {
    opacity: 1;
  }
`;

export const CheckedMessage = styled.span`
  font-size: ${fontSize.XS};
  font-weight: ${fontWeight.MEDIUM};
  padding-left: 0.35em;
`;

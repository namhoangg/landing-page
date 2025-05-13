import styled from 'styled-components';
import { Button, CustomizeImage, Input } from '..';
import { ButtonProps } from '@/components';

export const StyleSearch = styled.div`
  align-items: center;
  position: relative;
`;
export const StyleImg = styled(CustomizeImage)`
  width: 1em !important;
  display: inline-block !important;
`;
export const StyleButtonSearch = styled(Button)<ButtonProps>`
  &.ant-btn {
    width: 1em;
    position: absolute;
    z-index: 1;
    left: 1em;
    padding: 0;
    display: inline-block;
  }
`;

export const StyleInput = styled(Input)`
  .ant-input {
    text-indent: 1.5em;
  }
`;

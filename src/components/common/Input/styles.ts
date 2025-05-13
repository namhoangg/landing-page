import { fontSize, fontWeight, color } from '@/styles';
import { Input } from 'antd';
import { ReactNode } from 'react';
import styled, { css, ExecutionContext } from 'styled-components';

interface InputStyledProps extends ExecutionContext {
  type?: string;
  icon?: ReactNode;
  placementIcon?: string;
  height?: string;
  hassublabel?: string;
  error?: string;
  check?: boolean;
  $fontSizeCustom?: string;
}

const inputDefault = css`
  padding-left: ${(props: InputStyledProps) =>
    props?.placementIcon !== 'right' && props.icon ? '3em' : '1em'} !important;
  padding-right: ${(props: InputStyledProps) =>
    props?.placementIcon === 'right' || props.type === 'password' ? '3em' : '2em'};
  padding-top: ${(props: InputStyledProps) =>
    props.hassublabel === 'true' ? '1.25rem' : '0.25em'};
  height: ${(props: InputStyledProps) => (props.height ? props.height : '3.143em')};
  border-radius: 10px;
  /* outline: 1px solid ${color.GRAY_LIGHT}; */
  background: ${color.WHITE};
  font-size: ${(props: InputStyledProps) =>
    props?.$fontSizeCustom ? props.$fontSizeCustom : fontSize.XS} !important;

  .ant-input-placeholder {
    font-size: ${fontSize.XS} !important;
  }

  ${(props: InputStyledProps) =>
    props.hassublabel &&
    css`
      &:focus {
        &::placeholder {
          font-size: inherit;
        }
      }
    `}
  transition: all 0.3s ease-in-out;

  .ant-input-suffix {
    position: absolute;
    top: 50%;
    right: ${(props: InputStyledProps) => (props?.placementIcon === 'right' ? '48px' : '16px')};
    transform: translateY(-50%);
  }

  ${(props: InputStyledProps) =>
    props.error &&
    css`
      border-color: ${color.PRIMARY_RED} !important;
    `}
`;

export const StyledInputWrapper = styled.div``;

export const StyledInputLabel = styled.label`
  display: flex;
  margin-bottom: 0.25rem;
  text-align: left;
  font-size: ${fontSize.XS};
  font-weight: ${fontWeight.SEMI_BOLD};
  color: ${color.BLACK};

  .required-mark {
    margin-left: 0.125rem;
    color: red;
  }
`;

export const StyledInputContainer = styled.div`
  position: relative;
`;

export const StyledInputTextarea = styled(Input.TextArea)<InputStyledProps>`
  ${inputDefault};
  padding-top: 16px;
  padding-bottom: 16px;
`;

export const StyledInputMessageError = styled.span`
  display: inline-block;
  margin-top: 4px;
  width: 100% !important;
  color: ${color.PRIMARY_RED};
  text-align: left;
  font-size: ${fontSize.XSS};
  line-height: 20px;
`;

export const StyledInputDefault = styled(Input)<InputStyledProps>`
  ${inputDefault}
  .ant-input-suffix {
    button {
      width: 16px;
      height: 16px;
      padding: 0;
    }
  }
`;

export const StyledInputPassword = styled(Input.Password)<InputStyledProps>`
  ${inputDefault}
  .ant-input-suffix {
    button {
      width: 16px;
      height: 16px;
      padding: 0;
    }
  }
`;

export const StyledInputSubLabel = styled.label<{
  isfocusinput?: string;
  icon?: ReactNode;
  placementIcon?: string;
}>`
  position: absolute;
  display: flex;
  top: ${(props) => (props.isfocusinput === 'true' ? '30%' : '50%')};
  left: ${(props) => (props.placementIcon !== 'right' && props.icon ? '3em' : '1em')};
  margin-bottom: 0.25em;
  color: ${color.INPUT_COLOR};
  text-align: left;
  font-size: ${(props) => (props.isfocusinput === 'true' ? fontSize.XS : fontSize.S)};
  transform: translateY(-50%);
  transition: all 0.3s;
  pointer-events: none;
  z-index: 1;
`;

export const StyledInputDefaultIcon = styled.span<InputStyledProps>`
  cursor: pointer;
  position: absolute;
  ${(props) => (props?.placementIcon === 'right' ? 'right: 1em;' : 'left: 1em;')}
  top: 50%;
  height: 1.25em;
  width: 1.5em;
  font-size: ${fontSize.S};
  transform: translateY(-50%);
  transition: all 0.3s ease-in-out;
  z-index: 2;

  svg {
    width: 24px;
    height: 24px;
  }
`;

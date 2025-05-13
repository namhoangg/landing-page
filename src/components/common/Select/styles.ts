/* eslint-disable @typescript-eslint/no-explicit-any */
import { Select } from 'antd';
import styled, { css, IStyledComponent } from 'styled-components';
import { color, flex, fontSize, fontWeight } from '@/styles';

export const StyledSelectWrapper = styled.div``;

export const StyledSelectLabel = styled.label`
  display: flex;
  margin-bottom: 0.25rem;
  text-align: left;
  font-size: ${fontSize.XS};
  font-weight: ${fontWeight.SEMI_BOLD};

  .required-mark {
    margin-left: 0.125rem;
    color: red;
  }
`;

export const StyledSelectContainer = styled.div`
  position: relative;

  .ant-select-status-error {
    .ant-select-selector {
      border-color: ${color.PRIMARY_RED} !important;
    }
  }

  .select__dropdown {
    .ant-select-item {
      display: flex;
      align-items: center;
      min-height: 2.5rem;
      text-align: left;
      /* margin: 0.1em 0; */
    }

    .ant-select-item-empty {
      p {
        padding-top: 10px;
        text-align: left;
        font-weight: ${fontWeight.SEMI_BOLD};
        margin-bottom: 0.8em !important;
      }

      .loading__spin {
        display: flex;
        justify-content: center;
        margin: 0 auto;
      }
    }

    .ant-select-item-option-selected {
      background: ${color.YELLOW} !important;
    }
  }

  .ant-select-selection-search > input.ant-select-selection-search-input {
    margin-left: 0 !important;
  }
`;

export const StyledSelectSubLabel = styled.label<{
  isfocusselect?: string;
}>`
  z-index: 2;
  position: absolute;
  left: 0;
  padding-left: 18px;
  text-align: left !important;
  transition: all 0.3s;
  pointer-events: none;
  ${(props) => {
    return props.isfocusselect === 'false'
      ? css`
          transform: translateY(10px);
          font-size: 15px !important;
        `
      : css`
          transform: translateY(2px);
          font-size: 13px !important;
        `;
  }};
`;

export const StyledSelect: IStyledComponent<any, any> = styled(Select)<{
  item?: string;
  mode?: string;
  error: boolean;
  isfocusselect?: string;
}>`
  z-index: 1;
  width: 100%;
  overflow: visible;
  height: 100% !important;
  /* ${flex('center', 'center')}; */

  .ant-select-selector,
  input {
    border-radius: 12px !important;

    &.ant-select-selection-search-input {
      border: none !important;
    }
  }

  .ant-select-selector {
    min-height: 44px;
    padding-top: 5px;
    padding-bottom: 5px;

    .ant-select-selection-search {
      ${(props) =>
        !props.mode &&
        css`
          display: flex;
          align-items: center;
        `}
    }

    ::after {
      content: '';
      margin: 0;
    }
  }

  span {
    text-align: left;
  }

  .ant-select-selector {
    /* &:hover {
      border-color: ${color.YELLOW_LIGHT} !important;
    } */

    &:focus,
    &:focus-within {
      border: 1px solid ${(props) => (props.error ? `${color.PRIMARY_RED}` : `${color.YELLOW}`)} !important;
      box-shadow: none !important;
    }

    .dnone {
      display: none !important;
    }
  }

  .ant-select:not(.ant-select-customize-input) .ant-select-selector {
    transition: none;
  }

  .ant-select-focused:not(.ant-select-disabled).ant-select:not(.ant-select-customize-input)
    .ant-select-selector {
    border: none;
    outline: 1px solid #000;
    box-shadow: none !important;
  }

  .ant-select-arrow {
    font-size: 18px;
    cursor: pointer;

    &:hover {
      border: 1px solid ${color.YELLOW} !important;
    }
  }

  .ant-select-clear {
    background-color: transparent;
    margin-top: -8px !important;
    font-size: 13px;
    margin-left: 24px;
    right: 26px !important;

    svg {
      margin-left: 16px;
    }
  }

  .ant-select-selector:focus-within ~ .ant-select-arrow {
    transition: transform 400ms ease !important;
    transform: rotate(-180deg) !important;
  }

  .anticon-close-circle {
    transform: translateX(-30px);
  }

  .ant-select-selection-item {
    padding-left: 6px !important;
    margin-top: 0;
    margin-left: ${(props) => props.mode && '8px !important'};

    p {
      margin-top: ${(props) => !props.mode && '14px !important'};
    }

    ${(props) =>
      !props.mode &&
      css`
        display: flex;
        align-items: center;
      `};
  }

  .ant-select-selection-placeholder {
    padding-left: 6px !important;
    margin-top: ${(props) => (!props.mode ? '22px' : '0')};
    margin-top: ${(props) => props.item === 'true' && '0 !important'};
    font-size: 16px !important;
    ${(props) =>
      props.item === 'true' &&
      !props.mode &&
      css`
        display: flex;
        justify-content: start;
        align-items: center;
      `}
  }

  .ant-select-selection-search > .ant-select-selection-search-input {
    margin-left: 6px !important;
    margin-top: ${(props) => props.item === 'true' && props.mode && '-4px !important'};
    height: 100% !important;
    padding-left: 4px;
    border-radius: unset !important;

    ::placeholder {
      font-size: 14px;
      color: #bfbfbf;
      font-weight: ${fontWeight.MEDIUM};
      font-variant: tabular-nums;
      line-height: 1.5715;
      list-style: none;
      font-feature-settings: 'tnum';
    }
  }
`;

export const InputMessageStyle = styled.span<{
  error: boolean | undefined;
}>`
  text-align: left;
  font-size: 13px;
  color: ${color.PRIMARY_RED};
  display: ${(props) => (props.error ? 'inline-block' : 'none')};
  margin-top: 5px;
  width: 100% !important;
  padding: 0 !important;
`;

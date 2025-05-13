import { Button } from 'antd';
import styled, { css } from 'styled-components';
import { ButtonProps } from '@/components';
import { color, flex, fontSize, fontWeight } from '@/styles';

export const StyledButton = styled(Button)<ButtonProps>`
  &.ant-btn {
    ${flex('center', 'center')};
    box-shadow: none;
    outline: none;
    text-align: center;
    box-sizing: border-box;
    font-size: ${fontSize.S};
    font-weight: ${fontWeight.SEMI_BOLD};
    padding: 0.6875em 1.5em;
    height: ${(props) => (props.height ? `${props.height}em` : '2.75em')};

    ${(props) => {
      switch (props.type) {
        case 'primary':
          return css`
            color: ${color.WHITE};
            background-color: ${color.YELLOW};

            &:hover {
              color: ${color.BLACK} !important;
              background-color: ${color.YELLOW_DARK};
            }
          `;
        case 'link':
          return css`
            color: ${color.BLACK};
            background-color: transparent;

            svg {
              position: relative;
              transform: translateY(-1px);
            }

            &:hover,
            &:active {
              color: ${color.YELLOW} !important;

              svg path {
                stroke: ${color.YELLOW};
              }
            }
          `;

        // type default
        default:
          return css`
            color: ${color.BLACK};
            border: 1px solid ${color.GRAY_DARK};

            &:hover {
              color: ${color.YELLOW};
              border: 1px solid ${color.YELLOW};
            }
          `;
      }
    }}

    ${({ shape }) =>
      shape === 'circle' &&
      css`
        --width: 2.5em;

        padding: 0;
        width: var(--width);
        height: var(--width);
        min-width: unset !important;
        color: ${color.BLACK};
        border: none;
        background-color: ${color.GRAY_LIGHT};

        &:hover {
          color: ${color.BLACK} !important;
          background-color: ${color.YELLOW_DARK};
        }
      `}

    color: ${({ $colorBtn }) => $colorBtn};
    background: ${({ $bgBtn }) => $bgBtn};

    svg path {
      stroke: ${({ $colorBtn }) => $colorBtn};
    }

    &:hover {
      color: ${({ $colorBtnHover }) => $colorBtnHover} !important;
      background-color: ${({ $bgBtnHover }) => $bgBtnHover} !important;

      svg path {
        stroke: ${({ $colorBtnHover }) => $colorBtnHover || color.YELLOW};
      }
    }
  }
`;

export const BtnFunction = styled.div`
  cursor: pointer;
  width: 2.6em;
  height: 2.4em;
  ${flex('center', 'center')};
  border-radius: 8px;
  padding: 8px 0;

  &:hover {
    background: ${color.YELLOW};
    cursor: pointer;
  }
`;

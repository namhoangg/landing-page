import { css } from 'styled-components';
import { color, fontSize, fontWeight } from '..';

export const displayFlex = css`
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
`;

export const flex = (justifyContent = 'center', alignItems = 'center', direction = 'row') => css`
  ${displayFlex};
  justify-content: ${justifyContent};
  align-items: ${alignItems};
  flex-direction: ${direction};
`;

export const styledColName = css`
  font-size: ${fontSize.XS};
  font-weight: ${fontWeight.SEMI_BOLD};
  color: ${color.BLACK};
`;

export const textEllipsis = (lines = 2) => css`
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: ${lines};
  overflow: hidden;
  text-overflow: ellipsis;
  word-break: break-word;
`;

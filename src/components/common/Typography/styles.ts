import { breakPoint, color, fontSize, fontWeight } from '@/styles';
import { Typography } from 'antd';
import { ParagraphProps } from 'antd/lib/typography/Paragraph';
import { TextProps } from 'antd/lib/typography/Text';
import { ReactNode } from 'react';
import styled from 'styled-components';

export interface IStyled {
  color?: string;
  fontWeight?: number;
  level?: 1 | 2 | 3 | 4 | 5 | 6;
  children?: ReactNode;
}

const { Title } = Typography;

export const StyledTitle = styled(Title)<IStyled>`
  &.ant-typography {
    font-weight: ${fontWeight.SEMI_BOLD};
    color: ${(props) => (props.color ? props.color : color.BLACK)};
    margin: 0;

    ${(props) =>
      props.level === 1
        ? `font-size: ${fontSize.XL3} !important; line-height: ${fontSize.XL4}; font-weight:${fontWeight.EXTRA_BOLD}`
        : props.level === 2
          ? `font-size: ${fontSize.XL2} !important; line-height: ${fontSize.XL3};`
          : props.level === 3
            ? `font-size: ${fontSize.XL} !important; line-height: ${fontSize.XL3};`
            : props.level === 4
              ? `font-size: ${fontSize.L} !important; line-height: ${fontSize.XL2}`
              : props.level === 5
                ? `font-size: ${fontSize.M} !important; line-height: ${fontSize.XL}; font-weight:${fontWeight.SEMI_BOLD}`
                : props.level === 6
                  ? `font-size: ${fontSize.S} !important; line-height: ${fontSize.L}`
                  : `font-size: ${fontSize.XL3} !important; line-height: ${fontSize.XL4}`};

    @media screen and (max-width: ${breakPoint.XS}) {
      ${(props) =>
        props.level === 1 ? `font-size: ${fontSize.XL} !important; line-height: 140%;` : ''}
    }
  }
`;

export const StyledText = styled(Typography.Text)<IStyled & TextProps>`
  &.ant-typography {
    color: ${(props) => (props.color ? props.color : color.BLACK)};
    font-size: ${fontSize.XS};
    line-height: ${fontSize.L};
    font-weight: ${fontWeight.NORMAL};
    margin: 0;
  }
`;

export const StyledParagraph = styled(Typography.Paragraph)<IStyled & ParagraphProps>`
  &.ant-typography {
    color: ${(props) => (props.color ? props.color : color.BLACK)};
    font-size: ${fontSize.S};
    line-height: ${fontSize.L};
    font-weight: ${fontWeight.NORMAL};
    margin: 0;
  }
`;

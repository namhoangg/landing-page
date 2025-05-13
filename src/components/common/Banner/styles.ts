import { breakPoint, theme, zIndex } from '@/styles';
import styled from 'styled-components';
import { Text } from '..';

const { colors, fontSizes, fontWeights, breakPoints } = theme;
export const StyledFigure = styled.figure`
  position: relative;
  margin: 0 0 0 !important;

  .image-background {
    //height: auto !important;
    width: 100%;
    object-fit: cover;
    min-height: 320px !important;
    pointer-events: none;

    @media screen and (min-width: ${breakPoint.SM}) {
      min-height: 640px !important;
    }

    @media screen and (min-width: ${breakPoint.LG}) {
      max-height: 50vh !important;
    }
  }

  &::after {
    content: '';
    display: block;
    position: absolute;
    inset: 0;
    background-color: ${colors.BLACK};
    opacity: 0.6;
  }
`;

export const StyledContainer = styled.figcaption<{ $isCenter: boolean }>`
  letter-spacing: 0;
  text-align: ${({ $isCenter }) => ($isCenter ? 'center' : 'start')};
  position: absolute;
  left: 50%;
  top: 50%;
  width: 100%;
  transform: translate(-50%, -50%);
  z-index: ${zIndex.NORMAL};
`;

export const StyledTitle = styled.h1`
  font-size: ${fontSizes.XL8} !important;
  line-height: ${fontSizes.XL9} !important;
  color: ${colors.WHITE};
  font-weight: ${fontWeights.EXTRA_BOLD};
  padding: 0.2em 0 0 0;
  @media screen and (max-width: ${breakPoints.SM}) {
    font-size: ${fontSizes.XL3} !important;
    line-height: ${fontSizes.XL6} !important;
  }
`;

export const StyledSubTitle = styled(Text)`
  font-size: ${fontSizes.L} !important;
  line-height: ${fontSizes.XL3} !important;
  padding: 1em 0;
  @media screen and (max-width: ${breakPoints.SM}) {
    font-size: ${fontSizes.XS} !important;
    line-height: ${fontSizes.XL} !important;
  }
`;

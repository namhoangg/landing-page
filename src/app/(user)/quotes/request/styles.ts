import { theme } from '@/styles';
import styled from 'styled-components';
import { Modal } from '@/components';

const { colors, fontSizes, fontWeights, breakPoints } = theme;

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

export const StyledModalClientInfo = styled(Modal)``;

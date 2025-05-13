import styled from 'styled-components';
import { breakPoint, color, fontSize, fontWeight } from '@/styles';

export const StyledHeading = styled.div`
  .title {
    font-size: ${fontSize.XL5};
    font-weight: ${fontWeight.EXTRA_BOLD};
    color: ${color.BLACK};
    @media screen and (max-width: ${breakPoint.MD}) {
      font-size: ${fontSize.XL6};
    }
    @media screen and (max-width: ${breakPoint.SM}) {
      font-size: ${fontSize.XL3};
    }
  }

  .sub-title,
  .description {
    margin: 0;
    color: ${color.GRAY_DARK};
  }

  .sub-title {
    font-size: ${fontSize.S};
  }

  .description {
    font-size: ${fontSize.M};

    @media screen and (max-width: ${breakPoint.MD}) {
      font-size: ${fontSize.L};
    }
    @media screen and (max-width: ${breakPoint.SM}) {
      font-size: ${fontSize.XS};
    }
  }
`;

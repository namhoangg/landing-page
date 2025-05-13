import { styled } from 'styled-components';
import { WrapperProps } from './Wrapper';
import { min } from 'lodash';
import { breakPoint } from '@/styles';

export const StyledWrapper = styled.div<WrapperProps>`
  /* --max-width: ${(props) =>
    `${
      (props.$maxWidth ? min([props.$maxWidth, 1440]) : 1440)! +
      (props.$padding ? props.$padding : 0) * 2
    }px`}; */
  --padding: ${(props) => `${(props.$padding ? props.$padding : 100) / 16}rem`};
  --paddingLG: ${(props) => `${(props.$paddingLG ? props.$paddingLG : 20) / 16}rem`};
  --paddingMD: ${(props) => `${(props.$paddingMD ? props.$paddingMD : 16) / 16}rem`};
  --paddingSM: ${(props) => `${(props.$paddingSM ? props.$paddingSM : 16) / 16}rem`};

  margin: 0 auto;
  width: ${(props) => `${1440 + (props.$padding ? props.$padding : 0) * 2}px`};
  max-width: 100%;
  /* max-width: var(--max-width); */

  .inner-content {
    padding: 0 var(--padding);

    @media screen and (max-width: ${breakPoint.LG}) {
      padding: 0 var(--paddingLG);
    }

    @media screen and (max-width: ${breakPoint.MD}) {
      padding: 0 var(--paddingMD);
    }

    @media screen and (max-width: ${breakPoint.SM}) {
      padding: 0 var(--paddingSM);
    }
  }
`;

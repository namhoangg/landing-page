import { color, fontSize, fontWeight } from '@/styles';
import Link from 'next/link';
import styled from 'styled-components';

export const StyledTextEllipsis = styled.div`
  width: 100%;
  font-size: ${fontSize.XS};

  .editor-value {
    p {
      margin-bottom: 0;

      img {
        max-width: 100%;
      }
    }
  }

  .btnShow {
    border: none;
    background-color: transparent;
    color: #074abd;
    font-size: ${fontSize.XS};
    font-weight: ${fontWeight.SEMI_BOLD};
    cursor: pointer;
  }
`;

export const StyledLink = styled(Link)`
  font-size: ${fontSize.XS};
  font-weight: ${fontWeight.SEMI_BOLD};
  color: ${color.BLACK};
  word-break: break-word;

  &:active {
    color: ${color.YELLOW_DARK};
  }
`;

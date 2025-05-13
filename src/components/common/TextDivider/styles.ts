import { color, fontSize, fontWeight } from '@/styles';
import styled from 'styled-components';

export const StyledTextDivider = styled.p`
  display: flex;
  align-items: center;
  color: ${color.GRAY_DARK_LIGHT};
  text-transform: uppercase;
  text-align: center;
  font-size: ${fontSize.XS};
  font-weight: ${fontWeight.EXTRA_BOLD};
  line-height: normal;

  &::before,
  &::after {
    content: '';
    flex: 1;
    padding: 0.0625rem;
    margin-top: ${fontSize.XS};
    background-color: #9ca3af;
  }

  &::before {
    margin-right: 1.25rem;
  }

  &::after {
    margin-left: 1.25rem;
  }
`;

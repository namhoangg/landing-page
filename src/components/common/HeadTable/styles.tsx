import { color, flex, fontSize, fontWeight } from '@/styles';
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 40px;
`;

export const StyledSubTitle = styled.span`
  font-size: ${fontSize.XS};
  font-weight: ${fontWeight.NORMAL};
  line-height: ${fontSize.L};
  letter-spacing: 0;
  color: ${color.GRAY_DARK};
`;

export const StyledTitle = styled.div`
  ${flex('start', 'start')};
  flex-direction: column;
  gap: 0.6em;
`;

import { flex } from '@/styles';
import styled from 'styled-components';

export const Container = styled.div`
  ${flex('center', 'center')}
  gap: 14px;

  .lang {
    width: 1.5em;
    height: 1.5em;
  }
`;

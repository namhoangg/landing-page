import { Wrapper } from '@/components';
import { flex } from '@/styles';
import { styled } from 'styled-components';

export const StyledWrapperHome = styled(Wrapper)`
  ${flex('center', 'center')};
  flex-direction: column;
  margin-top: 100px;
  background-color: rgba(0, 0, 0, 0.05);
`;

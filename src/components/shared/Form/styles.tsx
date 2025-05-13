import { Button, Text } from '@/components';
import { color } from '@/styles';
import styled from 'styled-components';

export const SubmitButton = styled(Button)`
  & {
    width: 200px;
    margin: 0 auto;
  }
`;
export const StyledText = styled(Text)`
  span {
    color: ${color.YELLOW};
    cursor: pointer;
  }
`;

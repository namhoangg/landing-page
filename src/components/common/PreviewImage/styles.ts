import { Image } from 'antd';
import styled from 'styled-components';

export const StyledPreviewImage = styled(Image)`
  & + div {
    svg {
      path {
        fill: white;
      }
    }
  }
`;

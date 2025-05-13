import { Modal, Text } from '@/components';
import { color, flex, fontSize, fontWeight, theme } from '@/styles';
import styled from 'styled-components';

export const { colors, breakPoints, zIndexs, fontSizes, fontWeights } = theme;

export const ModalContent = styled.div`
  ${flex('center', 'center')};
  flex-direction: column;
  gap: 1em;
`;

export const StyledSuccessText = styled(Text)`
  font-size: ${fontSizes.S} !important;
  text-align: center;
  padding: 0 0.375em 0.375em 0.375em;
  text-align: center;
  @media screen and (max-width: ${breakPoints.MD}) {
    /* padding: 0 2em !important; */
  }
`;

export const StyledAboutModal = styled(Modal)`
  .ant-modal-close-x {
    display: none !important;
  }
`;
export const StyleSubscribeModal = styled.div`
  .modal-content {
    font-size: ${fontSize.S};
    color: ${color.BLACK};
    font-weight: ${fontWeight.MEDIUM};
  }
`;

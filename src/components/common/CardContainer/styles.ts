import styled from 'styled-components';
import { GetImage } from '..';

export const StyledCardContainer = styled.div`
  position: relative;
  display: block;
  height: 100% !important;
  width: 100%;
  border-radius: 8px;
  box-shadow:
    0 1px 5px 0 rgba(0, 0, 0, 0.03),
    0 2px 18px 0 rgba(0, 0, 0, 0.02),
    0 9px 60px 0 rgba(0, 0, 0, 0.05);
  overflow: hidden;
  background: linear-gradient(
    180deg,
    rgba(0, 0, 0, 0) 53.46%,
    rgba(0, 0, 0, 0.48) 68.97%,
    rgba(0, 0, 0, 0.8) 99.03%
  );
  cursor: pointer;

  .ant-skeleton {
    position: absolute;
    top: 0;
    left: 0;
    width: 100% !important;
    height: 100% !important;
    object-fit: cover;

    .ant-skeleton-image {
      height: 100% !important;
    }
  }
`;

export const StyledCardContainerBackground = styled(GetImage)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100% !important;
  object-fit: cover;
  z-index: -1;
  transition: 0.3s all ease-in-out;

  ${StyledCardContainer}:hover & {
    scale: 1.1;
  }
`;

export const StyledCardContainerContent = styled.div`
  z-index: 1;
`;

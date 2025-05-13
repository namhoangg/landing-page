import styled from 'styled-components';
import { Skeleton } from 'antd';

export const StyledImage = styled.img`
  opacity: 0;
  object-fit: cover;

  &.transition {
    transition: all 1s ease-in-out !important;
  }

  &.loaded {
    opacity: 1;
  }
`;

export const StyledSkeletonImg = styled(Skeleton.Image)`
  &.ant-skeleton {
    width: 100%;
    height: 100%;

    .ant-skeleton-image {
      width: 100%;
      height: 100%;
    }
  }
`;

export const StyledPicture = styled.picture`
  opacity: 0;
  max-width: 100%;
  height: 100%;
  object-fit: cover;

  &.transition {
    transition: all 1s ease-in-out !important;
  }

  &.loaded {
    opacity: 1;
  }
`;

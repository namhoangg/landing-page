import { flex } from '@/styles';
import styled from 'styled-components';
import { IProps } from './CardSkeleton';
import { css } from 'styled-components';
import { Skeleton } from 'antd';
import { ISkeletonImageProps } from './ImageSkeleton';

export const StyledCardSkeleton = styled.div<IProps>`
  ${flex('start', 'start')}
  gap: 1em;

  .ant-skeleton {
    width: 100% !important;
  }

  ${({ $type }) => {
    switch ($type) {
      case 'row':
        return css`
          align-items: center;
          .img {
            flex: 1;
          }

          .card-content {
            flex: 1;
          }
        `;

      default:
        return css`
          flex-direction: column;
        `;
    }
  }}
`;

export const StyledTagSkeleton = styled(Skeleton)`
  /* width: 80px !important; */
  /* height: 30px; */
`;

export const StyledImageSkeleton = styled.div<ISkeletonImageProps>`
  aspect-ratio: ${({ $aspectRatio }) => $aspectRatio || 16 / 9};
  .ant-skeleton {
    width: 100%;
    height: 100%;
    display: block !important;

    &-image {
      width: 100% !important;
      height: 100% !important;
    }
  }
`;

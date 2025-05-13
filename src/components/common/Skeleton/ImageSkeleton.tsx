import { Skeleton } from 'antd';
import React from 'react';
import { StyledImageSkeleton } from './styles';

export interface ISkeletonImageProps {
  $aspectRatio?: number;
}
const ImageSkeleton = (props: ISkeletonImageProps) => {
  return (
    <StyledImageSkeleton {...props}>
      <Skeleton.Image active />
    </StyledImageSkeleton>
  );
};

export default ImageSkeleton;

import React, { FC } from 'react';
import { StyledCardSkeleton } from './styles';
import { Skeleton } from 'antd';

export interface IProps {
  imgHeight?: string;
  $type?: 'row' | 'col';
}

const DEFAULT_IMG_HEIGHT = 200;

const CardSkeleton: FC<IProps> = ({ imgHeight = DEFAULT_IMG_HEIGHT, ...props }) => {
  return (
    <StyledCardSkeleton {...props}>
      <Skeleton.Image
        active
        style={{ width: '100%', height: imgHeight }}
        className='img'
      />
      <Skeleton
        active
        className='card-content'
      />
    </StyledCardSkeleton>
  );
};

export default CardSkeleton;

import React from 'react';
import { StyledTagSkeleton } from './styles';

const TagSkeleton = () => {
  return (
    <StyledTagSkeleton
      active
      title={false}
      paragraph={{ rows: 1 }}
    />
  );
};

export default TagSkeleton;

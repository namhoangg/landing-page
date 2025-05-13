'use client';

import { StyledPagination } from './styles';
import { Pagination as AntPagination, PaginationProps as AntPaginationProps } from 'antd';

interface PaginationProps extends AntPaginationProps {}

const Pagination = (props: PaginationProps) => {
  return (
    <StyledPagination>
      <AntPagination
        showPrevNextJumpers={false}
        showSizeChanger={false}
        showLessItems={true}
        hideOnSinglePage={true}
        {...props}
      />
    </StyledPagination>
  );
};

export default Pagination;

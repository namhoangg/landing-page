import styled from 'styled-components';
import { Pagination, PaginationProps } from 'antd';
import { color } from '@/styles';

export const StyledPagination = styled.div<PaginationProps>`
  .ant-pagination-prev,
  .ant-pagination-next {
    display: ${(props) => (props.showPrevNextJumpers ? 'inherit' : 'none')} !important;
  }

  .ant-pagination-item {
    background-color: ${color.GRAY_LIGHT} !important;
    border-radius: 50% !important;
    width: 40px !important;
    height: 40px !important;
    line-height: 38px !important;
    transition: background-color 0.4s ease-in-out;

    &:hover {
      background-color: ${color.GRAY} !important;
    }

    &-active {
      background-color: ${color.YELLOW} !important;

      &:hover {
        background-color: ${color.YELLOW_DARK} !important;
      }

      a {
        color: ${color.BLACK} !important;

        &:hover {
          color: ${color.BLACK} !important;
        }
      }
    }
  }
`;

export const StyledAdminPagination = styled(Pagination)`
  display: flex;
  align-items: center;

  .ant-pagination-item {
    background: ${color.WHITE};
  }

  .ant-pagination-item-active {
    border-color: ${color.YELLOW};
    background: ${color.YELLOW};

    a {
      color: ${color.WHITE};
    }
  }

  .btn-prev,
  .btn-next {
    padding: 8px 16px;
    border-radius: 8px;
    background: ${color.WHITE};
    user-select: none;
  }

  .ant-pagination-disabled {
    span {
      opacity: 0.6;
    }
  }

  .ant-pagination-item-active:hover {
    border-color: ${color.YELLOW} !important;

    a {
      color: ${color.WHITE};
    }
  }

  .ant-pagination-total-text {
    flex: 1;
  }

  .ant-pagination-options {
    display: none;
  }
`;

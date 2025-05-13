import styled from 'styled-components';
import { color } from '@/styles';

export const StyledCustomTable = styled.div`
  .ant-table-content {
    .ant-table-thead {
      .ant-table-cell {
        background: ${color.GRAY_LIGHT};
      }
    }
  }

  .ant-table-pagination {
    position: relative;

    .pagination__total {
      position: absolute;
      left: 0;
      color: ${color.GRAY_DARK};
    }

    .pagination__actions {
      position: absolute;
      right: 0;
      display: flex;
      gap: 1em;
    }

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
      padding: 9px 16px;
      border-radius: 8px;
      background: ${color.WHITE};
      user-select: none;

      &:hover {
        border: 1px solid ${color.YELLOW};
        color: ${color.YELLOW};
      }
    }

    .ant-pagination-disabled {
      span {
        opacity: 0.6;
      }

      .btn-prev,
      .btn-next {
        &:hover {
          border: none;
          color: ${color.BLACK};
        }
      }
    }
  }

  //  Styled checkbox
  .ant-table-tbody {
    .ant-checkbox-inner {
      &:after {
        inset-inline-start: 28.5% !important;
      }
    }
  }

  .ant-table-thead {
    .ant-checkbox-checked {
      .ant-checkbox-inner {
        &:after {
          inset-inline-start: 27.5% !important;
        }
      }
    }
  }

  .ant-table-selection-column {
    padding-inline-start: 18px !important;
  }

  .ant-checkbox-inner {
    width: 20px;
    height: 20px;
  }

  .ant-table-row-selected > td {
    background: ${color.YELLOW_LIGHTER} !important;
  }

  .ant-checkbox-indeterminate .ant-checkbox-inner:after {
    background-color: ${color.YELLOW} !important;
  }

  .ant-checkbox-checked .ant-checkbox-inner {
    background-color: ${color.YELLOW} !important;
    border-color: ${color.YELLOW} !important;
  }

  .ant-checkbox:hover .ant-checkbox-inner {
    background-color: ${color.YELLOW_LIGHTER} !important;
    border-color: ${color.YELLOW} !important;
  }

  .ant-checkbox-checked:hover .ant-checkbox-inner {
    background-color: ${color.YELLOW} !important;
    border-color: ${color.YELLOW} !important;
  }
`;

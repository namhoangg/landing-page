import { IParams } from '@/hooks/useTable';
import { StyledCustomTable } from './styles';
import { PaginationProps, Table, TableProps } from 'antd';
import {
  FilterValue,
  SorterResult,
  SortOrder,
  TableCurrentDataSource,
  TablePaginationConfig,
} from 'antd/lib/table/interface';
import { ColumnType } from 'antd/es/table';
import { findIndex } from 'lodash';
import { useMemo } from 'react';

export interface TableInstanceProps {
  onSort: (sort: SorterResult<any> | SorterResult<any[]>) => void;
  onChangePage: (page: number) => void;
  setParams: any;
  params: IParams;
  sort: any;
  setSearchParams: any;
  customizeSearchParams: any;
}

interface CustomTableProps extends TableProps<object> {
  tableInstance: TableInstanceProps;
  totalElements: number;
  totalItems?: number;
  totalPages: number;
  isShowPagination?: boolean;
  pageSize?: number;
  page?: number;
  setPage?: (pagination: number) => void;
}

const CustomTable = ({
  tableInstance,
  totalElements,
  isShowPagination = true,
  pageSize = 10,
  page,
  setPage,
  ...props
}: CustomTableProps) => {
  const {
    sort: { sortBy, sortDirection },
  } = tableInstance;
  const handleChange = (
    pagination: TablePaginationConfig,
    filters: Record<string, FilterValue | null>,
    sorter: any,
    extra: TableCurrentDataSource<any>,
  ) => {
    const { onSort, onChangePage } = tableInstance;

    if (page !== undefined) {
      setPage && setPage(Number(pagination?.current ?? 1) - 1);
    } else {
      onChangePage && onChangePage((pagination?.current ?? 1) - 1);
      props.onChange && props.onChange(pagination, filters, sorter as any, extra);
    }
    onSort && onSort(sorter);
  };

  const convertedColumns = useMemo(() => {
    const newColumns = [...(props.columns as ColumnType<any>[])];
    if (sortBy && sortDirection) {
      const index = findIndex(props.columns, { dataIndex: sortBy });

      if (index !== -1) {
        newColumns[index].defaultSortOrder = sortDirection as SortOrder;
      }
    }
    return newColumns.map((column) =>
      column.align
        ? { ...column, className: column.className + ' custom-align-' + column.align }
        : column,
    );
  }, [props.columns, sortBy, sortDirection]);

  const showTotal = (total: number, range: [number, number]) => {
    return (
      <>
        <span className='pagination__total'>
          Showing {range[0]} - {range[1]} of {totalElements} items
        </span>
      </>
    );
  };

  const itemRender: PaginationProps['itemRender'] = (_, type, originalElement) => {
    if (type === 'prev') {
      return <span className='btn-prev'>Previous</span>;
    }
    if (type === 'next') {
      return <span className='btn-next'>Next</span>;
    }
    return originalElement;
  };

  return (
    <StyledCustomTable>
      <Table
        locale={{ emptyText: 'No result matches for your search.' }}
        pagination={
          isShowPagination
            ? {
                position: ['bottomRight'],
                total: totalElements,
                showTotal: (total, range) => showTotal(total, range),
                itemRender: itemRender,
                pageSize,
                showSizeChanger: false,
                current:
                  page !== undefined
                    ? page + 1
                    : (+tableInstance.customizeSearchParams.get('page') ?? 0) + 1,
              }
            : false
        }
        {...props}
        columns={convertedColumns}
        onChange={handleChange}
      />
    </StyledCustomTable>
  );
};

export default CustomTable;

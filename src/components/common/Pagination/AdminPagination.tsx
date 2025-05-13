import { PaginationProps as AntdPaginationProps } from 'antd';
import { useTranslation } from 'react-i18next';
import * as Styled from './styles';

interface PaginationProps extends AntdPaginationProps {
  totalElements?: number;
}

const Pagination = ({ totalElements, ...props }: PaginationProps) => {
  const { t } = useTranslation();

  const customShowTotal = (_: number, range: [number, number]) => {
    return (
      <span className='pagination__total'>
        {t('pagination.showTotal', { from: range[0], to: range[1], total: totalElements })}
      </span>
    );
  };

  const customPaginationItem: PaginationProps['itemRender'] = (_, type, originalElement) => {
    if (type === 'prev') {
      return <span className='btn-prev'>{t('Previous')}</span>;
    }

    if (type === 'next') {
      return <span className='btn-next'>{t('Next')}</span>;
    }

    return originalElement;
  };

  return (
    <Styled.StyledAdminPagination
      {...props}
      total={totalElements}
      showTotal={(total, range) => customShowTotal(total, range)}
      itemRender={customPaginationItem}
    />
  );
};

export default Pagination;

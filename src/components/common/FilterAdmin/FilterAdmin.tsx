'use client';

import { StyledBadge, StyledFilterAdmin } from './styles';
import { FormProvider, useForm } from 'react-hook-form';
import { FilterIcon, Input, Popover, SearchIcon, Button } from '@/components';
import { ChangeEvent, ReactNode, isValidElement, useEffect, useState } from 'react';
import { useDebounce, useMutableSearchParams } from '@/hooks';
import { useTranslation } from 'react-i18next';
import './styles.scss';

interface FilterAdminProps {
  numberOfOptions: string | number;
  hiddenButtonFilterMultiple?: boolean;
  handleDeselect: (value: []) => void;
  handleOpenHide?: () => void;
  handleOpenDelete: () => void;
  filterForm?: ReactNode;
  filterVariants?: string[];
  isShowHide?: boolean;
  defaultSearchKey?: string;
}

const FilterAdmin = ({
  numberOfOptions,
  hiddenButtonFilterMultiple = false,
  handleDeselect,
  handleOpenHide,
  handleOpenDelete,
  filterForm,
  filterVariants,
  isShowHide = true,
  defaultSearchKey,
}: FilterAdminProps) => {
  const { t } = useTranslation();
  const { customizeSearchParams, setSearchParams } = useMutableSearchParams();

  const [isOpenFilter, setIsOpenFilter] = useState<boolean>(false);

  const searchKey = defaultSearchKey ? defaultSearchKey : 'search';
  const defaultValues = {
    [searchKey]: customizeSearchParams.get(searchKey) ?? '',
  };

  const form = useForm({
    defaultValues,
  });

  const debounceSearch = useDebounce(form.getValues(searchKey) ?? '', 300);

  const handleOnChangeSearch = (event: ChangeEvent<HTMLInputElement & HTMLTextAreaElement>) => {
    const searchValue = event.target.value;

    form.reset({
      ...defaultValues,
      [searchKey]: searchValue,
    });
  };

  useEffect(() => {
    debounceSearch.trim()
      ? customizeSearchParams.set(searchKey, debounceSearch.trim())
      : customizeSearchParams.delete(searchKey);

    setSearchParams(customizeSearchParams);
  }, [debounceSearch]);

  useEffect(() => {
    form.reset(defaultValues);
  }, [customizeSearchParams]);

  useEffect(() => {
    if (isValidElement(filterForm)) {
      const filterFormProps = filterForm.props;
      if ('handleClose' in filterFormProps) setIsOpenFilter(false);
    }
  }, [filterForm]);

  return (
    <StyledFilterAdmin>
      <div className='filter'>
        <div className='filter__left'>
          {+numberOfOptions > 0 && (
            <>
              <Button onClick={() => handleDeselect([])}>
                {t('button.deSelect', { value: numberOfOptions })}
              </Button>
              {isShowHide && <Button onClick={handleOpenHide}>{t('button.hide')}</Button>}

              <Button onClick={handleOpenDelete}>{t('button.delete')}</Button>
            </>
          )}
        </div>
        <div className='filter__right'>
          {!hiddenButtonFilterMultiple && (
            <StyledBadge dot={filterVariants?.some((item) => customizeSearchParams.has(item))}>
              <Popover
                className='menu-filter'
                content={filterForm}
                open={isOpenFilter}
                onOpenChange={setIsOpenFilter}
              >
                <Button
                  className='filter__right-button'
                  icon={<FilterIcon />}
                >
                  {t('button.filter')}
                </Button>
              </Popover>
            </StyledBadge>
          )}
          <FormProvider {...form}>
            <Input
              icon={<SearchIcon />}
              name={searchKey}
              placeholder={t('button.search')}
              onChange={handleOnChangeSearch}
              allowClear
            />
          </FormProvider>
        </div>
      </div>
    </StyledFilterAdmin>
  );
};

export default FilterAdmin;

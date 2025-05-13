'use client';
import React, { ReactNode, useState } from 'react';
import { SearchProps } from 'antd/es/input';
import { Input, SearchIcon } from '..';
import { StyleSearch } from './styles';
import { theme } from '@/styles';
import { useRouter } from 'next/navigation';

export interface OptionType {
  key: string | number;
  name?: string;
  type?: string;
  label: string | number;
  value: string | number;
  disabled?: boolean;
  render: (value?: string) => ReactNode;
}

export interface Search extends SearchProps {
  name: string;
  parentName?: string;
  options?: OptionType[];
  label?: string;
  item?: string;
  loading?: boolean;
  messageError?: string;
  className?: string;
}

const Search: React.FC<SearchProps> = ({ className, onChange }) => {
  const [search, setSearch] = useState('');
  const router = useRouter();

  const onChangeSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value);
  };

  const handleSearch = () => {
    if (search) {
      router.push(
        `/search?search=${search}&post_category_locations=insights&portfolio_category_types=case_studies,innovation_hub`,
      );
    }
  };

  return (
    <>
      <StyleSearch className={className}>
        <Input
          className='search-input'
          name='search'
          placeholder='Search...'
          $fontSizeCustom={theme.fontSizes.S}
          height='3em'
          icon={<SearchIcon onClick={handleSearch} />}
          onChange={(event) => {
            onChangeSearch(event as React.ChangeEvent<HTMLInputElement>);
            onChange && onChange(event as React.ChangeEvent<HTMLInputElement>);
          }}
        />
      </StyleSearch>
    </>
  );
};

export default Search;

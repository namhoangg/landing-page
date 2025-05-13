import { useEffect, useState } from 'react';
import { debounce } from 'lodash';

const useGetOptionSelect = <T>(useGetData: any) => {
  const [searchOption, setSearchOption] = useState<string>('');
  const { data, isFetching } = useGetData({
    keyword: searchOption ?? ''
  });

  const handleSearchOption = debounce((value: string) => {
    setSearchOption(value);
  }, 1000);

  const [dataSelect, setDataSelect] = useState<T[]>([]);
  useEffect(() => {
    const formatData = (data?.payload?.data ?? []).map((item: any) => ({
      ...item
    }));
    setDataSelect(formatData);
  }, [data]);

  return { dataSelect, isFetching, handleSearchOption };
};

export default useGetOptionSelect;

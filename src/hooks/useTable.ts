'use client';

import { useEffect, useMemo, useRef, useState } from 'react';
import { useMutableSearchParams } from '.';

const shortName = {
  asc: 'ascend',
  desc: 'descend',
};

export interface IParams {
  sort: string;
  page: number;
  // size: number;
  sortQuery: string;
  [k: string]: string | number | null;
}

const DEFAULT_SORT_NAME = 'sort';

const useTable = (filterParams?: IParams) => {
  const { customizeSearchParams, setSearchParams } = useMutableSearchParams();
  const sortName =
    useMemo(
      () => (filterParams?.sortQuery ? filterParams?.sortQuery : DEFAULT_SORT_NAME),
      [filterParams?.sortQuery],
    ) ?? '';

  const sortQueryString = customizeSearchParams.get(sortName);
  const sortArray = sortQueryString ? sortQueryString.split(',') : ['', ''];
  const sortBy = sortArray[0];
  const sortDirection = sortArray[1];
  const [sort, setSort] = useState({
    sortBy: sortBy,
    sortDirection: shortName[sortDirection as keyof typeof shortName],
  });
  const countRerender = useRef(0);
  const defaultParams = {
    sort: sortBy && sortDirection ? `${sortBy},${sortDirection}` : '',
    page: customizeSearchParams.get('page')
      ? parseInt(customizeSearchParams.get('page') as string)
      : 0,
    sortQuery: sortName,
    // size: customizeSearchParams.get('size') ? parseInt(customizeSearchParams.get('size') as string) : 10
  };
  const [params, setParams] = useState<IParams>(defaultParams);
  const onSort = (sortValue: any) => {
    const { order, field } = sortValue;
    const newParams = { ...params };
    if (order) {
      const sortString = `${field},${Object.keys(shortName).find(
        (key) => shortName[key as keyof typeof shortName] === order,
      )}`;
      customizeSearchParams.set(sortName, sortString);
      setSearchParams(customizeSearchParams);
      newParams.sort = sortString;
      // setParams(newParams);
    } else {
      if (customizeSearchParams.has(sortName)) {
        customizeSearchParams.delete(sortName);
        setSearchParams(customizeSearchParams);
      }
      // // @ts-ignore
      // delete newParams.sort;
      // setParams(newParams);
    }
    setSort(() => {
      return {
        sortBy: field ?? '',
        sortDirection: field ? order : '',
      };
    });
  };

  const onChangePage = (page: number) => {
    customizeSearchParams.set('page', page.toString());
    setSearchParams(customizeSearchParams);
  };

  // const tableParams = [sortName, 'page', 'size'];
  const tableParams = [sortName, 'page'];
  const otherParams = useRef(null as any);

  const setPage0 = () => {
    // setParams((prev) => {

    //   return {
    //     ...defaultParams,
    //     ...filterParams,
    //     page: 0
    //   };
    // });
    customizeSearchParams.set('page', '0');
    setSearchParams(customizeSearchParams);
  };

  useEffect(() => {
    let otherParamsArray: [string, string | number][] = [['1', 1]];
    let isEmpty = false;
    if (otherParams.current) {
      isEmpty = Object.keys(otherParams.current).length === 0;

      if (!isEmpty) {
        otherParamsArray = Object.entries(otherParams.current);
      }
    }
    let alterArray = [...otherParamsArray];
    countRerender.current++;
    let i = 0;
    while (i < otherParamsArray.length) {
      customizeSearchParams.forEach((value, key) => {
        if (otherParams.current) {
          isEmpty = Object.keys(otherParams.current).length === 0;

          if (!isEmpty) {
            alterArray = Object.entries(otherParams.current);
          }
        }
        if (alterArray.length !== otherParamsArray.length && otherParamsArray.length !== 1) {
          setPage0();
        }
        if (
          otherParamsArray[i][0] !== '1' &&
          customizeSearchParams.get(otherParamsArray[i][0]) &&
          customizeSearchParams.get(otherParamsArray[i][0]) !== otherParamsArray[i][1] &&
          !tableParams.includes(otherParamsArray[i][0])
        ) {
          setPage0();
        }
        if (
          !customizeSearchParams.get(otherParamsArray[i][0]) &&
          otherParams.current &&
          otherParams.current[otherParamsArray[i][0]] !==
            customizeSearchParams.get(otherParamsArray[i][0])
        ) {
          if (otherParamsArray[i][0] !== '1') {
            setPage0();
          }
          delete otherParams.current[otherParamsArray[i][0]];
        }
        if (
          countRerender.current > 1 &&
          !tableParams.includes(key) &&
          otherParamsArray[i][0] === '1'
        ) {
          setPage0();
        }
        if (otherParams.current) {
          if (isEmpty && !tableParams.includes(key)) {
            setPage0();
          }
        }

        if (!tableParams.includes(key)) {
          otherParams.current = {
            ...otherParams.current,
            [key]: value,
          };
        }
      });
      i++;
    }
    // if (filterParams) {
    //   countRerender.current++;
    //   if (countRerender.current >= COUNT_RENDER_TABLE) {
    //     setParams({ ...defaultParams, ...filterParams });
    //   }
    // }
  }, [customizeSearchParams, filterParams]);

  useEffect(() => {
    (tableParams ?? []).forEach((fieldName: string) => {
      customizeSearchParams.get(fieldName)
        ? setParams((prev) => ({
            ...prev,
            [fieldName]: customizeSearchParams.get(fieldName),
          }))
        : setParams((prev) => {
            delete prev[fieldName as keyof typeof prev];
            return { ...prev };
          });
    });
  }, [customizeSearchParams]);

  useEffect(() => {
    if (customizeSearchParams.get('page')) {
      setSearchParams(customizeSearchParams);
    } else {
      customizeSearchParams.set('page', '0');
    }

    setSearchParams(customizeSearchParams);
  }, []);

  return {
    onSort,
    onChangePage,
    params,
    setParams,
    sort,
    setSort,
    customizeSearchParams,
    setSearchParams,
    countRerender,
  };
};
export default useTable;

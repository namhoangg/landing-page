'use client';

import { useMutableSearchParams } from '@/hooks';
import { ENUM_TIME } from '@/types';
import dayjs from 'dayjs';
import duration from 'dayjs/plugin/duration';
import { useEffect, useMemo, useState } from 'react';

dayjs.extend(duration);

interface IProps {
  commonFields?: string[];
  dateName?: string;
  dateRange?: {
    dateRangeName?: string;
    fromDateName?: string;
    toDateName?: string;
  };
  isDateRange?: boolean;
}

interface IParams {
  title?: string;
  tag_ids?: string;
  from_date?: number;
  to_date?: number;
  categoryId?: string;
  state?: string;
  event_status?: string;
  sort?: string;
  levelIds?: string;
  functionIds?: string;
  siteIds?: string;
  labels?: string;
  isEmptyName?: string;
  fromDate?: number;
  toDate?: number;
  fromDate2?: number;
  toDate2?: number;
  isEmptyMessage?: string;
  formIds?: string;
  searchAll?: string;
  searchCategory?: string;
  sources?: string;
  search?: string;
  statusAll?: string;
  statusCategory?: string;
  timeAll?: string;
  timeCategory?: string;
  fromDateAll?: number;
  toDateAll?: number;
  fromDateCategory?: number;
  toDateCategory?: number;
  authorIdAll?: string;
  authorIdCategory?: string;
  portfolio_type?: string;

  [key: string]: string | number | undefined | null;
}

export const DATE_RANGE_DEFAULT_VALUES = {
  dateRangeName: 'dates',
  fromDateName: 'from_date',
  toDateName: 'to_date',
};

const monthFormat = 'MM/YYYY';
const dateFormat = 'MM/DD/YYYY';
const dayStartFormat = '00:00:00:000';
const dayEndFormat = '23:59:59:999';

const useFilterCommon = ({
  commonFields,
  dateRange = DATE_RANGE_DEFAULT_VALUES,
  isDateRange = false,
}: IProps) => {
  const { customizeSearchParams, setSearchParams } = useMutableSearchParams();
  const [params, setParams] = useState<IParams>({});

  const time = useMemo(
    () => customizeSearchParams.get('time'),
    [customizeSearchParams.get('time')],
  );

  const time2 = useMemo(
    () => customizeSearchParams.get('time2'),
    [customizeSearchParams.get('time2')],
  );

  const fromDate = useMemo(
    () => customizeSearchParams.get('from_date'),
    [customizeSearchParams.get('from_date')],
  );
  const toDate = useMemo(
    () => customizeSearchParams.get('to_date'),
    [customizeSearchParams.get('to_date')],
  );

  const fromDate2 = useMemo(
    () => customizeSearchParams.get('from_date_2'),
    [customizeSearchParams.get('from_date_2')],
  );
  const toDate2 = useMemo(
    () => customizeSearchParams.get('to_date_2'),
    [customizeSearchParams.get('to_date_2')],
  );

  const {
    dateRangeName = DATE_RANGE_DEFAULT_VALUES.dateRangeName,
    fromDateName = DATE_RANGE_DEFAULT_VALUES.fromDateName,
    toDateName = DATE_RANGE_DEFAULT_VALUES.toDateName,
  } = dateRange;

  useEffect(() => {
    if (dateRange && isDateRange) {
      const date = new Date();
      const firstDay = dayjs(new Date(date.getFullYear(), date.getMonth(), 1)).format('DD/MM/YYYY');
      const lastDay = dayjs(new Date(date.getFullYear(), date.getMonth() + 1, 0)).format(
        'DD/MM/YYYY',
      );

      if (customizeSearchParams.get(dateRangeName)) {
        setSearchParams(customizeSearchParams);
      } else {
        customizeSearchParams.set(dateRangeName, `${firstDay} - ${lastDay}`);
      }

      setSearchParams(customizeSearchParams);
    }
  }, []);

  useEffect(() => {
    customizeSearchParams.get(dateRangeName)
      ? setParams((prev) => ({
          ...prev,
          [`${fromDateName}`]: dayjs(
            customizeSearchParams.get(dateRangeName)?.split('-')[0],
            'DD/MM/YYYY',
          ).format('x'),
          [`${toDateName}`]: (
            Number(
              dayjs(customizeSearchParams.get(dateRangeName)?.split('-')[1], 'DD/MM/YYYY').format(
                'x',
              ),
            ) + dayjs.duration('23:59').asMilliseconds()
          ).toString(),
        }))
      : setParams((prev) => {
          delete prev[`${fromDateName}`];
          delete prev[`${toDateName}`];
          return { ...prev };
        });

    fromDate
      ? setParams((prev) => {
          const dateFrom = dayjs(fromDate, dateFormat).format(dateFormat);
          const dateFromMillisecond = Date.parse(`${dateFrom} ${dayStartFormat}`);

          return {
            ...prev,
            fromDate: dateFromMillisecond ?? '',
          };
        })
      : setParams((prev) => {
          delete prev.fromDate;
          return { ...prev };
        });
    toDate
      ? setParams((prev) => {
          const dateTo = dayjs(toDate, dateFormat).format(dateFormat);
          const dateEndMillisecond = Date.parse(`${dateTo} ${dayEndFormat}`);

          return {
            ...prev,
            toDate: dateEndMillisecond ?? '',
          };
        })
      : setParams((prev) => {
          delete prev.toDate;
          return { ...prev };
        });

    fromDate2
      ? setParams((prev) => {
          const dateFrom = dayjs(fromDate2, dateFormat).format(dateFormat);
          const dateFromMillisecond = Date.parse(`${dateFrom} ${dayStartFormat}`);

          return {
            ...prev,
            fromDate2: dateFromMillisecond ?? '',
          };
        })
      : setParams((prev) => {
          delete prev.fromDate2;
          return { ...prev };
        });
    toDate2
      ? setParams((prev) => {
          const dateTo = dayjs(toDate2, dateFormat).format(dateFormat);
          const dateEndMillisecond = Date.parse(`${dateTo} ${dayEndFormat}`);

          return {
            ...prev,
            toDate2: dateEndMillisecond ?? '',
          };
        })
      : setParams((prev) => {
          delete prev.toDate2;
          return { ...prev };
        });

    customizeSearchParams.get('month')
      ? setParams((prev) => {
          const monthStart = dayjs(customizeSearchParams.get('month'), monthFormat)
            .startOf('month')
            .format(dateFormat);
          const monthEnd = dayjs(customizeSearchParams.get('month'), monthFormat)
            .endOf('month')
            .format(dateFormat);
          const monthStartMillisecond = Date.parse(`${monthStart} ${dayStartFormat}`);
          const monthEndMillisecond = Date.parse(`${monthEnd} ${dayEndFormat}`);

          return {
            ...prev,
            from_date: monthStartMillisecond ?? '',
            to_date: monthEndMillisecond ?? '',
          };
        })
      : setParams((prev) => {
          delete prev.from_date;
          delete prev.to_date;
          return { ...prev };
        });

    switch (time) {
      case ENUM_TIME.TODAY: {
        const dateToday = dayjs().format(dateFormat);
        const dateStartMillisecond = Date.parse(`${dateToday} ${dayStartFormat}`);
        const dateEndMillisecond = Date.parse(`${dateToday} ${dayEndFormat}`);

        setParams((prev) => {
          return {
            ...prev,
            fromDate: dateStartMillisecond,
            toDate: dateEndMillisecond,
          };
        });

        break;
      }
      case ENUM_TIME.YESTERDAY: {
        const dateYesterday = dayjs().subtract(1, 'day').format(dateFormat);
        const dateStartMillisecond = Date.parse(`${dateYesterday} ${dayStartFormat}`);
        const dateEndMillisecond = Date.parse(`${dateYesterday} ${dayEndFormat}`);

        setParams((prev) => {
          return {
            ...prev,
            fromDate: dateStartMillisecond,
            toDate: dateEndMillisecond,
          };
        });

        break;
      }
      case ENUM_TIME.THIS_WEEK: {
        const weekStart = dayjs().startOf('weeks').add(1, 'day').format(dateFormat);
        const weekEnd = dayjs().endOf('weeks').add(1, 'day').format(dateFormat);
        const dateStartMillisecond = Date.parse(`${weekStart} ${dayStartFormat}`);
        const dateEndMillisecond = Date.parse(`${weekEnd} ${dayEndFormat}`);

        setParams((prev) => {
          return {
            ...prev,
            fromDate: dateStartMillisecond,
            toDate: dateEndMillisecond,
          };
        });

        break;
      }
      case ENUM_TIME.THIS_MONTH: {
        const monthStart = dayjs().startOf('month').format(dateFormat);
        const monthEnd = dayjs().endOf('month').format(dateFormat);
        const dateStartMillisecond = Date.parse(`${monthStart} ${dayStartFormat}`);
        const dateEndMillisecond = Date.parse(`${monthEnd} ${dayEndFormat}`);

        setParams((prev) => {
          return {
            ...prev,
            fromDate: dateStartMillisecond,
            toDate: dateEndMillisecond,
          };
        });

        break;
      }
      default:
        break;
    }

    switch (time2) {
      case ENUM_TIME.TODAY: {
        const dateToday = dayjs().format(dateFormat);
        const dateStartMillisecond = Date.parse(`${dateToday} ${dayStartFormat}`);
        const dateEndMillisecond = Date.parse(`${dateToday} ${dayEndFormat}`);

        setParams((prev) => {
          return {
            ...prev,
            fromDate2: dateStartMillisecond,
            toDate2: dateEndMillisecond,
          };
        });

        break;
      }
      case ENUM_TIME.YESTERDAY: {
        const dateYesterday = dayjs().subtract(1, 'day').format(dateFormat);
        const dateStartMillisecond = Date.parse(`${dateYesterday} ${dayStartFormat}`);
        const dateEndMillisecond = Date.parse(`${dateYesterday} ${dayEndFormat}`);

        setParams((prev) => {
          return {
            ...prev,
            fromDate2: dateStartMillisecond,
            toDate2: dateEndMillisecond,
          };
        });

        break;
      }
      case ENUM_TIME.THIS_WEEK: {
        const weekStart = dayjs().startOf('weeks').add(1, 'day').format(dateFormat);
        const weekEnd = dayjs().endOf('weeks').add(1, 'day').format(dateFormat);
        const dateStartMillisecond = Date.parse(`${weekStart} ${dayStartFormat}`);
        const dateEndMillisecond = Date.parse(`${weekEnd} ${dayEndFormat}`);

        setParams((prev) => {
          return {
            ...prev,
            fromDate2: dateStartMillisecond,
            toDate2: dateEndMillisecond,
          };
        });

        break;
      }
      case ENUM_TIME.THIS_MONTH: {
        const monthStart = dayjs().startOf('month').format(dateFormat);
        const monthEnd = dayjs().endOf('month').format(dateFormat);
        const dateStartMillisecond = Date.parse(`${monthStart} ${dayStartFormat}`);
        const dateEndMillisecond = Date.parse(`${monthEnd} ${dayEndFormat}`);

        setParams((prev) => {
          return {
            ...prev,
            fromDate2: dateStartMillisecond,
            toDate2: dateEndMillisecond,
          };
        });

        break;
      }
      default:
        break;
    }

    (commonFields ?? []).forEach((fieldName: string) => {
      customizeSearchParams.get(fieldName)
        ? setParams((prev) => ({
            ...prev,
            [fieldName]: customizeSearchParams.get(fieldName),
          }))
        : setParams((prev) => {
            delete prev[fieldName];
            return { ...prev };
          });
    });
  }, [customizeSearchParams.toString()]);

  return params;
};

export default useFilterCommon;

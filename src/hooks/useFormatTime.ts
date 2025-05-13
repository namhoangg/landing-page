'use client';

/* eslint-disable @typescript-eslint/no-explicit-any */

import dayjs from 'dayjs';

const useFormatTime = () => {
  const formatTimestampToDateTime = (date: string) => {
    return new Date(date).toLocaleDateString('en-US');
  };

  const formatTimestampToDate = (timestamp: number, timeFormat: string) => {
    return `${dayjs(timestamp).format(timeFormat)}`;
  };

  const formatDateToTimestamp = (date: any, timeFormat: string) => {
    const convertedDate = dayjs(date, 'DD/MM/YYYY');
    const newDate = dayjs(convertedDate).format('MM/DD/YYYY');
    return Date.parse(`${newDate} ${timeFormat}`);
  };

  return {
    formatTimestampToDateTime,
    formatTimestampToDate,
    formatDateToTimestamp,
  };
};

export default useFormatTime;

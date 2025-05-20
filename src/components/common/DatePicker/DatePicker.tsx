/* eslint-disable @typescript-eslint/no-explicit-any */

'use client';
import { RootState, useCommonSelector } from '@/redux';
import { ConfigProvider } from 'antd';
import localeEn from 'antd/es/locale/en_US';
import localeVi from 'antd/es/locale/vi_VN';
import { DatePickerProps } from 'antd/lib/date-picker';
import dayjs from 'dayjs';
import 'dayjs/locale/zh-cn';
import 'dayjs/plugin/updateLocale';
import { get } from 'lodash';
import { FC, useEffect, useRef } from 'react';
import { Controller, useFormContext } from 'react-hook-form';
import {
  Container,
  ContainerDatePicker,
  DateMessageStyled,
  LabelDatePicker,
  StyledDatePicker,
} from './style';

interface IDatePicker {
  label?: string;
  message?: string;
  required?: boolean;
  isTimeExist?: boolean;
  format: string;
  isFieldArray?: boolean;
  parentName?: string;
  currentDate?: string;
  inputReadOnly?: boolean;
}

const DEFAULT_FORMAT = 'DD/MM/YYYY';
const DatePicker: FC<IDatePicker & DatePickerProps> = ({
  label,
  message,
  format = DEFAULT_FORMAT,
  currentDate,
  inputReadOnly,
  ...props
}) => {
  const {
    control,
    register,
    getValues,
    setValue,
    formState: { errors },
  } = useFormContext();
  const { lang } = useCommonSelector((state: RootState) => state.langReducer);

  const mask = String(format).includes('.') ? '.' : '/';

  const refDate = useRef<HTMLDivElement>(null);

  const errorMessage: any =
    message || (errors && props.name ? get(errors, `${props.name}.message`, undefined) : '');

  const indexOfSlash = useRef<number[]>([]);
  const arrDate = useRef<string[]>([]);

  const elInput = refDate.current?.querySelector('.ant-picker-input input');

  const dateInputMask = (elm: any) => {
    indexOfSlash.current = [];
    arrDate.current = [];
    let checkFormat = '';
    if (format.length > 10) {
      checkFormat = format.slice(0, 10);
    }
    if (checkFormat) {
      for (let i = 0; i < checkFormat.length; i++) {
        if (format[i] === mask && indexOfSlash.current.length < 2) {
          indexOfSlash.current.push(i);
        }
      }

      arrDate.current = checkFormat.split(mask);
    } else {
      for (let i = 0; i < format.length; i++) {
        if (format[i] === mask && indexOfSlash.current.length < 2) {
          indexOfSlash.current.push(i);
        }
      }

      arrDate.current = format.split(mask);
    }

    if (elm) {
      elm.maxLength = format.length;

      elm.addEventListener('keydown', (e: KeyboardEvent) => {
        const len = elm.value.length;

        if (e.key !== 'Backspace') {
          if ((e.keyCode < 47 || e.keyCode > 57) && (e.keyCode > 105 || e.keyCode < 95)) {
            e.preventDefault();
          }

          if (e.shiftKey) {
            e.preventDefault();
          }

          if (len !== 1 || len !== 3) {
            if (e.keyCode == 47) {
              e.preventDefault();
            }
          }
          for (let i = 0; i < indexOfSlash.current.length; i++) {
            if (len === indexOfSlash.current[i]) {
              elm.value += mask;
            }
          }

          if (!dayjs(elm.value, arrDate.current.join(mask).slice(0, 10)).isValid() && len === 9) {
            const date = elm.value.split(mask);

            const idxY = arrDate.current.indexOf('YYYY');
            const idxM = arrDate.current.indexOf('MM');
            const idxD = arrDate.current.indexOf('DD');

            if (Number(date[idxM]) === 0 || Number(date[idxM]) > 12) date[idxM] = 12;
            date[idxD] = new Date(date[idxY], date[idxM], 0).getDate();

            const temp = date.join(mask);

            elm.value = temp.substring(0, elm.value?.length - 1) + temp?.at(-1);
          } else if (format.length > 10 && len === 10) {
            elm.value += ', ';
          } else if (len === 14) {
            elm.value += ':';
          }
        } else if (len === 13 && e.key === 'Backspace') {
          elm.value = elm.value.slice(0, 11);
        } else if (len === 1 && e.key === 'Backspace') {
          setValue(`${props.name}`, null);
        }
      });

      elm.addEventListener('keyup', (e: KeyboardEvent) => {
        const len = elm.value.length;

        if ((e.keyCode < 47 || e.keyCode > 57) && (e.keyCode > 105 || e.keyCode < 95)) {
          e.preventDefault();
        }
        //
        else if (len === 10 && format.length === 10) {
          elm.blur();

          if (currentDate && elm.value < currentDate) {
            elm.value = currentDate;
            setValue(`${props.name}`, dayjs(currentDate));
          }
        }
        //
        else if (format.length > 10) {
          if (len > 11) {
            const hour = elm.value[12];
            if (hour > 2) {
              elm.value = elm.value.slice(0, 12) + '0' + hour;
            }
          }

          //
          if (len > 12) {
            const hour = elm.value[12];
            const subHour = elm.value[13];

            if (Number(hour) === 2 && Number(subHour) > 3) {
              elm.value = elm.value.slice(0, 13) + '3';
            }
          }

          //
          if (len > 14) {
            const hour = elm.value[15];

            if (Number(hour) > 5) {
              elm.value = elm.value.slice(0, 15) + '0';
            }
          }

          //
          if (len === format.length) {
            (
              document.querySelectorAll(
                '.popup-date-picker .ant-picker-ok button',
              )[0] as HTMLButtonElement
            )?.click();
          }
        }
      });
    }
  };

  // const lng = localStorage.getItem('i18nextLng');

  useEffect(() => {
    dateInputMask(elInput);
  }, [elInput, mask, format, dateInputMask]);

  return (
    <Container>
      {label && (
        <LabelDatePicker>
          {label}
          {props.required ? <span className='required-mark'>*</span> : null}
        </LabelDatePicker>
      )}
      <ContainerDatePicker ref={refDate}>
        <Controller
          name={`${props.name}`}
          control={control}
          render={({ field: { value, onChange, ...field } }) => (
            <ConfigProvider locale={lang === 'en' ? localeEn : localeVi}>
              <StyledDatePicker
                isLabel={Boolean(label)}
                {...register(`${props.name}`)}
                value={getValues(`${props.name}`)}
                // error={errorMessage}
                inputReadOnly={inputReadOnly}
                showToday={false}
                popupClassName={`style-range-picker-popover popup-date-picker ${
                  lang === 'en' ? 'en' : 'vn'
                }`}
                onChange={(dates: any) => {
                  onChange(dates);
                  props.onChange;
                }}
                format={format}
                showTime={
                  format.length > 10 && { format: 'HH:mm', defaultValue: dayjs('00:00', 'HH:mm') }
                }
                status={errorMessage ? 'error' : ''}
                {...field}
                {...props}
              />
            </ConfigProvider>
          )}
        />
        {errorMessage && <DateMessageStyled>{errorMessage}</DateMessageStyled>}
      </ContainerDatePicker>
    </Container>
  );
};

export default DatePicker;

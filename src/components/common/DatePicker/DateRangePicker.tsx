/* eslint-disable @typescript-eslint/no-explicit-any */
import { ConfigProvider } from 'antd';
import localeEn from 'antd/es/locale/en_US';
import localeVn from 'antd/es/locale/vi_VN';
import { RangePickerProps } from 'antd/lib/date-picker';
import { FC, useEffect, useRef, useState } from 'react';
import { MinimizeIcon } from '../Icons';
import { ContainerRangePicker, StyledRangePicker } from './style';
import './style.scss';

import dayjs from 'dayjs';

import { useAppSelector } from '@/redux';
import { LANGS } from '@/constants';

interface IRangePicker {
  label?: string;
  format: string;
  onChange?: (date: any, dateString: any) => void;
  errors?: string;
}

const DateRangePicker: FC<IRangePicker & RangePickerProps> = ({
  format,
  onChange,
  errors,
  ...props
}) => {
  const { lang } = useAppSelector((state) => state.langReducer);

  const mask = String(format).includes('.') ? '.' : '/';

  const [isFocus, setIsFocus] = useState(false);
  const [value, setValue] = useState(props.defaultValue || props.value);

  const refDate = useRef<any>(null);
  const indexOfSlash = useRef<number[]>([]);
  const arrDate = useRef<string[]>([]);
  const [checkClear, setCheckClear] = useState(false);

  useEffect(() => {
    setValue(props.value);
  }, [props.value]);

  const dateInputMask = (elInput: any) => {
    indexOfSlash.current = [];
    arrDate.current = [];
    if (format) {
      for (let i = 0; i < format.length; i++) {
        if (format[i] === mask && indexOfSlash.current.length < 2) {
          indexOfSlash.current.push(i);
        }
      }

      arrDate.current = format.split(mask);
    }

    elInput?.forEach((elm: any, idx: number) => {
      if (elm) {
        elm.maxLength = 10;

        elm.addEventListener('keydown', (e: KeyboardEvent) => {
          const len = elm.value.length;
          if (e.keyCode !== 8) {
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

            if (!dayjs(elm.value, arrDate.current.join(mask)).isValid() && len === 9) {
              const date = elm.value.split(mask);

              const idxY = arrDate.current.indexOf('YYYY');
              const idxM = arrDate.current.indexOf('MM');
              const idxD = arrDate.current.indexOf('DD');

              if (Number(date[idxM]) === 0 || Number(date[idxM]) > 12) date[idxM] = 12;
              date[idxD] = new Date(date[idxY], date[idxM], 0).getDate();
              const temp = date.join(mask);

              elm.value = temp.substring(0, elm.value?.length - 1) + temp?.at(-1);
            }
          }
        });

        elm.addEventListener('keyup', (e: KeyboardEvent) => {
          const len = elm.value.length;
          if ((e.keyCode < 47 || e.keyCode > 57) && (e.keyCode > 105 || e.keyCode < 95)) {
            e.preventDefault();
          }
          if (idx === 1 && elInput[0].value > elm.value && len === 10) {
            elm.blur();
          } else if (len === 10) {
            elm.blur();
          }

          if (len === 0 && e.keyCode === 8) {
            setCheckClear(true);
          }
        });
      }
    });
  };
  const elInput = refDate.current?.querySelectorAll('.ant-picker-input input');
  const btnClear = refDate.current?.querySelectorAll('.ant-picker-clear')[0];

  useEffect(() => {
    dateInputMask(elInput);
  }, [elInput, format]);

  useEffect(() => {
    btnClear?.addEventListener('mousedown', () => {
      elInput[0].focus();
    });
  }, [btnClear]);

  useEffect(() => {
    if (checkClear) {
      onChange?.(null, null);
      setCheckClear(false);
    }
  }, [checkClear, onChange, setCheckClear]);

  return (
    <>
      <ContainerRangePicker ref={refDate}>
        <ConfigProvider locale={lang === LANGS.EN ? localeEn : localeVn}>
          <div
            id={`demo-date-range`}
            style={{ position: 'relative' }}
          >
            <StyledRangePicker
              lang={lang}
              isFocus={value || isFocus}
              placeholder={
                props.placeholder
                  ? props.placeholder
                  : [format.toLowerCase()!, format.toLowerCase()!]
              }
              dropdownClassName={
                lang === LANGS.EN
                  ? 'style-range-picker-popover en'
                  : 'style-range-picker-popover vn'
              }
              getPopupContainer={() => document.querySelector(`[id="demo-date-range"]`)}
              className='style-date'
              onFocus={() => setIsFocus(true)}
              onBlur={() => setIsFocus(false)}
              separator={
                <MinimizeIcon
                  width={16}
                  height={16}
                />
              }
              onChange={(dates: any, dateStrings: any) => {
                setValue(dates);
                onChange?.(dates, dateStrings);
              }}
              error={!!errors}
              format={format}
              {...props}
            />
          </div>
        </ConfigProvider>
        {/*<Label isFocus={value || isFocus}>{label ? label : t('dateRange')}</Label>*/}
      </ContainerRangePicker>
      {errors && (
        <span
          style={{
            fontSize: 13,
            color: '#DD0000',
            display: 'inline-block',
            marginTop: 4,
            width: '100% !important',
            textAlign: 'left',
          }}
        >
          {errors}
        </span>
      )}
    </>
  );
};

export default DateRangePicker;

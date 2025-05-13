'use client';
/* eslint-disable @typescript-eslint/no-explicit-any */
import { Select as SelectAntd } from 'antd';
import { BaseOptionType, DefaultOptionType } from 'antd/es/select';
import { SelectProps as SelectPropsAntd } from 'antd/lib';
import React, { ReactNode, useEffect, useRef, useState } from 'react';
import { Controller, useFormContext } from 'react-hook-form';
import { ChevronDownIcon } from '../Icons';
import * as Styled from './styles';
import { InputMessageStyle } from './styles';

export interface OptionType {
  key: string | number;
  name?: string;
  type?: string;
  label: string | number | undefined;
  value: string | number;
  disabled?: boolean;
  render: (value?: string) => ReactNode;
}

export interface SelectProps extends SelectPropsAntd {
  name: string;
  parentName?: string;
  options?: OptionType[];
  label?: string;
  subLabel?: string;
  selectedOptions?: Array<string | number>;
  setSelectedItems?: any;
  item?: string;
  filter?: boolean;
  required?: boolean;
  loading?: boolean;
  multiplePlaceholders?: boolean;
  isDropdownRender?: boolean;
  isFieldArray?: boolean;
  isInPopupLayer?: boolean;
  haveFilter?: boolean;
  messageError?: string;
}

const Select: React.FC<SelectProps> = ({
  name,
  mode,
  label,
  subLabel,
  selectedOptions,
  placeholder,
  options,
  required,
  isInPopupLayer,
  haveFilter,
  messageError,
  maxTagCount,
  onChange,
  ...props
}) => {
  const {
    control,
    register,
    watch,
    formState: { errors },
  } = useFormContext();
  const errorMessage: any = messageError || (errors && name ? (errors[name]?.message ?? '') : '');
  const selectRef = useRef<HTMLInputElement>(null);
  const [, setIsFocusSelect] = useState<boolean>(false);
  const [optionList, setOptionList] = useState<Array<string | number>>(watch(name) || []);

  const filteredOptions = mode
    ? options?.filter((option) =>
        selectedOptions
          ? !selectedOptions?.includes(option.value)
          : !optionList?.includes(option.value),
      )
    : [];

  const handleOnChange = (
    value: string | number | Array<string | number>,
    option: DefaultOptionType | DefaultOptionType[],
  ) => {
    onChange && onChange(value, option);
  };

  const handleOnFocus = () => {
    setIsFocusSelect(true);
  };

  const handleOnBlur = () => {
    watch(name)?.length ? setIsFocusSelect(true) : setIsFocusSelect(false);
  };

  useEffect(() => {
    if (!mode) {
      setIsFocusSelect(watch(name) ? false : !!label);
    } else {
      setOptionList(watch(name));
    }
  }, [watch(name)]);

  return (
    // <ConfigProvider theme={{ hashed: false }}>
    <Styled.StyledSelectWrapper>
      {label && (
        <Styled.StyledSelectLabel>
          {label}
          {required ? <span className='required-mark'>*</span> : null}
        </Styled.StyledSelectLabel>
      )}

      <Styled.StyledSelectContainer>
        {/* {subLabel && !mode && (
            <Styled.StyledSelectSubLabel isfocusselect={isFocusSelect.toString()}>
              {subLabel}
            </Styled.StyledSelectSubLabel>
          )} */}

        {!mode && (
          <Controller
            name={name}
            control={control}
            render={({ field: { onChange, ...field } }) => (
              <div
                id={`select-${name}`}
                style={{ position: 'relative' }}
              >
                <Styled.StyledSelect
                  {...field}
                  {...register(name)}
                  ref={selectRef}
                  allowClear
                  placeholder={placeholder}
                  suffixIcon={<ChevronDownIcon />}
                  value={watch(name) || watch(name) === 0 ? watch(name) : undefined}
                  onChange={(
                    value: string | number | Array<string | number>,
                    option: DefaultOptionType | DefaultOptionType[],
                  ) => {
                    onChange(value);
                    handleOnChange(value, option);
                  }}
                  onFocus={handleOnFocus}
                  onBlur={handleOnBlur}
                  popupClassName='select__dropdown'
                  getPopupContainer={() =>
                    !isInPopupLayer
                      ? document.querySelector(`[id="select-${name}"]`)
                      : document.body
                  }
                  item={subLabel ? 'false' : 'true'}
                  optionFilterProp='label'
                  filterOption={(inputValue: string, option: DefaultOptionType | BaseOptionType) =>
                    (option!.label?.toLowerCase() as unknown as string).includes(
                      inputValue?.trim()?.toLowerCase(),
                    )
                  }
                  listHeight={275}
                  // error={errorMessage}
                  status={errorMessage ? 'error' : ''}
                  {...props}
                  // notFoundContent={notFoundContent}
                >
                  {(options ?? []).map((item: OptionType) => (
                    <SelectAntd.Option
                      key={item.key}
                      value={item.value}
                      label={item.label}
                      disabled={item?.disabled}
                    >
                      {item.render()}
                    </SelectAntd.Option>
                  ))}
                </Styled.StyledSelect>
              </div>
            )}
          />
        )}

        {mode === 'multiple' && (
          <Controller
            name={name}
            control={control}
            render={({ field: { onChange, ...field } }) => (
              <div
                id={`select-${name}`}
                style={{ position: 'relative' }}
              >
                <Styled.StyledSelect
                  {...field}
                  {...register(name)}
                  ref={selectRef}
                  onChange={(
                    value: string | number | Array<string | number>,
                    option: DefaultOptionType | DefaultOptionType[],
                  ) => {
                    onChange(value);
                    handleOnChange(value, option);
                  }}
                  value={selectedOptions ? selectedOptions : optionList}
                  error={errorMessage}
                  status={errorMessage ? 'error' : 'default'}
                  mode={mode}
                  popupClassName='select__dropdown'
                  placeholder={placeholder}
                  suffixIcon={<ChevronDownIcon />}
                  onFocus={handleOnFocus}
                  onBlur={handleOnBlur}
                  allowClear
                  getPopupContainer={() =>
                    !isInPopupLayer
                      ? document.querySelector(`[id="select-${name}"]`)
                      : document.body
                  }
                  optionFilterProp='label'
                  filterOption={(inputValue: string, option: DefaultOptionType | BaseOptionType) =>
                    (option!.label?.toLowerCase() as unknown as string).includes(
                      inputValue?.trim()?.toLowerCase(),
                    )
                  }
                  listHeight={275}
                  {...props}
                  // notFoundContent={notFoundContent}
                >
                  {(haveFilter ? filteredOptions : options)?.map((item: OptionType) => (
                    <SelectAntd.Option
                      key={item.key}
                      value={item.value}
                      label={item.label}
                      // className={`status-${item?.type}`}
                      disabled={item?.disabled}
                    >
                      {item.render()}
                    </SelectAntd.Option>
                  ))}
                </Styled.StyledSelect>
              </div>
            )}
          />
        )}

        {mode === 'tags' && (
          <Controller
            name={name}
            control={control}
            render={({ field: { onChange, ...field } }) => (
              <div
                id={`select-${name}`}
                style={{ position: 'relative' }}
              >
                <Styled.StyledSelect
                  {...field}
                  {...register(name)}
                  ref={selectRef}
                  onChange={(
                    value: Array<string | number>,
                    option: DefaultOptionType | DefaultOptionType[],
                  ) => {
                    if (maxTagCount && value.length <= (maxTagCount as number)) {
                      onChange(value);
                      handleOnChange(value, option);
                    }

                    if (!maxTagCount) {
                      onChange(value);
                      handleOnChange(value, option);
                    }
                  }}
                  value={selectedOptions ? selectedOptions : optionList}
                  // error={errorMessage}
                  status={errorMessage ? 'error' : 'default'}
                  mode={mode}
                  popupClassName='select__dropdown'
                  placeholder={placeholder}
                  suffixIcon={<ChevronDownIcon />}
                  onFocus={handleOnFocus}
                  onBlur={handleOnBlur}
                  allowClear
                  getPopupContainer={() =>
                    !isInPopupLayer
                      ? document.querySelector(`[id="select-${name}"]`)
                      : document.body
                  }
                  optionFilterProp='label'
                  listHeight={275}
                  showSearch
                  {...props}
                  // notFoundContent={notFoundContent}
                >
                  {filteredOptions?.map((item: OptionType) => (
                    <SelectAntd.Option
                      key={item.key}
                      value={item.value}
                      label={item.label}
                      disabled={item?.disabled}
                    >
                      {item.render()}
                    </SelectAntd.Option>
                  ))}
                </Styled.StyledSelect>
              </div>
            )}
          />
        )}
      </Styled.StyledSelectContainer>
      {errorMessage && (
        <InputMessageStyle error={Boolean(errorMessage)}>
          <>{errorMessage}</>
        </InputMessageStyle>
      )}
    </Styled.StyledSelectWrapper>
    // </ConfigProvider>
  );
};

export default Select;

'use client';
import { InputProps as InputPropsAntd } from 'antd';
import { TextAreaProps } from 'antd/lib/input';
import React, { ReactNode, useState } from 'react';
import { Controller, useFormContext } from 'react-hook-form';
import * as Styled from './styles';

interface InputProps extends InputPropsAntd {
  name: string;
  label?: string;
  subLabel?: string;
  icon?: ReactNode;
  placementIcon?: 'left' | 'right';
  height?: string;
  required?: boolean;
  messageError?: string;
  $fontSizeCustom?: string;
  type?: 'password' | 'textarea' | 'copy' | 'time' | 'number' | 'numberFloat' | 'color';
}

const Input: React.FC<InputProps & TextAreaProps> = ({
  name,
  label,
  subLabel,
  icon,
  placementIcon,
  height,
  required,
  messageError,
  type,
  $fontSizeCustom,
  onChange,
  ...props
}) => {
  const [isFocusInput, setIsFocusInput] = useState<boolean>(false);
  const {
    control,
    register,
    getValues,
    formState: { errors },
  } = useFormContext();
  const errorMessage: any = messageError || (errors && name ? (errors[name]?.message ?? '') : '');

  const handleOnFocus = () => {
    setIsFocusInput(true);
  };

  const handleOnBlur = () => {
    getValues(name) ? setIsFocusInput(true) : setIsFocusInput(false);
  };
  return (
    <Styled.StyledInputWrapper>
      {label && (
        <Styled.StyledInputLabel>
          {label}
          {required ? <span className='required-mark'>*</span> : null}
        </Styled.StyledInputLabel>
      )}

      <Styled.StyledInputContainer>
        {type === 'textarea' ? (
          <Controller
            name={name}
            control={control}
            render={({ field: { onChange: onChangeInput, ...field } }) => (
              <Styled.StyledInputTextarea
                {...field}
                {...register(name)}
                value={getValues(name)}
                height={height}
                // error={errorMessage}
                status={errorMessage ? 'error' : ''}
                onChange={(event) => {
                  onChangeInput(event.target.value);
                  onChange && onChange(event);
                }}
                {...props}
              />
            )}
          />
        ) : (
          <>
            {icon && (
              <Styled.StyledInputDefaultIcon placementIcon={placementIcon}>
                {icon}
              </Styled.StyledInputDefaultIcon>
            )}

            <Controller
              name={name}
              control={control}
              render={({ field: { onChange: onChangeInput, ...field } }) =>
                type === 'password' ? (
                  <Styled.StyledInputPassword
                    {...field}
                    {...register(name)}
                    value={getValues(name)}
                    icon={icon}
                    placementIcon={placementIcon}
                    height={height}
                    // error={errorMessage}
                    hassublabel={(!!subLabel).toString()}
                    onFocus={handleOnFocus}
                    onBlur={handleOnBlur}
                    onChange={(event) => {
                      onChangeInput(event.target.value);
                      onChange && onChange(event);
                    }}
                    type={type}
                    status={errorMessage ? 'error' : ''}
                    {...props}
                  ></Styled.StyledInputPassword>
                ) : (
                  <Styled.StyledInputDefault
                    {...field}
                    {...register(name)}
                    value={getValues(name)}
                    icon={icon}
                    placementIcon={placementIcon}
                    height={height}
                    // error={errorMessage}
                    status={errorMessage ? 'error' : ''}
                    hassublabel={(!!subLabel).toString()}
                    onFocus={handleOnFocus}
                    onBlur={handleOnBlur}
                    $fontSizeCustom={$fontSizeCustom}
                    onChange={(event) => {
                      onChangeInput(event.target.value);
                      onChange && onChange(event);
                    }}
                    type={type}
                    {...props}
                  />
                )
              }
            />

            {subLabel && (
              <Styled.StyledInputSubLabel
                icon={icon}
                placementIcon={placementIcon}
                isfocusinput={isFocusInput.toString()}
              >
                {subLabel}
              </Styled.StyledInputSubLabel>
            )}
          </>
        )}
      </Styled.StyledInputContainer>

      {errorMessage && (
        <Styled.StyledInputMessageError>{errorMessage}</Styled.StyledInputMessageError>
      )}
    </Styled.StyledInputWrapper>
  );
};

export default Input;

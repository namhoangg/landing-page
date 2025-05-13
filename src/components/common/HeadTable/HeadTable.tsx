'use client';

import { Button, Title } from '@/components';
import React, { FC, ReactNode } from 'react';
import { Container, StyledSubTitle, StyledTitle } from './styles';

interface IProps {
  handleOpen?: () => void;
  title?: string;
  btnTitle?: string;
  btnIcon?: ReactNode;
  childElement?: ReactNode;
  subTitle?: ReactNode;
}

const HeadTable: FC<IProps> = ({
  handleOpen,
  title,
  subTitle,
  btnTitle,
  childElement,
  btnIcon,
}) => {
  return (
    <Container>
      <StyledTitle>
        <Title
          className='title'
          level={2}
        >
          {title}
        </Title>
        {subTitle && <StyledSubTitle>{subTitle}</StyledSubTitle>}
      </StyledTitle>

      {childElement
        ? childElement
        : btnTitle && (
            <Button
              icon={btnIcon}
              onClick={handleOpen}
              type='primary'
            >
              {btnTitle}
            </Button>
          )}
    </Container>
  );
};

export default HeadTable;

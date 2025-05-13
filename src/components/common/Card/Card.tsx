'use client';

import { theme } from '@/styles';
import { ICardProps, ICardStatusProps } from '@/types';
import { CardSkeleton, Paragraph, TextEllipseWithoutShowMore, TopicsTag } from '..';
import React from 'react';
import {
  StyledCard,
  StyledImage,
  StyledImageContainer,
  StyledStatus,
  StyledSubTitle,
  StyledTitle,
  StyledTopic,
} from './styles';
import { uniqueId } from 'lodash';

const colorStatusOpts: ICardStatusProps = {
  Upcoming: '#F3C300',
  Ongoing: ' #F1592C',
  Closed: '#111921',
};

export function Card({
  imgSrc,
  status,
  subTitle,
  title,
  description,
  classNameTitle,
  classNameDescription,
  classNameSubTitle,
  listTopic,
  row,
  onClick,
  loading,
  sizeTags,
}: ICardProps) {
  return loading ? (
    <CardSkeleton $type={row ? 'row' : 'col'} />
  ) : (
    <StyledCard
      className={row ? 'row' : 'col'}
      key={uniqueId()}
    >
      <StyledImageContainer
        className={row ? 'row-img' : 'col-img'}
        onClick={onClick}
      >
        <StyledImage
          src={imgSrc as string}
          alt=''
        />
      </StyledImageContainer>
      {status && (
        <StyledStatus color={colorStatusOpts[status as keyof ICardStatusProps]}>
          {status}
        </StyledStatus>
      )}
      <div className={row ? 'row-title' : 'col-title'}>
        <StyledSubTitle
          // level={5}
          color={theme.colors.YELLOW}
        >
          <span className={classNameSubTitle}>{subTitle}</span>
        </StyledSubTitle>
        <StyledTitle
          level={5}
          onClick={onClick}
        >
          <span className={`${classNameTitle} title`}>{title}</span>
        </StyledTitle>
        <Paragraph color={theme.colors.GRAY_DARK}>
          <div className={classNameDescription}>
            <TextEllipseWithoutShowMore
              length={400}
              data={description as string}
              className='card_desc'
            />
            {/* {description} */}
          </div>
        </Paragraph>
        {listTopic && (
          <StyledTopic>
            <TopicsTag
              buttonType={sizeTags ? sizeTags : 'big'}
              listTopics={listTopic}
            />
          </StyledTopic>
        )}
      </div>
    </StyledCard>
  );
}

export default Card;

import { uniqueId } from 'lodash';
import React from 'react';
import { StyledBtnFeature } from './styles';
import { ITagRes } from '@/types';
import { useRouter } from 'next/navigation';
import * as Styled from './styles';

interface ITopicsTagProps {
  buttonType?: 'big' | 'small';
  listTopics: ITagRes[];
  ghostType?: 'dark' | 'light';
}

const RESOURCE_SEARCH = '/search';

export default function TopicsTag({
  buttonType = 'small',
  listTopics,
  ghostType = 'dark',
}: ITopicsTagProps) {
  const router = useRouter();

  return (
    <Styled.StyledTopicsTag>
      {listTopics.map((topic) => (
        <StyledBtnFeature
          $buttonType={buttonType}
          $ghostType={ghostType}
          key={uniqueId('topic_')}
          onClick={() => router.push(`${RESOURCE_SEARCH}?tag=${topic?.slug}`)}
        >
          {topic?.name}
        </StyledBtnFeature>
      ))}
    </Styled.StyledTopicsTag>
  );
}

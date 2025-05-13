'use client';
import { Text } from '@/components';
import { StyledLink, StyledTextEllipsis } from './styles';

interface TextEllipsisProps {
  data: string;
  length?: number;
  haveShowMore?: boolean;
  className?: string;
  type?: 'text' | 'link';
  href?: string;
}

const DEFAULT_LENGTH_TEXT = 110;

const TextEllipsis = ({ type = 'text', href, ...props }: TextEllipsisProps) => {
  const { data, length = DEFAULT_LENGTH_TEXT } = props;

  const getDataShowMore = () => {
    return (
      <>
        <span>{(data ?? '').toString().slice(0, length)}...</span>
      </>
    );
  };

  if (data?.length < length) {
    return type === 'link' ? (
      <StyledLink
        href={href ?? ''}
        className={props.className}
      >
        {data}
      </StyledLink>
    ) : (
      <Text className={props?.className}>{data}</Text>
    );
  } else {
    return (
      <StyledTextEllipsis>
        <>
          {type === 'link' ? (
            <StyledLink href={href ?? ''}>{getDataShowMore()}</StyledLink>
          ) : (
            <Text className={props?.className}>{getDataShowMore()}</Text>
          )}
        </>
      </StyledTextEllipsis>
    );
  }
};

export default TextEllipsis;

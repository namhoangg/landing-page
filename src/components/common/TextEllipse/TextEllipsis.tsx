import { Text } from '@/components';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { StyledLink, StyledTextEllipsis } from './styles';

interface TextEllipsisProps {
  data: string;
  length?: number;
  haveShowMore?: boolean;
  className?: any;
  type?: 'text' | 'link';
  href?: string;
}

const DEFAULT_LENGTH_TEXT = 100;

const TextEllipsis = ({ type, href, ...props }: TextEllipsisProps) => {
  const { data, length = DEFAULT_LENGTH_TEXT, haveShowMore = true } = props;

  const { t } = useTranslation();
  const [isShowMore, setIsShowMore] = useState<boolean>(true);

  const getDataShowMore = () => {
    return (
      <>
        {data?.slice(0, length)}
        {!haveShowMore && <span>...</span>}
      </>
    );
  };
  if (data?.length < length) {
    return type === 'link' ? (
      <StyledLink href={`${href}` ?? ''}>{data}</StyledLink>
    ) : (
      <Text className={props?.className}>{data}</Text>
    );
  } else {
    return (
      <StyledTextEllipsis>
        {isShowMore ? (
          <>
            {type === 'link' ? (
              <StyledLink href={`${href}` ?? ''}>{getDataShowMore()}</StyledLink>
            ) : (
              <Text className={props?.className}>{getDataShowMore()}</Text>
            )}

            {haveShowMore && (
              <button
                className='btnShow'
                onClick={() => {
                  setIsShowMore(false);
                }}
              >
                {t(' ...Show More')}
              </button>
            )}
          </>
        ) : (
          <>
            {type === 'link' ? (
              <StyledLink href={`${href}` ?? ''}>{data}</StyledLink>
            ) : (
              <Text className={props?.className}>{data}</Text>
            )}
            <button
              className='btnShow'
              onClick={() => {
                setIsShowMore(true);
              }}
            >
              {' '}
              Show Less
            </button>
          </>
        )}
      </StyledTextEllipsis>
    );
  }
};

export default TextEllipsis;

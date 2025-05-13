import { FC, useEffect, useState } from 'react';
import { useLazyGetFileTrustedQuery } from '@/services';
import { DefaultImage } from '@/public/imgs';
import { StyledNewCard } from './styles';
import TruncateText from '@/utils/TruncateText';

export interface NewCardProps {
  id: string;
  src: string;
  type: string;
  title: string;
  description: string;
  direction?: 'row' | 'column';
  size?: 'lg' | 'sm';
  onClick?: () => void;
}

export const NewsCard: FC<NewCardProps> = ({
  id,
  src,
  type,
  title,
  description,
  direction = 'column',
  size = 'sm',
  onClick,
}: NewCardProps) => {
  const [source, setSource] = useState<string>(default_image.src);
  const [getFile] = useLazyGetFileTrustedQuery();

  useEffect(() => {
    if (src) {
      getFile({ sub_path: src })
        .unwrap()
        .then((url) => setSource(url))
        .catch(() => {
          setSource(default_image.src);
          return;
        });
    }
  }, [src]);

  return (
    <StyledNewCard
      className={`news news--${direction} news--${size}`}
      id={id}
      onClick={() => {
        onClick && onClick();
      }}
    >
      <div className='news__img'>
        <img
          src={source}
          alt='News Article'
        />
      </div>
      <div className='news__info'>
        <p className='news__type color--primary-yellow'>{type}</p>
        <h5 className='color--primary-black'>{title}</h5>
        <p className='news__description color--gray-dark'>{TruncateText(description, 150)}</p>
      </div>
    </StyledNewCard>
  );
};

export default NewsCard;

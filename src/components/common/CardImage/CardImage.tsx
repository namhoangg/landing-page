import { StyledCardImage } from './styles';

interface CardImageProps {
  className?: string;
  width?: string | number;
  backgroundImage: string;
  name?: string;
  description?: string;
  subTitle?: string;
  size?: 'lg' | 'sm';
}

const CardImage = ({
  className,
  width,
  backgroundImage,
  name,
  description,
  subTitle,
  size = 'lg',
}: CardImageProps) => {
  return (
    <StyledCardImage
      className={className}
      width={width}
    >
      <div className='background'>
        <img
          src={backgroundImage}
          alt=''
          onContextMenu={(e) => e.preventDefault()}
          onDragStart={(e) => e.preventDefault()}
        />
        <div className={`card-content-${size}`}>
          {subTitle && <p className={`card-content-${size}__subTitle`}>{subTitle}</p>}
          <p className={`card-content-${size}__title title`}>{name}</p>
          {description && <p className={`card-content-${size}__description`}>{description}</p>}
        </div>
      </div>
    </StyledCardImage>
  );
};

export default CardImage;

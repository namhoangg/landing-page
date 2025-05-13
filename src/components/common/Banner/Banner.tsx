import { color } from '@/styles';
import { StaticImageData } from 'next/image';
import { ReactNode } from 'react';
import { StyledContainer, StyledFigure, StyledSubTitle, StyledTitle } from './styles';
import { ImageSkeleton } from '..';
import { ImgNotFound } from '@/public/imgs';
import { Wrapper } from '@/components';

export interface BannerProps {
  src: string | StaticImageData;
  title?: string;
  subTitle?: string;
  isCenter: boolean;
  children?: ReactNode;
  loading?: boolean;
  webpSrc?: string | StaticImageData;
}

export default function Banner({
  loading,
  src,
  isCenter,
  title,
  subTitle,
  children,
  webpSrc,
}: BannerProps) {
  return loading ? (
    <ImageSkeleton $aspectRatio={15 / 4} />
  ) : (
    <StyledFigure>
      <picture>
        <source
          srcSet={webpSrc as string}
          type='image/webp'
        />
        <img
          className='image-background'
          src={(src as string) ?? ImgNotFound.src}
          alt='A responsive image'
        />
      </picture>
      <StyledContainer $isCenter={isCenter}>
        <Wrapper>
          <div className='inner-content'>
            {title ? (
              <>
                <StyledTitle>{title}</StyledTitle>
                <StyledSubTitle color={color.WHITE}>{subTitle}</StyledSubTitle>
              </>
            ) : (
              <>{children}</>
            )}
          </div>
        </Wrapper>
      </StyledContainer>
    </StyledFigure>
  );
}

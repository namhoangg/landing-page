'use client';
import { ImgNotFound } from '@/public/imgs';
import { useGetFileTrustedQuery } from '@/services';
import { Skeleton } from 'antd';
import { StaticImageData } from 'next/image';
import { FC, memo, useEffect, useRef, useState } from 'react';
import { StyledImage } from './styles';

const DEFAULT_WIDTH = 500;
const DEFAULT_HEIGHT = 125;

export interface IImageProps {
  className?: string;
  $rounded?: boolean;
  width?: number;
  height?: number;
  src: string | StaticImageData | undefined;
  defaultImage?: string;
  alt?: string;
}

const CustomizeImage: FC<IImageProps> = ({
  width = DEFAULT_WIDTH,
  height = DEFAULT_HEIGHT,
  className,
  src,
  defaultImage,
  alt = 'Ban Vien Corporation',
}) => {
  const imgRef = useRef<HTMLImageElement>(null);
  const [imageLoaded, setImageLoaded] = useState<boolean>(false);

  const { data: imageData, isFetching: isGettingImage } = useGetFileTrustedQuery(
    {
      sub_path: src,
    },
    { skip: !src },
  );

  const removeTransition = () => {
    setTimeout(() => {
      imgRef.current?.classList.remove('transition');
    }, 1000);
  };

  // useEffect(() => {
  //   const img = new Image();

  //   if (imageData && !imageLoaded) {
  //     const originalSrc = imageData ?? defaultImage ?? ImgNotFound.src;

  //     convertToWebp(originalSrc)
  //       .then((res) => {
  //         img.src = res;
  //         img.onload = () => {
  //           setImageLoaded(true);
  //           removeTransition();
  //         };

  //         if (imgRef.current) {
  //           imgRef.current.src = res;
  //         }
  //       })
  //       .catch((err) => {
  //         console.log('convert to webp err');
  //       });
  //   }
  //   return () => {
  //     // Clean up the image object if the component unmounts before the image is loaded
  //     img.onload = null;
  //   };
  // }, [imageData]);

  useEffect(() => {
    const img = new Image();

    if (imageData && !imageLoaded) {
      img.src = imageData ?? defaultImage ?? ImgNotFound.src;

      img.onload = () => {
        setImageLoaded(true);
        removeTransition();
      };
    }

    return () => {
      // Clean up the image object if the component unmounts before the image is loaded
      img.onload = null;
    };
  }, [imageData]);

  return isGettingImage ? (
    <Skeleton.Image
      active={isGettingImage}
      style={{ width: '100%', height: '100%' }}
    />
  ) : (
    <StyledImage
      ref={imgRef}
      src={imageData ?? defaultImage ?? ImgNotFound.src}
      width={width}
      height={height}
      className={`${className} ${imageLoaded ? 'loaded' : 'opacity-0'} transition`}
      alt={alt || 'Ban Vien Corporation'}
      style={{
        maxWidth: '100%',
        height: '100%',
      }}
    />
  );
};

export default memo(CustomizeImage);

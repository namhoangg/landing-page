'use client';

import React, { FC, useRef, useEffect, useState, memo } from 'react';
import { ImgNotFound } from '@/public/imgs';
import { StaticImageData } from 'next/image';
import { StyledImage } from './styles';

export interface IImageProps {
  className?: string;
  $rounded?: boolean;
  width?: number;
  height?: number;
  src: string | StaticImageData | undefined;
  alt?: string;
  loading?: boolean;
}

const DEFAULT_WIDTH = 500;
const DEFAULT_HEIGHT = 125;

const CustomizeImage: FC<IImageProps> = ({
  width = DEFAULT_WIDTH,
  height = DEFAULT_HEIGHT,
  className,
  src,
  loading,
  alt,
  ...props
}) => {
  const imgRef = useRef<HTMLImageElement>(null);
  const [imageLoaded, setImageLoaded] = useState<boolean>(false);

  const removeTransition = () => {
    setTimeout(() => {
      imgRef.current?.classList.remove('transition');
    }, 1000);
  };

  // useEffect(() => {
  //   const img = new Image();
  //   const originalSrc = (src as string) ?? ImgNotFound.src;
  //   setConvertingWebp(true);

  //   convertToWebp(originalSrc)
  //     .then((res) => {
  //       img.src = res;
  //       img.onload = () => {
  //         setImageLoaded(true);
  //         removeTransition();
  //       };

  //       if (imgRef.current) {
  //         imgRef.current.src = res;
  //       }
  //     })
  //     .catch((err) => {
  //       console.log('convert to webp err');
  //     })
  //     .finally(() => setConvertingWebp(false))

  //   return () => {
  //     // Clean up the image object if the component unmounts before the image is loaded
  //     img.onload = null;
  //   };
  // }, []);

  useEffect(() => {
    const img = new Image();
    img.src = (src as string) ?? ImgNotFound.src;

    img.onload = () => {
      setImageLoaded(true);
      removeTransition();
    };

    return () => {
      // Clean up the image object if the component unmounts before the image is loaded
      img.onload = null;
    };
  }, []);

  return (
    <StyledImage
      ref={imgRef}
      src={(src as string) ?? ImgNotFound.src}
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

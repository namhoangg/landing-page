import React from 'react';
import { Banner, BannerProps } from '..';
import { useGetFileTrustedQuery } from '@/services';
import { ImgNotFound } from '@/public/imgs';

const GetBanner = (props: BannerProps) => {
  const { data: imageData, isFetching: isGettingImage } = useGetFileTrustedQuery(
    {
      sub_path: props.src,
    },
    { skip: !props.src },
  );

  return (
    <Banner
      {...props}
      src={imageData ?? ImgNotFound.src}
      loading={props.loading || isGettingImage}
    />
  );
};

export default GetBanner;

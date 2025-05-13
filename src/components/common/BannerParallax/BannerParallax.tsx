import { StaticImageData } from 'next/image';
import { CSSProperties, ReactNode } from 'react';
import { ParallaxLayer } from './styles';
import { Wrapper } from '@/components';

interface BannerParallaxProps {
  src: string | StaticImageData;
  children: ReactNode;
  style?: CSSProperties;
}

export default function BannerParallax({ src, children, style }: BannerParallaxProps) {
  return (
    <>
      <div style={style}>
        <ParallaxLayer src={src}>
          <Wrapper>
            <div className='inner-content'>{children}</div>
          </Wrapper>
        </ParallaxLayer>
      </div>
    </>
  );
}

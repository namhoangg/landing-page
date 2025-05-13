'use client';
import React, { useRef } from 'react';
import { A11y, Autoplay, EffectCoverflow, Navigation, Pagination, Scrollbar } from 'swiper/modules';
import { SwiperProps } from 'swiper/react';
import type SwiperCore from 'swiper';
import 'swiper/scss';
import 'swiper/swiper-bundle.css';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';
import { StyledNavigationBtn, StyledNavigationButtonContainer, StyledSwiper } from './styles';
import { ChevronLeftIcon, ChevronRightIcon } from '@/components';

interface CarouselProps extends SwiperProps {
  delay?: number;
  children: React.ReactNode;
  isAutoPlay?: boolean;
  space?: number;
  isNavigation?: boolean;
}

const Carousel = ({
  delay,
  children,
  space,
  isAutoPlay,
  isNavigation,
  ...props
}: CarouselProps) => {
  const swiperRef = useRef<any>(null);

  const goNext = () => {
    swiperRef.current?.slideNext();
  };

  const goBack = () => {
    swiperRef.current?.slidePrev();
  };

  return (
    <>
      <StyledSwiper
        modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay, EffectCoverflow]}
        onBeforeInit={(swiper) => {
          swiperRef.current = swiper as SwiperCore;
        }}
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        autoplay={
          isAutoPlay || {
            delay: delay ? delay : 4000,
            disableOnInteraction: false,
          }
        }
        spaceBetween={space}
        {...props}
      >
        {children}
      </StyledSwiper>
      {isNavigation ? (
        <StyledNavigationButtonContainer>
          <div onClick={goBack}>
            <StyledNavigationBtn className='button-left'>
              <ChevronLeftIcon />
            </StyledNavigationBtn>
          </div>
          <div onClick={goNext}>
            <StyledNavigationBtn className='button-right'>
              <ChevronRightIcon />
            </StyledNavigationBtn>
          </div>
        </StyledNavigationButtonContainer>
      ) : null}
    </>
  );
};

export default Carousel;

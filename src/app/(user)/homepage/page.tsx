'use client';

import { Motion } from '@/components';
import { BannerLogistic } from '@/public/imgs';
import { HomepageStyled } from './styled';
import './styles.css';

import SwiperCore from 'swiper';
import { useInView } from 'react-intersection-observer';
import Link from 'next/link';
import { Scrollbar } from 'swiper/modules';

SwiperCore.use([Scrollbar]);

function Homepage() {
  const [bannerRef, bannerInView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <HomepageStyled>
      <div ref={bannerRef}>
        <Motion isVisible={bannerInView}>
          <div className='banner'>
            <img
              src={BannerLogistic.src}
              alt={'alt'}
              className='banner__background-img'
            />
            <div className='banner__content'>
              Streamline Your Supply Chain with Freight Flex
              <div className='banner__title'>
                Fast, reliable, and secure shipping solutions for businesses of all sizes
              </div>
              <div className='banner__buttons'>
                <Link
                  href={'/contact'}
                  className='banner__button banner__button--primary'
                >
                  Contact Us
                </Link>
                <Link
                  href={'/quotes/request'}
                  className='banner__button banner__button--secondary'
                >
                  Get a Quote
                </Link>
              </div>
            </div>
          </div>
        </Motion>
      </div>
    </HomepageStyled>
  );
}

export default Homepage;

'use client';

import { Button, Wrapper } from '@/components';
import { headerNavList } from '@/constants';
import { Col, Row } from 'antd';
import React, { useEffect, useMemo, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { StyledHeader, StyledLogo, StyledLogoText, StyledImage } from './styles';
import Link from 'next/link';
import * as process from 'process';
import { useDocumentSize } from '@/hooks';
import { breakPointValue } from '@/styles';
import { Logo, Nav } from './components';
import { useParams, usePathname } from 'next/navigation';
import { IPathname, TPathname } from '@/types';
import FreightFlexLogo from '@/public/imgs/freight-removebg-preview.png';

const PATHNAME: IPathname = {
  RESOURCES: '/resources',
  RESOURCES_CASE_STUDIES: '/resources/case-studies',
  RESOURCES_INNOVATION_HUB: '/resources/innovation-hub',
  RESOURCES_INSIGHTS: '/resources/insights',
  RESOURCES_INSIGHTS_DETAIL: {
    pathname: '/resources/insights',
    params: ['slug'],
  },
  FAQS: '/faqs',
  COMPANY_ABOUT: '/company/about',
  COMPANY_MEDIA_CENTER_NEWS_DETAIL: {
    pathname: '/company/media-center/news',
    params: ['slug'],
  },
  COMPANY_MEDIA_CENTER_NEWS_CATEGORY: {
    pathname: '/company/media-center/news/category',
    params: ['slug'],
  },
  COMPANY_MEDIA_CENTER_EVENT_DETAIL_PREVIEW: {
    pathname: '/company/media-center/events',
    params: ['slug'],
    isPreview: true,
  },
  COMPANY_OUR_CULTURE: '/company/our-culture',
  COMPANY_ESG_DETAIL: {
    pathname: '/company/esg',
    params: ['slug'],
  },
  SERVICES: '/services',
  SOLUTIONS: '/solutions',
  INDUSTRIES: '/industries',
  SEARCH: '/search',
  GALLERY_DETAIL: {
    pathname: '/gallery',
    params: ['slug'],
  },
};

const PATHNAME_WHITE_BACKGROUND: IPathname = {
  COMPANY_MEDIA_CENTER_EVENTS: '/company/media-center/events',
  COMPANY_MEDIA_CENTER_EVENT_DETAIL: {
    pathname: '/company/media-center/events',
    params: ['slug'],
  },
};

const Header = (): JSX.Element => {
  const { t } = useTranslation();
  const { width } = useDocumentSize();
  const params = useParams();
  const headerRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  const [isTransparent, setIsTransparent] = useState(false);
  const isNotHaveBackground = useMemo(() => {
    return Object.keys(PATHNAME).some((item) => {
      if (typeof PATHNAME[item as keyof typeof PATHNAME] === 'string')
        return pathname === PATHNAME[item as keyof typeof PATHNAME];
      else {
        return (
          pathname ===
          `${(PATHNAME[item as keyof typeof PATHNAME] as TPathname).pathname}/${(
            PATHNAME[item as keyof typeof PATHNAME] as TPathname
          ).params
            .map((param) => params[param])
            .join('/')}${
            (PATHNAME[item as keyof typeof PATHNAME] as TPathname).isPreview ? '/preview' : ''
          }`
        );
      }
    });
  }, [pathname]);

  const isWhiteBackground = useMemo(() => {
    return Object.keys(PATHNAME_WHITE_BACKGROUND).some((item) => {
      if (
        typeof PATHNAME_WHITE_BACKGROUND[item as keyof typeof PATHNAME_WHITE_BACKGROUND] ===
        'string'
      )
        return (
          pathname === PATHNAME_WHITE_BACKGROUND[item as keyof typeof PATHNAME_WHITE_BACKGROUND]
        );
      else {
        return (
          pathname ===
          `${
            (PATHNAME_WHITE_BACKGROUND[item as keyof typeof PATHNAME_WHITE_BACKGROUND] as TPathname)
              .pathname
          }/${(
            PATHNAME_WHITE_BACKGROUND[item as keyof typeof PATHNAME_WHITE_BACKGROUND] as TPathname
          ).params
            .map((param) => params[param])
            .join('/')}${
            (PATHNAME_WHITE_BACKGROUND[item as keyof typeof PATHNAME_WHITE_BACKGROUND] as TPathname)
              .isPreview
              ? '/preview'
              : ''
          }`
        );
      }
    });
  }, [pathname]);

  const openCareerWebsite = () => {
    window.open(process.env.NEXT_PUBLIC_CAREER_SITE_URL, '_blank');
  };

  useEffect(() => {
    setIsOpenMenu(false);
  }, [pathname]);

  useEffect(() => {
    // get header height
    const headerHeight = headerRef.current?.offsetHeight;

    if (isWhiteBackground) {
      setIsTransparent(true);
    }

    if (isNotHaveBackground) {
      setIsTransparent(false);
    }

    if (headerHeight) {
      const handleScroll = () => {
        if (window.scrollY > headerHeight!) {
          headerRef.current?.classList.add('transparent');
          setIsTransparent(false);
        } else if (!isOpenMenu && !isWhiteBackground) {
          headerRef.current?.classList.remove('transparent');
          setIsTransparent(true);
        }
      };

      if (isOpenMenu || window.scrollY > headerHeight) {
        headerRef.current?.classList.add('transparent');
        setIsTransparent(false);
      } else if (!isWhiteBackground) {
        headerRef.current?.classList.remove('transparent');
        setIsTransparent(true);
      }

      window.addEventListener('scroll', handleScroll);

      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    } else {
      return () => {
        // do nothing
      };
    }
  }, [isOpenMenu, isWhiteBackground, isNotHaveBackground]);

  return (
    <StyledHeader
      id='header'
      ref={headerRef}
      className={`${!isNotHaveBackground ? 'bg-transparent' : ''} ${
        width <= breakPointValue.XS ? 'mobile' : ''
        // }`}
      } ${isWhiteBackground ? 'transparent' : ''}`}
      style={{
        backgroundColor: `${!isNotHaveBackground ? '' : 'transparent'} ${
          width <= breakPointValue.XS ? 'mobile' : ''
        }`,
      }}
    >
      <Wrapper>
        <div className='inner-content'>
          <Row>
            <Col
              xs={12}
              sm={12}
              md={6}
              className='header-logo'
            >
              <Link
                href='/'
                shallow
              >
                <StyledLogo
                  className={`${width <= breakPointValue.MD ? 'custom-logo--mobile' : 'custom-logo '}`}
                >
                  <StyledImage src={FreightFlexLogo.src} />
                  {width <= breakPointValue.MD ? '' : <StyledLogoText>FreightFlex</StyledLogoText>}
                </StyledLogo>
              </Link>
            </Col>
          </Row>
        </div>
      </Wrapper>
    </StyledHeader>
  );
};

export default Header;

import { Wrapper } from '@/components';
import { useDocumentSize } from '@/hooks';
import { Col, Row } from 'antd';
import { StyledFooter } from './styles';
import { StyledImage, StyledLogo, StyledLogoText } from './styles';
import FreightFlexLogo from '@/public/imgs/freight-removebg-preview.png';
import React from 'react';

const Footer = () => {
  const { width } = useDocumentSize();

  return (
    <StyledFooter id='footer'>
      <Wrapper>
        <div className='inner-content'>
          <Row className='footer-top'>
            <Col
              xs={24}
              sm={24}
              md={6}
              lg={4}
              className='footer-logo'
            >
              <StyledLogo>
                <StyledImage src={FreightFlexLogo.src} />
                <StyledLogoText>FreightFlex</StyledLogoText>
              </StyledLogo>
            </Col>
            <Col
              xs={24}
              sm={24}
              md={18}
              lg={16}
              className='footer-nav'
            >
              {/* <Nav
                items={footerNavList}
                isMobile={false}
              /> */}
            </Col>
            <Col
              xs={24}
              sm={24}
              md={24}
              lg={4}
              className='footer-social'
            ></Col>
          </Row>
        </div>
      </Wrapper>
    </StyledFooter>
  );
};

export default Footer;

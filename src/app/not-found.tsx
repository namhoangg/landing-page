'use client';

import { Button, Col, Row } from 'antd';
import { useTranslation } from 'react-i18next';
import { NotFoundImg } from '@/public/imgs';
import { StyledPageNotFound } from '@/app/_styles';
import { PublicRoute } from '@/constants';
import { CustomizeImage } from '@/components';

const NotFound = () => {
  const { t } = useTranslation();
  return (
    <StyledPageNotFound>
      <Row>
        <Col
          xl={12}
          span={24}
          className='left-content'
        >
          <h1>Oops, something went wrong!!!</h1>
          <p>We couldn&apos;t find this page. Don&apos;t let this stop you and keep browsing.</p>
          <Button
            type='primary'
            className='btn-home'
            href={PublicRoute.HOME}
          >
            {t('button.goToHome')}
          </Button>
        </Col>
        <Col
          xl={12}
          span={24}
          className='right-content'
        >
          <CustomizeImage
            src={NotFoundImg.src}
            alt='404'
          />
        </Col>
      </Row>
    </StyledPageNotFound>
  );
};

export default NotFound;

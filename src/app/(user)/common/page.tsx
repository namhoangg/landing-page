'use client';

import { Button, Checkbox, ChevronRightIcon, DatePicker, Input, Select } from '@/components';
import { FormProvider, useForm } from 'react-hook-form';
import { StyledWrapperHome } from '@/app/_styles';
import { Row, Col } from 'antd';
import { theme } from '@/styles';

const { colors } = theme;
export default function Home() {
  const form = useForm({});
  return (
    <StyledWrapperHome>
      <FormProvider {...form}>
        <div style={{ margin: '20px 0' }}>-------------------- FORM --------------</div>
        <Row
          gutter={[30, 30]}
          style={{ width: '100%' }}
        >
          <Col span={8}>
            <Input
              name='input'
              label='input'
              placeholder='123'
            />
          </Col>
          <Col span={8}>
            <Select
              name='select'
              label='select'
              placeholder='12344'
            />
          </Col>
          <Col span={8}>
            <Checkbox
              name='checkbox'
              title='check box'
            />
          </Col>
          <Col span={8}>
            <DatePicker
              name='date'
              label='date picker'
              format={'DD/MM/YYYY'}
            />
          </Col>
        </Row>

        <div style={{ margin: '20px 0' }}>-------------------- BUTTON --------------</div>
        <Row style={{ width: '100%' }}>
          <Button type='primary'>APPLY NOW</Button>

          <Button>APPLY NOW</Button>

          <Button
            type='link'
            icon={<ChevronRightIcon />}
          >
            See All
          </Button>

          <Button
            shape='circle'
            type='primary'
          >
            <ChevronRightIcon />
          </Button>

          <Button
            shape='circle'
            $colorBtn={colors.WHITE}
            $bgBtn={colors.BLACK}
            $colorBtnHover={colors.WHITE}
            $bgBtnHover={colors.YELLOW_DARK}
          >
            <ChevronRightIcon />
          </Button>
        </Row>
      </FormProvider>
    </StyledWrapperHome>
  );
}

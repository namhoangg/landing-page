import { Checkbox, Input, Select, Title } from '@/components';
import { theme } from '@/styles';
import { Col, Row, Collapse } from 'antd'; // Adding Collapse from antd
import { uniqueId } from 'lodash';
import React from 'react';
import { TContactForm } from '@/schemas';
import { StyledText, SubmitButton } from './styles';
import { useRouter } from 'next/navigation';
import { PublicRoute } from '@/constants';
import { useTranslation } from 'react-i18next';
import { Client } from '@/types';

interface IFormProps {
  form: any;
  onSubmit: (data: Client) => void;
  type?: 'view' | 'edit' | 'create';
}

export default function ContactForm({ form, onSubmit, type = 'create' }: IFormProps) {
  const router = useRouter();
  const { t } = useTranslation();
  const { Panel } = Collapse;

  return (
    <div
      className='form__container'
      id='form'
    >
      <div className='inner-content'>
        <form>
          <Title
            level={2}
            className='form__title'
          >
            {t('clientInfoForm.contactInfo')}
          </Title>
          <br />

          {/* Account Information */}
          <Collapse style={{ marginBottom: '20px' }}>
            <Panel header={t('client.form.accountInfo') || "Account Information"} key="1">
              <Row gutter={[16, 16]}>
                <Col span={24} md={12} lg={8}>
                  <Input
                    name="email"
                    label={t('client.form.email') || "Email"}
                    required
                    disabled={type === 'view'}
                    placeholder={t('client.form.enterEmail') || "Enter email"}
                  />
                </Col>
                <Col  span={24} md={12} lg={8}>
                  <Input
                    name="name"
                    label={t('client.form.name') || "Name"}
                    required
                    disabled={type === 'view'}
                    placeholder={t('client.form.enterName') || "Enter name"}
                  />
                </Col>
              </Row>
            </Panel>
          </Collapse>

          {/* Company Information */}
          <Collapse defaultActiveKey={['1']} style={{ marginBottom: '20px' }}>
            <Panel header={t('client.form.companyInfo') || "Company Information"} key="1">
              <Row gutter={[16, 16]} align={'middle'}>
                <Col  span={24} md={12} lg={8}>
                  <Input
                    name="companyInfo.name"
                    label={t('client.form.companyName') || "Company Name"}
                    required
                    disabled={type === 'view'}
                    placeholder={t('client.form.enterCompanyName') || "Enter company name"}
                  />
                </Col>
                <Col  span={24} md={12} lg={8}>
                  <Input
                    name="companyInfo.address"
                    label={t('client.form.companyAddress') || "Company Address"}
                    required
                    disabled={type === 'view'}
                    placeholder={t('client.form.enterCompanyAddress') || "Enter company address"}
                  />
                </Col>
                <Col  span={24} md={12} lg={8}>
                  <Input
                    name="companyInfo.city"
                    label={t('client.form.companyCity') || "City"}
                    placeholder={t('client.form.enterCompanyCity') || "Enter city"}
                    disabled={type === 'view'}
                  />
                </Col>
                <Col  span={24} md={12} lg={8}>
                  <Input
                    name="companyInfo.country"
                    label={t('client.form.companyCountry') || "Country"}
                    placeholder={t('client.form.enterCompanyCountry') || "Enter country"}
                    disabled={type === 'view'}
                  />
                </Col>
                <Col  span={24} md={12} lg={8}>
                  <Input
                    name="companyInfo.zipCode"
                    label={t('client.form.companyZipCode') || "Zip Code"}
                    placeholder={t('client.form.enterCompanyZipCode') || "Enter zip code"}
                    disabled={type === 'view'}
                  />
                </Col>
                <Col  span={24} md={12} lg={8}>
                  <Input
                    name="companyInfo.email"
                    label={t('client.form.companyEmail') || "Company Email"}
                    placeholder={t('client.form.enterCompanyEmail') || "Enter company email"}
                    disabled={type === 'view'}
                  />
                </Col>
                <Col  span={24} md={12} lg={8}>
                  <Input
                    name="companyInfo.phone"
                    label={t('client.form.companyPhone') || "Company Phone"}
                    placeholder={t('client.form.enterCompanyPhone') || "Enter company phone"}
                    disabled={type === 'view'}
                  />
                </Col>
                <Col  span={24} md={12} lg={8}>
                  <Input
                    name="companyInfo.taxNumber"
                    label={t('client.form.companyTaxNumber') || "Tax Number"}
                    disabled={type === 'view'}
                    placeholder={t('client.form.enterCompanyTaxNumber') || "Enter tax number"}
                  />
                </Col>
                <Col  span={24} md={12} lg={8}>
                  {/* You might need to implement a CheckboxCommon component or use Antd's Checkbox */}
                  <Checkbox
                    name="companyInfo.domestic"
                    type="checkbox"
                    disabled={type === 'view'}
                  >
                    {t('client.form.domestic') || "Domestic"}
                  </Checkbox>
                </Col>
              </Row>
            </Panel>
          </Collapse>

          {/* Representative Information */}
          <Collapse defaultActiveKey={['1']} style={{ marginBottom: '20px' }}>
            <Panel header={t('client.form.representativeInfo') || "Representative Information"} key="1">
              <Row gutter={[16, 16]}>
                <Col  span={24} md={12} lg={8}>
                  <Input
                    name="contactPersonInfo.firstName"
                    maxLength={20}
                    label={t('client.form.firstName') || "First Name"}
                    required
                    disabled={type === 'view'}
                    placeholder={t('client.form.enterFirstName') || "Enter first name"}
                  />
                </Col>
                <Col  span={24} md={12} lg={8}>
                  <Input
                    name="contactPersonInfo.lastName"
                    maxLength={20}
                    label={t('client.form.lastName') || "Last Name"}
                    required
                    disabled={type === 'view'}
                    placeholder={t('client.form.enterLastName') || "Enter last name"}
                  />
                </Col>
                <Col  span={24} md={12} lg={8}>
                  <Input
                    placeholder={t('client.form.enterEmail') || "Enter email"}
                    name="contactPersonInfo.email"
                    label={t('client.form.email') || "Email"}
                    disabled={type === 'view'}
                  />
                </Col>
                <Col  span={24} md={12} lg={8}>
                  <Input
                    placeholder={t('client.form.enterPhone') || "Enter phone"}
                    name="contactPersonInfo.phone"
                    maxLength={15}
                    disabled={type === 'view'}
                    label={t('client.form.phone') || "Phone"}
                  />
                </Col>
                <Col  span={24} md={12} lg={8}>
                  <Input
                    name="contactPersonInfo.position"
                    label={t('client.form.position') || "Position"}
                    placeholder={t('client.form.enterPosition') || "Enter position"}
                    disabled={type === 'view'}
                  />
                </Col>
              </Row>
            </Panel>
          </Collapse>

          <div style={{ display: 'flex', justifyContent: 'center', margin: '1em 0' }}>
            <SubmitButton
              type='primary'
              onClick={() => form.handleSubmit(onSubmit)()}
            >
              {t('quotes.submit') || "Submit"}
            </SubmitButton>
          </div>
          <StyledText color={theme.colors.GRAY}>
            {t('clientInfoForm.policyAgreement', { companyName : 'FreightFlex'})}
          </StyledText>
        </form>
      </div>
    </div>
  );
}
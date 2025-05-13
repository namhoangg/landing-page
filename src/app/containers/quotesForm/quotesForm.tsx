import { FormProvider, Resolver, useForm } from 'react-hook-form';
import {
  FormContainer,
  ModalContent,
  StyledForm,
  StyledInput,
  StyledSelect,
  StyledSuccessText,
  StyledText,
  SubmitButton,
} from './styles';

import {
  Checkbox,
  CheckIcon,
  Input,
  Modal,
  ModalClientInfo,
  Motion,
  Select,
  Title,
  Wrapper,
} from '@/components';
import { useGetOptionSelect, useHandleError, useModal } from '@/hooks';
import { createQuoteRequestFormSchema, getContactFormSchema, TContactForm } from '@/schemas';
import { useCreateClientMutation, useCreateQuotesMutation, useListUnlocoQuery } from '@/services';
import { theme } from '@/styles';
import { Button, Col, Collapse, Row } from 'antd';
import { uniqueId } from 'lodash';
import { useTranslation } from 'react-i18next';
import { useInView } from 'react-intersection-observer';
import React, { useState } from 'react';
import { enumWithoutNumberToArray } from '@/utils';
import {
  Client,
  Incoterm,
  QuoteRequestCreate,
  QuoteRequestLandingPageRequest,
  ShipmentModeLabel,
  ShipmentTypeLabel,
  TransportType,
  TransportTypeLabel,
  Unloco,
} from '@/types';

interface Props {
  onClose?: () => void;
}

export default function QuotesForm({ onClose }: Props) {
  // const { id } = router.query;
  const { t } = useTranslation();
  const [isFCL, setIsFCL] = useState(true);
  // @ts-ignore
  const form = useForm<QuoteRequestCreate>({
    mode: 'all',
    defaultValues: {
      cargoVolume: {
        totalCont20dc: 0,
        totalCont40dc: 0,
        totalCont20rf: 0,
        totalCont40rf: 0,
        totalCont20hc: 0,
        totalCont40hc: 0,
        totalCont45hc: 0,
      },
    },
    resolver: createQuoteRequestFormSchema(t, isFCL) as unknown as Resolver<
      QuoteRequestCreate,
      any
    >,
  });

  const onErr = useHandleError();
  const [submitForm, { isLoading: isCreatingQuote }] = useCreateQuotesMutation();

  const [quoteData, setQuoteData] = useState<QuoteRequestCreate>({} as QuoteRequestCreate);

  const {
    isOpen: isOpenConfirm,
    handleOpen: handleOpenSuccess,
    handleClose: handleCloseConfirm,
  } = useModal();

  const {
    isOpen: isOpenAddClient,
    handleOpen: handleOpenAddClient,
    handleClose: handleCloseAddClient,
  } = useModal();

  const onSubmit = (data: QuoteRequestCreate) => {
    console.log(data);
    setQuoteData(data);
    handleOpenAddClient();
  };

  const handleRequestQuote = (clientData: Client) => {
    const payload: QuoteRequestLandingPageRequest = {
      client: clientData,
      quoteRequest: quoteData,
    };
    submitForm(payload)
      .unwrap()
      .then(() => {
        form.reset();
        handleOpenSuccess();
      })
      .catch(onErr);
  };

  const [contactFormRef, contactFormInView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const { Panel } = Collapse;

  const transportTypeOptions = enumWithoutNumberToArray(TransportTypeLabel).map((item) => ({
    key: item.id,
    label: item.value,
    value: item.key,
    render: () => item.value,
  }));

  const shipmentTypeOptions = enumWithoutNumberToArray(ShipmentTypeLabel)
    .map((item) => ({
      ...item,
      value: t(`quotes.form.shipmentType.${item.key}`),
    }))
    .map((item) => ({
      key: item.id,
      label: item.value,
      value: item.key,
      render: () => item.value,
    }));
  const shipmentModeOptions = enumWithoutNumberToArray(ShipmentModeLabel).map((item) => ({
    key: item.id,
    label: item.value,
    value: item.key,
    render: () => item.value,
  }));
  const incotermOptions = enumWithoutNumberToArray(Incoterm).map((item) => ({
    key: item.id,
    label: item.value,
    value: item.key,
    render: () => item.value,
  }));
  const {
    dataSelect: originPortData,
    isFetching: isFetchingOriginPorts,
    handleSearchOption: handleSearchOriginPort,
  } = useGetOptionSelect<Unloco>(useListUnlocoQuery);

  const {
    dataSelect: desPortData,
    isFetching: isFetchingDesPorts,
    handleSearchOption: handleSearchDesPort,
  } = useGetOptionSelect<Unloco>(useListUnlocoQuery);

  const [errorModalTitle, setErrorModalTitle] = useState<string>('');
  const {
    isOpen: isOpenErrorModal,
    handleOpen: handleOpenErrorModal,
    handleClose: handleCloseErrorModal,
  } = useModal();
  const handleSubmitError = (errors: any) => {
    console.log(errors);
    // Check if we have a container validation error
    if (isFCL && errors.containers) {
      setErrorModalTitle(t('quotes.form.atLeastOneContainer'));
      handleOpenErrorModal();
    }
  };

  return (
    <>
      <ModalClientInfo
        isOpenModal={isOpenAddClient}
        onClose={handleCloseAddClient}
        onSubmit={handleRequestQuote}
      />
      <div ref={contactFormRef}>
        <Motion isVisible={contactFormInView}>
          <FormProvider {...form}>
            <FormContainer
              className='form__container'
              id='form'
            >
              <Wrapper>
                <div className='inner-content'>
                  <StyledForm>
                    <Title
                      level={2}
                      className='form__title'
                    >
                      {t('quotes.form.requestQuotes')}
                    </Title>
                    <br />

                    {/* Shipment Configuration */}
                    <Collapse
                      defaultActiveKey={['1']}
                      style={{ marginBottom: '20px' }}
                    >
                      <Panel
                        header={t('quotes.form.shipmentConfig') || 'Shipment Configuration'}
                        key='1'
                      >
                        <Row
                          gutter={[16, 16]}
                          align={'middle'}
                        >
                          <Col
                            span={24}
                            md={12}
                            lg={8}
                          >
                            <Select
                              options={transportTypeOptions}
                              name='transportType'
                              label={t('quotes.form.transportType.label')}
                              placeholder={t('quotes.form.transportType.placeholder')}
                              required
                              onChange={(value) => {
                                setIsFCL(value === TransportType.ROAD_FCL);
                                form.setValue(
                                  'cargoVolume.isFCL',
                                  value === TransportType.ROAD_FCL,
                                );
                              }}
                              showSearch
                            />
                          </Col>
                          <Col
                            span={24}
                            md={12}
                            lg={8}
                          >
                            <Select
                              options={shipmentTypeOptions}
                              name='shipmentType'
                              label={t('quotes.form.shipmentType.label')}
                              placeholder={t('quotes.form.shipmentType.placeholder')}
                              required
                              showSearch
                            />
                          </Col>
                          <Col
                            span={24}
                            md={12}
                            lg={8}
                          >
                            <Select
                              options={shipmentModeOptions}
                              name='shipmentMode'
                              label={t('quotes.form.shipmentMode.label')}
                              placeholder={t('quotes.form.shipmentMode.placeholder')}
                              required
                              showSearch
                            />
                          </Col>
                          <Col
                            span={24}
                            md={12}
                            lg={8}
                          >
                            <Select
                              options={incotermOptions}
                              name='incoterm'
                              label={t('quotes.form.incoterm.label')}
                              placeholder={t('quotes.form.incoterm.placeholder')}
                              required
                              showSearch
                            />
                          </Col>
                          <Col
                            span={24}
                            md={12}
                            lg={8}
                          >
                            <Select
                              options={originPortData.map((item) => ({
                                key: `origin-${item.id}`,
                                label: `${item.displayName}`,
                                value: item.id,
                                render: () => `${item.displayName}`,
                              }))}
                              name='originId'
                              label={t('quotes.form.origin.label')}
                              placeholder={t('quotes.form.origin.placeholder')}
                              required
                              loading={isFetchingOriginPorts}
                              onSearch={handleSearchOriginPort}
                              showSearch
                            />
                          </Col>
                          <Col
                            span={24}
                            md={12}
                            lg={8}
                          >
                            <Select
                              options={desPortData.map((item) => ({
                                key: `destination-${item.id}`,
                                label: `${item.displayName}`,
                                value: item.id,
                                render: () => `${item.displayName}`,
                              }))}
                              name='destinationId'
                              label={t('quotes.form.destination.label')}
                              placeholder={t('quotes.form.destination.placeholder')}
                              required
                              loading={isFetchingDesPorts}
                              onSearch={handleSearchDesPort}
                              showSearch
                            />
                          </Col>
                          <Col
                            span={24}
                            md={24}
                            lg={24}
                          >
                            <Input
                              type='textarea'
                              rows={6}
                              label={t('quotes.form.note.label')}
                              name='note'
                              placeholder={t('quotes.form.note.placeholder')}
                            />
                          </Col>
                        </Row>
                      </Panel>
                    </Collapse>

                    {/* Cargo Information */}
                    <Collapse
                      defaultActiveKey={['2']}
                      style={{ marginBottom: '20px' }}
                    >
                      <Panel
                        header={t('quotes.form.cargoInfo') || 'Cargo Information'}
                        key='2'
                      >
                        {isFCL ? (
                          <Row gutter={[16, 16]}>
                            <Col span={6}>
                              <Input
                                name='cargoVolume.totalCont20dc'
                                label={t('quotes.form.totalCont20dc')}
                                type='number'
                              />
                            </Col>
                            <Col span={6}>
                              <Input
                                name='cargoVolume.totalCont40dc'
                                label={t('quotes.form.totalCont40dc')}
                                type='number'
                              />
                            </Col>
                            <Col span={6}>
                              <Input
                                name='cargoVolume.totalCont20rf'
                                label={t('quotes.form.totalCont20rf')}
                                type='number'
                              />
                            </Col>
                            <Col span={6}>
                              <Input
                                name='cargoVolume.totalCont40rf'
                                label={t('quotes.form.totalCont40rf')}
                                type='number'
                              />
                            </Col>
                            <Col span={6}>
                              <Input
                                name='cargoVolume.totalCont20hc'
                                label={t('quotes.form.totalCont20hc')}
                                type='number'
                              />
                            </Col>
                            <Col span={6}>
                              <Input
                                name='cargoVolume.totalCont40hc'
                                label={t('quotes.form.totalCont40hc')}
                                type='number'
                              />
                            </Col>
                            <Col span={6}>
                              <Input
                                name='cargoVolume.totalCont45hc'
                                label={t('quotes.form.totalCont45hc')}
                                type='number'
                              />
                            </Col>
                          </Row>
                        ) : (
                          <Row gutter={[16, 16]}>
                            <Col span={12}>
                              <Input
                                placeholder={t('quotes.form.totalVolume')}
                                name='cargoVolume.totalVolume'
                                maxLength={15}
                                label={t('quotes.form.totalVolume')}
                                type={'number'}
                              />
                            </Col>
                            <Col span={12}>
                              <Input
                                name='cargoVolume.totalWeight'
                                label={t('quotes.form.totalWeight')}
                                placeholder={t('quotes.form.totalWeight')}
                                type={'number'}
                              />
                            </Col>
                          </Row>
                        )}
                      </Panel>
                    </Collapse>

                    <div style={{ textAlign: 'center', margin: '1em 0' }}>
                      <SubmitButton
                        loading={isCreatingQuote}
                        type='primary'
                        onClick={() => form.handleSubmit(onSubmit, handleSubmitError)()}
                      >
                        {t('quotes.submit')}
                      </SubmitButton>
                    </div>
                    <StyledText color={theme.colors.GRAY}>
                      {t('clientInfoForm.policyAgreement', { companyName: 'FreightFlex' })}
                    </StyledText>
                  </StyledForm>
                </div>
              </Wrapper>
            </FormContainer>
          </FormProvider>
        </Motion>
      </div>
      <Modal
        type='default'
        open={isOpenConfirm}
        onCancel={() => {
          handleCloseConfirm();
          onClose && onClose();
        }}
        destroyOnClose
        width={540}
      >
        <ModalContent>
          <CheckIcon />
          <StyledSuccessText>{t('quotes.form.success')}</StyledSuccessText>
        </ModalContent>
      </Modal>
      <Modal
        className='modal-confirm'
        type='confirm'
        confirmIcon={'!'}
        open={isOpenErrorModal}
        onCancel={handleCloseErrorModal}
        title={errorModalTitle}
      >
        <Row
          className='button'
          justify={'center'}
        >
          <Button
            key='back'
            onClick={handleCloseErrorModal}
          >
            {t('confirm.ok')}
          </Button>
        </Row>
      </Modal>
    </>
  );
}

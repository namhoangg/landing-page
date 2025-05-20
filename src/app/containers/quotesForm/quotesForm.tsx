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
import { useGetOptionSelect, useHandleError, useModal, useFormat } from '@/hooks';
import { createQuoteRequestFormSchema, getContactFormSchema, TContactForm } from '@/schemas';
import {
  useCreateClientMutation,
  useCreateQuotesMutation,
  useListContainerQuery,
  useListGoodKindQuery,
  useListServiceChargeQuery,
  useListUnlocoQuery,
} from '@/services';
import { theme } from '@/styles';
import { Button, Col, Collapse, Row, Tooltip } from 'antd';
import { useTranslation } from 'react-i18next';
import { useInView } from 'react-intersection-observer';
import React, { useState } from 'react';
import { enumWithoutNumberToArray } from '@/utils';
import moment from 'moment';
import { DatePicker } from '@/components';
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
import dayjs from 'dayjs';

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
    defaultValues: {},
    resolver: createQuoteRequestFormSchema(t, isFCL) as unknown as Resolver<
      QuoteRequestCreate,
      any
    >,
  });

  const onErr = useHandleError();
  const [submitForm, { isLoading: isCreatingQuote }] = useCreateQuotesMutation();
  const formatDate = useFormat('YYYY-MM-DD');

  const { data: dataUnloco, isLoading: isLoadingUnloco } = useListUnlocoQuery(
    {
      pagingIgnore: true,
    },
    { refetchOnMountOrArgChange: true },
  );

  const { data: dataGoodKind, isLoading: isLoadingGoodKind } = useListGoodKindQuery(
    {
      pagingIgnore: true,
    },
    { refetchOnMountOrArgChange: true },
  );

  const [quoteData, setQuoteData] = useState<QuoteRequestCreate>({} as QuoteRequestCreate);
  const { data: dataContainerType } = useListContainerQuery(
    {},
    { refetchOnMountOrArgChange: true },
  );

  const { data: dataServiceCharges } = useListServiceChargeQuery(
    {
      page: 0,
      size: 1000,
    },
    { refetchOnMountOrArgChange: true },
  );

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
                            lg={4}
                          >
                            <Input
                              name='transportType'
                              label={t('quotes.form.transportType.label')}
                              placeholder={t('quotes.form.transportType.placeholder')}
                              disabled
                              value={TransportType.ROAD_FCL}
                            />
                          </Col>
                          <Col
                            span={24}
                            md={12}
                            lg={10}
                          >
                            <Select
                              options={(dataUnloco?.payload?.data ?? [])
                                .filter((item) => item.id !== form.watch('destinationId'))
                                .map((item) => ({
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
                            lg={10}
                          >
                            <Select
                              options={(dataUnloco?.payload?.data ?? [])
                                .filter((item) => item.id !== form.watch('originId'))
                                .map((item) => ({
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
                            md={12}
                            lg={4}
                          >
                            <Select
                              options={(dataGoodKind ?? []).map((item) => ({
                                key: `goodKind-${item.id}`,
                                label: `${item.name}`,
                                value: item.id,
                                render: () => `${item.name}`,
                              }))}
                              name='goodKindId'
                              label={t('quotes.form.goodKind.label')}
                              placeholder={t('quotes.form.goodKind.placeholder')}
                              required
                            />
                          </Col>
                          <Col
                            span={24}
                            md={12}
                            lg={10}
                          >
                            <DatePicker
                              allowClear
                              name='etd'
                              placeholder={t('quotes.form.etd.placeholder')}
                              disabledDate={(current) =>
                                current && current < dayjs().startOf('day')
                              }
                              format={formatDate}
                              label={t('quotes.form.etd.label')}
                              required
                              onChange={(value) => {
                                console.log('ETD onChange value:', value);

                                // Check if value exists before processing
                                if (value) {
                                  // Use dayjs consistently to avoid conversion issues
                                  form.setValue('etd', dayjs(value).endOf('day'));

                                  console.log(
                                    'ETD set to:',
                                    dayjs(value).format('YYYY-MM-DD HH:mm:ss'),
                                  );
                                } else {
                                  // Handle clearing the field
                                  form.setValue('etd', null);
                                }
                                // Clear ETA when ETD changes
                                form.setValue('eta', null);
                              }}
                            />
                          </Col>
                          <Col
                            span={24}
                            md={12}
                            lg={10}
                          >
                            <DatePicker
                              allowClear
                              name='eta'
                              placeholder={t('quotes.form.eta.placeholder')}
                              disabledDate={(current) => {
                                const etd = form.watch('etd');
                                return Boolean(
                                  (current && current < dayjs().startOf('day')) ||
                                    (etd && current < dayjs(etd)),
                                );
                              }}
                              format={formatDate}
                              label={t('quotes.form.eta.label')}
                              required
                              onChange={(value) => {
                                console.log('ETA onChange value:', value);

                                // Check if value exists before processing
                                if (value) {
                                  // Use dayjs consistently to avoid conversion issues
                                  form.setValue('eta', dayjs(value).endOf('day'));

                                  console.log(
                                    'ETA set to:',
                                    dayjs(value).format('YYYY-MM-DD HH:mm:ss'),
                                  );
                                } else {
                                  // Handle clearing the field
                                  form.setValue('eta', null);
                                }
                              }}
                            />
                          </Col>
                          <Col
                            span={24}
                            md={12}
                            lg={24}
                          >
                            <Select
                              options={(dataContainerType ?? [])
                                .filter((item) => {
                                  const goodKind = dataGoodKind?.find(
                                    (g) => g.id === form.watch('goodKindId'),
                                  );
                                  if (goodKind?.isRefrigerated) {
                                    return item.isRefrigerated;
                                  }
                                  return true;
                                })
                                .map((item) => {
                                  return {
                                    key: `containerType-${item.id}`,
                                    label: item.name,
                                    value: item.id,
                                    render: () => `${item.name}`,
                                  };
                                })}
                              name='containerTypeIds'
                              label={t('quotes.form.containerType.label')}
                              placeholder={t('quotes.form.containerType.placeholder')}
                              mode='multiple'
                              required
                              disabled={!form.watch('goodKindId')}
                            />
                          </Col>
                          <Col
                            span={24}
                            md={12}
                            lg={24}
                          >
                            <Select
                              options={(dataServiceCharges?.payload?.data ?? []).map((item) => ({
                                key: `serviceCharge-${item.id}`,
                                label: item?.chargeType?.name,
                                value: item.id,
                                render: () => (
                                  <Tooltip
                                    title={item?.chargeType?.description}
                                    placement='right'
                                  >
                                    <span style={{ fontWeight: 'bold' }}>
                                      {item?.chargeType?.name}
                                    </span>{' '}
                                    ({t('quotes.form.serviceCharge.calculateBy')}:{' '}
                                    {item?.chargeType?.calculationType}) [
                                    {item?.provider?.name ?? 'FreightFlex'}]
                                  </Tooltip>
                                ),
                              }))}
                              name='serviceChargeIds'
                              label={t('quotes.form.serviceCharge.label')}
                              placeholder={t('quotes.form.serviceCharge.placeholder')}
                              mode='multiple'
                            />
                          </Col>
                          <Col
                            span={24}
                            md={12}
                            lg={24}
                          >
                            <Input
                              type='textarea'
                              rows={2}
                              label={t('quotes.form.goodDescription.label')}
                              name='goodDescription'
                              placeholder={t('quotes.form.goodDescription.placeholder')}
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

import { FormProvider, useForm } from 'react-hook-form';
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

import { CheckIcon, Modal, Motion, Select, Title, Wrapper } from '@/components';
import { useHandleError, useModal } from '@/hooks';
import { getContactFormSchema, TContactForm } from '@/schemas';
import { useSubmitFormMutation } from '@/services';
import { theme } from '@/styles';
import { Col, Row } from 'antd';
import { uniqueId } from 'lodash';
import { useTranslation } from 'react-i18next';
import { useInView } from 'react-intersection-observer';

const optionTitle = [
  {
    label: 'Mr.',
    key: uniqueId(),
    value: 1,
    render: () => <>Mr.</>,
  },
  {
    label: 'Ms.',
    key: uniqueId(),
    value: 2,
    render: () => <>Ms.</>,
  },
  {
    label: 'Mrs.',
    key: uniqueId(),
    value: 3,
    render: () => <>Mrs.</>,
  },
];

interface Props {
  onClose?: () => void;
}

export default function ContactForm({ onClose }: Props) {
  // const { id } = router.query;
  const { t } = useTranslation();
  const form = useForm<TContactForm>({
    mode: 'all',
    defaultValues: {},
    resolver: getContactFormSchema(t),
  });

  const onErr = useHandleError();
  const [submitForm] = useSubmitFormMutation();

  const {
    isOpen: isOpenConfirm,
    handleOpen: handleOpenSuccess,
    handleClose: handleCloseConfirm,
  } = useModal();

  const onSubmit = (data: TContactForm) => {
    const newData = {
      ...data,
      category: 2,
    };

    submitForm(newData)
      .unwrap()
      .then(() => {
        handleOpenSuccess();
        form.reset();
      })
      .catch(onErr);
  };

  const [contactFormRef, contactFormInView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <>
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
                      LET’S US HELP YOU IN LOGISTICS
                    </Title>
                    <br />
                    <Row gutter={[20, 20]}>
                      <Col
                        span={24}
                        md={12}
                        lg={3}
                      >
                        <Select
                          name='title'
                          options={optionTitle}
                          placeholder='Select'
                          label='Your Title'
                          allowClear
                        />
                      </Col>
                      <Col
                        span={24}
                        md={12}
                        lg={5}
                      >
                        <StyledInput
                          name='name'
                          placeholder='Full Name'
                          label='Full name'
                        />
                      </Col>

                      <Col
                        span={24}
                        md={12}
                        lg={8}
                      >
                        <StyledInput
                          name='email'
                          placeholder='Work Email'
                          label='Business Email'
                        />
                      </Col>

                      <Col
                        span={24}
                        md={12}
                        lg={8}
                      >
                        <StyledInput
                          name='phone'
                          placeholder='Phone Number'
                          label='Phone Number'
                        />
                      </Col>
                      <Col span={24}>
                        <StyledInput
                          name='message'
                          placeholder='Please provide additional information so we can better respond to your request'
                          label='Leave Us A Message'
                          rows={4}
                          type='textarea'
                        />
                      </Col>
                    </Row>

                    <div style={{ textAlign: 'center', margin: '1em 0' }}>
                      <SubmitButton
                        type='primary'
                        // onClick={() => form.handleSubmit(onSubmit)()}
                      >
                        SUBMIT
                      </SubmitButton>
                    </div>
                    <StyledText color={theme.colors.GRAY}>
                      By clicking SUBMIT, you agree to FreightFlex privacy policy and terms of use,
                      and in particular, you expressly agree to the transfer of your personal
                      information for the purposes described in that policy.
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
          <StyledSuccessText>
            Thank you for reaching out to us! Your message has been received, and our team will get
            back to you shortly.
          </StyledSuccessText>
        </ModalContent>
      </Modal>
    </>
  );
}

import { FormProvider, Resolver, useForm } from 'react-hook-form';
import { StyleSubscribeModal, StyledAboutModal, StyledSuccessText } from './styles';

import { ContactForm, Modal, SuccessIcon } from '@/components';
import { useHandleError, useModal } from '@/hooks';
import { createClientSchema, getContactFormSchema, TContactForm } from '@/schemas';
import { useSubmitFormMutation } from '@/services';
import { useTranslation } from 'react-i18next';
import { Grid } from 'antd';
import { Client, ESubmissionCategory } from '@/types';

interface Props {
  onClose: () => void;
  isOpenModal?: boolean;
  onSubmit: (data: Client) => void;
}

const { useBreakpoint } = Grid;
export default function ModalContactForm({ onClose, isOpenModal, onSubmit }: Props) {
  const { t } = useTranslation();
  const { xxl } = useBreakpoint();
  const form = useForm<Client>({
    mode: 'all',
    defaultValues: {
      name: '',
      email: '',
      companyInfo: {
        name: '',
        address: '',
        email: '',
        phone: '',
        city: '',
        country: '',
        zipCode: '',
        taxNumber: '',
        domestic: false
      },
      contactPersonInfo: {
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        position: ''
      }
    },
    resolver: createClientSchema(t) as unknown as Resolver<Client, any>,
  });

  const handleSubmit = (data: Client) => {
    onSubmit(data);
    onClose();
  };

  return (
    <>
      <StyledAboutModal
        open={isOpenModal}
        onCancel={onClose}
        destroyOnClose={true}
        width={xxl ? '1200px' : '100%'}
      >
        <FormProvider {...form}>
          <ContactForm
            form={form}
            onSubmit={handleSubmit}
          />
        </FormProvider>
      </StyledAboutModal>
    </>
  );
}

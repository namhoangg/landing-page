'use client';

import { QuotesForm } from '@/app/containers';
import { useDocumentSize } from '@/hooks';
import { breakPointValue } from '@/styles';
import { useTranslation } from 'react-i18next';
import { useInView } from 'react-intersection-observer';
import { StyledModalClientInfo } from '@/app/(user)/quotes/request/styles';
import ClientInfoModal from '../../../containers/ClientInfoModal/clientInfoModal';

export default function QuoteRequest() {
  const { t } = useTranslation();
  const { width } = useDocumentSize();

  const [bannerRef, bannerInView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <>
      <StyledModalClientInfo>
        <ClientInfoModal />
      </StyledModalClientInfo>
      <QuotesForm />
    </>
  );
}

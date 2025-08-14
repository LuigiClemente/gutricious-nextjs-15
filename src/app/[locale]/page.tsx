"use client";

// Enable Edge Runtime for this route
// export const runtime = 'edge';

import EmailFormThanksModal from '@/components/EmailFormThanksModal';
import MarketSuccessForm from '@/components/MarketSuccessForm';
import { Main } from '@/components/main'
import { ModalProvider } from 'react-simple-modal-provider';

export default function Home() {
  return (
    <ModalProvider value={[EmailFormThanksModal, MarketSuccessForm]}>
      <Main />
    </ModalProvider>
  );
}

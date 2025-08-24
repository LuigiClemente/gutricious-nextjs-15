import "../../styles/extractedStyles.css";
import "../../styles/globals.css";
import "../../styles/carousel.css";

import Script from "next/script";
import { SimpleTranslationProvider } from "../../components/SimpleTranslationProvider";
import { ModalProvider } from "react-simple-modal-provider";
import EmailFormThanksModal from "@/components/EmailFormThanksModal";
import MarketSuccessForm from "@/components/MarketSuccessForm";
import { generateMetadata as createMetadata } from "@/utils/metadata";
import { Metadata, ResolvingMetadata } from "next";

// Metadata generator for each locale
export async function generateMetadata(
  { params }: { params: Promise<{ locale: string }> }, 
  parent: ResolvingMetadata
): Promise<Metadata> {
  const { locale } = await params;
  return createMetadata(locale, '');
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  let messages;
  try {
    messages = (await import(`../../../messages/${locale}.json`)).default;
  } catch (error) {
    // Fallback to English if locale messages are not found
    messages = (await import(`../../../messages/en.json`)).default;
  }

  return (
    <html lang={locale} suppressHydrationWarning>
      <head />
      <body suppressHydrationWarning>
        <SimpleTranslationProvider locale={locale} messages={messages}>
          
    <ModalProvider value={[EmailFormThanksModal, MarketSuccessForm]}>

          {children}
    </ModalProvider>
        </SimpleTranslationProvider>
        <Script
          src="https://umami.gutricious.com/script.js"
          data-website-id="71b7bffd-8400-466d-91cf-16421f0f7cf4"
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}

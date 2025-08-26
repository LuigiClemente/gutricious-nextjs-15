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
        {/* Umami Analytics */}
        <Script
          id="umami-analytics"
          src="https://umami.gutricious.com/script.js"
          data-website-id="435b949e-c453-4e8b-9f7a-7d8002c37fa1"
          strategy="afterInteractive"
          data-domains="gutricious.com,www.gutricious.com"
          data-auto-track="true"
          data-do-not-track="true"
          data-cache="true"
          defer
        />
        <Script id="umami-init">
          {`
            // Track page views on route changes
            if (window.umami) {
              umami.trackView();
            }
            
            // Track mobile devices
            if (typeof window !== 'undefined' && window.innerWidth < 768) {
              if (window.umami) {
                umami.track('mobile-view', { type: 'pageview' });
              }
            }
            
            // Track touch events
            if (typeof window !== 'undefined' && 'ontouchstart' in window) {
              document.addEventListener('touchstart', function() {
                if (window.umami) {
                  umami.track('touch-event', { type: 'touchstart' });
                }
              }, { once: true });
            }
          `}
        </Script>
      </body>
    </html>
  );
}

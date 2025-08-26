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
          strategy="lazyOnload"
          data-domains="gutricious.com,www.gutricious.com,blog-starter-app-testing.pauloa.workers.dev"
          data-auto-track="true"
          data-do-not-track="false"
          data-cache="false"
        />
        <Script id="umami-init" strategy="afterInteractive">
          {`
            document.addEventListener('DOMContentLoaded', function() {
              // Ensure Umami is loaded
              const waitForUmami = setInterval(function() {
                if (window.umami) {
                  clearInterval(waitForUmami);
                  console.log('Umami initialized successfully');
                  
                  // Track initial page view
                  umami.trackView();
                  
                  // Track device type
                  const deviceType = window.innerWidth < 768 ? 'mobile' : 
                                    window.innerWidth < 1024 ? 'tablet' : 'desktop';
                  umami.track('device-type', { type: deviceType });
                  
                  // Track route changes for SPA navigation
                  const handleRouteChange = () => {
                    umami.trackView();
                    console.log('Route change tracked');
                  };
                  
                  // Attach to click events for navigation tracking
                  document.addEventListener('click', function(e) {
                    const link = e.target.closest('a');
                    if (link && link.getAttribute('href') && link.getAttribute('href').startsWith('/')) {
                      // Internal navigation - will be captured by route change
                      setTimeout(handleRouteChange, 500);
                    }
                  });
                }
              }, 500); // Check every 500ms
              
              // Fallback - if Umami doesn't load after 10 seconds, stop checking
              setTimeout(() => clearInterval(waitForUmami), 10000);
            });
          `}
        </Script>
      </body>
    </html>
  );
}

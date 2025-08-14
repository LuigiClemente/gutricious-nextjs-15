"use client";

import { NextIntlClientProvider } from "next-intl";
import { ReactNode, useEffect, useState } from "react";

interface ClientIntlProviderProps {
  children: ReactNode;
  locale: string;
  messages: any;
}

export default function ClientIntlProvider({
  children,
  locale,
  messages,
}: ClientIntlProviderProps) {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  // Prevent hydration mismatch by only rendering the provider on the client
  if (!isClient) {
    return <>{children}</>;
  }

  return (
    <NextIntlClientProvider locale={locale} messages={messages}>
      {children}
    </NextIntlClientProvider>
  );
}

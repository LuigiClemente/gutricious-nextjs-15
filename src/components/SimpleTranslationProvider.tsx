"use client";

import { createContext, useContext, ReactNode } from "react";

interface TranslationContextType {
  t: (key: string) => string;
  locale: string;
}

const TranslationContext = createContext<TranslationContextType | null>(null);

interface SimpleTranslationProviderProps {
  children: ReactNode;
  locale: string;
  messages: Record<string, any>;
}

export function SimpleTranslationProvider({
  children,
  locale,
  messages,
}: SimpleTranslationProviderProps) {
  const t = (key: string): string => {
    const keys = key.split('.');
    let value = messages;
    
    for (const k of keys) {
      if (value && typeof value === 'object' && k in value) {
        value = value[k];
      } else {
        return key; // Return key if translation not found
      }
    }
    
    return typeof value === 'string' ? value : key;
  };

  return (
    <TranslationContext.Provider value={{ t, locale }}>
      {children}
    </TranslationContext.Provider>
  );
}

export function useTranslations(namespace?: string) {
  const context = useContext(TranslationContext);
  if (!context) {
    throw new Error('useTranslations must be used within a SimpleTranslationProvider');
  }

  const translateFn = (key: string) => {
    const fullKey = namespace ? `${namespace}.${key}` : key;
    return context.t(fullKey);
  };

  // Add the raw method for compatibility with next-intl
  translateFn.raw = (key: string) => {
    const fullKey = namespace ? `${namespace}.${key}` : key;
    return context.t(fullKey);
  };

  return translateFn;
}

export function useLocale() {
  const context = useContext(TranslationContext);
  if (!context) {
    throw new Error('useLocale must be used within a SimpleTranslationProvider');
  }
  return context.locale;
}

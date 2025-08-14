import {notFound} from 'next/navigation';
import { languages, locales } from './utils/languages';
 
// Custom implementation to replace next-intl's getRequestConfig
export async function getMessages(locale: string) {
  // Validate that the incoming `locale` parameter is valid
  if (!locales.includes(locale as any)) notFound();
 
  // Load messages for the requested locale
  return (await import(`./messages/${locale}.json`)).default;
}
import { getBreadcrumbSchema } from '@/utils/schema';
import JsonLd from '@/components/JsonLd';

interface BreadcrumbSchemaProps {
  items: Array<{
    name: string;
    url: string;
  }>;
  locale: string;
}

export default function BreadcrumbSchema({ items, locale }: BreadcrumbSchemaProps) {
  // Add home page as first item if not already included
  const breadcrumbItems = items[0]?.name.toLowerCase() === 'home' ? 
    items : 
    [{ name: 'Home', url: `/${locale}` }, ...items];
  
  // Generate structured data for breadcrumbs
  const breadcrumbSchema = getBreadcrumbSchema(locale, breadcrumbItems);
  
  return (
    <JsonLd data={breadcrumbSchema} />
  );
}

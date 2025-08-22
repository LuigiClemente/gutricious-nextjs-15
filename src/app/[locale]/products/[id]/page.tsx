import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { Suspense } from 'react';
import { getProductById, getAllProducts } from '@/lib/products';
import { generateMetadata as createMetadata } from '@/utils/metadata';
import JsonLd from '@/components/JsonLd';
import BreadcrumbSchema from '@/components/Breadcrumb/BreadcrumbSchema';
import ProductDetailClient from './ProductDetailClient';
import { Product } from '@/interfaces/product';

// Define types
interface ProductPageParams {
  id: string;
  locale: string;
}

// Generate static params for all products
export async function generateStaticParams() {
  // Get all products for all supported locales
  const supportedLocales = ['en', 'de', 'fr', 'es', 'pt', 'it', 'nl'];
  const params: Array<{ locale: string; id: string }> = [];
  
  const products = getAllProducts();
  
  for (const locale of supportedLocales) {
    products.forEach((product) => {
      params.push({
        locale,
        id: product.id,
      });
    });
  }
  
  return params;
}

// Generate metadata for each product page
export async function generateMetadata({ params }: { params: ProductPageParams }): Promise<Metadata> {
  const { locale, id } = params;
  const product = getProductById(id);
  
  if (!product) {
    return {};
  }
  
  return createMetadata(
    locale,
    `products/${id}`,
    `Gutricious - ${product.name}`,
    product.description,
    // Add Open Graph specific data
    {
      openGraph: {
        title: `Gutricious - ${product.name}`,
        description: product.description,
        type: 'product',
        images: [
          {
            url: `https://home.gutricious.com${product.image}`,
            width: 1200,
            height: 630,
            alt: product.name
          }
        ]
      },
      twitter: {
        card: 'summary_large_image',
        title: `Gutricious - ${product.name}`,
        description: product.description,
        images: [`https://home.gutricious.com${product.image}`],
      }
    }
  );
}

// Product Schema for detailed structured data
function getDetailedProductSchema(locale: string, product: Product) {
  // Create base schema using our utility function
  const baseSchema = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: product.name,
    description: product.description,
    image: `https://home.gutricious.com${product.image}`,
    productID: product.id,
    url: `https://home.gutricious.com/${locale}/products/${product.id}`,
    inLanguage: locale,
    brand: {
      '@type': 'Brand',
      name: 'Gutricious'
    },
    category: product.category,
    offers: {
      '@type': 'Offer',
      price: product.price,
      priceCurrency: product.priceCurrency,
      availability: `https://schema.org/${product.availability}`,
      url: `https://home.gutricious.com/${locale}/products/${product.id}`,
      priceValidUntil: new Date(new Date().setFullYear(new Date().getFullYear() + 1)).toISOString().split('T')[0],
      seller: {
        '@type': 'Organization',
        name: 'Gutricious'
      }
    }
  };
  
  // Add nutrition information if available
  if (product.nutritionalInfo) {
    baseSchema['nutrition'] = {
      '@type': 'NutritionInformation',
      servingSize: product.nutritionalInfo.servingSize,
      calories: `${product.nutritionalInfo.calories} calories`,
      carbohydrateContent: `${product.nutritionalInfo.carbs}g`,
      proteinContent: `${product.nutritionalInfo.protein}g`,
      fatContent: `${product.nutritionalInfo.fat}g`,
      fiberContent: `${product.nutritionalInfo.fiber}g`,
      sugarContent: `${product.nutritionalInfo.sugar}g`
    };
  }
  
  // Add ratings if available
  if (product.ratings) {
    baseSchema['aggregateRating'] = {
      '@type': 'AggregateRating',
      ratingValue: product.ratings.average,
      reviewCount: product.ratings.count
    };
  }
  
  return baseSchema;
}

export default function ProductPage({ params }: { params: ProductPageParams }) {
  const { locale, id } = params;
  const product = getProductById(id);

  if (!product) {
    notFound();
  }

  const productSchema = getDetailedProductSchema(locale, product);
  
  // Define breadcrumb items for this specific product page
  const breadcrumbItems = [
    { name: 'Home', url: `/${locale}` },
    { name: 'Products', url: `/${locale}/products` },
    { name: product.name, url: `/${locale}/products/${id}` }
  ];
  
  return (
    <>
      {/* Add structured data for SEO */}
      <JsonLd data={productSchema} />
      <BreadcrumbSchema items={breadcrumbItems} locale={locale} />
      
      {/* Client-side interactive content */}
      <Suspense fallback={<div>Loading product details...</div>}>
        <ProductDetailClient product={product} locale={locale} />
      </Suspense>
    </>
  );
}

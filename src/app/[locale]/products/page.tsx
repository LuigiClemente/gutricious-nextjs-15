import { Metadata } from 'next';
import { Suspense } from 'react';
import { getAllProducts } from '@/lib/products';
import { generateMetadata as createMetadata } from '@/utils/metadata';
import JsonLd from '@/components/JsonLd';
import BreadcrumbSchema from '@/components/Breadcrumb/BreadcrumbSchema';
import ProductsClient from './ProductsClient';

// Generate metadata for this page
export async function generateMetadata({ params }: { params: { locale: string } }): Promise<Metadata> {
  const { locale } = params;
  
  const title = {
    en: 'Nutrition Products',
    de: 'Ernährungsprodukte',
    fr: 'Produits Nutritionnels',
    es: 'Productos Nutricionales',
    pt: 'Produtos Nutricionais',
    it: 'Prodotti Nutrizionali',
    nl: 'Voedingsproducten'
  }[locale] || 'Nutrition Products';
  
  const description = {
    en: 'Discover our range of specialized nutrition products designed to optimize your gut health and overall wellbeing.',
    de: 'Entdecken Sie unsere Palette an spezialisierten Ernährungsprodukten zur Optimierung Ihrer Darmgesundheit und Ihres allgemeinen Wohlbefindens.',
    fr: 'Découvrez notre gamme de produits nutritionnels spécialisés conçus pour optimiser votre santé intestinale et votre bien-être général.',
    es: 'Descubra nuestra gama de productos nutricionales especializados diseñados para optimizar la salud intestinal y el bienestar general.',
    pt: 'Descubra nossa linha de produtos nutricionais especializados projetados para otimizar a saúde intestinal e o bem-estar geral.',
    it: 'Scopri la nostra gamma di prodotti nutrizionali specializzati progettati per ottimizzare la salute intestinale e il benessere generale.',
    nl: 'Ontdek ons assortiment gespecialiseerde voedingsproducten ontworpen om uw darmgezondheid en algemeen welzijn te optimaliseren.'
  }[locale] || 'Discover our range of specialized nutrition products designed to optimize your gut health and overall wellbeing.';
  
  return createMetadata(
    locale,
    'products',
    `Gutricious - ${title}`,
    description
  );
}

// Products listing page schema
function getProductsListingSchema(locale: string) {
  const products = getAllProducts();
  
  return {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    'name': 'Gutricious Nutrition Products',
    'description': 'Specialized nutrition products for optimal gut health and well-being',
    'numberOfItems': products.length,
    'itemListElement': products.map((product, index) => ({
      '@type': 'ListItem',
      'position': index + 1,
      'item': {
        '@type': 'Product',
        'name': product.name,
        'description': product.description,
        'image': `https://home.gutricious.com${product.image}`,
        'url': `https://home.gutricious.com/${locale}/products/${product.id}`
      }
    }))
  };
}

export default function ProductsPage({ params }: { params: { locale: string } }) {
  const { locale } = params;
  const products = getAllProducts();
  const productsSchema = getProductsListingSchema(locale);
  
  // Define breadcrumb items for this page
  const breadcrumbItems = [
    { name: 'Home', url: `/${locale}` },
    { name: 'Products', url: `/${locale}/products` }
  ];
  
  return (
    <>
      {/* Add structured data for SEO */}
      <JsonLd data={productsSchema} />
      <BreadcrumbSchema items={breadcrumbItems} locale={locale} />
      
      {/* Client-side interactive content */}
      <Suspense fallback={<div>Loading products...</div>}>
        <ProductsClient locale={locale} products={products} />
      </Suspense>
    </>
  );
}

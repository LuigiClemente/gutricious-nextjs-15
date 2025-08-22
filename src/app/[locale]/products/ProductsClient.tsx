"use client";

import Link from 'next/link';
import { useState } from 'react';
import { Product } from '@/interfaces/product';
import Breadcrumb from '@/components/Breadcrumb/Breadcrumb';
import { Navigation } from '@/components/Navigation';
import Footer from '@/components/Footer/Footer';

// ProductCard component for displaying product information
const ProductCard = ({ product, locale }: { product: Product; locale: string }) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <Link 
      href={`/${locale}/products/${product.id}`}
      className="group relative flex flex-col overflow-hidden rounded-lg border border-gray-200 bg-white shadow-md transition-all duration-300 hover:shadow-xl"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden bg-gray-50">
        <div className="relative h-64">
          {/* Use a placeholder until actual images are available */}
          <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-teal-400 to-blue-500 text-white">
            <span className="text-3xl font-semibold">{product.name.charAt(0)}</span>
          </div>
        </div>
      </div>
      
      <div className="flex flex-1 flex-col space-y-2 p-6">
        <h3 className="text-2xl font-semibold text-gray-900 group-hover:text-[#2ae8d3] transition-colors">
          {product.name}
        </h3>
        
        <p className="text-lg text-gray-600 line-clamp-3">
          {product.description}
        </p>
        
        {product.price && (
          <p className="text-xl font-bold text-gray-900 mt-auto pt-4">
            {new Intl.NumberFormat(locale, { 
              style: 'currency', 
              currency: product.priceCurrency || 'USD' 
            }).format(product.price)}
          </p>
        )}
        
        <div className={`absolute bottom-0 left-0 right-0 bg-[#2ae8d3] text-center text-white py-3 text-lg font-medium transition-transform duration-300 ${isHovered ? 'translate-y-0' : 'translate-y-full'}`}>
          View Details
        </div>
      </div>
    </Link>
  );
};

export default function ProductsClient({ 
  locale, 
  products 
}: { 
  locale: string; 
  products: Product[];
}) {
  const [navOpen, setNavOpen] = useState<boolean>(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isLangBtnHovered, setIsLangBtnHovered] = useState(false);
  
  // Define breadcrumb items for this page
  const breadcrumbItems = [
    { name: 'Products', path: `/${locale}/products` }
  ];
  
  return (
    <div className="min-h-screen bg-white">
      <div className="custom-container">
        <Navigation
          section={"dark"}
          navOpen={navOpen}
          setNavOpen={setNavOpen}
          isHovered={isHovered}
          setIsHovered={setIsHovered}
          isLangBtnHovered={isLangBtnHovered}
          setIsLangBtnHovered={setIsLangBtnHovered}
          selectCard={()=>{}}
        />
      </div>
      
      <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="mb-8">
          <Breadcrumb items={breadcrumbItems} locale={locale} className="mb-6 mt-4" />
          
          <h1 className="text-6xl font-bold text-center text-gray-900 mb-4">
            Nutrition Products
          </h1>
          
          <p className="text-xl text-center text-gray-600 max-w-3xl mx-auto mb-16">
            Discover our specialized range of products designed to optimize gut health and overall wellbeing through advanced nutritional science.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <ProductCard 
              key={product.id} 
              product={product} 
              locale={locale} 
            />
          ))}
        </div>
      </main>
      
      <Footer footerBg="white" selectCard={() => {}} />
    </div>
  );
}

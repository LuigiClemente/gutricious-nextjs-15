"use client";

import { useState } from 'react';
import Link from 'next/link';
import { Product } from '@/interfaces/product';
import Breadcrumb from '@/components/Breadcrumb/Breadcrumb';
import { Navigation } from '@/components/Navigation';
import Footer from '@/components/Footer/Footer';
import { IoMdStar, IoMdStarHalf, IoMdStarOutline } from 'react-icons/io';
import { HiPlus, HiMinus } from 'react-icons/hi';

// RatingStars component
const RatingStars = ({ rating }: { rating: number }) => {
  const stars = [];
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 >= 0.5;
  
  // Add full stars
  for (let i = 0; i < fullStars; i++) {
    stars.push(<IoMdStar key={`full-${i}`} className="text-yellow-400 text-2xl" />);
  }
  
  // Add half star if needed
  if (hasHalfStar) {
    stars.push(<IoMdStarHalf key="half" className="text-yellow-400 text-2xl" />);
  }
  
  // Add empty stars to make total of 5
  const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);
  for (let i = 0; i < emptyStars; i++) {
    stars.push(<IoMdStarOutline key={`empty-${i}`} className="text-yellow-400 text-2xl" />);
  }
  
  return <div className="flex">{stars}</div>;
};

export default function ProductDetailClient({ 
  product, 
  locale 
}: { 
  product: Product; 
  locale: string;
}) {
  const [navOpen, setNavOpen] = useState<boolean>(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isLangBtnHovered, setIsLangBtnHovered] = useState(false);
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState('description');
  
  // Define breadcrumb items for this page
  const breadcrumbItems = [
    { name: 'Products', path: `/${locale}/products` },
    { name: product.name, path: `/${locale}/products/${product.id}` }
  ];
  
  const incrementQuantity = () => setQuantity(q => q + 1);
  const decrementQuantity = () => setQuantity(q => Math.max(1, q - 1));
  
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
        <Breadcrumb items={breadcrumbItems} locale={locale} className="mb-10" />
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Product Image Column */}
          <div className="bg-gradient-to-br from-teal-400 to-blue-500 rounded-xl overflow-hidden shadow-xl flex items-center justify-center h-[500px]">
            <span className="text-white text-7xl font-bold">{product.name.charAt(0)}</span>
          </div>
          
          {/* Product Details Column */}
          <div>
            <h1 className="text-5xl font-bold text-gray-900 mb-4">{product.name}</h1>
            
            {product.ratings && (
              <div className="flex items-center gap-2 mb-6">
                <RatingStars rating={product.ratings.average} />
                <span className="text-lg text-gray-600">
                  ({product.ratings.average}) {product.ratings.count} reviews
                </span>
              </div>
            )}
            
            <p className="text-2xl text-gray-700 mb-8">{product.description}</p>
            
            {product.price && (
              <div className="mb-8">
                <p className="text-4xl font-bold text-gray-900">
                  {new Intl.NumberFormat(locale, { 
                    style: 'currency', 
                    currency: product.priceCurrency || 'USD' 
                  }).format(product.price)}
                </p>
                <p className="text-lg text-gray-500 mt-1">Includes all taxes</p>
              </div>
            )}
            
            {/* Quantity Selector */}
            <div className="flex items-center gap-4 mb-8">
              <p className="text-lg font-medium text-gray-700">Quantity:</p>
              <div className="flex items-center border border-gray-300 rounded-md">
                <button 
                  onClick={decrementQuantity}
                  className="px-3 py-2 text-gray-600 hover:text-gray-900"
                  aria-label="Decrease quantity"
                >
                  <HiMinus />
                </button>
                <span className="px-4 py-2 text-lg text-gray-900 w-12 text-center">
                  {quantity}
                </span>
                <button 
                  onClick={incrementQuantity}
                  className="px-3 py-2 text-gray-600 hover:text-gray-900"
                  aria-label="Increase quantity"
                >
                  <HiPlus />
                </button>
              </div>
            </div>
            
            {/* Add to Cart Button */}
            <button 
              className="w-full bg-[#2ae8d3] hover:bg-teal-600 text-white py-4 text-xl font-semibold rounded-lg transition-colors mb-8"
            >
              Add to Cart
            </button>
            
            {/* Product Availability */}
            <div className="flex items-center gap-2 mb-6">
              <div className={`w-3 h-3 rounded-full ${product.availability === 'InStock' ? 'bg-green-500' : 'bg-yellow-500'}`}></div>
              <p className="text-lg text-gray-700">
                {product.availability === 'InStock' ? 'In Stock' : 'Limited Stock'}
              </p>
            </div>
            
            {/* Product Category */}
            {product.category && (
              <p className="text-lg text-gray-700 mb-2">
                <span className="font-medium">Category:</span> {product.category}
              </p>
            )}
          </div>
        </div>
        
        {/* Product Tabs */}
        <div className="mt-16">
          <div className="border-b border-gray-200">
            <nav className="flex space-x-8">
              {['description', 'benefits', 'ingredients', 'nutrition'].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`py-4 px-1 text-xl font-medium border-b-2 ${
                    activeTab === tab 
                      ? 'border-[#2ae8d3] text-[#2ae8d3]' 
                      : 'border-transparent text-gray-500 hover:text-gray-700'
                  }`}
                >
                  {tab.charAt(0).toUpperCase() + tab.slice(1)}
                </button>
              ))}
            </nav>
          </div>
          
          <div className="py-8">
            {activeTab === 'description' && (
              <div className="prose prose-lg max-w-none">
                <p className="text-xl text-gray-700">{product.description}</p>
              </div>
            )}
            
            {activeTab === 'benefits' && (
              <div className="prose prose-lg max-w-none">
                <h3 className="text-2xl font-semibold mb-4">Key Benefits</h3>
                <ul className="space-y-3">
                  {product.benefits?.map((benefit, index) => (
                    <li key={index} className="text-xl text-gray-700 flex items-start">
                      <span className="inline-block bg-[#2ae8d3] rounded-full w-2 h-2 mt-3 mr-3"></span>
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            )}
            
            {activeTab === 'ingredients' && (
              <div className="prose prose-lg max-w-none">
                <h3 className="text-2xl font-semibold mb-4">Ingredients</h3>
                <ul className="space-y-3">
                  {product.ingredients?.map((ingredient, index) => (
                    <li key={index} className="text-xl text-gray-700">{ingredient}</li>
                  ))}
                </ul>
                
                {product.allergens && product.allergens.length > 0 && product.allergens[0] !== 'None' && (
                  <div className="mt-8">
                    <h4 className="text-xl font-semibold mb-2">Allergen Information</h4>
                    <p className="text-lg text-gray-700">
                      Contains: {product.allergens.join(', ')}
                    </p>
                  </div>
                )}
              </div>
            )}
            
            {activeTab === 'nutrition' && product.nutritionalInfo && (
              <div className="prose prose-lg max-w-none">
                <h3 className="text-2xl font-semibold mb-4">Nutritional Information</h3>
                <p className="text-lg text-gray-700 mb-4">
                  Serving Size: {product.nutritionalInfo.servingSize}
                </p>
                
                <div className="border border-gray-200 rounded-lg overflow-hidden">
                  <table className="w-full text-left">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="px-6 py-3 text-lg font-medium text-gray-900">Nutrient</th>
                        <th className="px-6 py-3 text-lg font-medium text-gray-900">Amount Per Serving</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                      <tr>
                        <td className="px-6 py-4 text-lg text-gray-700">Calories</td>
                        <td className="px-6 py-4 text-lg text-gray-700">{product.nutritionalInfo.calories}</td>
                      </tr>
                      <tr>
                        <td className="px-6 py-4 text-lg text-gray-700">Protein</td>
                        <td className="px-6 py-4 text-lg text-gray-700">{product.nutritionalInfo.protein}g</td>
                      </tr>
                      <tr>
                        <td className="px-6 py-4 text-lg text-gray-700">Carbohydrates</td>
                        <td className="px-6 py-4 text-lg text-gray-700">{product.nutritionalInfo.carbs}g</td>
                      </tr>
                      <tr>
                        <td className="px-6 py-4 text-lg text-gray-700">Fat</td>
                        <td className="px-6 py-4 text-lg text-gray-700">{product.nutritionalInfo.fat}g</td>
                      </tr>
                      <tr>
                        <td className="px-6 py-4 text-lg text-gray-700">Fiber</td>
                        <td className="px-6 py-4 text-lg text-gray-700">{product.nutritionalInfo.fiber}g</td>
                      </tr>
                      <tr>
                        <td className="px-6 py-4 text-lg text-gray-700">Sugar</td>
                        <td className="px-6 py-4 text-lg text-gray-700">{product.nutritionalInfo.sugar}g</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            )}
          </div>
        </div>
        
        {/* Related Products Section */}
        <div className="mt-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">You May Also Like</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* This would typically be populated with real related products */}
            <Link 
              href={`/${locale}/products`}
              className="group relative flex flex-col overflow-hidden rounded-lg border border-gray-200 bg-white shadow-md transition-all duration-300 hover:shadow-xl"
            >
              <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden bg-gray-50">
                <div className="relative h-64">
                  <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-purple-400 to-blue-500 text-white">
                    <span className="text-3xl font-semibold">More</span>
                  </div>
                </div>
              </div>
              <div className="flex flex-1 flex-col p-6">
                <h3 className="text-lg font-medium text-gray-900 group-hover:text-[#2ae8d3] transition-colors">
                  View All Products
                </h3>
              </div>
            </Link>
          </div>
        </div>
      </main>
      
      <Footer footerBg="white" selectCard={() => {}} />
    </div>
  );
}

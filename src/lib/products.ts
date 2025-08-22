import { Product } from '@/interfaces/product';

// Mock product data to simulate database or API response
const products: Product[] = [
  {
    id: 'gut-balance-plus',
    name: 'Gut Balance Plus',
    description: 'Advanced probiotic formula designed to restore and maintain gut microbiome balance. Contains 12 strains of beneficial bacteria and prebiotics for optimal digestive health.',
    image: '/assets/products/gut-balance-plus.jpg',
    price: 45.99,
    priceCurrency: 'USD',
    availability: 'InStock',
    category: 'Probiotics',
    benefits: [
      'Improves digestive health',
      'Strengthens immune system',
      'Reduces bloating and discomfort',
      'Supports nutrient absorption'
    ],
    ingredients: [
      'Lactobacillus acidophilus',
      'Bifidobacterium bifidum',
      'Lactobacillus plantarum',
      'Inulin',
      'Fructooligosaccharides'
    ],
    nutritionalInfo: {
      servingSize: '1 capsule',
      calories: 5,
      protein: 0,
      carbs: 1,
      fat: 0,
      fiber: 1,
      sugar: 0
    },
    ratings: {
      average: 4.7,
      count: 352
    },
    allergens: ['None'],
    tags: ['probiotic', 'digestive health', 'gut microbiome']
  },
  {
    id: 'digestive-enzyme-complex',
    name: 'Digestive Enzyme Complex',
    description: 'Comprehensive enzyme blend to support optimal digestion and nutrient absorption. Helps break down proteins, fats, carbohydrates, and fiber for improved digestive comfort.',
    image: '/assets/products/digestive-enzyme-complex.jpg',
    price: 39.99,
    priceCurrency: 'USD',
    availability: 'InStock',
    category: 'Digestive Enzymes',
    benefits: [
      'Reduces bloating after meals',
      'Improves nutrient absorption',
      'Alleviates digestive discomfort',
      'Supports overall gut health'
    ],
    ingredients: [
      'Amylase',
      'Protease',
      'Lipase',
      'Cellulase',
      'Lactase',
      'Bromelain',
      'Papain'
    ],
    nutritionalInfo: {
      servingSize: '1 capsule',
      calories: 5,
      protein: 0,
      carbs: 1,
      fat: 0,
      fiber: 0,
      sugar: 0
    },
    ratings: {
      average: 4.5,
      count: 218
    },
    allergens: ['None'],
    tags: ['enzymes', 'digestive health', 'nutrient absorption']
  },
  {
    id: 'prebiotic-fiber-blend',
    name: 'Prebiotic Fiber Blend',
    description: 'Specialized fiber supplement that nourishes beneficial gut bacteria for optimal microbiome health. Supports regular bowel movements and digestive comfort.',
    image: '/assets/products/prebiotic-fiber-blend.jpg',
    price: 32.99,
    priceCurrency: 'USD',
    availability: 'InStock',
    category: 'Prebiotics',
    benefits: [
      'Feeds beneficial gut bacteria',
      'Promotes bowel regularity',
      'Supports digestive comfort',
      'Helps maintain healthy cholesterol levels'
    ],
    ingredients: [
      'Organic Acacia Fiber',
      'Inulin from Chicory Root',
      'Apple Pectin',
      'Flaxseed',
      'Psyllium Husk'
    ],
    nutritionalInfo: {
      servingSize: '1 scoop (10g)',
      calories: 30,
      protein: 0,
      carbs: 9,
      fat: 0,
      fiber: 7,
      sugar: 1
    },
    ratings: {
      average: 4.6,
      count: 189
    },
    allergens: ['None'],
    tags: ['prebiotic', 'fiber', 'gut health', 'microbiome support']
  }
];

/**
 * Get all products
 */
export function getAllProducts(): Product[] {
  return products;
}

/**
 * Get product by ID
 */
export function getProductById(id: string): Product | undefined {
  return products.find(product => product.id === id);
}

/**
 * Get products by category
 */
export function getProductsByCategory(category: string): Product[] {
  return products.filter(product => product.category === category);
}

/**
 * Get featured products (just a subset in this mock implementation)
 */
export function getFeaturedProducts(count: number = 3): Product[] {
  return products.slice(0, count);
}

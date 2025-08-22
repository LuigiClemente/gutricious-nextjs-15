export interface Product {
  id: string;
  name: string;
  description: string;
  image: string;
  price?: number;
  priceCurrency?: string;
  availability?: 'InStock' | 'OutOfStock' | 'PreOrder';
  category?: string;
  benefits?: string[];
  ingredients?: string[];
  nutritionalInfo?: {
    servingSize: string;
    calories: number;
    protein: number;
    carbs: number;
    fat: number;
    fiber: number;
    sugar: number;
    [key: string]: any;
  };
  ratings?: {
    average: number;
    count: number;
  };
  allergens?: string[];
  tags?: string[];
}

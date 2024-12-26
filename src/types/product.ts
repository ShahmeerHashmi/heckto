export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  category: string;
  image: string;
  discount?: number;
  features?: string[];
  rating?: number;
}

export type ProductCategory = 'featured' | 'latest' | 'trending' | 'discount';

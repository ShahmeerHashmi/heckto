import { Product } from '../types/product';

export const products: Product[] = [
  {
    id: '1',
    name: 'Cantilever Chair',
    description: 'Modern cantilever chair with ergonomic design',
    price: 299.99,
    category: 'featured',
    image: '/image 3.png',
    rating: 4.5,
  },
  {
    id: '2',
    name: 'Shell Modern Chair',
    description: 'Contemporary shell chair with comfortable seating',
    price: 199.99,
    category: 'featured',
    image: '/image 25.png',
    rating: 4.8,
  },
  {
    id: '3',
    name: 'Minimal Sofa',
    description: 'Minimalist design sofa perfect for modern homes',
    price: 899.99,
    category: 'featured',
    image: '/sofa.png',
    rating: 4.7,
  },
  {
    id: '4',
    name: 'Luxury Armchair',
    description: 'Premium armchair with superior comfort',
    price: 449.99,
    category: 'featured',
    image: '/brchair.png',
    rating: 4.9,
  }
];

export const getProductsByCategory = (category: string) => {
  return products.filter(product => product.category === category);
};

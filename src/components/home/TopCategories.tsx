'use client';

import { Card } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from 'react';

export interface Product {
  id: number;
  title: string;
  price: number;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
}

export const TopCategories = () => {
  const [topCategories, setTopCategories] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('https://fakestoreapi.com/products');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setTopCategories(data);
      } catch (error) {
        console.error('Error fetching products:', error);
        setError('Failed to fetch products. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  // Truncate title to 3 words
  const truncateTitle = (text: string, maxWords: number) => {
    const words = text.split(' ');
    if (words.length > maxWords) {
      return words.slice(0, maxWords).join(' ') + '...';
    }
    return text;
  };

  if (loading) {
    return (
      <section className="py-8 sm:py-16">
        <h2 className="text-center text-xl sm:text-2xl font-extrabold text-primary-dark mb-6 sm:mb-12">
          Top Categories
        </h2>
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 min-[450px]:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-8">
            {[1, 2, 3, 4].map((index) => (
              <Card key={index} className="animate-pulse">
                <div className="p-3 sm:p-4 flex flex-col h-full">
                  <div className="relative h-40 sm:h-48 w-full mb-3 sm:mb-4 bg-gray-200 rounded-lg"></div>
                  <div className="h-4 bg-gray-200 rounded w-3/4 mb-2"></div>
                  <div className="h-3 bg-gray-200 rounded w-full mb-2"></div>
                  <div className="h-3 bg-gray-200 rounded w-1/2 mb-2"></div>
                  <div className="mt-auto flex justify-between items-center">
                    <div className="h-4 bg-gray-200 rounded w-1/4"></div>
                    <div className="h-4 bg-gray-200 rounded w-1/4"></div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="py-8 sm:py-16">
        <h2 className="text-center text-xl sm:text-2xl font-extrabold text-primary-dark mb-6 sm:mb-12">
          Featured Products
        </h2>
        <div className="container mx-auto px-4">
          <p className="text-center text-red-500">{error}</p>
        </div>
      </section>
    );
  }

  return (
    <section className="mx-auto py-8 sm:py-16 px-4">
      <div className="min-[360px]:max-w-[360px] min-[450px]:max-w-[450px] md:max-w-6xl mx-auto">
        <h2 className="text-xl sm:text-3xl font-bold text-center text-[#151875] mb-6 sm:mb-12">
          Top Categories
        </h2>
        
        {/* Mobile Slider View */}
        <div className="flex overflow-x-auto snap-x snap-mandatory scrollbar-hide pb-4 sm:hidden">
          {topCategories.map((category, index) => (
            <Link key={index} href={`/product/${category.id}`} passHref>
              <div className="snap-center flex-shrink-0 w-[280px] mx-2 first:ml-0 last:mr-0">
                <Card className="relative group">
                  <div className="bg-[#F6F7FB] rounded-full p-4 w-full aspect-square flex items-center justify-center">
                    <Image
                      src={category.image}
                      alt={category.title}
                      width={160}
                      height={160}
                      className="object-contain transition-transform group-hover:scale-110"
                    />
                  </div>
                  <div className="text-center mt-3 mb-4">
                    <h3 className="text-[#151875] text-sm font-bold">
                      {truncateTitle(category.title, 3)}
                    </h3>
                    <p className="text-[#151875] text-sm">
                      {/* Add any additional text here */}
                    </p>
                  </div>
                </Card>
              </div>
            </Link>
          ))}
        </div>

        {/* Desktop Grid View */}
        <div className="hidden sm:flex flex-wrap justify-center gap-4 md:gap-8">
          {topCategories.map((category, index) => (
            <Link key={index} href={`/product/${category.id}`} passHref>
              <Card className="relative group">
                <div className="bg-[#F6F7FB] rounded-full p-8 w-[270px] h-[270px] flex items-center justify-center">
                  <Image
                    src={category.image}
                    alt={category.title}
                    width={200}
                    height={200}
                    className="object-contain transition-transform group-hover:scale-110"
                  />
                </div>
                <div className="text-center mt-4 mb-6">
                  <h3 className="text-[#151875] font-bold">
                    {truncateTitle(category.title, 3)}
                  </h3>
                  <p className="text-[#151875]">
                    {/* Add any additional text here */}
                  </p>
                </div>
              </Card>
            </Link>
          ))}
        </div>

        {/* Pagination Dots */}
        <div className="flex justify-center gap-2 mt-4 sm:mt-8">
          <span className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-[#FB2E86]"></span>
          <span className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-[#FB2E86] opacity-30"></span>
          <span className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-[#FB2E86] opacity-30"></span>
        </div>
      </div>

      {/* Add custom scrollbar styles */}
      <style jsx global>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  );
};
export default TopCategories;
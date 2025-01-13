"use client";
import { Card } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
}

export const TrendingProducts = () => {
  const [trendingProducts, setTrendingProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("https://fakestoreapi.com/products");
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setTrendingProducts(data);
      } catch (error) {
        console.error("Error fetching products:", error);
        setError("Failed to fetch products. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  // Truncate description to a specified number of words
  const truncateDescription = (text: string, maxWords: number) => {
    const words = text.split(" ");
    if (words.length > maxWords) {
      return words.slice(0, maxWords).join(" ") + "...";
    }
    return text;
  };

  // Truncate title to a specified number of words
  const truncateTitle = (text: string, maxWords: number) => {
    const words = text.split(" ");
    if (words.length > maxWords) {
      return words.slice(0, maxWords).join(" ") + "...";
    }
    return text;
  };

  if (loading) {
    return (
      <section className="py-8 sm:py-16">
        <h2 className="text-center text-xl sm:text-2xl font-extrabold text-primary-dark mb-6 sm:mb-12">
          Trending Products
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
          Trending Products
        </h2>
        <div className="container mx-auto px-4">
          <p className="text-center text-red-500">{error}</p>
        </div>
      </section>
    );
  }

  return (
    <section className="mx-auto px-4 py-6">
      <div className="min-[360px]:max-w-[360px] min-[450px]:max-w-[450px] md:max-w-4xl mx-auto">
        <h2 className="text-xl sm:text-3xl mt-8 sm:mt-20 font-bold text-center text-[#1A0B5B] mb-4 sm:mb-6">
          Trending Products
        </h2>

        {/* Product Grid */}
        <div className="grid grid-cols-1 min-[450px]:grid-cols-2 md:grid-cols-4 gap-3 mb-4 sm:mb-6">
          {trendingProducts.slice(0, 4).map((product, index) => (
            <Link key={index} href={`/product/${product.id}`} passHref>
              <Card
                className={`bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 ${
                  index === 1 ? "border-2 border-[#9877E7]" : ""
                }`}
              >
                <div className="bg-[#F5F6F8] rounded-t-lg p-3 flex items-center justify-center min-h-[140px] sm:min-h-[160px]">
                  <Image
                    src={product.image}
                    alt={product.title}
                    width={100}
                    height={100}
                    className="object-contain hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="text-center py-4 px-2">
                  <h3 className="text-[#151875] text-sm sm:text-base font-bold mb-1">
                    {truncateTitle(product.title, 3)} {/* Truncate title to 3 words */}
                  </h3>
                  <p className="text-[#151875] text-sm sm:text-base font-semibold">
                    ${product.price}
                  </p>
                </div>
              </Card>
            </Link>
          ))}
        </div>

        {/* Promotions and Executive Chairs */}
        <div className="grid grid-cols-1 min-[450px]:grid-cols-2 md:grid-cols-3 gap-3">
          {/* Left Promotion */}
          <Link href="/discounts" passHref>
            <div className="bg-[#FFF6FB] rounded-lg p-4 flex items-center justify-between h-[140px] sm:h-[160px] hover:shadow-md transition-shadow duration-300">
              <div>
                <h3 className="text-sm sm:text-base font-bold mb-1">
                  23% off in all products
                </h3>
                <Link
                  href="/discounts"
                  className="text-[#FB2E86] text-xs sm:text-sm hover:underline"
                >
                  Shop Now
                </Link>
              </div>
              <Image
                src="/image-1171.png"
                alt="Discount product"
                width={70}
                height={70}
                className="object-contain"
              />
            </div>
          </Link>

          {/* Middle Promotion */}
          <Link href="/collections" passHref>
            <div className="bg-[#EEEFFB] rounded-lg p-4 flex items-center justify-between h-[140px] sm:h-[160px] hover:shadow-md transition-shadow duration-300">
              <div>
                <h3 className="text-sm sm:text-base font-bold mb-1">
                  23% off in all products
                </h3>
                <Link
                  href="/collections"
                  className="text-[#FB2E86] text-xs sm:text-sm hover:underline"
                >
                  View Collection
                </Link>
              </div>
              <Image
                src="/image-1172.png"
                alt="Collection product"
                width={70}
                height={70}
                className="object-contain"
              />
            </div>
          </Link>

          {/* Executive Chairs */}
          <Link href="/executive-chairs" passHref>
            <div className="bg-[#F5F6F8] rounded-lg p-4 flex items-center justify-between h-[140px] sm:h-[160px] hover:shadow-md transition-shadow duration-300">
              <div>
                <h3 className="text-sm sm:text-base font-bold mb-1">
                  Executive Chairs
                </h3>
                <Link
                  href="/executive-chairs"
                  className="text-[#FB2E86] text-xs sm:text-sm hover:underline"
                >
                  Shop Now
                </Link>
              </div>
              <Image
                src="/image-1173.png"
                alt="Executive Chairs"
                width={70}
                height={70}
                className="object-contain"
              />
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default TrendingProducts;
"use client";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { Card } from "../ui/card";

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

const LatestProducts = () => {
  const [latestProducts, setLatestProducts] = useState<Product[]>([]);
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
        setLatestProducts(data);
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
      <section className="container mx-auto py-8 sm:py-16 px-4">
        <h2 className="text-center text-xl sm:text-2xl font-extrabold text-primary-dark mb-6 sm:mb-12">
          Latest Products
        </h2>
        <div className="flex flex-wrap justify-center gap-4 sm:gap-8 mb-6 sm:mb-8">
          <button className="text-sm sm:text-base text-secondary hover:text-accent transition-colors">
            New arrival
          </button>
          <button className="text-sm sm:text-base text-secondary hover:text-accent transition-colors">
            Best seller
          </button>
          <button className="text-sm sm:text-base text-secondary hover:text-accent transition-colors">
            Featured
          </button>
          <button className="text-sm sm:text-base text-secondary hover:text-accent transition-colors">
            Special offer
          </button>
        </div>
        <div className="grid grid-cols-1 min-[450px]:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
          {[1, 2, 3, 4, 5, 6].map((index) => (
            <Card key={index} className="p-3 sm:p-4 animate-pulse">
              <div className="h-48 sm:h-60 relative mb-3 sm:mb-4 bg-gray-200 rounded-lg"></div>
              <div className="h-4 bg-gray-200 rounded w-3/4 mb-2"></div>
              <div className="h-4 bg-gray-200 rounded w-1/2"></div>
            </Card>
          ))}
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="container mx-auto py-8 sm:py-16 px-4">
        <h2 className="text-center text-xl sm:text-2xl font-extrabold text-primary-dark mb-6 sm:mb-12">
          Latest Products
        </h2>
        <div className="flex flex-wrap justify-center gap-4 sm:gap-8 mb-6 sm:mb-8">
          <button className="text-sm sm:text-base text-secondary hover:text-accent transition-colors">
            New arrival
          </button>
          <button className="text-sm sm:text-base text-secondary hover:text-accent transition-colors">
            Best seller
          </button>
          <button className="text-sm sm:text-base text-secondary hover:text-accent transition-colors">
            Featured
          </button>
          <button className="text-sm sm:text-base text-secondary hover:text-accent transition-colors">
            Special offer
          </button>
        </div>
        <p className="text-center text-red-500">{error}</p>
      </section>
    );
  }

  return (
    <section className="container mx-auto py-8 sm:py-16 px-4">
      <h2 className="text-center text-xl sm:text-2xl font-extrabold text-primary-dark mb-6 sm:mb-12">
        Latest Products
      </h2>
      <div className="flex flex-wrap justify-center gap-4 sm:gap-8 mb-6 sm:mb-8">
        <button className="text-sm sm:text-base text-secondary hover:text-accent transition-colors">
          New arrival
        </button>
        <button className="text-sm sm:text-base text-secondary hover:text-accent transition-colors">
          Best seller
        </button>
        <button className="text-sm sm:text-base text-secondary hover:text-accent transition-colors">
          Featured
        </button>
        <button className="text-sm sm:text-base text-secondary hover:text-accent transition-colors">
          Special offer
        </button>
      </div>
      <div className="grid grid-cols-1 min-[450px]:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
        {latestProducts.slice(0, 6).map((product) => (
          <Link key={product.id} href={`/product/${product.id}`}>
            <Card className="group p-4 sm:p-6 hover:shadow-lg transition-shadow duration-300 border border-gray-100 rounded-lg overflow-hidden">
              {/* Product Image */}
              <div className="relative h-48 sm:h-60 mb-4 bg-gray-50 rounded-lg overflow-hidden">
                <Image
                  src={product.image}
                  alt={product.title}
                  fill
                  className="object-contain group-hover:scale-105 transition-transform duration-300"
                  sizes="(max-width: 450px) 100vw, (max-width: 768px) 50vw, (max-width: 1200px) 33vw"
                />
              </div>

              {/* Product Details */}
              <div className="text-center sm:text-left">
                <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">
                  {truncateTitle(product.title, 3)} {/* Truncate title to 3 words */}
                </h3>
                <p className="text-sm sm:text-base text-gray-600 mb-4">
                  {truncateDescription(product.description, 5)}
                </p>
                <div className="flex items-center justify-between">
                  <p className="text-lg sm:text-xl font-bold text-accent">
                    ${product.price}
                  </p>
                  <div className="flex items-center gap-1">
                    <svg
                      className="w-4 h-4 text-yellow-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    <span className="text-sm sm:text-base text-gray-600">
                      {product.rating.rate} ({product.rating.count})
                    </span>
                  </div>
                </div>
              </div>

              {/* Quick Actions */}
              <div className="absolute top-4 right-4 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <button className="p-2 bg-white rounded-full shadow-sm hover:bg-pink-500 hover:text-white transition-colors">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                  </svg>
                </button>
                <button className="p-2 bg-white rounded-full shadow-sm hover:bg-pink-500 hover:text-white transition-colors">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <circle cx="9" cy="21" r="1"></circle>
                    <circle cx="20" cy="21" r="1"></circle>
                    <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
                  </svg>
                </button>
              </div>
            </Card>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default LatestProducts;
'use client';

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function ProductDetails() {
  const [selectedTab, setSelectedTab] = useState('description');
  
  // Sample product data
  const product = {
    name: "Playwood arm chair",
    price: 32.00,
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris tellus porttitor purus, et volutpat sit.",
    image: "/image 1167.png",
    rating: 4.5
  };

  return (
    <main className="bg-white">
      {/* Breadcrumb */}
      <div className="bg-[#F6F5FF] py-8">
        <div className="container mx-auto px-4">
          <h1 className="text-2xl font-bold mb-2">Product Details</h1>
          <div className="text-sm">
            <Link href="/" className="text-gray-600">Home</Link>
            <span className="mx-2">.</span>
            <Link href="/pages" className="text-gray-600">Pages</Link>
            <span className="mx-2">.</span>
            <span className="text-pink-500">Product Details</span>
          </div>
        </div>
      </div>

      {/* Product Section */}
      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Left Column - Images */}
          <div className="lg:w-1/3">
            <div className="flex flex-col gap-4">
              <div className="bg-[#F9F8FE] p-4">
                <Image
                  src={product.image}
                  alt={product.name}
                  width={400}
                  height={400}
                  className="w-full object-contain"
                />
              </div>
              <div className="grid grid-cols-3 gap-4">
                <div className="bg-[#F9F8FE] p-2">
                  <Image
                    src="/image 1167.png"
                    alt="Product view"
                    width={100}
                    height={100}
                    className="w-full object-contain"
                  />
                </div>
                <div className="bg-[#F9F8FE] p-2">
                  <Image
                    src="/image 1168.png"
                    alt="Product view"
                    width={100}
                    height={100}
                    className="w-full object-contain"
                  />
                </div>
                <div className="bg-[#F9F8FE] p-2">
                  <Image
                    src="/image 1169.png"
                    alt="Product view"
                    width={100}
                    height={100}
                    className="w-full object-contain"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Product Info */}
          <div className="lg:w-2/3">
            <h2 className="text-3xl font-bold text-[#0D134E] mb-4">{product.name}</h2>
            
            <div className="flex items-center gap-2 mb-4">
              <div className="flex text-yellow-400">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className={i < Math.floor(product.rating) ? "text-yellow-400" : "text-gray-300"}>★</span>
                ))}
              </div>
              <span className="text-sm text-gray-500">(22)</span>
            </div>

            <div className="flex gap-4 mb-6">
              <span className="text-2xl text-[#151875]">${product.price}</span>
              <span className="text-2xl text-pink-500 line-through">${(product.price * 1.2).toFixed(2)}</span>
            </div>

            <div className="mb-6">
              <h3 className="text-lg font-semibold mb-2">Color</h3>
              <p className="text-gray-600">{product.description}</p>
            </div>

            <div className="flex gap-4 mb-8">
              <button className="bg-[#FB2E86] text-white px-8 py-2 rounded hover:bg-[#d91c6c] transition-colors">
                Add To Cart
              </button>
              <button className="p-2 border border-gray-300 rounded hover:border-pink-500 hover:text-pink-500 transition-colors">
                ♥
              </button>
            </div>

            <div className="border-t pt-6 mb-6">
              <p className="mb-2">
                <span className="font-semibold">Categories:</span> Furniture
              </p>
              <p className="mb-2">
                <span className="font-semibold">Tags:</span> Modern, Latest
              </p>
              <div className="flex items-center gap-2">
                <span className="font-semibold">Share:</span>
                <div className="flex gap-4">
                  <button className="text-blue-600 hover:text-blue-800">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
                  </button>
                  <button className="text-pink-600 hover:text-pink-800">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z"/></svg>
                  </button>
                  <button className="text-blue-400 hover:text-blue-600">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/></svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Description Section */}
      <div className="container mx-auto px-4 py-12">
        {/* Tabs */}
        <div className="flex border-b mb-8">
          <button 
            className={`px-6 py-2 relative ${selectedTab === 'description' ? 'text-pink-500' : 'text-gray-600'}`}
            onClick={() => setSelectedTab('description')}
          >
            Description
            {selectedTab === 'description' && (
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-pink-500"></span>
            )}
          </button>
          <button 
            className={`px-6 py-2 relative ${selectedTab === 'additional' ? 'text-pink-500' : 'text-gray-600'}`}
            onClick={() => setSelectedTab('additional')}
          >
            Additional Info
            {selectedTab === 'additional' && (
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-pink-500"></span>
            )}
          </button>
          <button 
            className={`px-6 py-2 relative ${selectedTab === 'reviews' ? 'text-pink-500' : 'text-gray-600'}`}
            onClick={() => setSelectedTab('reviews')}
          >
            Reviews
            {selectedTab === 'reviews' && (
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-pink-500"></span>
            )}
          </button>
          <button 
            className={`px-6 py-2 relative ${selectedTab === 'video' ? 'text-pink-500' : 'text-gray-600'}`}
            onClick={() => setSelectedTab('video')}
          >
            Video
            {selectedTab === 'video' && (
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-pink-500"></span>
            )}
          </button>
        </div>

        {/* Tab Content */}
        <div className="max-w-4xl">
          {selectedTab === 'description' && (
            <div>
              <h3 className="text-xl font-bold mb-4">Varius tempor.</h3>
              <p className="text-gray-600 mb-6">
                Aliquam dis vulputate vulputate integer sagittis. Faucibus dolor ornare faucibus vel sed et eleifend habitasse amet. Montes, mauris varius ac est bibendum. Scelerisque a, risus ac ante. Velit consectetur neque, elit, aliquet. Non varius proin sed urna, egestas consequat laoreet diam tincidunt. Magna eget faucibus cras justo, tortor sed donec tempus. Imperdiet consequat, quis diam arcu, nulla lobortis justo netus dis. Eu in fringilla vulputate nunc nec. Dui, massa viverr.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <span className="text-pink-500">→</span>
                  <p className="text-gray-600">Aliquam dis vulputate vulputate integer sagittis. Faucibus ds diam arcu, nulla lobortis justo netus dis. Eu in fringilla vulputate nunc nec. Dui, massa viverr .</p>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-pink-500">→</span>
                  <p className="text-gray-600">Aliquam dis vulputate vulputate integer sagittis. Faucibus ds diam arcu, nulla lobortis justo netus dis. Eu in fringilla vulputate nunc nec. Dui, massa viverr .</p>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-pink-500">→</span>
                  <p className="text-gray-600">Aliquam dis vulputate vulputate integer sagittis. Faucibus ds diam arcu, nulla lobortis justo netus dis. Eu in fringilla vulputate nunc nec. Dui, massa viverr .</p>
                </div>
              </div>
            </div>
          )}
          {selectedTab === 'additional' && (
            <div>
              <h3 className="text-xl font-bold mb-4">Additional Information</h3>
              <p className="text-gray-600">Coming soon...</p>
            </div>
          )}
          {selectedTab === 'reviews' && (
            <div>
              <h3 className="text-xl font-bold mb-4">Customer Reviews</h3>
              <p className="text-gray-600">Coming soon...</p>
            </div>
          )}
          {selectedTab === 'video' && (
            <div>
              <h3 className="text-xl font-bold mb-4">Product Video</h3>
              <p className="text-gray-600">Coming soon...</p>
            </div>
          )}
        </div>
      </div>
    </main>
  );
}
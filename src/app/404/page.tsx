'use client';

import Image from "next/image";
import Link from "next/link";

export default function NotFoundPage() {
  return (
    <main className="bg-white min-h-screen">
      {/* Breadcrumb */}
      <div className="bg-[#F6F5FF] py-8">
        <div className="container mx-auto px-4">
          <h1 className="text-2xl font-bold mb-2">404 Not Found</h1>
          <div className="text-sm">
            <Link href="/" className="text-gray-600 hover:text-pink-500 transition-colors">Home</Link>
            <span className="mx-2">.</span>
            <Link href="/pages" className="text-gray-600 hover:text-pink-500 transition-colors">Pages</Link>
            <span className="mx-2">.</span>
            <span className="text-pink-500">404 Not Found</span>
          </div>
        </div>
      </div>

      {/* 404 Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto text-center">
          {/* 404 Image */}
          <div className="relative w-full h-[400px] sm:h-[500px] mb-12">
            <Image
              src="/404img.png"
              alt="404 Not Found"
              fill
              className="object-contain"
              priority
            />
          </div>

          {/* Error Message */}
          <h2 className="text-xl sm:text-2xl text-[#151875] font-bold mb-8">
            oops! The page you requested was not found!
          </h2>

          {/* Back to Home Button */}
          <Link 
            href="/"
            className="inline-block bg-pink-500 text-white px-12 py-4 rounded hover:bg-pink-600 transition-colors text-lg"
          >
            Back To Home
          </Link>

          {/* Client Logos */}
          <div className="mt-24 opacity-50 transition-opacity hover:opacity-75">
            <Image
              src="/logosss.jpg"
              alt="Client logos"
              width={800}
              height={100}
              className="mx-auto"
            />
          </div>
        </div>
      </div>
    </main>
  );
}

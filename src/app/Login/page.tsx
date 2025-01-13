'use client';

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle login logic here
  };

  return (
    <main className="bg-white">
      {/* Breadcrumb */}
      <div className="bg-[#F6F5FF] py-8">
        <div className="container mx-auto px-4">
          <h1 className="text-2xl font-bold mb-2">My Account</h1>
          <div className="text-sm">
            <Link href="/" className="text-gray-600">Home</Link>
            <span className="mx-2">.</span>
            <Link href="/pages" className="text-gray-600">Pages</Link>
            <span className="mx-2">.</span>
            <span className="text-pink-500">My Account</span>
          </div>
        </div>
      </div>

      {/* Login Form */}
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-md mx-auto bg-white rounded-lg shadow-sm p-8">
          <h2 className="text-2xl font-bold text-center text-[#151875] mb-6">Login</h2>
          <p className="text-center text-gray-600 mb-8">
            Please login using account detail below.
          </p>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <input
                type="email"
                placeholder="Email Address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full p-3 border rounded focus:outline-none focus:border-pink-500"
                required
              />
            </div>

            <div>
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full p-3 border rounded focus:outline-none focus:border-pink-500"
                required
              />
            </div>

            <div className="text-right">
              <Link 
                href="/forgot-password" 
                className="text-sm text-gray-600 hover:text-pink-500"
              >
                Forgot your password?
              </Link>
            </div>

            <button
              type="submit"
              className="w-full bg-pink-500 text-white py-3 rounded hover:bg-pink-600 transition-colors"
            >
              Sign In
            </button>

            <div className="text-center">
              <Link 
                href="/register" 
                className="text-sm text-gray-600 hover:text-pink-500"
              >
                Don&apos;t have an Account? Create account
              </Link>
            </div>
          </form>
        </div>

        {/* Company Logos */}
        <div className="mt-24 grid grid-cols-2 md:grid-cols-5 gap-8 ml-80 items-center opacity-50">
          <Image
            src="/logosss.jpg"
            alt="Company logos"
            width={800}
            height={100}
            className="col-span-2 md:col-span-5 object-contain"
          />
        </div>
      </div>
    </main>
  );
}

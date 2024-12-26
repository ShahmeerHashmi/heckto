'use client';

import Link from 'next/link';

export const Footer = () => {
  return (
    <footer className="bg-secondary-dark text-white pt-16 pb-8">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Contact Info */}
          <div>
            <h3 className="text-2xl font-bold mb-6">Hekto</h3>
            <form className="mb-4">
              <div className="flex">
                <input
                  type="email"
                  placeholder="Enter Email Address"
                  className="px-4 py-2 text-sm text-secondary-dark rounded-l-md w-full focus:outline-none"
                />
                <button
                  type="submit"
                  className="bg-accent px-4 py-2 rounded-r-md hover:bg-accent-dark transition-colors"
                >
                  Sign Up
                </button>
              </div>
            </form>
            <p className="text-sm text-gray-400 mb-2">Contact Info</p>
            <p className="text-sm text-gray-400">17 Princess Road, London, Greater London NW1 8JR, UK</p>
          </div>

          {/* Categories */}
          <div>
            <h4 className="font-semibold mb-4">Categories</h4>
            <ul className="space-y-2">
              {['Laptops & Computers', 'Cameras & Photography', 'Smart Phones & Tablets', 'Video Games & Consoles', 'Waterproof Headphones'].map((item) => (
                <li key={item}>
                  <Link href="#" className="text-sm text-gray-400 hover:text-accent-light transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Customer Care */}
          <div>
            <h4 className="font-semibold mb-4">Customer Care</h4>
            <ul className="space-y-2">
              {['My Account', 'Discount', 'Returns', 'Orders History', 'Order Tracking'].map((item) => (
                <li key={item}>
                  <Link href="#" className="text-sm text-gray-400 hover:text-accent-light transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Pages */}
          <div>
            <h4 className="font-semibold mb-4">Pages</h4>
            <ul className="space-y-2">
              {['Blog', 'Browse the Shop', 'Category', 'Pre-Built Pages', 'Visual Composer Elements', 'WooCommerce Pages'].map((item) => (
                <li key={item}>
                  <Link href="#" className="text-sm text-gray-400 hover:text-accent-light transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
            <p>©Hekto 2024. All rights reserved.</p>
            
            {/* Social Links */}
            <div className="flex space-x-4 mt-4 md:mt-0">
              {['Facebook', 'Instagram', 'Twitter'].map((social) => (
                <Link 
                  key={social}
                  href="#" 
                  className="hover:text-accent-light transition-colors"
                >
                  {social}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

'use client';

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const cartItems = [
  {
    id: 1,
    name: "Ut diam consequat",
    color: "Brown",
    size: "XL",
    price: 32.00,
    image: "/image 1167.png"
  },
  {
    id: 2,
    name: "Vel faucibus posuere",
    color: "Brown",
    size: "XL",
    price: 32.00,
    image: "/image 1168.png"
  },
  {
    id: 3,
    name: "Ac vitae vestibulum",
    color: "Brown",
    size: "XL",
    price: 32.00,
    image: "/image 1169.png"
  },
  {
    id: 4,
    name: "Elit massa diam",
    color: "Brown",
    size: "XL",
    price: 32.00,
    image: "/image 1170.png"
  },
  {
    id: 5,
    name: "Proin pharetra elementum",
    color: "Brown",
    size: "XL",
    price: 32.00,
    image: "/image 1171.png"
  }
];

export default function CartPage() {
  const [quantities, setQuantities] = useState<{ [key: number]: number }>(
    cartItems.reduce((acc, item) => ({ ...acc, [item.id]: 1 }), {})
  );

  const subtotal = Object.entries(quantities).reduce((total, [id, quantity]) => {
    const item = cartItems.find(item => item.id === Number(id));
    return total + (item?.price || 0) * quantity;
  }, 0);

  const shipping = 6.00;
  const total = subtotal + shipping;

  const updateQuantity = (id: number, newQuantity: number) => {
    if (newQuantity >= 0) {
      setQuantities(prev => ({ ...prev, [id]: newQuantity }));
    }
  };

  return (
    <main className="bg-white">
      {/* Breadcrumb */}
      <div className="bg-[#F6F5FF] py-8">
        <div className="container mx-auto px-4">
          <h1 className="text-2xl font-bold mb-2">Shopping Cart</h1>
          <div className="text-sm">
            <Link href="/" className="text-gray-600">Home</Link>
            <span className="mx-2">.</span>
            <Link href="/pages" className="text-gray-600">Pages</Link>
            <span className="mx-2">.</span>
            <span className="text-pink-500">Shopping Cart</span>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Cart Items */}
          <div className="lg:w-2/3">
            <div className="overflow-x-auto">
              <table className="w-full min-w-[600px]">
                <thead>
                  <tr className="border-b">
                    <th className="py-4 text-left">Product</th>
                    <th className="py-4 text-left">Price</th>
                    <th className="py-4 text-left">Quantity</th>
                    <th className="py-4 text-left">Total</th>
                  </tr>
                </thead>
                <tbody>
                  {cartItems.map((item) => (
                    <tr key={item.id} className="border-b">
                      <td className="py-4">
                        <div className="flex items-center gap-4">
                          <button className="text-gray-400 hover:text-red-500">×</button>
                          <div className="w-16 h-16 relative bg-[#F6F7FB]">
                            <Image
                              src={item.image}
                              alt={item.name}
                              fill
                              className="object-contain p-2"
                            />
                          </div>
                          <div>
                            <h3 className="font-medium">{item.name}</h3>
                            <p className="text-sm text-gray-500">Color: {item.color}</p>
                            <p className="text-sm text-gray-500">Size: {item.size}</p>
                          </div>
                        </div>
                      </td>
                      <td className="py-4">${item.price.toFixed(2)}</td>
                      <td className="py-4">
                        <div className="flex items-center border rounded w-24">
                          <button 
                            className="px-2 py-1 hover:bg-gray-100"
                            onClick={() => updateQuantity(item.id, quantities[item.id] - 1)}
                          >
                            -
                          </button>
                          <input
                            type="number"
                            value={quantities[item.id]}
                            onChange={(e) => updateQuantity(item.id, parseInt(e.target.value) || 0)}
                            className="w-8 text-center border-x"
                          />
                          <button 
                            className="px-2 py-1 hover:bg-gray-100"
                            onClick={() => updateQuantity(item.id, quantities[item.id] + 1)}
                          >
                            +
                          </button>
                        </div>
                      </td>
                      <td className="py-4">${(item.price * quantities[item.id]).toFixed(2)}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="flex justify-between mt-6">
              <button className="px-6 py-2 border border-pink-500 text-pink-500 rounded hover:bg-pink-500 hover:text-white transition-colors">
                Update Cart
              </button>
              <button className="px-6 py-2 border border-pink-500 text-pink-500 rounded hover:bg-pink-500 hover:text-white transition-colors">
                Clear Cart
              </button>
            </div>
          </div>

          {/* Cart Totals */}
          <div className="lg:w-1/3">
            <div className="bg-[#F4F4FC] p-6 rounded">
              <h2 className="text-xl font-bold mb-6">Cart Totals</h2>
              <div className="space-y-4">
                <div className="flex justify-between pb-4 border-b">
                  <span>Subtotals:</span>
                  <span>${subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between pb-4 border-b">
                  <span>Totals:</span>
                  <span>${total.toFixed(2)}</span>
                </div>
                <p className="text-sm text-gray-500">
                  ✓ Shipping & taxes calculated at checkout
                </p>
                <Link 
                  href="/shipping" 
                  className="w-full bg-[#19D16F] text-white py-3 rounded hover:bg-[#15b862] transition-colors text-center block"
                >
                  Proceed To Checkout
                </Link>
              </div>
            </div>

            {/* Calculate Shipping */}
            <div className="mt-8">
              <h3 className="font-bold mb-4">Calculate Shopping</h3>
              <div className="space-y-4">
                <input
                  type="text"
                  placeholder="Bangladesh"
                  className="w-full p-3 border rounded"
                />
                <input
                  type="text"
                  placeholder="Mirpur Dhaka - 1200"
                  className="w-full p-3 border rounded"
                />
                <input
                  type="text"
                  placeholder="Postal Code"
                  className="w-full p-3 border rounded"
                />
                <button className="px-6 py-2 bg-pink-500 text-white rounded hover:bg-pink-600 transition-colors">
                  Calculate Shipping
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

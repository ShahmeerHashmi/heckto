'use client';

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function ContactPage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
  };

  const contactInfo = [
    {
      icon: (
        <div className="w-8 h-8 rounded-full bg-[#5726DF] flex items-center justify-center">
          <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
          </svg>
        </div>
      ),
      text: "Tel: 877-67-89-99",
      subtext: "Support Forum For 24/7"
    },
    {
      icon: (
        <div className="w-8 h-8 rounded-full bg-[#FB2E86] flex items-center justify-center">
          <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
        </div>
      ),
      text: "E-Mail: shop@store.com",
      subtext: "Free standard shipping on all orders"
    },
    {
      icon: (
        <div className="w-8 h-8 rounded-full bg-[#FFB265] flex items-center justify-center">
          <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
        </div>
      ),
      text: "20 Margaret St, London",
      subtext: "Great Britain, 3NM98-LK"
    }
  ];

  return (
    <main className="bg-white">
      {/* Breadcrumb */}
      <div className="bg-[#F6F5FF] py-8">
        <div className="container mx-auto px-4">
          <h1 className="text-2xl font-bold mb-2">Contact Us</h1>
          <div className="text-sm">
            <Link href="/" className="text-gray-600">Home</Link>
            <span className="mx-2">.</span>
            <Link href="/pages" className="text-gray-600">Pages</Link>
            <span className="mx-2">.</span>
            <span className="text-pink-500">Contact Us</span>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Left Column - Form */}
          <div className="lg:w-1/2">
            <h2 className="text-3xl font-bold mb-6">Information About us</h2>
            <p className="text-gray-600 mb-8">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis neque ultrices mattis aliquam, 
              malesuada diam est. Malesuada sem tristique amet erat vitae eget dolor lobortis.
            </p>

            <div className="flex gap-4 mb-12">
              <div className="w-3 h-3 rounded-full bg-[#5726DF]"></div>
              <div className="w-3 h-3 rounded-full bg-[#FB2E86]"></div>
              <div className="w-3 h-3 rounded-full bg-[#FFB265]"></div>
            </div>

            <h2 className="text-3xl font-bold mb-6">Get In Touch</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <input
                  type="text"
                  placeholder="Your Name*"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full p-3 border rounded focus:outline-none focus:border-pink-500"
                  required
                />
                <input
                  type="email"
                  placeholder="Your E-mail*"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full p-3 border rounded focus:outline-none focus:border-pink-500"
                  required
                />
              </div>
              <input
                type="text"
                placeholder="Subject*"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                className="w-full p-3 border rounded focus:outline-none focus:border-pink-500"
                required
              />
              <textarea
                placeholder="Type Your Message*"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="w-full p-3 border rounded focus:outline-none focus:border-pink-500"
                rows={5}
                required
              />
              <button
                type="submit"
                className="bg-pink-500 text-white px-8 py-3 rounded hover:bg-pink-600 transition-colors"
              >
                Send Mail
              </button>
            </form>
          </div>

          {/* Right Column - Contact Way and Image */}
          <div className="lg:w-1/2">
            <h2 className="text-3xl font-bold mb-8">Contact Way</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-12">
              {contactInfo.map((info, index) => (
                <div key={index} className="flex gap-4">
                  {info.icon}
                  <div>
                    <p className="font-medium mb-1">{info.text}</p>
                    <p className="text-sm text-gray-600">{info.subtext}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="relative h-[400px] rounded-lg overflow-hidden">
              <Image
                src="/contact us grp image.jpg"
                alt="Contact Support"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

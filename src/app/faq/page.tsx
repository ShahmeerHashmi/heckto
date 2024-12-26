'use client';

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const faqs = [
  {
    question: "Eu dictumst cum at sed euismod condimentum?",
    answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt sed tristique mollis vitae, consequat gravida sagittis."
  },
  {
    question: "Magna bibendum est fermentum eros.",
    answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt sed tristique mollis vitae, consequat gravida sagittis."
  },
  {
    question: "Odio muskana hak eris conseekin scelerton?",
    answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt sed tristique mollis vitae, consequat gravida sagittis."
  },
  {
    question: "Elit id blandit sabara boi velit gua mara?",
    answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt sed tristique mollis vitae, consequat gravida sagittis."
  }
];

export default function FAQPage() {
  const [name, setName] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
  };

  return (
    <main className="bg-white min-h-screen">
      {/* Breadcrumb */}
      <div className="bg-[#F6F5FF] py-8">
        <div className="container mx-auto px-4">
          <h1 className="text-2xl font-bold mb-2">FAQ</h1>
          <div className="text-sm">
            <Link href="/" className="text-gray-600 hover:text-pink-500 transition-colors">Home</Link>
            <span className="mx-2">.</span>
            <Link href="/pages" className="text-gray-600 hover:text-pink-500 transition-colors">Pages</Link>
            <span className="mx-2">.</span>
            <span className="text-pink-500">FAQ</span>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col lg:flex-row gap-12">
          {/* General Information Section */}
          <div className="lg:w-1/2">
            <h2 className="text-2xl font-bold text-[#151875] mb-8">Generel Information</h2>
            <div className="space-y-6">
              {faqs.map((faq, index) => (
                <div key={index} className="border-b pb-6">
                  <button
                    className="w-full text-left flex justify-between items-center"
                    onClick={() => setActiveIndex(activeIndex === index ? null : index)}
                  >
                    <h3 className="text-lg font-semibold text-[#151875]">{faq.question}</h3>
                    <span className="text-2xl text-pink-500">
                      {activeIndex === index ? '−' : '+'}
                    </span>
                  </button>
                  {activeIndex === index && (
                    <p className="mt-4 text-gray-600">
                      {faq.answer}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Ask a Question Form */}
          <div className="lg:w-1/2">
            <h2 className="text-2xl font-bold text-[#151875] mb-8">Ask a Question</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <input
                type="text"
                placeholder="Your Name*"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full p-3 border rounded focus:outline-none focus:border-pink-500"
                required
              />
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
        </div>

        {/* Client Logos */}
        <div className="mt-24">
          <Image
            src="/logosss.jpg"
            alt="Client logos"
            width={800}
            height={100}
            className="mx-auto opacity-50"
          />
        </div>
      </div>
    </main>
  );
}

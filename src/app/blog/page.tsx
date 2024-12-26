'use client';

import Image from "next/image";
import Link from "next/link";

// Sample blog posts data
const blogPosts = [
  {
    id: 1,
    title: "Mauris at orci non vulputate diam tincidunt nec.",
    excerpt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit facilisis quis auctor pretium ipsum, eu rutrum. Condimentum eu malesuada vitae ultrices in in neque, porta dignissim. Adipiscing purus, cursus vulputate id id dictum at.",
    image: "/blog1.jpg",
    author: "Surf Auxion",
    date: "Aug 09 2020"
  },
  {
    id: 2,
    title: "Aenean vitae in aliquam ultrices lectus. Etiam.",
    excerpt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit facilisis quis auctor pretium ipsum, eu rutrum. Condimentum eu malesuada vitae ultrices in in neque, porta dignissim. Adipiscing purus, cursus vulputate id id dictum at.",
    image: "/blog2.jpg",
    author: "Surf Auxion",
    date: "Aug 09 2020"
  },
  {
    id: 3,
    title: "Sit nam congue feugiat nisl, mauris amet nisi.",
    excerpt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit facilisis quis auctor pretium ipsum, eu rutrum. Condimentum eu malesuada vitae ultrices in in neque, porta dignissim. Adipiscing purus, cursus vulputate id id dictum at.",
    image: "/blog3.jpg",
    author: "Surf Auxion",
    date: "Aug 09 2020"
  }
];

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Blog Header */}
      <div className="bg-[#F6F5FF] py-8">
        <div className="container mx-auto px-4">
          <h1 className="text-2xl font-bold mb-2">Blog Page</h1>
          <div className="text-sm">
            <Link href="/" className="text-gray-600">Home</Link>
            <span className="mx-2">.</span>
            <Link href="/pages" className="text-gray-600">Pages</Link>
            <span className="mx-2">.</span>
            <span className="text-pink-500">Blog Page</span>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Main Content */}
          <div className="lg:w-2/3">
            {blogPosts.map((post) => (
              <article key={post.id} className="mb-12">
                <div className="relative h-[400px] mb-6">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover rounded-lg"
                  />
                </div>
                <div className="flex items-center gap-4 mb-4 text-sm text-gray-600">
                  <div className="flex items-center gap-2">
                    <svg className="w-4 h-4 text-pink-500" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" />
                    </svg>
                    {post.author}
                  </div>
                  <div className="flex items-center gap-2">
                    <svg className="w-4 h-4 text-pink-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                    </svg>
                    {post.date}
                  </div>
                </div>
                <h2 className="text-2xl font-bold text-[#151875] mb-4">{post.title}</h2>
                <p className="text-gray-600 mb-4">{post.excerpt}</p>
                <Link 
                  href={`/blog/${post.id}`}
                  className="text-[#151875] hover:text-pink-500 font-medium inline-flex items-center gap-2"
                >
                  Read More
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </article>
            ))}

            {/* Pagination */}
            <div className="flex justify-center gap-2 mt-8">
              <button className="w-8 h-8 flex items-center justify-center rounded bg-pink-500 text-white">
                1
              </button>
              <button className="w-8 h-8 flex items-center justify-center rounded hover:bg-gray-100">
                2
              </button>
              <button className="w-8 h-8 flex items-center justify-center rounded hover:bg-gray-100">
                3
              </button>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:w-1/3 space-y-8">
            {/* Search */}
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-bold mb-4">Search</h3>
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search"
                  className="w-full p-3 border rounded-lg pr-10"
                />
                <button className="absolute right-3 top-1/2 -translate-y-1/2">
                  <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </button>
              </div>
            </div>

            {/* Categories */}
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-bold mb-4">Categories</h3>
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <span>Women (21)</span>
                  <span>→</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>Men (19)</span>
                  <span>→</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>Accessories (15)</span>
                  <span>→</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>Kids (8)</span>
                  <span>→</span>
                </div>
              </div>
            </div>

            {/* Recent Posts */}
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-bold mb-4">Recent Post</h3>
              <div className="space-y-4">
                {blogPosts.map((post) => (
                  <div key={post.id} className="flex gap-4">
                    <div className="relative w-20 h-20 flex-shrink-0">
                      <Image
                        src={post.image}
                        alt={post.title}
                        fill
                        className="object-cover rounded"
                      />
                    </div>
                    <div>
                      <h4 className="font-medium text-sm mb-1">{post.title}</h4>
                      <p className="text-xs text-gray-600">{post.date}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Sale Product */}
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-bold mb-4">Sale Product</h3>
              <div className="space-y-4">
                {[1, 2, 3].map((item) => (
                  <div key={item} className="flex gap-4">
                    <div className="relative w-20 h-20 flex-shrink-0">
                      <Image
                        src={`/image ${1170 + item}.png`}
                        alt={`Product ${item}`}
                        fill
                        className="object-contain"
                      />
                    </div>
                    <div>
                      <h4 className="font-medium text-sm mb-1">Elit massa diam</h4>
                      <p className="text-sm text-pink-500">$32.00</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Offer Product */}
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-bold mb-4">Offer Product</h3>
              <div className="grid grid-cols-2 gap-4">
                {[1, 2, 3, 4].map((item) => (
                  <div key={item} className="text-center">
                    <div className="relative w-full h-32 mb-2">
                      <Image
                        src={`/image ${1170 + item}.png`}
                        alt={`Product ${item}`}
                        fill
                        className="object-contain"
                      />
                    </div>
                    <h4 className="text-xs font-medium">Duis lectus est</h4>
                    <p className="text-xs text-pink-500">$12.00 - $15.00</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Follow */}
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-bold mb-4">Follow</h3>
              <div className="flex gap-4">
                <a href="#" className="text-blue-600 hover:text-blue-800">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>
                <a href="#" className="text-pink-600 hover:text-pink-800">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z"/>
                  </svg>
                </a>
                <a href="#" className="text-blue-400 hover:text-blue-600">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                  </svg>
                </a>
              </div>
            </div>

            {/* Tags */}
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-bold mb-4">Tags</h3>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-gray-100 rounded text-sm">General</span>
                <span className="px-3 py-1 bg-gray-100 rounded text-sm">Atsanil</span>
                <span className="px-3 py-1 bg-gray-100 rounded text-sm">Insas.</span>
                <span className="px-3 py-1 bg-gray-100 rounded text-sm">Bibsaas</span>
                <span className="px-3 py-1 bg-gray-100 rounded text-sm">Nulla.</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

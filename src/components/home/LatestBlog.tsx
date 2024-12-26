"use client"
import Image from 'next/image'
import Link from 'next/link'

const LatestBlog = () => {
  const blogPosts = [
    {
      id: 1,
      image: '/blog1.jpg',
      author: 'Saber Ali',
      date: '21 August 2020',
      title: 'Top essential Trends in 2021',
      excerpt: 'More off this less hello samlande lied much over tightly circa horse taped mightily',
      readMoreLink: '#'
    },
    {
      id: 2,
      image: '/blog2.jpg',
      author: 'Surfawion',
      date: '21 August 2020',
      title: 'Top essential trends in 2021',
      excerpt: 'More off this less hello samlande lied much over tightly circa horse taped mightily',
      readMoreLink: '#'
    },
    {
      id: 3,
      image: '/blog3.jpg',
      author: 'Saber Ali',
      date: '21 August 2020',
      title: 'Top essential Trends in 2021',
      excerpt: 'More off this less hello samlande lied much over tightly circa horse taped mightily',
      readMoreLink: '#'
    }
  ]

  return (
    <section className="py-8 sm:py-16 px-4 mb-8 sm:mb-20 mx-auto">
      <div className="min-[360px]:max-w-[360px] min-[450px]:max-w-[450px] md:max-w-7xl mx-auto">
        <h2 className="text-2xl sm:text-4xl font-bold text-center text-[#151875] mb-6 sm:mb-12">
          Latest Blog
        </h2>

        {/* Mobile Slider View (360-450px) */}
        <div className="flex overflow-x-auto snap-x snap-mandatory scrollbar-hide pb-4 sm:hidden">
          {blogPosts.map((post) => (
            <div 
              key={post.id} 
              className="snap-center flex-shrink-0 w-[300px] mx-2 first:ml-0 last:mr-0"
            >
              <div className="bg-white rounded-lg overflow-hidden shadow-md h-full">
                <div className="relative h-[180px]">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-4">
                  <div className="flex items-center gap-3 text-xs text-gray-600 mb-2">
                    <span className="flex items-center">
                      <span className="text-pink-500">By</span>
                      <span className="ml-1">{post.author}</span>
                    </span>
                    <span>{post.date}</span>
                  </div>
                  <h3 className="text-lg font-semibold text-[#151875] mb-2">{post.title}</h3>
                  <p className="text-sm text-gray-600 mb-3">{post.excerpt}</p>
                  <Link 
                    href={post.readMoreLink}
                    className="text-[#151875] hover:text-pink-500 text-sm font-medium inline-block transition-colors"
                  >
                    Read More
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Desktop Grid View */}
        <div className="hidden sm:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {blogPosts.map((post) => (
            <div 
              key={post.id} 
              className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="relative h-[240px]">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-4 text-sm text-gray-600 mb-3">
                  <span className="flex items-center">
                    <span className="text-pink-500">By</span>
                    <span className="ml-1">{post.author}</span>
                  </span>
                  <span>{post.date}</span>
                </div>
                <h3 className="text-xl font-semibold text-[#151875] mb-3">{post.title}</h3>
                <p className="text-gray-600 mb-4">{post.excerpt}</p>
                <Link 
                  href={post.readMoreLink}
                  className="text-[#151875] hover:text-pink-500 font-medium inline-block transition-colors"
                >
                  Read More
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Add custom scrollbar styles */}
      <style jsx global>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  )
}

export default LatestBlog

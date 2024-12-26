"use client"
import Image from 'next/image'
import { Card } from '@/components/ui/card'

const TopCategories = () => {
  const categories = [
    {
      name: 'Mini LCW Chair',
      price: '$56.00',
      image: '/image 1167.png',
      tag: 'New Shop'
    },
    {
      name: 'Mini LCW Chair',
      price: '$56.00',
      image: '/image 1168.png'
    },
    {
      name: 'Mini LCW Chair',
      price: '$56.00',
      image: '/image 1169.png'
    },
    {
      name: 'Mini LCW Chair',
      price: '$56.00',
      image: '/image 1170.png'
    }
  ]

  return (
    <section className="mx-auto py-8 sm:py-16 px-4">
      <div className="min-[360px]:max-w-[360px] min-[450px]:max-w-[450px] md:max-w-6xl mx-auto">
        <h2 className="text-xl sm:text-3xl font-bold text-center text-[#151875] mb-6 sm:mb-12">
          Top Categories
        </h2>
        
        {/* Mobile Slider View */}
        <div className="flex overflow-x-auto snap-x snap-mandatory scrollbar-hide pb-4 sm:hidden">
          {categories.map((category, index) => (
            <div key={index} className="snap-center flex-shrink-0 w-[280px] mx-2 first:ml-0 last:mr-0">
              <Card className="relative group">
                <div className="bg-[#F6F7FB] rounded-full p-4 w-full aspect-square flex items-center justify-center">
                  <Image
                    src={category.image}
                    alt={category.name}
                    width={160}
                    height={160}
                    className="object-contain transition-transform group-hover:scale-110"
                  />
                </div>
                {category.tag && (
                  <span className="absolute top-4 left-4 bg-[#00B55E] text-white text-xs px-2 py-1 rounded">
                    {category.tag}
                  </span>
                )}
                <div className="text-center mt-3 mb-4">
                  <h3 className="text-[#151875] text-sm font-bold">{category.name}</h3>
                  <p className="text-[#151875] text-sm">{category.price}</p>
                </div>
              </Card>
            </div>
          ))}
        </div>

        {/* Desktop Grid View */}
        <div className="hidden sm:flex flex-wrap justify-center gap-4 md:gap-8">
          {categories.map((category, index) => (
            <Card key={index} className="relative group">
              <div className="bg-[#F6F7FB] rounded-full p-8 w-[270px] h-[270px] flex items-center justify-center">
                <Image
                  src={category.image}
                  alt={category.name}
                  width={200}
                  height={200}
                  className="object-contain transition-transform group-hover:scale-110"
                />
              </div>
              {category.tag && (
                <span className="absolute top-4 left-4 bg-[#00B55E] text-white text-sm px-3 py-1 rounded">
                  {category.tag}
                </span>
              )}
              <div className="text-center mt-4 mb-6">
                <h3 className="text-[#151875] font-bold">{category.name}</h3>
                <p className="text-[#151875]">{category.price}</p>
              </div>
            </Card>
          ))}
        </div>

        {/* Pagination Dots */}
        <div className="flex justify-center gap-2 mt-4 sm:mt-8">
          <span className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-[#FB2E86]"></span>
          <span className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-[#FB2E86] opacity-30"></span>
          <span className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-[#FB2E86] opacity-30"></span>
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

export default TopCategories

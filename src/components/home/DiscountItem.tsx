import Image from 'next/image'

const DiscountItem = () => {
  return (
    <section className="mx-auto px-4 sm:px-8 py-8 sm:py-12">
      <div className="min-[360px]:max-w-[360px] min-[450px]:max-w-[450px] md:max-w-6xl mx-auto">
        <h2 className="text-xl sm:text-3xl font-bold text-center text-[#151875] mb-6 sm:mb-8">
          Discount Item
        </h2>
        
        {/* Navigation Tabs */}
        <div className="flex flex-wrap justify-center gap-4 sm:gap-8 mb-8 sm:mb-12">
          <button className="text-sm sm:text-base text-[#FB2E86] hover:text-[#FB2E86] font-medium">
            Wood Chair
          </button>
          <button className="text-sm sm:text-base text-gray-600 hover:text-[#FB2E86] font-medium">
            Plastic Chair
          </button>
          <button className="text-sm sm:text-base text-gray-600 hover:text-[#FB2E86] font-medium">
            Sofa Collection
          </button>
        </div>

        <div className="flex flex-col md:flex-row items-center gap-6 sm:gap-8">
          {/* Left Column - Content */}
          <div className="w-full md:w-1/2 space-y-4 sm:space-y-6">
            <h3 className="text-xl sm:text-2xl font-bold text-[#151875] text-center md:text-left">
              20% Discount Of All Products
            </h3>
            <h4 className="text-[#FB2E86] text-center md:text-left">
              Eams Sofa Compact
            </h4>
            <p className="text-gray-500 text-sm sm:text-base text-center md:text-left">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu eget feugiat habitasse nec, bibendum condimentum.
            </p>
            
            {/* Features List */}
            <div className="grid grid-cols-1 min-[450px]:grid-cols-2 gap-3 sm:gap-4">
              <div className="flex items-center gap-2">
                <span className="text-[#FB2E86] flex-shrink-0">✓</span>
                <span className="text-gray-500 text-sm sm:text-base">Material expose like metals</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-[#FB2E86] flex-shrink-0">✓</span>
                <span className="text-gray-500 text-sm sm:text-base">Clear lines and geometric figures</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-[#FB2E86] flex-shrink-0">✓</span>
                <span className="text-gray-500 text-sm sm:text-base">Simple neutral colours</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-[#FB2E86] flex-shrink-0">✓</span>
                <span className="text-gray-500 text-sm sm:text-base">Material expose like metals</span>
              </div>
            </div>

            <div className="flex justify-center md:justify-start">
              <button className="bg-[#FB2E86] text-white px-6 sm:px-8 py-2 rounded text-sm sm:text-base hover:bg-[#d91c6c] transition-colors">
                Shop Now
              </button>
            </div>
          </div>

          {/* Right Column - Image */}
          <div className="w-full md:w-1/2 relative">
            <div className="w-[200px] h-[200px] sm:w-[300px] sm:h-[300px] bg-pink-100 rounded-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
            <div className="relative">
              <Image
                src="/brchair.png"
                alt="Discount Chair"
                width={500}
                height={500}
                className="relative z-10 w-full h-auto max-w-[250px] sm:max-w-[500px] mx-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default DiscountItem

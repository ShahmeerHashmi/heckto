import Image from 'next/image'
import { Card } from '../ui/card'

const TrendingProducts = () => {
  const products = [
    {
      name: 'Cantilever chair',
      price: '$50.00',
      image: '/image 1167.png'
    },
    {
      name: 'Cantilever chair',
      price: '$50.00',
      image: '/image 1168.png'
    },
    {
      name: 'Cantilever chair',
      price: '$50.00',
      image: '/image 1169.png'
    },
    {
      name: 'Cantilever chair',
      price: '$50.00',
      image: '/image 1170.png'
    }
  ]

  const executiveChairs = [
    {
      name: 'Executive Seat chair',
      price: '$32.00',
      image: '/image 1173.png'
    },
    {
      name: 'Executive Seat chair',
      price: '$32.00',
      image: '/image 1173.png'
    },
    {
      name: 'Executive Seat chair',
      price: '$32.00',
      image: '/image 1173.png'
    }
  ]

  return (
    <section className="mx-auto px-4 py-6">
      <div className="min-[360px]:max-w-[360px] min-[450px]:max-w-[450px] md:max-w-4xl mx-auto">
        <h2 className="text-xl sm:text-3xl mt-8 sm:mt-20 font-bold text-center text-[#1A0B5B] mb-4 sm:mb-6">
          Trending Products
        </h2>
        
        {/* Product Grid */}
        <div className="grid grid-cols-1 min-[450px]:grid-cols-2 md:grid-cols-4 gap-3 mb-4 sm:mb-6">
          {products.map((product, index) => (
            <Card key={index} className={`bg-white ${index === 1 ? 'border border-[#9877E7]' : ''}`}>
              <div className="bg-[#F5F6F8] rounded-t-lg p-3 flex items-center justify-center min-h-[140px] sm:min-h-[160px]">
                <Image
                  src={product.image}
                  alt={product.name}
                  width={100}
                  height={100}
                  className="object-contain hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div className="text-center py-2">
                <h3 className="text-[#151875] text-xs font-bold">{product.name}</h3>
                <p className="text-[#151875] text-xs">{product.price}</p>
              </div>
            </Card>
          ))}
        </div>

        {/* Promotions and Executive Chairs */}
        <div className="grid grid-cols-1 min-[450px]:grid-cols-2 md:grid-cols-3 gap-3">
          {/* Left Promotion */}
          <div className="bg-[#FFF6FB] rounded-lg p-3 flex items-center justify-between h-[140px] sm:h-[160px]">
            <div>
              <h3 className="text-sm sm:text-base font-bold mb-1">23% off in all products</h3>
              <a href="#" className="text-[#FB2E86] text-xs hover:underline">Shop Now</a>
            </div>
            <Image 
              src="/image 1171.png"
              alt="Discount product"
              width={70}
              height={70}
              className="object-contain"
            />
          </div>

          {/* Middle Promotion */}
          <div className="bg-[#EEEFFB] rounded-lg p-3 flex items-center justify-between h-[140px] sm:h-[160px]">
            <div>
              <h3 className="text-sm sm:text-base font-bold mb-1">23% off in all products</h3>
              <a href="#" className="text-[#FB2E86] text-xs hover:underline">View Collection</a>
            </div>
            <Image 
              src="/image 1172.png"
              alt="Collection product"
              width={70}
              height={70}
              className="object-contain"
            />
          </div>

          {/* Executive Chairs */}
          <div className="space-y-1.5 min-[450px]:col-span-2 md:col-span-1">
            {executiveChairs.map((chair, index) => (
              <div key={index} className="bg-white rounded-lg p-2 flex items-center gap-2 h-[45px]">
                <div className="bg-[#F5F6F8] rounded p-1.5 w-12 h-12 flex items-center justify-center">
                  <Image
                    src={chair.image}
                    alt={chair.name}
                    width={32}
                    height={32}
                    className="object-contain"
                  />
                </div>
                <div>
                  <h4 className="text-[#151875] text-xs font-bold">{chair.name}</h4>
                  <p className="text-[#151875] text-xs">{chair.price}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default TrendingProducts

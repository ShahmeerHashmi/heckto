import Image from 'next/image'

const CompanyLogos = () => {
  return (
    <div className="w-full flex justify-center mt-6 sm:mt-10 items-center py-4 sm:py-6 px-4">
      <div className="min-[360px]:max-w-[360px] min-[450px]:max-w-[450px] md:max-w-[800px] w-full">
        <div className="relative w-full">
          {/* Mobile View (360-450px) */}
          <div className="sm:hidden">
            <Image 
              src="/logosss.jpg"
              alt="Company Logos"
              width={450}
              height={100}
              className="w-full h-auto object-contain"
            />
          </div>

          {/* Desktop View */}
          <div className="hidden sm:block">
            <Image 
              src="/logosss.jpg"
              alt="Company Logos"
              width={800}
              height={150}
              className="w-full h-auto object-contain"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default CompanyLogos

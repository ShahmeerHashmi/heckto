import Image from "next/image";

export const Hero = () => {
  return (
    <div className="bg-primary-light w-full mx-auto text-black">
      {/* Mobile Layout (360-450px) */}
      <div className="flex flex-col min-[360px]:max-w-[360px] min-[450px]:max-w-[450px] mx-auto px-4 py-8 sm:hidden">
        <div className="text-center mb-6">
          <span className="text-sm text-accent">Best Furniture For Your Castle....</span>
          <h1 className="text-2xl font-extrabold mt-4">
            New Furniture Collection
            <br />
            Trends in 2020
          </h1>
          <p className="text-xs text-gray-600 mt-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing
            in phasellus non in justo.
          </p>
        </div>
        <div className="relative w-full h-[200px]">
          <Image 
            src="/sofaaaa.png" 
            alt="Featured sofa" 
            fill
            className="object-contain"
            sizes="(max-width: 450px) 100vw"
            priority
          />
        </div>
      </div>

      {/* Desktop Layout */}
      <div className="hidden sm:grid grid-cols-3 h-[560px]">
        <div className="ml-[70px] lg:ml-[50px] xl:ml-[70px]">
          <Image 
            src="/image.png" 
            alt="Decorative furniture piece" 
            width={300} 
            height={300}
            className="w-[200px] h-[200px] lg:w-[250px] lg:h-[250px] xl:w-[300px] xl:h-[300px]"
            priority
          /> 
        </div>
        
        <div className="text-lg text-accent py-36 -ml-48 lg:-ml-32 xl:-ml-48">
          <span>Best Furniture For Your Castle....</span>
          <h1 className="text-4xl text-black font-extrabold mt-8 lg:text-3xl xl:text-4xl">
            New Furniture Collection
            <br />
            Trends in 2020
          </h1>
          <p className="text-xs text-gray-600 mt-8 lg:text-sm xl:text-xs">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing
            <br />
            in phasellus non in justo.
          </p>
        </div>
        
        <div className="mt-[22px] -ml-44 lg:-ml-32 xl:-ml-44">
          <Image 
            src="/sofaaaa.png" 
            alt="Featured sofa" 
            width={600} 
            height={600}
            className="w-[400px] h-[400px] lg:w-[500px] lg:h-[500px] xl:w-[600px] xl:h-[500px]"
            priority
          />
        </div>
      </div>
    </div>
  );
};
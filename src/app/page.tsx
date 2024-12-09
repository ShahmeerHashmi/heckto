import Image from "next/image";
import { Card } from "@/components/ui/card";
export default function Home() {
  return(
    <div className="bg-white ">
      <div className="bg-[#f2f0ff] h-[560px] grid grid-cols-3 w-[100%] mx-auto  text-black">
     
        
        <div className="ml-[70px]"> <Image src="/image.png" alt="" width={300} height={300}/> </div>
        <div className="text-lg text-pink-500 py-36 -ml-48 ">Best Furniture For Your Castle.... <br /><br />
        <div className="text-4xl text-black flex justify-items-start font-extrabold ">New Furniture Collection  <br />
        Trends in 2020 </div> <br />
        <div className="text-xs text-[#8A8FB9]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing <br />
        in phasellus non in justo. <div/>
        </div>
        </div>
        
        <div className="mt-[22px] -ml-44"><Image src="/sofaaaa.png" alt="" width={600} height={600}/> </div> </div>
      <div className="flex justify-center  text-2xl font-extrabold  py-24 text-[#1A0B5B]">Featured Products</div>
      <div className="grid grid-cols-4  justify-items-center my-[-5%] mx-[24%] ">
      <Card className="bg-purple-600 w-[150px] h-[200px]"> hi</Card>
      <Card className="bg-purple-600 w-[150px] h-[200px]"> hi</Card>
      <Card className="bg-purple-600 w-[150px] h-[200px]"> hi</Card>
      <Card className="bg-purple-600 w-[150px] h-[200px]"> hi</Card> </div>
      
      <div className="py-52 flex justify-center text-2xl font-extrabold  text-[#1A0B5B] ">Latest Products</div>
      <div className="grid grid-cols-4 justify-items-center py-0 mx-[35%] ">
      <h6>New arrival</h6> 
      <h6>Best seller</h6>
      <h6>Featured</h6>
      <h6>Special offer</h6> </div>
      <div className="grid grid-cols-3  justify-items-center py-20 mx-[24%] ">
      <Card className="bg-purple-600 w-[240px] h-[240px]"> hi</Card>
      <Card className="bg-purple-600 w-[240px] h-[240px]"> hi</Card>
      <Card className="bg-purple-600 w-[240px] h-[240px]"> hi</Card>
       </div>
       <div className="grid grid-cols-3 py-24 justify-items-center mx-[24%] ">
      <Card className="bg-purple-600 w-[240px] h-[240px]"> hi</Card>
      <Card className="bg-purple-600 w-[240px] h-[240px]"> hi</Card>
      <Card className="bg-purple-600 w-[240px] h-[240px]"> hi</Card>
       </div>
       <div className="flex justify-center  text-xl font-extrabold  py-10 text-[#1A0B5B]">What Shopex offers</div>
       <div className="grid grid-cols-4  justify-items-center py-10 mx-[24%] ">
      <Card className="bg-purple-600 w-[150px] h-[200px]"> hi</Card>
      <Card className="bg-purple-600 w-[150px] h-[200px]"> hi</Card>
      <Card className="bg-purple-600 w-[150px] h-[200px]"> hi</Card>
      <Card className="bg-purple-600 w-[150px] h-[200px]"> hi</Card>
       
       </div>

       <div className="bg-[#f2f0ff]  w-[100%] mt-10 h-[370px] grid grid-cols-2">
        <div className="py-4 ml-80"><Image src="/sofa2.png" alt="" width={350} height={350}/></div>
        <div >
        <div className="py-16 text-[#151875] text-3xl font-extrabold -ml-20">Unique Features Of leatest & <br />
        Trending Poducts 
        </div> <div className="-ml-20 ">
        <li className="text-sm text-gray-400 font-extralight">All frames constructed with hardwood solids and laminates
        </li>
        <li className="text-sm text-gray-400 font-extralight">All frames constructed with hardwood solids and laminates
        </li>
        <li className="text-sm text-gray-400 font-extralight">All frames constructed with hardwood solids and laminates
        </li>
        <li className="text-sm text-gray-400 font-extralight">All frames constructed with hardwood solids and laminates
        </li></div>
       </div></div>


       <div className="flex justify-center  text-2xl font-extrabold  py-24 text-[#1A0B5B]">Trending Products</div>
      <div className="grid grid-cols-4  justify-items-center my-[-5%] mx-[24%] ">
      <Card className="bg-purple-600 w-[150px] h-[200px]"> hi</Card>
      <Card className="bg-purple-600 w-[150px] h-[200px]"> hi</Card>
      <Card className="bg-purple-600 w-[150px] h-[200px]"> hi</Card>
      <Card className="bg-purple-600 w-[150px] h-[200px]"> hi</Card> </div>

      <div className="grid grid-cols-3 py-24  justify-items-center my-[-5%] mx-[25%]">
      <Card className="bg-purple-600 w-[240px] h-[200px]"> hi</Card>
      <Card className="bg-purple-600 w-[240px] h-[200px]"> hi</Card>
      <div className="grid grid-rows-3">
      <Card className="bg-purple-600 w-[240px] h-[60px]"> hi</Card>
      <Card className="bg-purple-600 w-[240px] h-[60px]"> hi</Card>
      <Card className="bg-purple-600 w-[240px] h-[60px]"> hi</Card>
      </div></div>
      <div className="flex justify-center  text-2xl font-extrabold  py-24 text-[#1A0B5B]">Discount Item</div>
     <div className="grid grid-cols-3 justify-items-center py-0 mx-[35%] ">
      <h6>Wood Chair</h6> 
      <h6>Plastic Chair</h6>
      <h6>Sofa Collection</h6>
      </div>
      <div className=" bg-white w-[1000px] ml-[350px] h-[500px] grid grid-cols-2 justify-center items-center">
        
          <div className="py-16 text-[#151875] text-2xl font-extrabold ">20% Discount Of All Products <br />
            <div className="text-lg text-[#FB2E86] mt-4 font-extralight">Eams Sofa Compact</div>
            <div className="text-sm font-extralight mt-4 text-gray-400">Lorem ipsum dolor sit amet, consectetur 
              adipiscing elit. Eu eget <br /> 
            feugiat habitasse nec, bibendum condimentum.</div>
            <div className="grid grid-cols-2"><div className="text-sm font-extralight mt-4 text-gray-400">
              Material expose like metals <div className="text-sm font-extralight mt-4 text-gray-400">
                Simple neutral colours.</div></div>
            <div className="text-sm font-extralight mt-4 text-gray-400">Clear lines and geomatric figures
              <div className="text-sm font-extralight mt-4 text-gray-400">Material expose like metals</div>
              </div>
            </div>
          </div>
        <div><Image src="/brchair.png" alt="i" height={400} width={400}/></div></div>

        <div className="flex justify-center  text-2xl font-extrabold  py-24 text-[#1A0B5B]">Top Categories</div>
    </div>

    
    
  )}
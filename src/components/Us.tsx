import React from 'react'
import Image from 'next/image'
import { Button } from "@/components/ui/button"
import img1 from "../../public/assets/whyusimg.png"
import img2 from "../../public/assets/Hamburger.png"
import img3 from "../../public/assets/Cookie.png"
import img4 from "../../public/assets/Wine.png"
import img5 from "../../public/assets/blog-img1.png"
import img6 from "../../public/assets/foodcateg-3.png"
import img7 from "../../public/assets/us-3.png"
import img8 from "../../public/assets/menu-2.png"
import img9 from "../../public/assets/us-2.png"
import img10 from "../../public/assets/recent-2.png"



const Ustext = () => {
  return (
    <div className='max-w-[1920px]  flex flex-col lg:flex-row bg-[#000000] mx-auto'>

      {/* Photo Gallery Section */}

      <div className="max-w-[1920px] py-10">
  {/* Image Container */}
  <div className="grid grid-cols-3 gap-4">
    {/* Image 1 - takes 2 columns */}
    <div className="col-span-2">
      <Image
        src={img5} 
        alt="photogalleryimg" 
        width={362} 
        height={356} 
        className="w-full h-auto object-cover" 
      />
    </div>

    {/* Image 2 */}
    <Image
      src={img7} 
      alt="photogalleryimg" 
      width={281} 
      height={231} 
      className="w-full h-auto object-cover" 
    />

    {/* Image 3 */}
    <Image
      src={img6} 
      alt="photogalleryimg" 
      width={221} 
      height={226} 
      className="w-full h-auto object-cover" 
    />

    {/* Image 4 */}
    <Image
      src={img8} 
      alt="photogalleryimg" 
      width={224} 
      height={306} 
      className="w-full h-auto object-cover" 
    />

    <div className="flex flex-col gap-2">
      {/* Image 5 */}
      <Image
        src={img9} 
        alt="photogalleryimg" 
        width={141} 
        height={148} 
        className="w-full h-auto object-cover" 
      />

      {/* Image 6 */}
      <Image
        src={img10} 
        alt="photogalleryimg" 
        width={161} 
        height={166} 
        className="w-full h-auto object-cover" 
      />
    </div>
  </div>
</div>
    
         
         {/* text section */}
      <div className="max-w-[1920px]  flex flex-col mx-auto  py-10 bg-[#000000] ">
        <div className="max-w-[433px] text-[16px] py-2 ">
          <h1 className="text-[#FF9F0D] font-normal text-2xl py-4  ">
         <Image src={img1} alt={"hero-img"} width={249} height={182} /></h1>
          <h2 className=" max-w-[433px] text-[48px] font-bold text-[#FF9F0D] py-2 ">
            Ex<span className=' text-[60px] font-bold text-[#FFFFFF]'>tra ordinary taste
              And Experienced </span>
          </h2>
          <p className=" max-w-[526px] font-light text-[#fFFFFF] text-base py-4 ">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam pellentesque
            bibendum non dui volutpat fringilla bibendum. Urna, elit augue urna, vitae feugiat
            pretium donec id elementum. Ultrices mattis sed vitae mus risus.
            Lacus nisi, et ac dapibus sit eu velit in consequat.</p>
              </div>

          {/* logo Section */}
          <div className='max-w-[433px]  flex gap-4 py-2   '>
            <div className='  '>

              <h1 className='bg-[#ff9f0d]'> <Image src={img2} alt={"hero-img"} width={56} height={56} /></h1>
              <h1 className='text-[#ffffff]'>Fast Food</h1>
            </div>
            <div className='   '>
              <h1 className='bg-[#ff9f0d] text-[#333333]'> <Image src={img3} alt={"hero-img"} width={56} height={56} /></h1>
              <h1 className='text-[#ffffff]'>Lunch</h1>
            </div>
            <div className=''>
              <h1 className='bg-[#ff9f0d] text-[#333333]'> <Image src={img4} alt={"hero-img"} width={56} height={56} /></h1>
              <h1 className='text-[#ffffff]'>Dinner</h1></div>
          </div>
          


               {/* button */}
          
            <Button className="bg-[#FFffff] rounded-sm  max-w-[374px] h-[93px] text-sm text-[#FFFFFF] " >
              <h2 className=" text-[24px] font-bold text-[#FF9F0D] ">
                30+<span className=' text-[24px] font-bold text-[#1E1E1E]'>Years of Experienced </span> </h2></Button>
          
        </div>



        



      </div>


    
  )
}

export default Ustext
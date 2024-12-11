import React from 'react'
import Image from 'next/image'
import img1 from"../../public/assets/Chef Card 1 (1).png"
import img2 from"../../public/assets/Chef Card 1 (2).png"
import img3 from"../../public/assets/Card 3.png"
import img4 from"../../public/assets/chefcard2.png"
import imgh from"../../public/assets/Chefs.png"
const Ourchefs = () => {
  return (
    <div className=' max-w-[1920px]'>
        
        {/* Photo Gallery Section */}
  <div className='max-w-[1920px] mx-auto flex  flex-col flex-wrap bg-[#000000] items-center py-4 '>
       <Image src={imgh} alt={'photogalleryimg'} width={56} height={56} />
       <h2 className=" max-w-[429px] text-[48px] font-bold text-[#FF9F0D] py-2 ">
        Me<span  className='text-[48px] font-bold text-[#FFFFFF]'>et Our Chef</span>
        </h2>

     </div>

    {/* Image Container */}
    <div className='grid md:grid-cols-4 gap-2 items-center grid-cols-2 '>
      <Image src={img1} alt={'photogalleryimg'} width={312} height={391} />
      <Image src={img4} alt={'photogalleryimg'} width={312} height={391} />
      <Image src={img3} alt={'photogalleryimg'} width={312} height={391} />
      <Image src={img2} alt={'photogalleryimg'} width={312} height={391} />
      
    </div>
  
  </div>
  )
}

export default Ourchefs
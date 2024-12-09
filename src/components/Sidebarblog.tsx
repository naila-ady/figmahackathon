import React from 'react'
import { Facebook, Youtube, Twitter, Instagram, Podcast, Search } from 'lucide-react';
import Image from 'next/image';
import imgo from "../../public/assets/blog-sideimg.png"
import imgq from "../../public/assets/recent-4.png"
import imgr from "../../public/assets/recent-3.png"
import imgs from "../../public/assets/recent-2.png"
import imgt from "../../public/assets/recent-1.png"


import imgu from "../../public/assets/filter-1.png"
import imgv from "../../public/assets/filter-2.png"
import imgw from "../../public/assets/filter-3.png"
import imgx from "../../public/assets/filter-4.png"
import imgy from "../../public/assets/filter-5.png"


import img1 from "../../public/assets/photo-gallery1.png"
import img2 from "../../public/assets/photo-gallery2.png"
import img3 from "../../public/assets/photo-gallery3.png"
import img4 from "../../public/assets/photo-gallery4.png"
import img5 from "../../public/assets/filter-3.png"
import img6 from "../../public/assets/photogallery6.png"


const Sidebarblog = () => {
    return (


        <div className=" ">
            <div className='relative py-1 inline-flex mt-8  justify-center'>
                <input
                    type="text"
                    placeholder='Search your keyword'
                    className=' rounded-lg h-16 pt-3 pr-3 pb-2 pl-5 font-[inter] text-[16px]
                 border-[#e0e0e0] border-2 bg-[#ffffff] w-[424px]'/>
                <Search className="absolute w-8 h-14 bg-[#ff9f0d] left-48 top-5 transform -translate-y-3 text-[#FFFFFF]" />
            </div>

            <div className="max-w-[424px] h-[830px] border-2 border-[#E0E0E0] 
             flex flex-col py-12 sm:h-auto justify-evenly items-center bg-[#ffffff] mx-auto">
                

                {/* Image Section */}
                <div className="max-w-[170px] mt-2">
                    <Image src={imgo} alt={"hero-img"} width={150} height={150} className='rounded-full mx-auto' />
                </div>

                {/* Text Section */}
                <div className="max-w-[424px] text-[16px] text-center mt-6">
                    <h1 className="text-[#333333] font-normal text-2xl">Prince Miyako</h1>
                    <p className='max-w-[472px] font-light text-[#4F4F4F] text-base mt-2 sm:text-md'>
                        Blogger/Photographer
                    </p>
                    <p className="max-w-[424px] font-light text-[#4F4F4F] text-base mt-2 sm:text-md">
                        
                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et<br />
                        dolore magna aliquyam erat
                    </p>
                </div>

                {/* Social Media Section */}
                <div className="flex items-center flex-wrap mt-6 justify-center">
                    <h2 className="text-[60px] font-bold text-[#ff9f0d] sm:text-base inline-flex gap-3">
                        <span className='text-[#FF9F0D]'><Facebook /></span>
                        <Instagram />
                        <span className='text-[#FF9F0D]'><Twitter /></span>
                        <span className='text-[#FF9F0D]'><Podcast /></span>
                        <Youtube />
                    </h2>
                </div>
            </div>


            {/* recent posts */}

            <div className='max-w-[423px] border-2 border-[#E0E0E0] py-6  '>
             <h1 className='text-[20px] font-bold text-[#333333] ml-8'>Recent Post</h1>
                   <div className='max-w-[423px] py-2 flex flex-col flex-wrap justify-evenly md:flex-row '>
                <div className='w-[110px] h-[92px]'>
                    <Image src={imgq} alt={'photogalleryimg'} width={110} height={92} />
                </div>
                <div className='max-w-[205px] flex flex-col '>
                    <h2 className='text-[14px] font-normal text-[#828282]  justify-between w-full '>
                        June 22, 2020</h2>
                    <p className='text-[16px] font-normal text-[#4F4F4f] border-b-2 border-[#E0E0E0]'>Lorem ipsum dolor sit cing
                        elit, sed do.</p>
                    </div>
                </div>
            
            {/* 2nd */}
            <div className='max-w-[423px] flex flex-col flex-wrap justify-evenly md:flex-row py-2'>
                <div className='w-[110px] h-[92px]'>
                    <Image src={imgr} alt={'photogalleryimg'} width={110} height={92} className='text-[32px] font-medium' />
                </div>
                <div className='max-w-[205px] flex flex-col '>
                    <h2 className='text-[14px] font-normal text-[#828282]  justify-between  w-full '>
                        June 22, 2020</h2>
                    <p className='text-[16px] font-normal text-[#4F4F4f] border-b-2 border-[#E0E0E0]'>Lorem ipsum dolor sit cing
                        elit, sed do.</p>
                    </div>
                </div>
                   {/* 3rd */}
            <div className='max-w-[423px] flex flex-col flex-wrap justify-evenly md:flex-row py-2'>
                <div className='w-[110px] h-[92px]'>
                    <Image src={imgs} alt={'photogalleryimg'} width={110} height={92} className='text-[32px] font-medium' />
                </div>
                <div className='max-w-[205px] flex flex-col '>
                    <h2 className='text-[14px] font-normal text-[#828282]  justify-between  w-full '>
                        June 22, 2020</h2>
                    <p className='text-[16px] font-normal text-[#4F4F4f] border-b-2 border-[#E0E0E0]'>Lorem ipsum dolor sit cing
                        elit, sed do.</p>
                    </div>
                </div>

                   {/* 4th */}
            <div className='max-w-[423px] flex flex-col flex-wrap justify-evenly md:flex-row py-2'>
                <div className='w-[110px] h-[92px]'>
                    <Image src={imgt} alt={'photogalleryimg'} width={110} height={92} className='text-[32px] font-medium' />
                </div>
                <div className='max-w-[205px] flex flex-col '>
                    <h2 className='text-[14px] font-normal text-[#828282]  justify-between  w-full '>
                        June 22, 2020</h2>
                    <p className='text-[16px] font-normal text-[#4F4F4f] border-b-2 border-[#E0E0E0]'>Lorem ipsum dolor sit cing
                        elit, sed do.</p>
                    </div>
                </div>
            
          </div>  
            
              {/* Filter by menu */}

            <div className='max-w-[423px] border-2 border-[#E0E0E0] py-6  '>
             <h1 className='text-[20px] font-bold text-[#333333] ml-8'>Filter by Menu</h1>
                   <div className='max-w-[423px] py-2 flex flex-col flex-wrap justify-evenly md:flex-row '>
                <div className='w-[110px] h-[92px]'>
                    <Image src={imgu} alt={'photogalleryimg'} width={110} height={92} />
                </div>
                <div className='max-w-[205px] inline-flex gap-10 items-center'>
                    <h2 className='text-[16px] font-bold text-[#333333] '>Chicken Fry</h2>
                    <h2>46</h2>
                                       </div>
                </div>
            
            {/* 2nd */}
            <div className='max-w-[423px] flex flex-col flex-wrap justify-evenly md:flex-row py-2'>
                <div className='w-[110px] h-[92px]'>
                    <Image src={imgv} alt={'photogalleryimg'} width={110} height={92} />
                </div>
                <div className='max-w-[205px] inline-flex gap-10 items-center '>
                    <h2 className='text-[16px] font-bold text-[#333333] '>
                    Burger Food</h2>
                    <h2>46</h2>
                                        </div>
                </div>
                   {/* 3rd */}
            <div className='max-w-[423px] flex flex-col flex-wrap justify-evenly md:flex-row py-2'>
                <div className='w-[110px] h-[92px]'>
                    <Image src={imgw} alt={'photogalleryimg'} width={110} height={92} />
                </div>
                <div className='max-w-[205px] inline-flex gap-10 items-center '>
                    <h2 className='text-[16px] font-bold text-[#333333] '>
                    Pizza</h2>
                    <h2>46</h2>
                    
                    </div>
                </div>

                   {/* 4th */}
            <div className='max-w-[423px] flex flex-col flex-wrap justify-evenly md:flex-row py-2'>
                <div className='w-[110px] h-[92px]'>
                    <Image src={imgx} alt={'photogalleryimg'} width={110} height={92} />
                </div>
                <div className='max-w-[205px] inline-flex items-center gap-10'>
                    <h2 className='text-[16px] font-bold text-[#333333]'>
                    Fresh Fruits  </h2>
                    <h2>46</h2>
                     </div>
                </div>

                <div className='max-w-[423px] flex flex-col flex-wrap justify-evenly  md:flex-row py-2'>
                <div className='w-[110px] h-[92px]'>
                    <Image src={imgy} alt={'photogalleryimg'} width={110} height={92} />
                </div>
                <div className='max-w-[205px] inline-flex gap-10 items-center'>
                    <h2 className='text-[16px] font-bold text-[#333333]  '>
                    Vegetables  </h2>
                    <h2 >46</h2>
                     </div>
                </div>
          </div>  
           

  
  {/* Photo Gallery Section */}
  <div className='max-w-[422px] flex flex-wrap border-2 border-[#E0E0E0] justify-evenly py-4 gap-6'>
  <div className=''>
    <h1 className='text-[20px] font-bold text-[#333333]'>Photo Gallery</h1>
  </div>

    {/* Image Container */}
    <div className='grid grid-cols-3 gap-6 items-center '>
      <Image src={img1} alt={'photogalleryimg'} width={110} height={92} />
      <Image src={img2} alt={'photogalleryimg'} width={110} height={92} />
      <Image src={img3} alt={'photogalleryimg'} width={110} height={92} />
      <Image src={img4} alt={'photogalleryimg'} width={110} height={92} />
      <Image src={img5} alt={'photogalleryimg'} width={110} height={92} />
      <Image src={img6} alt={'photogalleryimg'} width={110} height={92} />
    </div>
  </div>
     {/* sociallinks */}
      <div className='max-w-[422px] h-[158px] flex-col flex-wrap border-2 border-[#E0E0E0]
         py-8'>
            <h1 className=' max-w-[422px] text-[#333333] text-[20px] font-bold flex justify-center'>Follow Us</h1>
      <div className='max-w-[422px] h-[158px] inline-flex px-16 gap-8'>     
      <Twitter className='bg-red-100 text-[#333333]'  />
      <Youtube className='bg-red-100 text-[#333333]' />
      <Podcast className='bg-[#ff9f0d] text-[#ffffff]' />
      <Instagram className='bg-red-100 text-[#333333]' />
      <Facebook  className='bg-red-100 text-[#333333]'/>
      </div>
      </div>

      
</div>



        



    )
}

export default Sidebarblog
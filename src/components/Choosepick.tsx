import React from 'react'
import Image from 'next/image'
import Link from 'next/link';
import imga from "../../public/assets/Choose & pick.png";
import imgb from "../../public/assets/choose-2.png";
import imgc from "../../public/assets/choose3-1.png";
import imgd from "../../public/assets/choose3-.png";
import imge from "../../public/assets/choose3-2.png";
import imgf from "../../public/assets/choose3-3.png";
import imgg from "../../public/assets/choose3-4.png";
import imgh from "../../public/assets/recent-1.png";
import imgi from "../../public/assets/about-3.png";
import imgj from "../../public/assets/us-3.png";


const Choosepick = () => {
  return (
    
        
        <div className='max-w-[1920px]  flex flex-col bg-[#000000] mx-auto py-6'>
         {/* {/Heading section */} 
  <div className='max-w-[1790px] mx-auto flex flex-col bg-[#000000] items-center py-4 '>
       <Image src={imga} alt={'photogalleryimg'} width={144} height={40} />
       <h2 className="  text-[48px] font-bold text-[#FF9F0D] py-2 ">
        Fr<span  className='text-[48px] font-bold text-[#FFFFFF]'>om Our Menu</span>
        </h2>
        </div>

    
      {/* Links and Search section */}
      <div className='max-w-[1920px] bg-[#000000] flex py-10 mx-auto '>
        <ul className='max-w-[1056px] bg-[#000000] flex flex-col sm:flex-row gap-6 mx-auto items-center
     justify-center lg:gap-20 text-[16px] text-[#FFFFFF]  list-none   '>
          <Link href={"./breakfast"} className="mr-5 text-1xl text-[#ff9f0d] hover:text-[#ffffff]">
            Breakfast
          </Link>
          <Link href={".lunch"} className="mr-5 text-1xl hover:text-[#ff9f0d]">
            Lunch
          </Link>
          <Link href={"./dinner"} className="mr-5 text-1xl hover:text-[#ff9f0d]">
            Dinner
          </Link>
          <Link href={"./desert"} className="mr-5 text-1xl hover:text-[#ff9f0d]">
            Desert
          </Link>
          <Link href={"./soups"} className="mr-5 text-1xl hover:text-[#ff9f0d]">
            Soups
          </Link>
          <Link href={"./snacks"} className="mr-5 text-1xl hover:text-[#ff9f0d]">
            Snacks
          </Link>
          <Link href={"./soups"} className="mr-5 text-1xl hover:text-[#ff9f0d]">
            Soups
          </Link>
   </ul>
     </div>
      {/* recent menu */}
      <div className="max-w-[1790px]  container  flex flex-col flex-wrap sm:flex-row
       justify-evenly bg-[#000000] mx-auto sm:py-16 md:py-20 lg:py-24 xl:py-28'  ">
      <div className="max-w-[877px]  items-center " >
        <Image src={imgb} alt={"hero-img"} width={515} height={406} />
      </div>
      <div className='max-w-[800px]  py-6 flex flex-row  '>
      <div className='max-w-[800px] py-2 '>
                    <div className='max-w-[423px] py-3  flex justify-evenly mx-auto  '>
                            <div className='w-[80px]'>
                    <Image src={imgc} alt={'photogalleryimg'} width={80} height={79} />
                </div>
                <div className='max-w-[287px] flex flex-col  '>
                    <h2 className='text-[20px] font-bold text-[#ffffff] '>
                    Lettuce Leaf</h2>
                    <p className='text-[14px] font-normal text-[#ffffff] '>Lacus nisi, et ac dapibus velit in consequat.</p>
                     <p className='text-[18px] font-bold text-[#ff9f0d] '>12.5$</p>
                    </div>
                    </div>

                    {/* 2 */}
                    <div className='max-w-[423px]  py-3 flex justify-evenly  mx-auto '>
                            <div className='w-[80px]'>
                    <Image src={imgd} alt={'photogalleryimg'} width={80} height={79} />
                </div>
                <div className='max-w-[287px] flex flex-col  '>
                    <h2 className='text-[20px] font-bold text-[#ffffff]  '>
                    Fresh Breakfast</h2>
                    <p className='text-[14px] font-normal text-[#ffffff] '>Lacus nisi, et ac dapibus velit in consequat.</p>
                    <p className='text-[18px] font-bold text-[#ff9f0d] '>12.5$</p>
                    </div>
                    </div>


                    {/* 3 */}
                    <div className='max-w-[423px]  py-3 flex justify-evenly  mx-auto '>
                            <div className='w-[80px]'>
                    <Image src={imge} alt={'photogalleryimg'} width={80} height={79} />
                </div>
                <div className='max-w-[287px] flex flex-col '>
                    <h2 className='text-[20px] font-bold text-[#ffffff]'>Mild Butter</h2>
                    <p className='text-[14px] font-normal text-[#ffffff] '>Lacus nisi, et ac dapibus velit in consequat.</p>
                    <p className='text-[18px] font-bold text-[#ff9f0d] '>12.5$</p>
                    </div>
                    </div>
                    {/* 4 */}
                    <div className='max-w-[423px]  py-3 flex justify-evenly  mx-auto '>
                            <div className='w-[80px]'>
                    <Image src={imgf} alt={'photogalleryimg'} width={80} height={79} />
                </div>
                <div className='max-w-[287px] flex flex-col  '>
                    <h2 className='text-[20px] font-bold text-[#ffffff] '>
                    Fresh Bread</h2>
                    <p className='text-[14px] font-normal text-[#ffffff] '>Lacus nisi, et ac dapibus velit in consequat.</p>
                    <p className='text-[18px] font-bold text-[#ff9f0d] '>12.5$</p>
                    </div>
                    </div>
                    </div>


                    {/* row-2 */}
                    <div className='max-w-[800px]  py-2 '>
                    <div className='max-w-[800px]  py-3 flex justify-evenly  mx-auto '>
                            <div className='w-[80px]'>
                    <Image src={imgg} alt={'photogalleryimg'} width={80} height={79} />
                </div>
                <div className='max-w-[287px] flex flex-col '>
                    <h2 className='text-[20px] font-bold text-[#ffffff]  '>
                    Glow Cheese</h2>
                    <p className='text-[14px] font-normal text-[#ffffff] '>Lacus nisi, et ac dapibus velit in consequat.</p>
                    <p className='text-[18px] font-bold text-[#ff9f0d] '>12.5$</p>
                    </div>
                    </div>

                    {/* 2 */}
                    <div className='max-w-[423px]  py-3 flex justify-evenly  mx-auto '>
                            <div className='w-[80px]'>
                    <Image src={imgh} alt={'photogalleryimg'} width={80} height={79} />
                </div>
                <div className='max-w-[287px] flex flex-col '>
                    <h2 className='text-[20px] font-bold text-[#ffffff] '>
                    Italian Pizza</h2>
                    <p className='text-[14px] font-normal text-[#ffffff] '>Lacus nisi, et ac dapibus velit in consequat.</p>
                    <p className='text-[18px] font-normal text-[#ff9f0d] '>12.5$</p>
                    </div>
                    </div>


                    {/* 3 */}
                    <div className='max-w-[423px]  py-3 flex justify-evenly  mx-auto '>
                            <div className='w-[80px]'>
                    <Image src={imgi} alt={'photogalleryimg'} width={80} height={79} />
                </div>
                <div className='max-w-[287px] flex flex-col  '>
                    <h2 className='text-[20px] font-bold text-[#ffffff] '>
                    Sllice Beef</h2>
                    <p className='text-[14px] font-normal text-[#ffffff] '>Lacus nisi, et ac dapibus velit in consequat.</p>
                    <p className='text-[18px] font-bold text-[#ff9f0d] '>12.5$</p>
                    </div>
                    </div>
                    {/* 4 */}
                    <div className='max-w-[423px]  py-3 flex justify-evenly  mx-auto '>
                            <div className='w-[80px]'>
                    <Image src={imgj} alt={'photogalleryimg'} width={80} height={79} />
                </div>
                <div className='max-w-[287px] flex flex-col'>
                    <h2 className='text-[20px] font-bold text-[#ffffff] '>
                    Mushaom Pizza</h2>
                    <p className='text-[14px] font-normal text-[#ffffff] '>Lacus nisi, et ac dapibus velit in consequat.</p>
                    <p className='text-[18px] font-bold text-[#ff9f0d] '>12.5$</p>
                    </div>
                    </div>
                    </div>
                 </div>
                    </div>
                    </div>
                  
                  
                
                
  
  
  
     
    
  )
}

export default Choosepick
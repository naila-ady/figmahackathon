import React from 'react'
import Image from 'next/image';
import img1 from "../../public/assets/foodcateg1.png"
import img2 from "../../public/assets/foodcateg2.png"
import img3 from "../../public/assets/foodcateg-3.png"
import img4 from "../../public/assets/foodcateg4.png"
import img5 from "../../public/assets/Food Categorymain.png"
import imgx from "../../public/assets/menu-3.png"
import imgz from "../../public/assets/restaur.png"
import Ustext from "../components/Us"
import Ourchefs from './Ourchefs';
import Choosepick from './Choosepick';


const Foodcategory = () => {
  return (
    
        <div className='max-w-[1920px]  flex flex-row flex-wrap justify-evenly py-4 
        bg-[#0D0D0D] mx-auto'>
  <div className=''>
      <Image src={img5} alt={'photogalleryimg'} width={306} height={329} />
      
    <h1 className='text-[48px] font-bold text-[#ff9f0d]'>Ch
         <span className=' text-[48px] font-bold text-[#ffffff]'>oose Food Item</span></h1>
  </div>

    {/* Image Container */}
    <div className='grid grid-cols-4 gap-6 items-center '>
      <Image src={img1} alt={'photogalleryimg'} width={306} height={329} />
      <Image src={img2} alt={'photogalleryimg'} width={306} height={329} />
      <Image src={img3} alt={'photogalleryimg'} width={306} height={329} />
      <Image src={img4} alt={'photogalleryimg'} width={306} height={329} />
      
    </div>
      {/* <Choosepick/> */}
    {/* <Ustext/> */}
    {/* <Ourchefs/> */}


  {/* clinent and customer */}
  {/* <div className='max-w-[1920px]  py-10 mx-auto  '>
         <Image src={imgx} alt={'menu-client-img'} width={1920} height={468} className='text-[32px] font-medium' />
        </div> */}

        {/* <div className='max-w-[1920px]  py-10  mx-auto '>
         <Image src={imgz} alt={'menu-client-img'} width={1920} height={468} className='text-[32px] font-medium' />
        </div>
 */}
        
  </div>
 
    
  )
}

export default Foodcategory
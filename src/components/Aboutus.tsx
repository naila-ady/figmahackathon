import React from 'react'
import Image from 'next/image'
import {Check} from 'lucide-react';
import { Button } from "@/components/ui/button"

import img1 from '../../public/assets/about-text.png'
import img2 from '../../public/assets/about-1.png'
import img3 from '../../public/assets/about-2.png'
import img4 from '../../public/assets/about-3.png'

const aboutus = () => {
  return (
    
    <div className=" max-w-[1920px] h-[562px] py-2 bg-[#000000] mx-auto flex flex-col flex-wrap
     justify-between sm:flex-row sm:h-auto sm:justify-center">
   <div className=" max-w-[562px] h-[562px] bg-[#000000]  flex flex-col flex-wrap
    sm:flex-row justify-between">
  {/* < About Us   */}
  <div className=" max-w-[446px] h-[90px] px-4 bg-[#000000]  flex flex-col flex-wrap
    sm:flex-row justify-between ">
    <Image src={img1} alt={'about'} width={91} height={40} className='text-[32px] font-medium'/>
    <h1 className=" w-[446px] h-[110px] text-4xl font-bold text-[#FF9F0D]">We<span className="text-4xl font-bold text-[#FFFFFF]"> 
    Create the Best <br/> Foody Product</span></h1>

  </div>


  {/* <!-- Paragraph --> */}
  <div className=" w-[526px] h-[130px]  text-white px-4">
    <p className="text-lg leading-7">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam pellentesque bibendum non dui volutpat
       fringilla bibendum. Urna, elit augue urna, vitae feugiat pretium donec id elementum. Ultrices mattis sed
        vitae mus risus. Lacus nisi, et ac dapibus sit eu velit in consequat.
    </p>
    <p className='inline-flex'> <Check />Lacus nisi, et ac dapibus sit eu velit in consequat.</p>
    <p className='inline-flex'><Check /> Quisque diam pellentesque bibendum non dui volutpat fringilla </p>
    <p className='inline-flex'> <Check />Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
  </div>
  {/* <!--  Button --> */}
  <div className="flex items-center flex-wrap  px-4 w-full ">
        <Button className="bg-[#FF9F0D] rounded-full w-[190px] h-[60px] text-sm text-[#FFFFFF]" >Read More</Button>
      </div>
 </div>


<div className=' max-w-[562px] h-[562px] bg-[#000000]  flex flex-row  flex-wrap
    sm:flex-row justify-between '>
  {/* <!-- Image 1  */}
  <div className=" w-[660px] h-[330px] bg-cover bg-center rounded-lg">
  <Image src={img2} alt={"hero-img"} width={660} height={330} />
  </div>

    <div className=' max-w-[562px] h-[194px] bg-[#000000]  flex flex-row  flex-wrap
    sm:flex-row  '>
  {/*  Image 2 */}
  <div className="  bg-cover bg-center rounded-lg">
  <Image src={img3} alt={"hero-img"} width={280} height={194} />
     </div>

  {/* <!-- Image 3 */}
  <div className="  bg-cover bg-center rounded-lg" >
  <Image src={img4} alt={"hero-img"} width={280} height={194} />
  </div>
 </div>
  </div>
  </div>

        
  )
}

export default aboutus
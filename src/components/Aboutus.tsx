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
    
    <div className=" max-w-[1920px] bg-[#000000] mx-auto flex flex-col flex-wrap md:flex-row 
     justify-evenly  ">
   <div className=" max-w-[500px]  bg-[#000000]  flex flex-col flex-wrap
    sm:flex-row justify-between">
  {/* < About Us   */}
  <div className=" max-w-full  px-4 bg-[#000000] py-6 flex flex-col flex-wrap
     justify-between ">
    <Image src={img1} alt={'about'} width={91} height={40}/>
    <h1 className="max-w-full text-4xl font-bold text-[#FF9F0D]">We<span className="text-4xl font-bold text-[#FFFFFF]"> 
    Create the Best <br/> Foody Product</span></h1>

  </div>


  {/* <!-- Paragraph --> */}
  <div className=" max-w-full  text-white px-4  ">
    <p className="text-lg ">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam pellentesque bibendum non dui volutpat
       fringilla bibendum. Urna, elit augue urna, vitae feugiat pretium donec id elementum. Ultrices mattis sed
        vitae mus risus. Lacus nisi, et ac dapibus sit eu velit in consequat.
    </p>
    <p className='inline-flex'> <Check />Lacus nisi, et ac dapibus sit eu velit in consequat.</p>
    <p className='inline-flex'><Check /> Quisque diam pellentesque bibendum non dui volutpat fringilla </p>
    <p className='inline-flex'> <Check />Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
  </div>
  {/* <!--  Button --> */}
  <div className="flex items-center flex-wrap px-4 w-full py-8 ">
        <Button className="bg-[#FF9F0D] rounded-full w-[190px] h-[60px] text-sm text-[#FFFFFF]" >Read More</Button>
      </div>
 </div>


<div className=' max-w-full bg-[#000000]  '>
  {/* <!-- Image 1  */}
  <div className=" bg-cover   ">
  <Image src={img2} alt={"hero-img"} width={562} height={330} />
  </div>

    <div className=' max-w-[500px]  bg-[#000000] flex'>
  {/*  Image 2 */}
  <div className="w-full  bg-cover ">
  <Image src={img3} alt={"hero-img"} width={280} height={194} />
     </div>

  {/* <!-- Image 3 */}
  <div className=" w-full bg-cover  " >
  <Image src={img4} alt={"hero-img"} width={280} height={194} />
  </div>
 </div>
  </div>
  </div>

        
  )
}

export default aboutus
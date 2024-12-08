import React from 'react'
import Image from 'next/image'
import { Button } from "@/components/ui/button"
import img from "../../public/assets/heroimg.png";
import img1 from "../../public/assets/hero-bar.png";


  const Hero = () => {
  return (
    <div className="max-w-[1920px] h-[950px] container py-10 flex flex-col flex-wrap sm:flex-row sm:h-auto
     justify-evenly bg-[#000000] mx-auto  ">
      <div className="max-w-[30px] h-[500px] ">
           <Image src={img1} alt={"hero-img"} width={26} height={182}/>
           </div>
           <div className="max-w-[472px] text-[16px] mt-14 py-4 px-4 ">
         <h1 className="text-[#FF9F0D] font-normal text-2xl mt-2  "> 
                  Its Quick & Amusing!</h1>
         
        <h2 className=" max-w-[472px] text-[60px] font-bold text-[#FF9F0D] mt-2 sm:text-base">
        Th<span  className='sm:text-base  text-[60px] font-bold text-[#FFFFFF]'>e Art of speed <br/> food Quality</span>
        </h2>
        <p className=" max-w-[472px] font-light text-[#fFFFFF] text-base  mt-2 sm:text-md">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br/>
         Varius sed pharetra dictum neque massa congue</p>
        <div className="flex items-center flex-wrap pb-4 mt-3 w-full">
        <Button className="bg-[#FF9F0D] rounded-full w-[190px] h-[60px] text-sm text-[#FFFFFF]" >See Menu</Button>
      </div>
      </div>
  
      <div className="max-w-[877px] h-[455px] items-center " >
        <Image src={img} alt={"hero-img"} width={624} height={600} />
      </div>
      </div>

     
)
}
export default Hero


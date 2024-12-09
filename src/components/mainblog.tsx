import React from 'react'
import { CalendarRange   } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { ChevronRight, MessagesSquare,CircleUserRound , MoveUpRight  } from 'lucide-react';
import { Button } from "@/components/ui/button"
import imgk from "../../public/assets/blog-img1.png";
import imgl from "../../public/assets/blog-img2.png";
import imgm from "../../public/assets/blog-img3.png";
import imgn from "../../public/assets/about-3.png";




const Mainblog = () => {
    return (
      
      <div className='max-w-[880px] bg-orange-400 '>
                        

        
        
        
      

         {/* 1st sectiom */}
        <div className="max-w-[872px] h-[830px] container py-8 flex flex-row flex-wrap sm:flex-col sm:h-auto
     justify-evenly items-start bg-[#ffffff] mx-auto ">
        <div className="max-w-[872px] items-center " >
        <Image src={imgk} alt={"hero-img"} width={624} height={600} />
      </div>
        <h2 className=" max-w-[472px] text-[60px] font-bold text-[#4F4F4F] mt-3 sm:text-base inline-flex">
        <span className='text-[#FF9F0D]'><CalendarRange /> </span>Feb 14, 2022 /<span className='text-[#FF9F0D]'>
         <MessagesSquare /></span> 3 /<span className='text-[#FF9F0D]'>  <CircleUserRound /></span>  Admin
        </h2>

           <div className="max-w-[472px] text-[16px]  ">
         <h1 className="text-[#333333] font-normal text-2xl mt-1 border-b-2 border-[#E0E0E0] "> 
         10 Reasons To Do A Digital Detox Challenge</h1>
         
        
        <p className=" max-w-[472px] font-light text-[#4F4F4F] text-base  mt-2 sm:text-md">
        At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren,
         no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur
          sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et
         dolore magna aliquyam erat</p>
                <div className="flex items-center flex-wrap pb-4 mt-1 w-full">
        <Button className="bg-[#FFFFFF] rounded-lg w-[172px] h-[52px] text-sm text-[#FF9F0d] border-2 border-[#FF9F0d]" >Read More
         <MoveUpRight /></Button>
      </div>
      </div>
  
           </div>


           {/* 2nd sectiom */}

        
        <div className="max-w-[872px] h-[830px] container py-8 flex flex-row flex-wrap sm:flex-col sm:h-auto
     justify-evenly items-start bg-[#ffffff] mx-auto  ">
        <div className="max-w-[877px] items-center " >
        <Image src={imgl} alt={"hero-img"} width={624} height={600} />
      </div>
        <h2 className=" max-w-[472px] text-[60px] font-bold text-[#4F4F4F] mt-3 sm:text-base inline-flex">
        <span className='text-[#FF9F0D]'><CalendarRange /> </span>Feb 14, 2022 /<span className='text-[#FF9F0D]'>
         <MessagesSquare /></span> 3 /<span className='text-[#FF9F0D]'>  <CircleUserRound /></span>  Admin
        </h2>

           <div className="max-w-[472px] text-[16px] ">
         <h1 className="text-[#333333] font-normal text-2xl mt-1 border-b-2 border-[#E0E0E0]  "> 
         Traditional Soft Pretzels with Sweet Beer Cheese</h1>
         
        
        <p className=" max-w-[472px] font-light text-[#4F4F4F] text-base  mt-1 sm:text-md">
        At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren,
         no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur
          sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et
         dolore magna aliquyam erat</p>
                <div className="flex items-center flex-wrap pb-4 mt-1 w-full">
        <Button className="bg-[#FFFFFF] rounded-lg w-[172px] h-[52px] text-sm text-[#FF9F0d] border-2 border-[#FF9F0d]" >Read More <MoveUpRight /></Button>
      </div>
      </div>
  
           </div>

           {/* 3rd sectiom */}

        
        <div className="max-w-[872px] h-[830px] container py-8 flex flex-row flex-wrap sm:flex-col sm:h-auto
     justify-evenly items-start bg-[#ffffff] mx-auto  ">
        <div className="max-w-[877px]  items-center " >
        <Image src={imgm} alt={"hero-img"} width={624} height={600} />
      </div>
        <h2 className=" max-w-[472px] text-[60px] font-bold text-[#4F4F4F]  sm:text-base inline-flex mt-3">
        <span className='text-[#FF9F0D]'><CalendarRange /> </span>Feb 14, 2022 /<span className='text-[#FF9F0D]'>
         <MessagesSquare /></span> 3 /<span className='text-[#FF9F0D]'>  <CircleUserRound /></span>  Admin
        </h2>

           <div className="max-w-[472px] text-[16px] ">
         <h1 className="text-[#333333] font-normal text-2xl mt-1 border-b-2 border-[#E0E0E0]  "> 
         The Ultimate Hangover Burger: Egg in a Hole Burger</h1>
         
        
        <p className=" max-w-[472px] font-light text-[#4F4F4F] text-base  mt-1 sm:text-md">
        At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren,
         no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur
          sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et
         dolore magna aliquyam erat</p>
                <div className="flex items-center flex-wrap pb-4 mt-1 w-full">
        <Button className="bg-[#FFFFFF] rounded-lg w-[172px] h-[52px] text-sm text-[#FF9F0d] border-2 border-[#FF9F0d]" >Read More <MoveUpRight /></Button>
      </div>
      </div>
  
           </div>


          {/* 4thsectiom */}

       
        <div className="max-w-[872px] h-[830px] container py-8 flex flex-row flex-wrap sm:flex-col sm:h-auto
     justify-evenly items-start bg-[#ffffff] mx-auto  ">
        <div className="max-w-[877px] items-center " >
        <Image src={imgn} alt={"hero-img"} width={624} height={600} />
      </div>
        <h2 className=" max-w-[472px] text-[60px] font-bold text-[#4F4F4F] sm:text-base inline-flex mt-3">
        <span className='text-[#FF9F0D]'><CalendarRange /> </span>Feb 14, 2022 /<span className='text-[#FF9F0D]'>
         <MessagesSquare /></span><span className='text-[#FF9F0D]'>  <CircleUserRound /></span>  Admin
        </h2>

           <div className="max-w-[472px] text-[16px] mt-1 ">
         <h1 className="text-[#333333] font-normal text-2xl border-b-2 border-[#E0E0E0]  "> 
         My Favorite Easy Black Pizza Toast Recipe</h1>
         
        
        <p className=" max-w-[472px] font-light text-[#4F4F4F] text-base sm:text-md mt-1">
        At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren,
         no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur
          sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et
         dolore magna aliquyam erat</p>
        <div className="flex items-center flex-wrap pb-4  w-full mt-1">
        <Button className="bg-[#FFFFFF] rounded-lg w-[172px] h-[52px] text-sm text-[#FF9F0d] border-2 border-[#FF9F0d]" >Read More <MoveUpRight /></Button>
      </div>
      </div>
       </div>

        </div>

            
        
  )
  }
  export default Mainblog
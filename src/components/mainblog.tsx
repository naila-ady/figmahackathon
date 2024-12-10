import React from 'react'
import { CalendarRange   } from 'lucide-react';
import Image from 'next/image';
import { MessagesSquare,CircleUserRound , MoveUpRight  } from 'lucide-react';
import { Button } from "@/components/ui/button"
import imgk from "../../public/assets/blog-img1.png";
import imgl from "../../public/assets/blog-img2.png";
import imgm from "../../public/assets/blog-img3.png";
import imgn from "../../public/assets/about-3.png";




const Mainblog = () => {
    return (
      
      <div className='max-w-[1920px] mx-auto '>
                        

         {/* 1st sectiom */}
        <div className="max-w-[880px] container py-8 flex flex-row flex-wrap sm:flex-col 
     justify-evenly  bg-[#ffffff] mx-auto ">
        <div className="max-w-[872px] items-center" >
        <Image src={imgk} alt={"hero-img"} width={624} height={600} />
      </div>
      
         <div className="max-w-[472px] ">
        <h2 className=" max-w-[472px] text-[22px] font-bold text-[#4F4F4F] py-2  inline-flex flex-wrap">
        <span className='text-[#FF9F0D]'><CalendarRange /> </span>Feb 14, 2022 /
        <span className='text-[#FF9F0D]'>
         <MessagesSquare /></span> 3 /<span className='text-[#FF9F0D]'>  <CircleUserRound /></span>  Admin
        </h2>
        

         <h1 className="text-[#333333] font-normal text-2xl py-2 border-b-2 border-[#E0E0E0] "> 
         10 Reasons To Do A Digital Detox Challenge</h1>
         
        
        <p className=" max-w-[472px] font-light text-[#4F4F4F] text-base  py-2 sm:text-md">
        At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren,
         no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur
          sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et
         dolore magna aliquyam erat</p>
                <div className="flex items-center flex-wrap py-2 w-full ">
        <Button className="bg-[#FFFFFF] rounded-lg w-[172px] h-[52px] text-sm
         text-[#FF9F0d] border-2 border-[#FF9F0d]" >Read More<MoveUpRight /></Button>
      </div>
      </div>
  
           </div>


           {/* 2nd sectiom */}

        
        <div className="max-w-[872px]  container py-8 flex flex-row flex-wrap sm:flex-col 
     justify-evenly bg-[#ffffff] mx-auto  ">
        <div className="max-w-[877px] items-center " >
        <Image src={imgl} alt={"hero-img"} width={624} height={600} />
      </div>
           <div className="max-w-[472px] ">
        <h2 className=" max-w-[472px] text-[22px] font-bold text-[#4F4F4F] py-2  inline-flex flex-wrap">
        <span className='text-[#FF9F0D]'><CalendarRange /> </span>Feb 14, 2022 /<span className='text-[#FF9F0D]'>
         <MessagesSquare /></span> 3 /<span className='text-[#FF9F0D]'>  <CircleUserRound /></span>  Admin
        </h2>

         <h1 className="text-[#333333] font-normal text-2xl py-2 border-b-2 border-[#E0E0E0]  "> 
         Traditional Soft Pretzels with Sweet Beer Cheese</h1>
         
        
        <p className=" max-w-[472px] font-light text-[#4F4F4F] text-base py-2 sm:text-md">
        At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren,
         no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur
          sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et
         dolore magna aliquyam erat</p>
                <div className="flex items-center flex-wrap py-2 w-full">
        <Button className="bg-[#FFFFFF] rounded-lg w-[172px] h-[52px] text-sm text-[#FF9F0d] border-2 border-[#FF9F0d]" >Read More <MoveUpRight /></Button>
      </div>
      </div>
  
           </div>

           {/* 3rd sectiom */}

        
        <div className="max-w-[872px] container py-8 flex flex-row flex-wrap sm:flex-col 
     justify-evenly  bg-[#ffffff] mx-auto  ">
        <div className="max-w-[877px]  items-center " >
        <Image src={imgm} alt={"hero-img"} width={624} height={600} />
      </div>
           <div className="max-w-[472px] text-[16px] ">
        <h2 className=" max-w-[472px] text-[22px] font-bold text-[#4F4F4F]  sm:text-base inline-flex flex-wrap py-2">
        <span className='text-[#FF9F0D]'><CalendarRange /> </span>Feb 14, 2022 /<span className='text-[#FF9F0D]'>
         <MessagesSquare /></span> 3 /<span className='text-[#FF9F0D]'>  <CircleUserRound /></span>  Admin
        </h2>

         <h1 className="text-[#333333] font-normal text-2xl py-2 border-b-2 border-[#E0E0E0]  "> 
         The Ultimate Hangover Burger: Egg in a Hole Burger</h1>
         
        
        <p className=" max-w-[472px] font-light text-[#4F4F4F] text-base py-2 sm:text-md">
        At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren,
         no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur
          sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et
         dolore magna aliquyam erat</p>
                <div className="flex items-center flex-wrap pb-4 py-2 w-full">
        <Button className="bg-[#FFFFFF] rounded-lg w-[172px] h-[52px] text-sm text-[#FF9F0d] border-2 border-[#FF9F0d]" >Read More <MoveUpRight /></Button>
      </div>
      </div>
  
           </div>


          {/* 4thsectiom */}

       
        <div className="max-w-[872px]  container py-8 flex flex-row flex-wrap sm:flex-col 
     justify-evenly bg-[#ffffff] mx-auto  ">
        <div className="max-w-[877px] items-center " >
        <Image src={imgn} alt={"hero-img"} width={624} height={600} />
      </div>
        <h2 className=" max-w-[472px] text-[22px] font-bold text-[#4F4F4F] sm:text-base inline-flex flex-wrap py-2">
        <span className='text-[#FF9F0D]'><CalendarRange /> </span>Feb 14, 2022 /<span className='text-[#FF9F0D]'>
         <MessagesSquare /></span><span className='text-[#FF9F0D]'>  <CircleUserRound /></span>  Admin
        </h2>

           <div className="max-w-[472px] text-[16px] py-2 ">
         <h1 className="text-[#333333] font-normal text-2xl border-b-2 border-[#E0E0E0]  "> 
         My Favorite Easy Black Pizza Toast Recipe</h1>
         
        
        <p className=" max-w-[472px] font-light text-[#4F4F4F] text-base sm:text-md py-2">
        At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren,
         no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur
          sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et
         dolore magna aliquyam erat</p>
        <div className="flex items-center flex-wrap pb-4 w-full py-2">
        <Button className="bg-[#FFFFFF] rounded-lg w-[172px] h-[52px] text-sm text-[#FF9F0d] border-2 border-[#FF9F0d]" >Read More <MoveUpRight /></Button>
      </div>
      </div>
       </div>

        </div>

            
        
  )
  }
  export default Mainblog
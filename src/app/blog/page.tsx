import Mainblog from '../../components/mainblog'
import Sidebarblog from '../../components/Sidebarblog'
import React from 'react'
import { ChevronRight } from 'lucide-react';
import Link from 'next/link';

const Blog = () => {
  return (
    <div className='max-w-[1920px] mx-auto'>
      <div className="bg-custom h-[410px] max-w-[1920px]">
         <h1 className="text-white text-center text-4xl pt-40">Blog List</h1>
           <ul className='text-[16px] text-[#FFFFFF] flex justify-center gap-1 list-none'>
            <Link href={"/"} className=" text-1xl hover:text-[#003152] inline-flex">
              Home <ChevronRight className=' text-[#FF9F0D]' />
            </Link>
            <Link href={"./menu"} className=" text-[#FF9F0D] text-1xl hover:text-[#003152]">
              Blog
             </Link>
            </ul>
             </div>
             

        
      <div className=' max-w-[1920px] flex flex-col max-auto md:flex-row   '>
        <Mainblog/>
        <Sidebarblog/>
      </div>
    </div>
    
  )
}

export default Blog
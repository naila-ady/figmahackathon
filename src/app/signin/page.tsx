import React from 'react'
import { ChevronRight,  } from 'lucide-react';
import Link from "next/link"
import { Input } from "@/components/ui/input"
import { Checkbox } from "@/components/ui/checkbox"
import img from "../../../public/assets/or.png"
import Image from 'next/image';



const Signin = () => {
  return (
    
         <div className='max-w-[1920px] mx-auto'>

<div className="bg-custom h-[410px] max-w-[1920px]">
    <h1 className="text-white text-center text-4xl pt-40">Sign In page</h1>
    <ul className='text-[16px] text-[#FFFFFF] flex justify-center gap-1 list-none'>
        <Link href={"/"} className=" text-1xl hover:text-[#003152] inline-flex">
            Home <ChevronRight className=' text-[#FF9F0D]' />
        </Link>
        <Link href={"./signup"} className=" text-[#FF9F0D] text-1xl hover:text-[#003152]">
            Signin
        </Link>
    </ul>
</div>
   {/* signup box */}
        <div className='bg-[#ffffff] max-w-[424px] flex flex-col items-center mx-auto
         drop-shadow-md shadow-md shadow-[#ff9f0d] gap-4 mt-16 '>
        <div className='max-w-[360px] text-[#333333] text-base font-normal  mx-auto items-center py-6'>
        <h1  className='text-[#333333] text-xl font-bold '>Sign In</h1> 
        </div>
         <div className='max-w-[360px] text-[#333333] text-base font-normal space-y-6 mx-auto'> 
            <Input placeholder=' Name' type="text" className=' text-[#333333] text-base font-normal'/>
            <Input placeholder=' Email' type="text" className=' text-[#333333] text-base font-normal '   />
            <Input placeholder='Password' type="text" className=' text-[#333333] text-base font-normal'/>
            </div>
             <div className=' max-w-[424px] space-y-8'>
                         <h1 className='text-[#333333] text-base font-normal'>
                 <Checkbox className='bg-[#ff9f0d] max-w[20px]' / >Remember Me</h1>
                 <Input placeholder=' Signin' type="text" className='max-w[#424px] text-[#ffffff] bg-[#ff9f0d] text-base font-normal'/>
               </div>
                  <h1 className='text-[#333333] text-base font-normal border-b-2 border-[#ff9f0d] max-w-[424px]' >Forget password?</h1>
               <Image src={img} alt={'Orimg'} width={360} height={32} />
               <div className=' max-w-[624px] text-[#333333] text-base font-normal space-y-8 mx-auto'>
              <Input placeholder=' Sign in with Google' type="text" className=' text-[#333333] text-base font-normal'/>
            <Input placeholder=' Sign in with Apple' type="text" className=' text-[#333333] text-base font-normal'/>
         </div>
     </div>
    </div>
        
        
    

  )
}

export default Signin
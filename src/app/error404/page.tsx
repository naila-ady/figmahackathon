import React from 'react'
import { ChevronRight,  } from 'lucide-react';
import Link from "next/link"
import { Button } from '@/components/ui/button';



const Error404= () => {
  return (
    
         <div className='max-w-[1920px] mx-auto'>

<div className="bg-custom h-[410px] max-w-[1920px]">
    <h1 className="text-white text-center text-4xl pt-40">404 Error</h1>
    <ul className='text-[16px] text-[#FFFFFF] flex justify-center gap-1 list-none'>
        <Link href={"/"} className=" text-1xl hover:text-[#003152] inline-flex">
            Home <ChevronRight className=' text-[#FF9F0D]' />
        </Link>
        <Link href={"./signup"} className=" text-[#FF9F0D] text-1xl hover:text-[#003152]">
            Error
        </Link>
    </ul>
</div>
   {/* error box */}


   <div className=" max-w-[1920px]  ">
                    <div className=" max-w-[705px]  py-6 flex flex-col flex-wrap mx-auto justify-between
                     items-center gap-6">
                        
                        <h1 className="max-w-[161px] text-8xl font-bold text-[#FF9F0D]">
                                404</h1>
                        <p className="text-[18px] font-normal text-[#333333] max-w-[630px] ">
                        Oops! Look likes something going wrong
                        </p>
                        <p className="text-[18px] font-normal text-[#4F4F4F] max-w-[490px] px-10">Page Cannot be found!we’ll have it figured out 
                        in no time.Meanwhile, cheek out these fresh ideas:</p>

                    </div>
                    {/* <!--  Button --> */}
                    <div className="flex gap-4 items-center flex-wrap px-4 w-full py-8 border-[#ff9f0d] 
                    mx-auto justify-center ">
                        <Button className="rounded-full w-[190px] h-[60px] text-sm text-[#FFFFFF]
           bg-[#ff9f0d]" >Go to home</Button>
                                   
                  </div>
                </div>


         </div>
        
        
    

  )
}

export default Error404
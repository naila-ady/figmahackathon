import React from 'react'
import Link from 'next/link'
import { Search, Briefcase } from 'lucide-react';
import { CircleEllipsis, Menu } from 'lucide-react';
import {
  Select,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet"



const SecondNavbar = () => {
  return (
    //header
    <div className='max-w-[1920px] h-[107px] bg-[#0D0D0D] flex flex-col mx-auto'>
      {/* Foodtuck title  */}
      <div className=' flex justify-center'>
        <h1 className='text-2xl text-[#FF9F0D]'>
          Food
          <span className='text-2xl text-[#FFFFFF]'>tuck</span>
        </h1>
      </div>

      {/* Links and Search section */}
      <div className='max-w-[1320px] h-[57px] bg-[#0D0D0D] flex flex-row justify-between px-2 ml-2 py-2 mt-3 xl:justify-evenly '>

        {/* Links section */}
        <ul className='max-w-[800px] h-[24px] text-[16px] text-[#FFFFFF] hidden md:flex gap-1 list-none ">'>
          <Link href={"/"} className="mr-5 text-1xl hover:text-[#ff9f0d]">
            Home <CircleEllipsis className='w-3 h-3 text-[#FF9F0D]' />
          </Link>
          <Link href={"./menu"} className="mr-5 text-1xl hover:text-[#ff9f0d]">
            Menu
          </Link>
          <Link href={"./blog"} className="mr-5 text-1xl hover:text-[#ff9f0d]">
            Blog
          </Link>
          <Link href={"./pages"} className="mr-5 text-1xl hover:text-[#ff9f0d]">
            SignupPages
          </Link>
          <Select>
            <SelectTrigger className="w-[78px] h-[24px] text-sm px-2 border-none">
              <SelectValue placeholder="About" />
            </SelectTrigger>
          </Select>
          <Link href={"./shop"} className="mr-5 text-1xl hover:text-[#ff9f0d]">
            Shop
          </Link>
          <Link href={"./contact"} className="mr-5 text-1xl hover:text-[#ff9f0d]">
            Contact
          </Link>
          </ul>

          <Sheet>
            <SheetTrigger className="md:hidden text-[#FF9F0D] ">
              <Menu/>
            </SheetTrigger>
            <SheetContent className='bg-white'>
              <ul className="flex flex-col gap-1 list-none ">
                <Link href={"/"} className="mr-5 text-1xl hover:text-[#ff9f0d]">
                  Home <CircleEllipsis className='w-3 h-3 text-[#FF9F0D]' />
                </Link>
                <Link href={"./menu"} className="mr-5 text-1xl hover:text-[#ff9f0d]">
                  Menu
                </Link>
                <Link href={"./blog"} className="mr-5 text-1xl hover:text-[#ff9f0d]">
                  Blog
                </Link>
                <Link href={"./pages"} className="mr-5 text-1xl hover:text-[#ff9f0d]">
                  signupPages
                </Link>
                <Select>
                  <SelectTrigger className="w-[78px] h-[24px] text-sm px-2 border-none">
                    <SelectValue placeholder="About" />
                  </SelectTrigger>
                </Select>
                <Link href={"./shop"} className="mr-5 text-1xl hover:text-[#ff9f0d]">
                  Shop
                </Link>
                <Link href={"./contact"} className="mr-5 text-1xl hover:text-[#ff9f0d]">
                  Contact
                </Link>
                </ul>
            </SheetContent>
          </Sheet>
      </div>
      </div>
  )
}
export default SecondNavbar
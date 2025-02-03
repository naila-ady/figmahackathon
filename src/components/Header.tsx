"use client"
import React from 'react'
import Link from 'next/link'
import { Search, Briefcase } from 'lucide-react';
import { CircleEllipsis, Menu, ShoppingCart } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { FaBalanceScale } from 'react-icons/fa';



import { transform } from 'next/dist/build/swc';
import { Translate } from 'sanity';

import {
  Select,
  SelectContent,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"



import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet"



const Header = () => {
  return (

    //header
    <header className='max-w-[1920px] h-[107px] bg-[#0D0D0D] flex flex-col mx-auto'>
      {/* Foodtuck title  */}
      <div className=' flex justify-center'>
        <h1 className='text-2xl text-[#FF9F0D]'>
          Food
          <span className='text-2xl text-[#FFFFFF]'>tuck</span>
        </h1>
      </div>

      {/* Links and Search section */}
      <div className='max-w-[1320px] h-[57px] bg-[#0D0D0D] flex flex-row justify-between
       px-2 ml-2 py-2 mt-3 xl:justify-evenly '>

        {/* Links section */}
        <ul className='max-w-[800px] h-[24px] text-[16px] text-[#FFFFFF] hidden lg:flex gap-1 list-none '>
          <Link href={"/"} className="mr-5 text-1xl hover:text-[#ff9f0d]">
            Home <CircleEllipsis className='w-3 h-3 text-[#FF9F0D]' />
          </Link>
          <Link href={"../menu"} className="mr-5 text-1xl hover:text-[#ff9f0d]">
            Menu
          </Link>
          <Link href={"../foods"} className="mr-5 text-1xl hover:text-[#ff9f0d]">
            Hot Deals
          </Link>
          <Link href={"../blog"} className="mr-5 text-1xl hover:text-[#ff9f0d]">
            Blog
          </Link>
          <Link href={"../about"} className="mr-5 text-1xl hover:text-[#ff9f0d]">
            AboutUs
          </Link>
          <Link href={"../chef"} className="mr-5 text-1xl hover:text-[#ff9f0d]">
            Chef
          </Link>


          <Select>
            <SelectTrigger className="w-[78px] h-[24px] text-sm px-2 border-none">
              <SelectValue placeholder="Pages" />
            </SelectTrigger>
            <SelectContent className=''>

              <Link href="../signup" className="mr-5 text-1xl text-[#ffffff] hover:text-[#ff9f0d]">
                Sign Up
              </Link>

              <Link href="../signin" className="mr-5 text-1xl text-[#ffffff] hover:text-[#ff9f0d]">
                Sign In
              </Link>

              <Link href="../error404" className="mr-5 text-1xl text-[#ffffff] hover:text-[#ff9f0d]">
                Error 404
              </Link>

            </SelectContent>
          </Select>
          <Link href={"../shop"} className="mr-5 text-1xl hover:text-[#ff9f0d]">
            Shop
          </Link>
          <Link href={"../contact"} className="mr-5 text-1xl hover:text-[#ff9f0d]">
            Contact
          </Link>
        </ul>

        <Sheet>
          <SheetTrigger className="lg:hidden text-[#FF9F0D] ">


            <Menu />
          </SheetTrigger>
          <SheetContent className='bg-white'>
            <ul className="flex flex-col gap-1 list-none ">
              <Link href={"/"} className="mr-5 text-1xl hover:text-[#ff9f0d]">
                Home <CircleEllipsis className='w-3 h-3 text-[#FF9F0D]' />
              </Link>
              <Link href={"./menu"} className="mr-5 text-1xl hover:text-[#ff9f0d]">
                Menu
              </Link>
              <Link href={"../food"} className="mr-5 text-1xl hover:text-[#ff9f0d]">
                Hot Deals
              </Link>
              <Link href={"./blog"} className="mr-5 text-1xl hover:text-[#ff9f0d]">
                Blog
              </Link>
              <Link href={"./about"} className="mr-5 text-1xl hover:text-[#ff9f0d]">
                AboutUs
              </Link>
              <Link href={"../chef"} className="mr-5 text-1xl hover:text-[#ff9f0d]">
                Chef
              </Link>

              <Select>
                <SelectTrigger className="w-[78px] h-[24px] text-sm px-2 border-none">
                  <SelectValue placeholder="Pages" />
                </SelectTrigger>
                <SelectContent className=''>

                  <Link href="../signup" className="mr-5 text-1xl text-[#ffffff] hover:text-[#ff9f0d]">
                    Sign Up
                  </Link>

                  <Link href="../signin" className="mr-5 text-1xl text-[#ffffff] hover:text-[#ff9f0d]">
                    Sign In
                  </Link>

                  <Link href="../error404" className="mr-5 text-1xl text-[#ffffff] hover:text-[#ff9f0d]">
                    Error 404
                  </Link>

                </SelectContent>
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


        {/* Search section */}
        <div className='relative py-1 inline-flex gap-4'>
          <input
            type="text"
            placeholder='Search...'
            className='rounded-2xl h-8 pt-3 pr-3 pb-2 pl-5 gap-[10px] font-[inter] text-[16px]
         border-[#FF9F0D] border-2 bg-[#000000] text-[#FFFFFF]'/>
          <Search className="absolute right-12 top-1/2 transform -translate-y-3 text-[#FFFFFF]" />
        </div>
        <Link href="./">
          <Briefcase className='text-[#FF9F0D]' />
        </Link>
        <Link href="/cart">
          <ShoppingCart className="text-[#FF9F0D] text-xl md:text-2xl" />
        </Link>
        <Link href="./comparison">
          <FaBalanceScale className='icon text-[#FF9F0D] text-xl md:text-2xl' /> Compare

        </Link>




      </div>

    </header >
  )

}

export default Header
"use client"
import React, { useRef } from 'react'
import Link from 'next/link'
import { Search, Briefcase, CircleX, CirclePlus, CircleMinus } from 'lucide-react';
import { CircleEllipsis, Menu, ShoppingCart, ShoppingBasket } from 'lucide-react';
import { Button } from "@/components/ui/button"

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"



import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet"
import { transform } from 'next/dist/build/swc';
import { Translate } from 'sanity';



const Header = () => {
  const toggleCart = () => {
    //   if (ref.current.classList.contains('translate-x-full')){
    //        ref.current.classList.remove('translate-x-full')
    //        ref.current.classList.add('translate-x-0')
    //   }
    //   else if 
    //     (!ref.current.classList.contains('translate-x-full')){
    //       ref.current.classList.remove('translate-x-0')
    //       ref.current.classList.add('translate-x-full')
    //  }
    if (ref.current) {
      ref.current.classList.toggle('translate-x-full');
      ref.current.classList.toggle('translate-x-0');
    }
  } 



     const ref = useRef<HTMLDivElement>(null);;
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
      <ul className='max-w-[800px] h-[24px] text-[16px] text-[#FFFFFF] hidden md:flex gap-1 list-none '>
        <Link href={"/"} className="mr-5 text-1xl hover:text-[#ff9f0d]">
          Home <CircleEllipsis className='w-3 h-3 text-[#FF9F0D]' />
        </Link>
        <Link href={"../menu"} className="mr-5 text-1xl hover:text-[#ff9f0d]">
          Menu
        </Link>
        <Link href={"../blog"} className="mr-5 text-1xl hover:text-[#ff9f0d]">
          Blog
        </Link>
        <Link href={"../about"} className="mr-5 text-1xl hover:text-[#ff9f0d]">
          AboutUs
        </Link>
        <Link href={"../food"} className="mr-5 text-1xl hover:text-[#ff9f0d]">
          Food
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
        <SheetTrigger className="md:hidden text-[#FF9F0D] ">
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
            <Link href={"./blog"} className="mr-5 text-1xl hover:text-[#ff9f0d]">
              Blog
            </Link>
            <Link href={"./about"} className="mr-5 text-1xl hover:text-[#ff9f0d]">
              AboutUs
            </Link>
            <Link href={"../food"} className="mr-5 text-1xl hover:text-[#ff9f0d]">
              Food
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
        <Briefcase className='text-[#FF9F0D]' />
      </div>
    </div>

    {/* sidebar */}
    <div onClick={toggleCart} className='cart absolute right-80 top-14 cursor-pointer'>
      <ShoppingCart className='text-[#FF9F0D] text-xl md:text2xl' />
    </div>
    <div ref={ref} className='sidecart absolute bg-[#ffffff] w-64 top-0 right-0 py-10 px-6 transform
       transition-transform translate-x-full'>
      <h2 className=' font-bold text-xl text-center text-[#ff9f0d]'>SHOPPING CART</h2>
      <span onClick={toggleCart} className='absolute top-4 right-4 text-[#ff9f0d] cursor-pointer text-2xl'><CircleX /></span>
      <ol className='list-decimal'>
        <li className=''>
          <div className=' item flex my-5'>
            <div className='w-2/3 text-xl'>DESERTS</div>
            <div className='w-1/3 text-2xl flex items-center justify-center'>
              <CircleMinus className='cursor-pointer text-[#ff9f0d]' /><span className='text-xl mx-3'>1</span><CirclePlus className='cursor-pointer text-[#ff9f0d]' />
            </div>
          </div>
        </li>
        <li className=''>
          <div className=' item flex my-5'>
            <div className='w-2/3 text-xl'>DESERTS</div>
            <div className='w-1/3  text-2xl flex items-center justify-center'>
              <CircleMinus className='cursor-pointer text-[#ff9f0d]' /><span className='text-xl mx-3'>1</span><CirclePlus className='cursor-pointer text-[#ff9f0d]' />
            </div>
          </div>
        </li>
        <li className=''>
          <div className=' item flex my-5'>
            <div className='w-2/3  text-xl'>DESERTS</div>
            <div className='w-1/3  text-2xl flex items-center justify-center'>
              <CircleMinus className='cursor-pointer text-[#ff9f0d]' /><span className='text-xl mx-3'>1</span><CirclePlus className='cursor-pointer text-[#ff9f0d]' />
            </div>
          </div>
        </li>
        <li className=''>
          <div className=' item flex my-5'>
            <div className='w-2/3 text-xl'>DESERTS</div>
            <div className='w-1/3  text-2xl flex items-center justify-center'>
              <CircleMinus className='cursor-pointer text-[#ff9f0d]' /><span className='text-xl mx-3'>1</span><CirclePlus className='cursor-pointer text-[#ff9f0d]' />
            </div>
          </div>
        </li>
        <li className=''>
          <div className=' item flex my-5'>
            <div className='w-2/3 text-xl'>DESERTS</div>
            <div className='w-1/3 text-2xl flex items-center justify-center'>
              <CircleMinus className='cursor-pointer text-[#ff9f0d]' /><span className='text-xl mx-3'>1</span><CirclePlus className='cursor-pointer text-[#ff9f0d]' />
            </div>
          </div>
        </li>
        <li className=''>
          <div className=' item flex my-5'>
            <div className='w-2/3 text-xl'>DESERTS</div>
            <div className='w-1/3 text-2xl flex items-center justify-center'>
              <CircleMinus className='cursor-pointer text-[#ff9f0d]' /><span className='text-xl mx-3'>1</span><CirclePlus className='cursor-pointer text-[#ff9f0d]' />
            </div>
          </div>
        </li>
        <li className=''>
          <div className=' item flex my-5'>
            <div className='w-2/3  text-xl'>DESERTS</div>
            <div className='w-1/3 text-xl flex items-center justify-center'>
              <CircleMinus className='cursor-pointer text-[#ff9f0d]' /><span className='text-xl mx-3'>1</span><CirclePlus className='cursor-pointer text-[#ff9f0d]' />
            </div>
          </div>
          <li className=''>
            <div className=' item flex my-5'>
              <div className='w-2/3  text-xl'>DESERTS</div>
              <div className='w-1/3 text-xl flex items-center justify-center'>
                <CircleMinus className='cursor-pointer text-[#ff9f0d]' /><span className='text-xl mx-3'>1</span><CirclePlus className='cursor-pointer text-[#ff9f0d]' />
              </div>
            </div>
          </li>

        </li>
      </ol>
      <div className="flex items-center flex-wrap pb-4 mt-3 w-full">
        <Button className="bg-[#FF9F0D] rounded-full w-[190px] h-[60px] text-lg hover:bg-slate-400" >
          <ShoppingBasket/>CHECK OUT</Button>
      </div>
    </div>


  </header >

)
}

export default Header
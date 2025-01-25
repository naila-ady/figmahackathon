

"use client";
import React, { useState, useEffect ,useRef } from 'react';
 import { Button } from "@/components/ui/button";
  import { ShoppingCart, CircleX ,CircleMinus,CirclePlus ,ShoppingBasket  } from "lucide-react";


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
 
    
    const ref = useRef<HTMLDivElement>(null);;
    return (
      <div>
      <div onClick={toggleCart} className='cart  right-56 top-14 cursor-pointer'>
   

      <ShoppingCart className='text-[#FF9F0D] text-xl md:text2xl' />
    </div>
     <div ref={ref} className='sidecart absolute bg-[#ffffff] w-64 top-0 right-0 py-10 px-6 transform
       transition-transform translate-x-full'> 
      

      <h2 className=' font-bold text-xl text-center text-[#ff9f0d]'>SHOPPING CART</h2>
      <span onClick={toggleCart} className='absolute top-4 right-4 text-[#ff9f0d] cursor-pointer text-2xl'>
        <CircleX /></span>
      <ol className='list-decimal'>
        <li className=''>
          <p className=' item flex my-5'>
            <span className='w-2/3 text-xl'>DESERTS</span>
            <span className='w-1/3 text-2xl flex items-center justify-center'>
              <CircleMinus className='cursor-pointer text-[#ff9f0d]' /><span className='text-xl mx-3'>1</span><CirclePlus className='cursor-pointer text-[#ff9f0d]' />
            </span>
          </p>
        </li>
        <li className=''>
          <p className=' item flex my-5'>
            <span className='w-2/3 text-xl'>DESERTS</span>
            <span className='w-1/3 text-2xl flex items-center justify-center'>
              <CircleMinus className='cursor-pointer text-[#ff9f0d]' /><span className='text-xl mx-3'>1</span><CirclePlus className='cursor-pointer text-[#ff9f0d]' />
            </span>
          </p>
        </li>
        <li className=''>
          <p className=' item flex my-5'>
            <span className='w-2/3 text-xl'>DESERTS</span>
            <span className='w-1/3 text-2xl flex items-center justify-center'>
              <CircleMinus className='cursor-pointer text-[#ff9f0d]' /><span className='text-xl mx-3'>1</span><CirclePlus className='cursor-pointer text-[#ff9f0d]' />
            </span>
          </p>
        </li>
        <li className=''>
          <p className=' item flex my-5'>
            <span className='w-2/3 text-xl'>DESERTS</span>
            <span className='w-1/3 text-2xl flex items-center justify-center'>
              <CircleMinus className='cursor-pointer text-[#ff9f0d]' /><span className='text-xl mx-3'>1</span><CirclePlus className='cursor-pointer text-[#ff9f0d]' />
            </span>
          </p>
        </li>
        <li className=''>
          <p className=' item flex my-5'>
            <span className='w-2/3 text-xl'>DESERTS</span>
            <span className='w-1/3 text-2xl flex items-center justify-center'>
              <CircleMinus className='cursor-pointer text-[#ff9f0d]' /><span className='text-xl mx-3'>1</span><CirclePlus className='cursor-pointer text-[#ff9f0d]' />
            </span>
          </p>
        </li>
        <li className=''>
          <p className=' item flex my-5'>
            <span className='w-2/3 text-xl'>DESERTS</span>
            <span className='w-1/3 text-2xl flex items-center justify-center'>
              <CircleMinus className='cursor-pointer text-[#ff9f0d]' /><span className='text-xl mx-3'>1</span><CirclePlus className='cursor-pointer text-[#ff9f0d]' />
            </span>
          </p>
        </li>
        <li className=''>
          <p className=' item flex my-5'>
            <span className='w-2/3 text-xl'>DESERTS</span>
            <span className='w-1/3 text-2xl flex items-center justify-center'>
              <CircleMinus className='cursor-pointer text-[#ff9f0d]' /><span className='text-xl mx-3'>1</span><CirclePlus className='cursor-pointer text-[#ff9f0d]' />
            </span>
          </p>
        </li>
        <li className=''>
          <p className=' item flex my-5'>
            <span className='w-2/3 text-xl'>DESERTS</span>
            <span className='w-1/3 text-2xl flex items-center justify-center'>
              <CircleMinus className='cursor-pointer text-[#ff9f0d]' /><span className='text-xl mx-3'>1</span><CirclePlus className='cursor-pointer text-[#ff9f0d]' />
            </span>
          </p>
        </li>

      </ol>
      <div className="flex flex-row gap-3 items-center flex-wrap pb-4 mt-3 w-full ">
        <Button className="bg-[#FF9F0D] rounded-full w-[190px] h-[60px] text-lg hover:bg-slate-400" >
          <ShoppingBasket/>CHECK OUT</Button>
          <Button className="bg-[#FF9F0D] rounded-full w-[190px] h-[60px] text-lg hover:bg-slate-400" >
          CLEAR CART</Button>
      </div>
    </div>
    
</div>
     )
  }
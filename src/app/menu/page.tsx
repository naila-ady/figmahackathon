import React from 'react'
import { Coffee } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { ChevronRight } from 'lucide-react';
import imge from "../../../public/assets/menu-1.png"
import imgf from "../../../public/assets/menu-2.png"
import imgg from "../../../public/assets/menu-3.png"
import imgh from "../../../public/assets/menu-4.png"
import imgi from "../../../public/assets/menu5.png"
import imgj from "../../../public/assets/menu-6.png"






const Menu = () => {
  return (
    <div className='max-w-[1920px] mx-auto'>
      
            <div className="bg-custom h-[410px] max-w-[1920px]">
  <h1 className="text-white text-center text-4xl pt-40">Our Menu</h1>
  <ul className='text-[16px] text-[#FFFFFF] flex justify-center gap-1 list-none'>
          <Link href={"/"} className=" text-1xl hover:text-[#003152] inline-flex">
            Home <ChevronRight className=' text-[#FF9F0D]' />
          </Link>
          <Link href={"./menu"} className=" text-[#FF9F0D] text-1xl hover:text-[#003152]">
            Menu
          </Link>
          </ul>
        
          </div>


       <div className='max-w-[1920px] py-10 px-12 flex flex-col flex-wrap
       justify-evenly md:flex-row'>
        {/* starter menu */}
         <div className='w-[448px] h-[670px]'>
          <Image src={imge} alt={'menu-hero'} width={450} height={523} className='text-[32px] font-medium' />
        </div>

        <div className='max-w-[768px]  flex flex-col pt-14 gap-8'>
          <div className='max-w-[768px] '>
            <h1 className='text-[#FF9F0D]'><Coffee /></h1>
            <h1 className='text-[48px] font-bold text-[#333333] '>Starter Menu</h1>
          </div>
          <div className='max-w-[768px] '>
            <h2 className='text-[24px] font-bold text-[#333333] inline-flex justify-between  w-full '>Alder Grilled Chinook Salmon
              <span className='text-[#FF9F0D]'>32$</span></h2>
            <p className='text-[16px] font-bold text-[#4F4F4f]'>Toasted French bread topped with romano,cheddar</p>
            <p className=' text-[16px] font-bold text-[#828282]'>560 CAL</p>
          </div>

          <div className='max-w-[760px] '>
            <h2 className='text-[24px] font-bold text-[#FF9F0D] inline-flex justify-between w-full '>Berries and creme tart <span className='text-[#FF9F0D]'>43$</span></h2>
            <p className='text-[16px] font-bold text-[#4F4F4f]'>Gorgonzola, ricotta, mozzarella, taleggio</p>
            <p className=' text-[16px] font-bold text-[#828282]'>700 CAL</p>
          </div>


          <div className='max-w-[760px] '>
            <h2 className='text-[24px] font-bold text-[#333333] inline-flex justify-between w-full'>Tormentoso Bush Pizza Pintoage
              <span className='text-[#FF9F0D]'>14$</span></h2>
            <p className='text-[16px] font-bold text-[#4F4F4f]'>Ground cumin, avocados, peeled and cubed</p>
            <p className=' text-[16px] font-bold text-[#828282]'>1000 CAL</p>
                  </div>


          <div className='max-w-[760px]'>
            <h2 className='text-[24px] font-bold text-[#333333] inline-flex justify-between w-full'>Spicy Vegan Potato Curry<span className='text-[#FF9F0D]'>35$</span></h2>
            <p className='text-[16px] font-bold text-[#4F4F4f]'>Spreadable cream cheese, crumbled blue cheese</p>
            <p className=' text-[16px] font-bold text-[#828282]'>560 CAL</p>
          </div>
        </div>
        </div>
      
{/* main course */}

<div className='max-w-[1920px] py-10 px-12 flex flex-col flex-wrap
       justify-evenly md:flex-row '>

        <div className='max-w-[768px] flex flex-col pt-14 gap-8 '>
          <div className='max-w-[768px] '>
            <h1 className='text-[#FF9F0D]'><Coffee /></h1>
            <h1 className='text-[48px] font-bold text-[#333333] '>Main Course</h1>
          </div>
          <div className='max-w-[768px] '>
            <h2 className='text-[24px] font-bold text-[#333333] inline-flex justify-between  w-full '>
            Optic Big Breakfast Combo Menu
              <span className='text-[#FF9F0D]'>32$</span></h2>
            <p className='text-[16px] font-bold text-[#4F4F4f]'>Toasted French bread topped with romano, cheddar</p>
            <p className=' text-[16px] font-bold text-[#828282]'>560 CAL</p>
          </div>

          <div className='max-w-[760px] '>
            <h2 className='text-[24px] font-bold text-[#FF9F0D] inline-flex justify-between w-full '>
            Cashew Chicken With Stir-Fry <span className='text-[#FF9F0D]'>43$</span></h2>
            <p className='text-[16px] font-bold text-[#4F4F4f]'>Gorgonzola, ricotta, mozzarella, taleggio</p>
            <p className=' text-[16px] font-bold text-[#828282]'>700 CAL</p>
          </div>


          <div className='max-w-[760px] '>
            <h2 className='text-[24px] font-bold text-[#333333] inline-flex justify-between w-full'>
            Vegetables & Green Salad
              <span className='text-[#FF9F0D]'>14$</span></h2>
            <p className='text-[16px] font-bold text-[#4F4F4f]'>Ground cumin, avocados, peeled and cubed</p>
            <p className=' text-[16px] font-bold text-[#828282]'>1000 CAL</p>
                  </div>


          <div className='max-w-[760px]'>
            <h2 className='text-[24px] font-bold text-[#333333] inline-flex justify-between w-full'>Spicy Vegan Potato Curry<span className='text-[#FF9F0D]'>35$</span></h2>
            <p className='text-[16px] font-bold text-[#4F4F4f]'>Spreadable cream cheese, crumbled blue cheese</p>
            <p className=' text-[16px] font-bold text-[#828282]'>560 CAL</p>
          </div>
         </div>

         <div className='w-[448px] h-[670px]'>
         <Image src={imgf} alt={'menu-2-img'} width={450} height={523} className='text-[32px] font-medium' />
        </div>
              </div>
              


         {/* clinent and customer */}
              <div className='max-w-[1920px] h-[468px] py-10  '>
         <Image src={imgg} alt={'menu-client-img'} width={1920} height={468} className='text-[32px] font-medium' />
        </div>

      {/*deserts  */}

      <div className='max-w-[1920px] py-10 px-12 flex flex-col flex-wrap
       justify-evenly md:flex-row'>
         <div className='w-[448px] h-[670px]'>
          <Image src={imgi} alt={'menu-hero'} width={450} height={523} className='text-[32px] font-medium' />
        </div>
        <div className='max-w-[768px]  flex flex-col pt-14 gap-8 '>
          <div className='max-w-[768px] '>
            <h1 className='text-[#FF9F0D]'><Coffee /></h1>
            <h1 className='text-[48px] font-bold text-[#333333] '>Deserts</h1>
          </div>
          <div className='max-w-[768px] '>
            <h2 className='text-[24px] font-bold text-[#333333] inline-flex justify-between  w-full '>
            Fig and lemon cake
              <span className='text-[#FF9F0D]'>32$</span></h2>
            <p className='text-[16px] font-bold text-[#4F4F4f]'>Toasted French bread topped with romano,cheddar</p>
            <p className=' text-[16px] font-bold text-[#828282]'>560 CAL</p>
          </div>

          <div className='max-w-[760px] '>
            <h2 className='text-[24px] font-bold text-[#FF9F0D] inline-flex justify-between w-full '>
            Creamy mascarpone cake <span className='text-[#FF9F0D]'>43$</span></h2>
            <p className='text-[16px] font-bold text-[#4F4F4f]'>Gorgonzola, ricotta, mozzarella, taleggio</p>
            <p className=' text-[16px] font-bold text-[#828282]'>700 CAL</p>
          </div>


          <div className='max-w-[760px] '>
            <h2 className='text-[24px] font-bold text-[#333333] inline-flex justify-between w-full'>
            Pastry, blueberries, lemon juice
              <span className='text-[#FF9F0D]'>14$</span></h2>
            <p className='text-[16px] font-bold text-[#4F4F4f]'>Ground cumin, avocados, peeled and cubed</p>
            <p className=' text-[16px] font-bold text-[#828282]'>1000 CAL</p>
                  </div>


          <div className='max-w-[760px]'>
            <h2 className='text-[24px] font-bold text-[#333333] inline-flex justify-between w-full'>
            Pain au chocolat<span className='text-[#FF9F0D]'>35$</span></h2>
            <p className='text-[16px] font-bold text-[#4F4F4f]'>Spreadable cream cheese, crumbled blue cheese</p>
            <p className=' text-[16px] font-bold text-[#828282]'>560 CAL</p>
          </div>
        </div>
        </div>
      
    
      
         {/* drinks */}
        <div className='max-w-[1920px] py-10 px-12 flex flex-col flex-wrap
       justify-evenly md:flex-row '>

        <div className='max-w-[768px] flex flex-col pt-14 gap-8 '>
          <div className='max-w-[768px] '>
            <h1 className='text-[#FF9F0D]'><Coffee /></h1>
            <h1 className='text-[48px] font-bold text-[#333333] '>Drinks</h1>
          </div>
          <div className='max-w-[768px] '>
            <h2 className='text-[24px] font-bold text-[#333333] inline-flex justify-between  w-full '>
            Caffè macchiato
              <span className='text-[#FF9F0D]'>32$</span></h2>
            <p className='text-[16px] font-bold text-[#4F4F4f]'>Toasted French bread topped with romano, cheddar</p>
            <p className=' text-[16px] font-bold text-[#828282]'>560 CAL</p>
          </div>

          <div className='max-w-[760px] '>
            <h2 className='text-[24px] font-bold text-[#FF9F0D] inline-flex justify-between w-full '>
            Aperol Spritz Capacianno <span className='text-[#FF9F0D]'>43$</span></h2>
            <p className='text-[16px] font-bold text-[#4F4F4f]'>Gorgonzola, ricotta, mozzarella, taleggio</p>
            <p className=' text-[16px] font-bold text-[#828282]'>700 CAL</p>
          </div>


          <div className='max-w-[760px] '>
            <h2 className='text-[24px] font-bold text-[#333333] inline-flex justify-between w-full'>
            Caffe Latte Campuri
              <span className='text-[#FF9F0D]'>14$</span></h2>
            <p className='text-[16px] font-bold text-[#4F4F4f]'>Ground cumin, avocados, peeled and cubed</p>
            <p className=' text-[16px] font-bold text-[#828282]'>1000 CAL</p>
                  </div>


          <div className='max-w-[760px]'>
            <h2 className='text-[24px] font-bold text-[#333333] inline-flex justify-between w-full'>
            Tormentoso BushTea Pintoage<span className='text-[#FF9F0D]'>35$</span></h2>
            <p className='text-[16px] font-bold text-[#4F4F4f]'>Spreadable cream cheese, crumbled blue cheese</p>
            <p className=' text-[16px] font-bold text-[#828282]'>560 CAL</p>
          </div>
         </div>

         <div className='w-[448px] h-[670px]'>
         <Image src={imgh} alt={'menu-2-img'} width={450} height={523} className='text-[32px] font-medium' />
        </div>
              </div>

              {/* menu-footer */}
              <div className='max-w-[1920] '>
                <div className='max-w-[693px] mx-auto'>
                  <p className='text-[18px] font-normal text-[#333333] ml-48'>Partners & Clients</p>
                  <h1 className='text-[48px] font-bold text-[#333333] '>We work with the best pepole</h1>
                </div>
              <div className='max-w-[1920px] '>
         <Image src={imgj} alt={'menu-2-img'} width={1920} height={129} />
        </div>
         </div>
        
      </div>
      


  )
}

export default Menu
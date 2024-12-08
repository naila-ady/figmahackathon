import React from 'react'
import {Coffee} from 'lucide-react';

import Image from 'next/image'
import imge from "../../../public/assets/menu-1.png"
import img from "../../../public/assets/menu-hero.png";






const Menu = () => {
  return (
    <div className='max-w-[1920px] h-[1000px]'>
      <div>
        <Image src={img} alt={'menu-hero'} width={1920} height={100} className='text-[32px] font-medium' />
      </div>

      <div className='max-w-[1320px] h-[628px] flex flex-col flex-wrap'>
        <div className='w-[448px] h-[626px]'>
          <Image src={imge} alt={'menu-hero'} width={445} height={623} className='text-[32px] font-medium' />
        </div>
        <div className='max-w-[448px] h-[628px] flex flex-row flex-wrap space-y-0 '>
        <h1 className='text-[#FF9F0D] w-6 h-6'><Coffee/></h1>
        <div className='max-w-[448px]  '>
          <h1 className='text-[48px] font-bold text-[#333333] py-2'> Starter Menu</h1>
          <h2 className='text-[24px] font-bold text-[#333333] inline-flex '>Alder Grilled Chinook Salmon <span>32$</span></h2>
          <p className='text-[16px] font-bold text-[#4F4F4f]'>Toasted French bread topped with romano, cheddar</p>
          <p className=' text-[16px] font-bold text-[#828282]'>560 CAL</p>
        </div>


        <div className='max-w-[448px]  '>
    
          <h2 className='text-[24px] font-bold text-[#FF9F0D] inline-flex'>Berries and creme tart <span>43$</span></h2>
          <p className='text-[16px] font-bold text-[#4F4F4f]'>Gorgonzola, ricotta, mozzarella, taleggio</p>
          <p className=' text-[16px] font-bold text-[#828282]'>700 CAL</p>
        </div>


        <div className='max-w-[448px]   '>
          <h2 className='text-[24px] font-bold text-[#333333] inline-flex '>Tormentoso Bush Pizza Pintoage<span>14$</span></h2>
          <p className='text-[16px] font-bold text-[#4F4F4f]'>Ground cumin, avocados, peeled and cubed</p>
          <p className=' text-[16px] font-bold text-[#828282]'>1000 CAL</p>
        </div>


        <div className='max-w-[448px]  '>
          
          <h2 className='text-[24px] font-bold text-[#333333] inline-flex '>Spicy Vegan Potato Curry<span>35$</span></h2>
          <p className='text-[16px] font-bold text-[#4F4F4f]'>Spreadable cream cheese, crumbled blue cheese</p>
          <p className=' text-[16px] font-bold text-[#828282]'>560 CAL</p>
        </div>
      </div>
      </div>
</div>
    

  )
}

export default Menu
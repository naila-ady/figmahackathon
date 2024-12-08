import React from 'react'

import Image from 'next/image'
import imge from "../../../public/assets/menu-1.png"
import img from "../../../public/assets/menu-hero.png";






const Menu = () => {
  return (
    <div className='max-w-[1920px] h-[800px]'>
        <div>
        <Image src={img} alt={'menu-hero'} width={1920} height={200} className='text-[32px] font-medium'/>
        </div>

        <div className='max-w-[1320px] h-[628px]'>
            <div className='w-[448px] h-[626px]'>
            <Image src={imge} alt={'menu-hero'} width={91} height={40} className='text-[32px] font-medium'/>
    
            </div>


        </div>
        page</div>
  )
}

export default Menu
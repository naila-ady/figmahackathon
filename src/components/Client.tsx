import React from 'react'
import Image from "next/image"
import imgx from "../../public/assets/menu-3.png"

 {/* clinent and customer */}

const Client = () => {
  return (
    <div className='max-w-[1920px]  mx-auto  '>
    <Image src={imgx} alt={'menu-client-img'} width={1920} height={468} className='text-[32px] font-medium' />
   </div>

  )
}

export default Client
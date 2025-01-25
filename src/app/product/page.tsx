import Link from 'next/link';
import Image from 'next/image';
import img1 from "../../../public/assets/MaskGroup1.png"
import React from 'react'

const Page = () => {
  return (
<div className='grid sm:grid-cols-4 gap-6 py-6 px-6 items-center grid-cols-1 '>
<div className='max-w-[312px]'>
    <Link href={"./shop"}>
    <Image src={img1} alt={'photogalleryimg'} width={312} height={267} />
    </Link>
    <h1 className='text-lg font-bold text-[#333333]'>Fresh Lime</h1>
    <p className='text-base text-[#ff9f0d] font-normal'>$38.00</p>
</div>
<div className='max-w-[312px]'>
    <Image src={img1} alt={'photogalleryimg'} width={312} height={267} />
    <h1 className='text-lg font-bold text-[#333333]'>Chocolate Muffin</h1>
    <p className='text-base text-[#ff9f0d] font-normal'>$28.00</p>

</div>
<div className='max-w-[312px]'>
    <Image src={img1} alt={'photogalleryimg'} width={312} height={267} />
    <h1 className='text-lg font-bold text-[#333333]'>Burger</h1>
    <p className='text-base text-[#ff9f0d] font-normal'>$21.00</p>

</div>
<div className='max-w-[312px]'>
    <Image src={img1} alt={'photogalleryimg'} width={312} height={267} />
    <h1 className='text-lg font-bold text-[#333333]'>Country Burger</h1>
    <p className='text-base text-[#ff9f0d] font-normal'>$45.00</p>

</div>
<div className='max-w-[312px]'>
    <Image src={img1} alt={'photogalleryimg'} width={312} height={267} />
    <h1 className='text-lg font-bold text-[#333333]'>Drink</h1>
    <p className='text-base text-[#ff9f0d] font-normal'>$28.00</p>

</div>
<div className='max-w-[312px]'>
    <Image src={img1} alt={'photogalleryimg'} width={312} height={267} />
    <h1 className='text-lg font-bold text-[#333333]'>Pizza</h1>
    <p className='text-base text-[#ff9f0d] font-normal'>$35.00</p>

</div>
<div className='max-w-[312px]'>
    <Image src={img1} alt={'photogalleryimg'} width={312} height={267} />
    <h1 className='text-lg font-bold text-[#333333]'>Cheese Butter</h1>
    <p className='text-base text-[#ff9f0d] font-normal'>$10.00</p>

</div>
<div className='max-w-[312px]'>
    <Image src={img1} alt={'photogalleryimg'} width={312} height={267} />
    <h1 className='text-lg font-bold text-[#333333]'>Sandwiches</h1>
    <p className='text-base text-[#ff9f0d] font-normal'>$25.00</p>

</div>
</div>
  )
}

export default Page
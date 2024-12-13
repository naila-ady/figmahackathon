import React from 'react'
import Link from 'next/link';
import Image from 'next/image';
import { ChevronRight, Search } from 'lucide-react';
import img1 from "../../../public/assets/MaskGroup1.png"
import img2 from "../../../public/assets/recent-3.png"
import img3 from "../../../public/assets/choose3-.png"
import img4 from "../../../public/assets/Maskgroup10.png"
import img5 from "../../../public/assets/MaskGroup2.png"
import img6 from "../../../public/assets/MaskGroup4.png"
import img7 from "../../../public/assets/MaskGroup8.png"
import img8 from "../../../public/assets/MaskGroup9.png"
import img9 from "../../../public/assets/MaskGroup5.png"
import imga from "../../../public/assets/Banner.png"
import imgb from "../../../public/assets/product-20.png"
import imgc from "../../../public/assets/star.png"

import { Slider } from "@/components/ui/slider"


import { Checkbox } from "@/components/ui/checkbox"

import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"


import {
    Pagination,
    PaginationContent,

    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
} from "@/components/ui/pagination"




const page = () => {
    return (

        <div className='max-w-[1920px] mx-auto'>

            <div className="bg-custom h-[410px] max-w-[1920px]">
                <h1 className="text-white text-center text-4xl pt-40">Our Shop</h1>
                <ul className='text-[16px] text-[#FFFFFF] flex justify-center gap-1 list-none'>
                    <Link href={"/"} className=" text-1xl hover:text-[#003152] inline-flex">
                        Home <ChevronRight className=' text-[#FF9F0D]' />
                    </Link>
                    <Link href={"./shop"} className=" text-[#FF9F0D] text-1xl hover:text-[#003152]">
                        Shop
                    </Link>
                </ul>
            </div>
            {/* mainfolder */}
             <div className='max-w-[1920px]  mx-auto flex flex-wrap'>
                {/* Image Container */}
                <div className='max-w-[812px] mx-auto bg-[#ffffff] py-6'>
                    <div className='max-w-[700px] flex-col sm:flex-row gap-6 '>
                        <Select>
                            <h1 className='text-[#333333]'>Sort By:</h1>
                            <SelectTrigger className="w-[236px] border-[#e0e0e0] text-[#e0e0e0]">
                                <SelectValue placeholder="Newest" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="light">Pizza</SelectItem>
                                <SelectItem value="dark">Sandwiches</SelectItem>
                                <SelectItem value="system">Burger</SelectItem>
                            </SelectContent>
                        </Select>

                        <Select>
                            <h1 className='text-[#333333]'>Show:</h1>
                            <SelectTrigger className="w-[236px] border-[#e0e0e0] text-[#e0e0e0]">
                                <SelectValue placeholder="Default" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="light">Chocolate Muffin</SelectItem>
                                <SelectItem value="dark">Fresh Lime</SelectItem>
                                <SelectItem value="system">Cheese Butte</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>
                    
                    <div className='grid sm:grid-cols-3 gap-6  items-center grid-cols-1 '>
                        <div className='max-w-[312px]'>
                            <Image src={img1} alt={'photogalleryimg'} width={312} height={267} />
                            <h1 className='text-lg font-bold text-[#333333]'>Fresh Lime</h1>
                            <p className='text-base text-[#ff9f0d] font-normal'>$38.00</p>
                        </div>
                        <div className='max-w-[312px]'>
                            <Image src={img2} alt={'photogalleryimg'} width={312} height={267} />
                            <h1 className='text-lg font-bold text-[#333333]'>Chocolate Muffin</h1>
                            <p className='text-base text-[#ff9f0d] font-normal'>$28.00</p>

                        </div>
                        <div className='max-w-[312px]'>
                            <Image src={img3} alt={'photogalleryimg'} width={312} height={267} />
                            <h1 className='text-lg font-bold text-[#333333]'>Burger</h1>
                            <p className='text-base text-[#ff9f0d] font-normal'>$21.00</p>

                        </div>
                        <div className='max-w-[312px]'>
                            <Image src={img4} alt={'photogalleryimg'} width={312} height={267} />
                            <h1 className='text-lg font-bold text-[#333333]'>Country Burger</h1>
                            <p className='text-base text-[#ff9f0d] font-normal'>$45.00</p>

                        </div>
                        <div className='max-w-[312px]'>
                            <Image src={img5} alt={'photogalleryimg'} width={312} height={267} />
                            <h1 className='text-lg font-bold text-[#333333]'>Drink</h1>
                            <p className='text-base text-[#ff9f0d] font-normal'>$28.00</p>

                        </div>
                        <div className='max-w-[312px]'>
                            <Image src={img6} alt={'photogalleryimg'} width={312} height={267} />
                            <h1 className='text-lg font-bold text-[#333333]'>Pizza</h1>
                            <p className='text-base text-[#ff9f0d] font-normal'>$35.00</p>

                        </div>
                        <div className='max-w-[312px]'>
                            <Image src={img7} alt={'photogalleryimg'} width={312} height={267} />
                            <h1 className='text-lg font-bold text-[#333333]'>Cheese Butter</h1>
                            <p className='text-base text-[#ff9f0d] font-normal'>$10.00</p>

                        </div>
                        <div className='max-w-[312px]'>
                            <Image src={img8} alt={'photogalleryimg'} width={312} height={267} />
                            <h1 className='text-lg font-bold text-[#333333]'>Sandwiches</h1>
                            <p className='text-base text-[#ff9f0d] font-normal'>$25.00</p>

                        </div>
                        <div className='max-w-[312px]'>
                            <Image src={img9} alt={'photogalleryimg'} width={312} height={267} />
                            <h1 className='text-lg font-bold text-[#333333]'>Chicken Chup</h1>
                            <p className='text-base text-[#ff9f0d] font-normal'>$21.00</p>

                        </div>
                        <div className='max-w-[312px]'>
                            <Image src={img4} alt={'photogalleryimg'} width={312} height={267} />
                            <h1 className='text-lg font-bold text-[#333333]'>Country burger</h1>
                            <p className='text-base text-[#ff9f0d] font-normal'>$38.00</p>

                        </div>
                        <div className='max-w-[312px]'>
                            <Image src={img5} alt={'photogalleryimg'} width={312} height={267} />
                            <h1 className='text-lg font-bold text-[#333333]'>Drink</h1>
                            <p className='text-base text-[#ff9f0d] font-normal'>$38.00</p>

                        </div>
                        <div className='max-w-[312px]'>
                            <Image src={img6} alt={'photogalleryimg'} width={312} height={267} />
                            <h1 className='text-lg font-bold text-[#333333]'>Pizza</h1>
                            <p className='text-base text-[#ff9f0d] font-normal'>$38.00</p>

                        </div>
                        <div className='max-w-[312px]'>
                            <Image src={img7} alt={'photogalleryimg'} width={312} height={267} />
                            <h1 className='text-lg font-bold text-[#333333]'>Cheese Butter</h1>
                            <p className='text-base text-[#ff9f0d] font-normal'>$38.00</p>
                        </div>
                        <div className='max-w-[312px]'>
                            <Image src={img8} alt={'photogalleryimg'} width={312} height={267} />
                            <h1 className='text-lg font-bold text-[#333333]'>Sandwiches</h1>
                            <p className='text-base text-[#ff9f0d] font-normal'>$38.00</p>
                        </div>
                        <div className='max-w-[312px]'>
                            <Image src={img9} alt={'photogalleryimg'} width={312} height={267} />
                            <h1 className='text-lg font-bold text-[#333333]'>Chicken Chup</h1>
                            <p className='text-base text-[#ff9f0d] font-normal'>$38.00</p>
                        </div>
                    </div>

                    <div className='text-[#ff9f0d] border-[#f2f2f2] '>
                        <Pagination>
                            <PaginationContent>
                                <PaginationItem>
                                    <PaginationPrevious href="#" className='border-2 border-[#f2f2f2]' />
                                </PaginationItem>
                                <PaginationItem>
                                    <PaginationLink href="#" className='border-2 border-[#f2f2f2]'>1</PaginationLink>
                                </PaginationItem>
                                <PaginationItem>
                                    <PaginationLink href="#" className='border-2 border-[#f2f2f2] text-[#f2f2f2] bg-[#ff9f0d]'>2</PaginationLink>
                                </PaginationItem>
                                <PaginationItem>
                                    <PaginationLink href="#" className='border-2 border-[#f2f2f2]'>3</PaginationLink>
                                </PaginationItem>

                                <PaginationItem>
                                    <PaginationNext href="#" className='border-2 border-[#f2f2f2]' />
                                </PaginationItem>
                            </PaginationContent>
                        </Pagination>

                    </div>

                </div> 
        


                   {/* sidemenu */}
            <div className='max-w-[712px] mx-auto py-14 '>

                {/* Search section */}
                <div className='relative py-1 m inline-flex gap-4 mx-auto '>
                    <input
                        type="text"
                        placeholder='Search...'
                        className=' h-8 pt-3 pr-3 pb-2 pl-5 gap-[10px] font-[inter] text-[16px]
border-[#FF9F0D] border-2 bg-orange-100 text-[#FFFFFF] '/>
                    <Search className=" absolute right-0 top-1/2 transform -translate-y-3 text-[#FFFFFF] bg-[#ff9f0d]" />
                </div>

                {/* checkbox */}
                <div className='max-w-[248px] text-[#333333] px-6'>
                    <h1 className='text-xl font-bold text-[#333333]'>Category</h1>
                    <h1 className='text-lg font-normal'> <Checkbox /> Sandwiches</h1>
                    <h1 className='text-lg font-normal'> <Checkbox /> Burger</h1>
                    <h1 className='text-lg font-normal'> <Checkbox /> Chicken Chup</h1>
                    <h1 className='text-lg font-normal'> <Checkbox /> Drinks</h1>
                    <h1 className='text-lg font-normal'> <Checkbox /> Pizza</h1>
                    <h1 className='text-lg font-normal'> <Checkbox /> Thai</h1>
                    <h1 className='text-lg font-normal'> <Checkbox /> Non VEG</h1>
                    <h1 className='text-lg font-normal'> <Checkbox /> Uncategorized</h1>
                </div>
                <div className='max-w-[248px] gap-6 px-6'>
                    <Image src={imga} alt={"banner"} width={248} height={256} />
                    <h1 className='text-xl font-bold text-[#333333]'>Filter By Price</h1>
                    <h1 className='text-[#ff9f0d] max-w-[246px] px-2'><Slider defaultValue={[33]} max={100} step={1}
                        className='bg-[#ff9f0d] ' /></h1>
                </div>
                {/* Latest Products */}
                <div className='max-w-[423px] py-6 px-6'>
                    <h1 className='text-[20px] font-bold text-[#333333]'>Latest Products</h1>
                    <div className='max-w-[423px]  py-3 border-b-2 border-[#E0E0E0] mx-auto '>
                        <div className='max-w-[423px] py-2 flex justify-evenly  '>
                            <div className='w-[110px]'>
                                <Image src={imgb} alt={'photogalleryimg'} width={110} height={92} />
                            </div>
                            <div className='max-w-[205px] flex flex-col py-2 '>
                                <h2 className='text-[14px] font-normal text-[#828282]  justify-between w-full '>
                                    Pizza</h2>
                                <Image src={imgc} alt={'photogalleryimg'} width={62} height={9} />

                                <p className='text-[16px] font-normal text-[#4F4F4f] '>$35.00</p>
                            </div>
                        </div>
                    </div>

                    {/* 2nd */}
                    <div className='max-w-[423px]  py-3 border-b-2 border-[#E0E0E0] '>
                        <div className='max-w-[423px] py-2 flex justify-evenly  mx-auto'>
                            <div className='w-[110px]'>
                                <Image src={imgb} alt={'photogalleryimg'} width={110} height={92} />
                            </div>
                            <div className='max-w-[205px] flex flex-col py-2 '>
                                <h2 className='text-[14px] font-normal text-[#828282]  justify-between w-full '>
                                    Pizza</h2>
                                <Image src={imgc} alt={'photogalleryimg'} width={62} height={9} />

                                <p className='text-[16px] font-normal text-[#4F4F4f] '>$35.00</p>
                            </div>
                        </div>
                    </div>


                    {/* 3rd */}
                    <div className='max-w-[423px]  py-3 border-b-2 border-[#E0E0E0] '>
                        <div className='max-w-[423px] py-2 flex justify-evenly  mx-auto'>
                            <div className='w-[110px]'>
                                <Image src={imgb} alt={'photogalleryimg'} width={110} height={92} />
                            </div>
                            <div className='max-w-[205px] flex flex-col py-2 '>
                                <h2 className='text-[14px] font-normal text-[#828282]  justify-between w-full '>
                                    Pizza</h2>
                                <Image src={imgc} alt={'photogalleryimg'} width={62} height={9} />

                                <p className='text-[16px] font-normal text-[#4F4F4f] '>$35.00</p>
                            </div>
                        </div>
                    </div>


                    {/* 4th */}
                    <div className='max-w-[423px]  py-3 border-b-2 border-[#E0E0E0] '>
                        <div className='max-w-[423px] py-2 flex justify-evenly  mx-auto'>
                            <div className='w-[110px]'>
                                <Image src={imgb} alt={'photogalleryimg'} width={110} height={92} />
                            </div>
                            <div className='max-w-[205px] flex flex-col py-2 '>
                                <h2 className='text-[14px] font-normal text-[#828282]  justify-between w-full '>
                                    Pizza</h2>
                                <Image src={imgc} alt={'photogalleryimg'} width={62} height={9} />

                                <p className='text-[16px] font-normal text-[#4F4F4f] '>$35.00</p>
                            </div>
                        </div>
                    </div>
                    </div>
                    
                    {/* Product tags */}
                    <div className='max-w-[256px] px-6'>
                        <h1 className='text-xl font-bold text-[#333333]'>Product Tags </h1>
                        <div className=' max-w-[256px] flex flex-row flex-wrap gap-4 '>
                            <p className='text-base font-normal text-[#4f4f4f] border-b-2 border-[#f2f2f2]'>Services</p>
                            <p className='text-base font-normal text-[#4f4f4f] border-b-2 border-[#f2f2f2]'>Our Menu</p>
                            <p className='text-base font-normal text-[#4f4f4f] border-b-2 border-[#f2f2f2]'>Pizza</p>
                            <p className='text-base font-normal text-[#4f4f4f] border-b-2 border-[#f2f2f2]'>Cupcake</p>
                            <p className='text-base font-normal text-[#4f4f4f] border-b-2 border-[#f2f2f2]'>Burger</p>
                            <p className='text-base font-normal text-[#4f4f4f] border-b-2 border-[#f2f2f2]'>Cookies</p>
                            <p className='text-base font-normal text-[#4f4f4f] border-b-2 border-[#f2f2f2]'>Our Shop</p>
                            <p className='text-base font-normal text-[#4f4f4f] border-b-2 border-[#f2f2f2]'>Tandoori Chicken</p>
                        </div>
                    </div>

                </div>
            </div>
</div>

        
    )
}

export default page
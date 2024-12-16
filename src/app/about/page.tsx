import React from 'react'
import { ChevronRight } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import img1 from "../../../public/assets/About us.png"
import img2 from "../../../public/assets/Play.png"
import { Button } from '@/components/ui/button';
import img5 from "../../../public/assets/blog-img1.png"
import img6 from "../../../public/assets/foodcateg-3.png"
import img7 from "../../../public/assets/us-3.png"
import img8 from "../../../public/assets/about-chooseus.png"
import imga from "../../../public/assets/Student.png";
import imgb from "../../../public/assets/Coffee.png";
import imgc from "../../../public/assets/Person.png"
import imgw from "../../../public/assets/about-chefs.png";
import imgx from "../../../public/assets/about-chefs.png";
import imgy from "../../../public/assets/about-chefs.png";
import imgz from "../../../public/assets/about-chefs.png";


const About = () => {
  return (
    <div className='max-w-[1920px] mx-auto'>
      <div className="bg-custom h-[410px] max-w-[1920px]">
        <h1 className="text-white text-center text-4xl pt-40">About Us</h1>
        <ul className='text-[16px] text-[#FFFFFF] flex justify-center gap-1 list-none'>
          <Link href={"/"} className=" text-1xl hover:text-[#003152] inline-flex">
            Home <ChevronRight className=' text-[#FF9F0D]' />
          </Link>
          <Link href={"./menu"} className=" text-[#FF9F0D] text-1xl hover:text-[#003152]">
            About
          </Link>
        </ul>
      </div>
      
      {/* main div */}
      <div className='max-w-[1920px] flex flex-col bg-[#ffffff] mx-auto gap-6'>
        {/* first section div */}
        <div className="max-w-[1920px] py-10 mx-auto  flex sm:flex-row flex-col gap-8">
          {/* Photo Gallery Section */}
          <div className="max-w-[650px] py-10 mx-auto ">
            {/* Image Container */}
            <div className="grid grid-cols-2 gap-2  ">
              {/* Image 1 - takes 2 columns */}
              <div className="col-span-1  " >
                <Image
                  src={img5}
                  alt="photogalleryimg"
                  width={336}
                  height={536}
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                {/* Image 2 */}
                <Image
                  src={img7}
                  alt="photogalleryimg"
                  width={309}
                  height={271}
                  className="w-full h-auto object-cover"
                />

                {/* Image 3 */}
                <Image
                  src={img6}
                  alt="photogalleryimg"
                  width={309}
                  height={382}
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>





          <div className="max-w-[1920px] flex flex-col py-6 bg-[#ffffff] justify-center ">
            <div className="max-w-[626px] text-[16px] py-2 ">
              <h1 className="text-[#FF9F0D] font-normal text-2xl py-2">
                <Image src={img1} alt={"hero-img"} width={68} height={26} /></h1>
              <h2 className=" max-w-[433px] text-[48px] font-bold text-[#333333] py-2  ">
                Food is an important part Of a balanced Diet
              </h2>
              <p className=" max-w-[526px] font-light text-[#4f4f4f] text-base py-2 ">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam pellentesque
                bibendum non dui volutpat fringilla bibendum. Urna, elit augue urna, vitae feugiat
                pretium donec id elementum. Ultrices mattis sed vitae mus risus.
                Lacus nisi, et ac dapibus sit eu velit in consequat.</p>
            </div>
            {/* button */}
            <div className='max-w-[526px] py-2'>
              <Button className=" max-w-[195px] h-[58px] rounded-xl text-sm text-[#FFFFFF] bg-[#FF9F0D] " >
                <h2 className=" text-[18px] font-bold  "> Show More</h2>
              </Button>
            </div>


            {/* logo Section */}
            <div className='max-w-[526px] inline-flex gap-6 py-2 items-center'>
              <h1 className='bg-[#ff9f0d]'> <Image src={img2} alt={"hero-img"} width={56} height={56} /></h1>
              <h1 className='text-[#333333] text-base font-bold '>Watch Video</h1>
            </div>
          </div>
        </div>



        {/*about choose us */}
        <div className='max-w-[1920px] flex flex-col flex-wrap justify-evenly py-4 
        bg-[#ffffff] mx-auto'>

          <div className='max-w-[572px] items-center mx-auto justify-center py-4 '>
            <h1 className='text-[48px] font-bold text-[#333333] px-8'>Why Choose us</h1>
            <p className='text-[16px] font-normal text-[#4f4f4f]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque dia
              m pellentesque bibendum non dui volutpat fringilla bibendum. </p>
          </div>
          <div className='max-w-[1320px] mx-auto'>
            <Image src={img8} alt={"about-choose-img"} width={1320} height={48} />
          </div>
        </div>
        </div>

        {/* boxes div */}
        <div className='max-w-[1920px] flex flex-wrap justify-evenly py-4 items-center bg-[#ffffff] mx-auto'>
          {/* ist box */}
          <div className='max-w-[359px] mx-auto'>
            <Image src={imga} alt={"about-choose-img"} width={80} height={80} />

            <div className='max-w-[359px] items-center mx-auto justify-center py-4 '>
              <h1 className='text-[24px] font-bold text-[#333333] px-8'>Best Chef</h1>
              <p className='text-[16px] font-normal text-[#4f4f4f]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque dia
                m pellentesque bibendum non dui volutpat fringilla bibendum. </p>
            </div>
          </div>
          {/* 2nd box */}
          <div className='max-w-[359px] mx-auto'>
            <Image src={imgb} alt={"about-choose-img"} width={80} height={80} />

            <div className='max-w-[359px] items-center mx-auto justify-center py-4 '>
              <h1 className='text-24px] font-bold text-[#333333] px-8'>120 Item food</h1>
              <p className='text-[16px] font-normal text-[#4f4f4f]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque dia
                m pellentesque bibendum non dui volutpat fringilla bibendum. </p>
            </div>
          </div>
          {/* 3rd box */}
          <div className='max-w-[359px] mx-auto'>
            <Image src={imgc} alt={"about-choose-img"} width={80} height={80} />

            <div className='max-w-[359px] items-center mx-auto justify-center py-4 '>
              <h1 className='text-[24px] font-bold text-[#333333] px-8'>Clean Environment</h1>
              <p className='text-[16px] font-normal text-[#4f4f4f]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque dia
                m pellentesque bibendum non dui volutpat fringilla bibendum. </p>
            </div>
          </div>
          </div>

        
      {/* chefs Section */}
      <div className=' bg-custom2 max-w-[1920px]  flex flex-col items-center py-4  '>
        
        <h2 className=" max-w-[429px] text-[48px] font-bold text-[#ffffff] py-2 px-4">
        Team Members</h2>
        <p className=" max-w-[429px] text-[16px] font-normal text-[#Ffffff] py-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Varius sed pharetra dictum neque massa congue</p>
        <div className=' grid md:grid-cols-4 items-center grid-cols-2 gap-6 px-12 py-4 '>
          <div className='max-w-[312px]  '>
        <Image src={imgw} alt={'photogalleryimg'} width={312} height={391} />
       <h1 className='text-[20px] font-bold text-[#4f4f4f]'>Mark Henry</h1>
       <p  className='text-[16px] font-bold text-[#828282]'>owner</p>
       </div>
       <div className='max-w-[312px]'>
        <Image src={imgx} alt={'photogalleryimg'} width={312} height={391} />
        <h1 className='text-[20px] font-bold text-[#4f4f4f]'>Lucky Helen</h1>
       <p  className='text-[16px] font-bold text-[#828282]'>owner</p>
        </div>
        <div className='max-w-[312px] '>
        <Image src={imgy} alt={'photogalleryimg'} width={312} height={391} />
        <h1 className='text-[20px] font-bold text-[#4f4f4f]'>Moon Henry</h1>
       <p  className='text-[16px] font-bold text-[#828282]'>owner</p>
        </div>
        <div className='max-w-[312px] '>
        <Image src={imgz} alt={'photogalleryimg'} width={312} height={391} />
        <h1 className='text-[20px] font-bold text-[#4f4f4f]'>Tom Monrow</h1>
       <p  className='text-[16px] font-bold text-[#828282]'>owner</p>
        </div>

      </div>

      </div>

           




          {/* food menu */}
          <div className='max-w-[1920px]  flex flex-col bg-[#ffffff] mx-auto py-6'>
         {/* {/Heading section */} 
  <div className='max-w-[1790px] mx-auto flex flex-col  items-center py-4 '>
      
       <h2 className="  text-[48px] font-bold text-[#333333] py-2 ">
        Our Food Menu</h2>
        <p className="  text-[16px] font-normal" >Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Varius sed pharetra dictum neque massa congue</p>
        
        </div>

    
      {/* Links and Search section */}
      <div className='max-w-[1920px] bg-[#ffffff] flex py-10 mx-auto '>
        <ul className='max-w-[1056px] bg-[#ffffff] flex flex-col sm:flex-row gap-6 mx-auto items-center
     justify-center lg:gap-20 text-[20px] text-[#4f4f4f]  list-none   '>
          <Link href={"./breakfast"} className="mr-5 text-1xl text-[#ff9f0d] hover:text-[#4f4f4f]">
            Breakfast
          </Link>
          <Link href={".lunch"} className="mr-5 text-1xl hover:text-[#ff9f0d]">
            Lunch
          </Link>
          <Link href={"./dinner"} className="mr-5 text-1xl hover:text-[#ff9f0d]">
            Dinner
          </Link>
          <Link href={"./desert"} className="mr-5 text-1xl hover:text-[#ff9f0d]">
            Desert
          </Link>
          <Link href={"./soups"} className="mr-5 text-1xl hover:text-[#ff9f0d]">
            Soups
          </Link>
          <Link href={"./snacks"} className="mr-5 text-1xl hover:text-[#ff9f0d]">
            Snacks
          </Link>
          {/* <Link href={"./soups"} className="mr-5 text-1xl hover:text-[#ff9f0d]">
            Soups
          </Link> */}
   </ul>
     </div>
      {/* recent menu */}
      <div className="max-w-[1920px]  container  flex flex-col flex-wrap sm:flex-row
       justify-evenly bg-[#ffffff] mx-auto sm:py-16 md:py-20 lg:py-24 xl:py-28'  ">
          {/* <div className='max-w-[800px]  py-6 flex flex-row justify-between  '> */}
      <div className='max-w-[800px] py-8 '>
        {/* 1 */}
               <div className='max-w-[423px] py-3 flex justify-evenly mx-auto '>                     
                     <div className='max-w-[287px] flex flex-col  '>
                    <h2 className='text-[20px] font-bold text-[#ff9f0d] '>
                    Alder Grilled Chinook Salmon</h2>
                    <p className='text-[14px] font-normal text-[#4f4f4f] '>Lacus nisi, et ac dapibus
                       velit in consequat.</p>
                    </div>
                     <p className='text-[18px] font-bold text-[#ff9f0d] '>12.5$</p>
                    </div>

                    {/* 2 */}
                    <div className='max-w-[423px]  py-3 flex justify-evenly  mx-auto '>
                       <div className='max-w-[287px] flex flex-col  '>
                    <h2 className='text-[20px] font-bold text-[#333333]  '>
                    Alder Grilled Chinook Salmon</h2>
                    <p className='text-[14px] font-normal text-[#4f4f4f] '>Lacus nisi, et ac dapibus velit in consequat.</p>
                    </div>
                    <p className='text-[18px] font-bold text-[#ff9f0d] '>12.5$</p>
                    </div>


                    {/* 3 */}
                    <div className='max-w-[423px]  py-3 flex justify-evenly  mx-auto '>
                <div className='max-w-[287px] flex flex-col '>
                    <h2 className='text-[20px] font-bold text-[#333333]'>Alder Grilled Chinook Salmon</h2>
                    <p className='text-[14px] font-normal text-[#4f4f4f] '>Lacus nisi, et ac dapibus velit in consequat.</p>
                    </div>
                    <p className='text-[18px] font-bold text-[#ff9f0d] '>12.5$</p>
                    </div>
                    {/* 4 */}
                    <div className='max-w-[423px]  py-3 flex justify-evenly  mx-auto '>  
                <div className='max-w-[287px] flex flex-col  '>
                    <h2 className='text-[20px] font-bold text-[#333333] '>
                    Alder Grilled Chinook Salmon</h2>
                    <p className='text-[14px] font-normal text-[#4f4f4f] '>Lacus nisi, et ac dapibus velit in consequat.</p>
                    </div>
                    <p className='text-[18px] font-bold text-[#ff9f0d] '>12.5$</p>
                    </div>
                    </div>


                    {/* row-2 */}
                    <div className='max-w-[800px] py-8 '>
                 <div className='max-w-[800px]  py-3 flex justify-evenly  mx-auto gap-8 '>        
                <div className='max-w-[287px] flex flex-col '>
                    <h2 className='text-[20px] font-bold text-[#333333]  '>
                    Alder Grilled Chinook Salmon</h2>
                    <p className='text-[14px] font-normal text-[#4f4f4f] '>Lacus nisi, et ac dapibus velit in consequat.</p>
                    </div>
                    <p className='text-[18px] font-bold text-[#ff9f0d] '>12.5$</p>
                    </div>

                    {/* 2 */}
                    <div className='max-w-[423px]  py-3 flex justify-evenly  mx-auto gap-8 '>
                           
                <div className='max-w-[287px] flex flex-col '>
                    <h2 className='text-[20px] font-bold text-[#333333] '>
                    Alder Grilled Chinook Salmon</h2>
                    <p className='text-[14px] font-normal text-[#4f4f4f] '>Lacus nisi, et ac dapibus velit in consequat.</p>
                    </div>
                    <p className='text-[18px] font-bold text-[#ff9f0d] '>12.5$</p>
                    </div>


                    {/* 3 */}
                    <div className='max-w-[423px]  py-3 flex justify-evenly  mx-auto gap-8'>
                            
                <div className='max-w-[287px] flex flex-col   '>
                    <h2 className='text-[20px] font-bold text-[#333333] '>
                    Alder Grilled Chinook Salmon</h2>
                    <p className='text-[14px] font-normal text-[#4f4f4f] '>Lacus nisi, et ac dapibus velit in consequat.</p>
                    </div>
                    <p className='text-[18px] font-bold text-[#ff9f0d] '>12.5$</p>
                    </div>
                    {/* 4 */}
                    <div className='max-w-[423px]  py-3 flex justify-evenly  mx-auto gap-8'>
                            
                <div className='max-w-[287px] flex flex-col'>
                    <h2 className='text-[20px] font-bold text-[#333333] '>
                    Alder Grilled Chinook Salmon</h2>
                    <p className='text-[14px] font-normal text-[#4f4f4f] '>Lacus nisi, et ac dapibus velit in consequat.</p>
                    </div>
                    <p className='text-[18px] font-bold text-[#ff9f0d] '>12.5$</p>
                    </div>
                    </div>
                 </div>
                    </div>
                    </div>
        

        


      // </div>
    






  )
}

export default About
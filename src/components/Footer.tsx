import React from 'react';
import Image from 'next/image';
import img8 from "../../public/assets/ClockClockwise.png"; 
import imga from "../../public/assets/unsplash_CLMpC9UhyTo (1).png"; 
import imgd from "../../public/assets/footerimg.png";
import { Tabs,  TabsList, TabsTrigger } from "@/components/ui/tabs";
import {Facebook ,Twitter ,Instagram ,Youtube ,Podcast } from "lucide-react";
import Link from 'next/link';



const Footer = () => {
  return (
    
      
      
      
       
      <footer className="container max-w-[1920px]  md:h-auto text-[#FFFFFF] bg-[#000000] mx-auto  ">
        {/* first part footer */}
      <div className="max-w-[1920px]  justify-evenly border-b-2 border-[#FF9F0d] flex flex-row 
       mt-3 mx-auto  ">
     <div className='max-w-full flex sm:flex-col  '>
        <h1 className='text-2xl font-bold text-[#FF9F0D] '>St
          <span className='text-2xl text-[#FFFFFF]'>ill You Need Our Support ?</span>
        </h1>
        <p className='text-[#FFFFFF] text-base font-normal '>Don’t wait make a smart & logical quote here.
           Its pretty easy.</p>
      </div>
      

<div className="max-w-[300px]  py-2 ">
      <div className="flex items-center w-full  bg-[#FFFFFF] border border-[#FF9F0D] rounded-md">
        <input
          type="email"
          className="w-full p-2 border-none"
          placeholder="Enter your email"
        />
        <button className="bg-[#FF9F0D] text-white px-4 py-2 rounded-r-md">
          Subscribe
        </button>
      </div>
    </div>


    </div>


     
{/* links */}
     
  <div className="container px-2 md:h-auto mx-auto flex md:items-center lg:items-start sm:flex-row sm:flex-nowrap
   flex-wrap flex-col">
        {/* <div className="flex-grow flex flex-wrap md:pr-20  md:text-left text-center"> */}
      <div className="lg:w-1/4 md:w-1/2 w-full sm:h-auto px-4">
        <h2 className=" font-bold text-xl tracking-wide mb-3 text-[#FFFFFF] hover:text-[rgb(255,159,13)]">
          About us
        </h2>
        <nav className="list-none  space-y-2 text-[18px] font-medium">
          <li>
            <p className="text-[#FFFFFF] hover:text-[#FF9f0D] text-base font-normal">orporate clients and leisure travelers hasbeen<br/> 
            relying on Groundlink for dependablesafe,and<br/> professional chauffeured carservice in major<br/>
             cities across World.</p>
          </li>
          
          <li>
            <Link href={"#"} className="inline-flex gap-4 text-[#FFFFFF]">
            <Image src={img8} alt={"hero-img"} width={26} height={175}
             className='text-[#FFFFFF] hover:text-[#FF9f0D] bg-[#FF9F0D]'/>
 
              Opening Houres<br/>Mon - Sat(8.00 - 6.00)<br/>Sunday - Closed</Link>
          </li>
          
        </nav>
      </div>
      <div className="lg:w-1/4 md:w-1/2 w-full px-4">
        <h2 className="  font-bold text-xl tracking-wide mb-3 mt-2 text-[#FFFFFF] hover:text-[#FF9f0D]">
          Useful Links
        </h2>
        <nav className="list-none space-y-2 text-[18px] font-medium">
          <li>
            <Link href={"#"} className="text-[#FFFFFF] hover:text-[#FF9f0D]">About</Link>
          </li>
          <li>
            <Link href={"#"} className="text-[#FFFFFF] hover:text-[#FF9f0D]">News</Link>
          </li>
          <li>
            <Link href={"#"} className="text-[#FFFFFF] hover:text-[#FF9f0D]">Partner</Link>
          </li>
          <li>
            <Link href={"#"} className="text-[#FFFFFF] hover:text-[#FF9f0D]">Team</Link>
          </li>
          <li>
            <Link href={"#"} className="text-[#FFFFFF] hover:text-[#FF9f0D]">Menu</Link>
          </li>
          <li>
            <Link href={"#"} className="text-[#FFFFFF] hover:text-[#FF9f0D]">Contact</Link>
          </li>
        </nav>
      </div>
      <div className="lg:w-1/4 md:w-1/2 w-full px-4  ">
        <h2 className="font-bold text-xl tracking-wide mb-3 mt-2 text-[#FFFFFF] hover:text-[#FF9f0D]">
          Help?
        </h2>
        <nav className="list-none space-y-2 text-[18px] font-medium " >
          <li>
            <Link href={"#"} className="text-[#FFFFFF] hover:text-[#FF9f0D]">FAQ</Link>
          </li>
          <li>
            <Link href={"#"} className="text-[#FFFFFF] hover:text-[#FF9f0D]">Terms & condition</Link>
          </li>
          <li>
            <Link href={"#"} className="text-[#FFFFFF] hover:text-[#FF9f0D]">Reporting</Link>
          </li>
          <li>
            <Link href={"#"} className="text-[#FFFFFF] hover:text-[#FF9f0D]">Documentations</Link>
          </li>
          <li>
            <Link href={"#"} className="text-[#FFFFFF] hover:text-[#FF9f0D]">Support Policy</Link>
          </li>
          <li>
            <Link href={"#"} className="text-[#FFFFFF] hover:text-[#FF9f0D]">Privacy</Link>
          </li>
        </nav>
      </div>
      <div className="lg:w-1/4 md:w-1/2 ">
        <h2 className="font-bold text-xl tracking-wide mb-3 text-[#FFFFFF] hover:text-[#FF9f0D]">
          Recent Posts
        </h2>
        <nav className="list-none mb-10 ">
          <li className='inline-flex'>
            <Link href={"#"} className="text-[#FFFFFF] hover:text-[#FF9f0D] ">
            <Image src={imga} alt={"hero-img"} width={60} height={182}/>
            </Link>
            <h1>20 Feb 2022<br/>Keep Your Business</h1>
          </li>
          <li className='inline-flex'>
            <Link href={"#"} className="text-[#FFFFFF] hover:text-[#FF9f0D]">
              <Image src={imga} alt={"hero-img"} width={60} height={182}/></Link>
              <h1>20 Feb 2022<br/>Keep Your Business</h1>
          </li>
          <li className='inline-flex'>
            <Link href={"#"}className="text-[#FFFFFF] hover:text-[#FF9f0D]">
            <Image src={imga} alt={"hero-img"} width={60} height={182}/></Link>
            <h1>20 Feb 2022<br/>Keep Your Business</h1>
          </li>
                  </nav>
      </div>
    </div>
  {/* </div> */}
  <div className="bg-[#FF9F0D]">
    <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
      <p className="text-gray-500 text-sm text-center sm:text-left">
      Copyright © 2022 by Naila Adnan. All Rights Reserved.
       
      </p>
       <span className="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start "> 
         <Link href={"#"} className="text-gray-500 bg-[#FFFFFF]">
        <Facebook />
        </Link>
        <Link href={"#"}  className="ml-3 text-gray-500  bg-[#FFFFFF]">
        <Twitter />    
           </Link>
        <Link href={"#"} className="ml-3 text-gray-500  bg-[#FFFFFF]">
        <Instagram />
        </Link>
        <Link href={"#"} className="ml-3 text-[#FF9F0D]  bg-[#FFFFFF]">
        <Youtube />
                </Link>
                <Link href={"#"} className="ml-3 text-gray-500  bg-[#FFFFFF]"> 
                 <Podcast />
                </Link>
      
      </span> 
        {/* <Image src={imgd} alt={"footer-img"} width={0} height={0}/> */}
 
    </div>
  </div>
</footer>

  )
}

export default Footer
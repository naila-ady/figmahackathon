import React from 'react'
import img1 from "../../public/assets/Restaurant Active Process (1).png"
import img2 from "../../public/assets/Play.png"
import Image from 'next/image'
import { Button } from './ui/button'
import img3 from "../../public/assets/blogpast-1.png"
import img4 from "../../public/assets/blog-img2.png"
import img5 from "../../public/assets/blog-img3.png"

const Menuclient = () => {
    return (


        <div className='max-w-[1920px]  mx-auto '>
            <div className='bg-custom1 max-w-[1920px] '>

                <div className=" max-w-[1920px] flex flex-col  items-center ">
                    <div className=" max-w-[705px]  py-6 flex flex-col flex-wrap mx-auto justify-between ">
                        <Image src={img1} alt={'about'} width={273} height={43} />
                        <h1 className="max-w-[705px] text-5xl font-bold text-[#FF9F0D]">We
                            <span className="text-5xl font-bold text-[#FFFFFF]">
                                Document Every Food Bean Process until it is saved</span></h1>
                    </div>

                    {/* <!-- Paragraph --> */}
                    <div className=" max-w-[705px] text-white ">
                        <p className="text-[16px] font-normal ">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam pellentesque bibendum non dui volutpat
                            fringilla bibendum. Urna, elit augue urna, vitae feugiat pretium donec id elementum. Ultrices mattis sed
                            vitae mus risus. Lacus nisi, et ac dapibus sit eu velit in consequat.
                        </p>

                    </div>
                    {/* <!--  Button --> */}
                    <div className="flex gap-4 items-center flex-wrap px-4 w-full py-8 border-[#ff9f0d] mx-auto justify-center">
                        <Button className="rounded-full w-[190px] h-[60px] text-sm text-[#FFFFFF]
           border-2 border-[#ff9f0d]" >Read More</Button>
                 <Image src={img2} alt={"play"} width={60} height={60}/>
                 <h1 className='text-[#ffffff] text-[16px] font-normal'>Play Video</h1>                   
                  </div>
                </div>

            </div>

           {/* Blogpast */}
           <div className=" max-w-[1920px] flex flex-col  bg-[#000000] mx-auto ">
                    <div className=" max-w-[462px]  py-6 flex flex-col  mx-auto justify-between ">
                        <Image src={img1} alt={'about'} width={124} height={40} className='flex items-center' />
                        <h1 className="max-w-[462px] text-5xl font-bold text-[#FF9F0D]">La
                            <span className="text-5xl font-bold text-[#FFFFFF]">
                            test News & Blog</span></h1>
                            </div>

            <div className='max-w-[1320px] flex flex-col sm:flex-row mx-auto gap-4'>
                                {/* 1st sectiom */}
        <div className="max-w-[4230px] py-2 flex flex-col justify-evenly  bg-[#000000] mx-auto ">
        <div className="max-w-[423px] items-center" >
        <Image src={img3} alt={"hero-img"} width={300} height={349} />
      </div>
      
         <div className="max-w-[338px] ">
        <h2 className=" max-w-[338px] text-[16px] font-normal text-[#ff9f0d] py-2">
        10 February 2022</h2>
       <h1 className="text-[#ffffff] font-bold text-2xl py-2 border-b-2 border-[#ffffff] "> 
        Curabitur rutrum velit ac congue malesuada</h1>
               </div>
        
                <div className="flex items-center flex-wrap py-2 w-full ">
        <Button className="bg-[#000000] w-[86px] h-[24px] text-sm
         text-[#ffffff] border-2 border-[#000000]" >Learn More</Button>
      </div>
  
           </div>


           {/* 2nd sectiom */}

        
        <div className="max-w-[424px] py-2 flex-col justify-evenly items-center bg-[#000000] mx-auto  ">
        <div className="max-w-[423px] items-center " >
        <Image src={img4} alt={"hero-img"} width={423} height={349} />
      </div>
           <div className="max-w-[338px] items-center ">
        <h2 className=" max-w-[338px] text-[16px] font-normal text-[#ff9f0d] py-2">
        10 February 2022</h2>

         <h1 className="text-[#ffffff] font-bold text-2xl py-2 border-b-2 border-[#E0E0E0]  "> 
         Morbi Sodales Tellus Elit, In Blandit Risus Suscipit A</h1>
                    </div>
         
        
                <div className="flex items-center flex-wrap py-2 w-full">
        <Button className="bg-[#000000]  w-[86px] h-[24px] text-sm 
        text-[#FFFFFF] border-2 border-[#000000]" >Learn More </Button>
      </div>
  
           </div>

           {/* 3rd sectiom */}

        
        <div className="max-w-[424px]  py-2 flex-col justify-evenly items-center  bg-[#000000] mx-auto  ">
        <div className="max-w-[423px] items-center " >
        <Image src={img5} alt={"hero-img"} width={423} height={349} />
      </div>
           <div className="max-w-[338px] text-[16px] ">
        <h2 className=" max-w-[338px] text-[16px] font-normal text-[#ff9f0d] py-2">
        Feb 14, 2022 </h2>

         <h1 className="text-[#ffffff] font-bold text-2xl py-2 border-b-2 border-[#E0E0E0]  "> 
         Pellentesque Non Efficitur Mi Aliquam Convallis Mi Quis</h1>
            </div>
         
        <div className="flex items-center flex-wrap pb-4 py-2 w-full">
        <Button className="bg-[#000000] rounded-lg w-[86px] h-[24px] text-sm 
        text-[#FFFFFF] border-2 border-[#000000]" >Learn More </Button>
      </div>
  </div>

</div>

        </div>

</div>
    )
}

export default Menuclient
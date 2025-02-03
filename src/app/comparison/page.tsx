
import CustomerCare from "../../components/CustomerCare";
import Image from "next/image";
import { FaAngleDown } from "react-icons/fa6";
import Link from "next/link";
import { ChevronRight } from 'lucide-react';
import img1 from "../../../public/assets/choose3-.png"
import img2 from "../../../public/assets/MaskGroup2.png"
import img3  from "../../../public/assets/stars4.png"
import img4  from "../../../public/assets/stars.png"
export default function Comparison() {
  return (

    <div className='max-w-[1920px] mx-auto'>
      <div className="bg-custom h-[410px] max-w-[1920px]">
        <h1 className="text-white text-center text-4xl pt-40">Product-Comparison</h1>
        <ul className='text-[16px] text-[#FFFFFF] flex justify-center gap-1 list-none'>
          <Link href={"/"} className=" text-1xl hover:text-[#003152] inline-flex">
            Home <ChevronRight className=' text-[#FF9F0D]' />
          </Link>
          <Link href={"./menu"} className=" text-[#FF9F0D] text-1xl hover:text-[#003152]">
            Product-Comparison
          </Link>
        </ul>
      </div>






      {/* main contact start */}
      <div className="mx-auto max-w-[1332px]">
        {/* product section start */}
        <div className="flex flex-col xl:flex-row my-20 px-4 lg:px mx-auto w-fit xl:items-start items-center  gap-14">
          <div className="mt-5">
            <h3 className="text-[22px]/[30px] lg:text-[28px]/[35px] mb-4 w-full lg:w-[223px] font-medium  text-center xl:text-left">
              Go to Product page for more Products
            </h3>
            <Link href={"./food"}>
            <button
              type="button"
              className=" text-[#ff9f0d] text-lg lg:text-xl border-b border-[#727272]
               block mx-auto xl:mx-0">
                View More
            </button>
            </Link>
          </div>

          {/* Middle Product Cards */}
          <div className="flex flex-col sm:flex-row gap-12">
            {/* Card 1 */}
            <div className="space-y-3">
              
              <Image
                src={img1}
                alt="country burger"
                height={142}
                width={239}
              />
              
              <div className="space-y-1 text-center sm:text-left">
                <h4 className="text-2xl/[30px] font-medium ">
                  Country Burger
                </h4>
                <p className="font-medium text-lg/[27px]">
                  $.28
                </p>
                <span className="flex justify-center sm:justify-start gap-1 items-center">
                  <p className=" font-medium text-lg/[27px] mt-1">
                    4.7
                  </p>
                   <Image
                    src={img3}
                    alt="rating"
                    height={20}
                    width={124}
                  /> 
                  
                  <p className=" font-normal text-[#9F9F9F] border-l border-[#9F9F9F] h-5 flex items-center justify-end w-24">
                    200 Review
                  </p>
                </span>
              </div>
            </div>

            {/* Card 2 */}
            <div className="space-y-3">
              
              <Image
                src={img2}
                alt="Burger"
                height={201}
                width={271}
              />
              
              <div className="space-y-1 text-center sm:text-left">
                <h4 className="text-2xl/[30px] font-medium ">
                  Burger
                </h4>
                <p className=" font-medium text-lg[27px]">
                  $.15
                </p>
                <span className="flex justify-center sm:justify-start gap-1 items-center">
                  <p className=" font-medium text-lg/[27px] mt-1">
                    4.2
                  </p>
                  <Image
                    src={img4}
                    alt="rating"
                    height={20}
                    width={124}
                  />
                  <p className=" font-normal text-[#9F9F9F] border-l border-[#9F9F9F] h-5 flex items-center justify-end w-24">
                    145 Review
                  </p>
                </span>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-2 xl:items-start items-center mt-16">
            <h2 className="text-2xl/[30px] font-semibold text-center lg:text-left">
              Add A Product
            </h2>
            <button className="w-[242px] h-[39px] flex items-center justify-between px-4 rounded-md bg-[#ff9f0d] hover:bg-[#be9942]">
              <span className="text-white flex items-center gap-10">
                <p className="font-semibold  text-sm/[17px]">
                  Choose a Product
                </p>
                <FaAngleDown className="h-6 w-6" />
              </span>
            </button>
          </div>
        </div>
        {/* product section end */}


        <hr />


        <div className="flex max-w-[1332px] px-4 mb-28 sm:flex-row flex-col sm:gap-0 gap-4">

          <div className="flex flex-col gap-24 border-t border-1 w-72 md:pl-10 pl-1 pt-8">
            <h6 className="font-bold md:text[35px] text-4xl text-[#ff9f0d]">Categories</h6>

            <div className="flex flex-row gap-16">
              {/* <!-- Starters Category --> */}
              <div className="space-y-7">
                <h6 className="font-medium md:text-[28px]/[35px] text-xl">Starters</h6>
                <p className="font-normal md:text-xl text-base">Chicken Chup</p>
                <p className="font-normal md:text-xl text-base">Ingredients: Paneer, Spices, Yogurt</p>
                <p className="font-normal md:text-xl text-base">Serving Size: 1 Plate (3 pieces)</p>
                <p className="font-normal md:text-xl text-base">Calories per Serving: 250 kcal</p>
                <p className="font-normal md:text-xl text-base">Packaging: Ready to serve</p>
                <p className="font-normal md:text-xl text-base">Best Served: Hot with Green Chutney</p>
                <button className="mx-auto md:w-[215px] sm:w-[150px] w-[120px] md:h-16 h-10 bg-[#ff9f0d] hover:bg-[#d6aa43] text-xl/[30px] font-normal text-white">Add To Cart</button>
              </div>

              {/* <!-- Appetizers Category --> */}
              <div className="space-y-7">
                <h6 className="font-medium md:text-[28px]/[35px] text-xl">Appetizers</h6>
                <p className="font-normal md:text-xl text-base">Chowmin</p>
                <p className="font-normal md:text-xl text-base">Ingredients: Mixed Vegetables, spaghetti, Spices</p>
                <p className="font-normal md:text-xl text-base">Serving Size: 1 bowl</p>
                <p className="font-normal md:text-xl text-base">Calories per Serving: 180 kcal</p>
                <p className="font-normal md:text-xl text-base">Packaging: Ready to serve</p>
                <p className="font-normal md:text-xl text-base">Best Served: With Sweet Chili Sauce</p>
                <button className="mx-auto md:w-[215px] sm:w-[150px] w-[120px] md:h-16 h-10 bg-[#ff9f0d] hover:bg-[#d6aa43] text-xl/[30px] font-normal text-white">Add To Cart</button>
              </div>

              {/* <!-- Fresh Drinks Category --> */}
              <div className="space-y-7">
                <h6 className="font-medium md:text-[28px]/[35px] text-xl">Fresh Drinks</h6>
                <p className="font-normal md:text-xl text-base">Fresh Limes</p>
                <p className="font-normal md:text-xl text-base">Ingredients: Ginger, Lemon, Honey, Flavors ,Soda</p>
                <p className="font-normal md:text-xl text-base">Serving Size: 2 Glasses (250 ml)</p>
                <p className="font-normal md:text-xl text-base">Calories per Serving: 120 kcal</p>
                <p className="font-normal md:text-xl text-base">Packaging: Served in Glass</p>
                <p className="font-normal md:text-xl text-base">Best Served: Chilled</p>
                <button className="mx-auto md:w-[215px] sm:w-[150px] w-[120px] md:h-16 h-10 bg-[#ff9f0d] hover:bg-[#d6aa43] text-xl/[30px] font-normal text-white">Add To Cart</button>
              </div>

              {/* <!-- Desserts Category --> */}
              <div className="space-y-7">
                <h6 className="font-medium md:text-[28px]/[35px] text-xl">Desserts</h6>
                <p className="font-normal md:text-xl text-base">Chocolate Muffins</p>
                <p className="font-normal md:text-xl text-base">Ingredients: Milk Powder, Butter, Sugar, Cooking chocolate</p>
                <p className="font-normal md:text-xl text-base">Serving Size: 2 Pieces</p>
                <p className="font-normal md:text-xl text-base">Calories per Serving: 200 kcal</p>
                <p className="font-normal md:text-xl text-base">Packaging: Ready to serve</p>
                <p className="font-normal md:text-xl text-base">Best Served: Warm with Ice Cream</p>
                <button className="mx-auto md:w-[215px] sm:w-[150px] w-[120px] md:h-16 h-10 bg-[#ff9f0d] hover:bg-[#d6aa43] text-xl/[30px] font-normal text-white">Add To Cart</button>
              </div>
            </div>
          </div>
        </div>
      </div>
     <CustomerCare />
    </div>
  );
}



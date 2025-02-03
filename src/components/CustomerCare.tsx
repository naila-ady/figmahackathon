
import { GoVerified } from "react-icons/go";
import { HiOutlineTrophy } from "react-icons/hi2";
import {Truck ,FileAudio } from "lucide-react"


export default function CustomerCare() {
  return (

    <div className="h-auto lg:h-[270px] flex flex-col lg:flex-row items-center justify-center bg-transparent 
    border-2 shadow-lg px-4 py-6">
      <div className="flex flex-wrap gap-6 justify-center lg:justify-start">
        {/* High Quality */}
        <div className="h-auto lg:h-[70px] w-full sm:w-[337px] flex items-center gap-2">
          < HiOutlineTrophy className="w-12 h-12 text-[#ff9f0d]"/>
          <div>
            <h2 className="text-[30px] sm:text-[25px] font-semibold text-[#242424]">
              High Quality
            </h2>
            <p className="text-base sm:text-xl font-medium text-[#898989]">
              Best Ingredients
            </p>
          </div>
        </div>

        {/* Warranty Protection */}
        <div className="h-auto lg:h-[70px] w-full sm:w-[338px] flex items-center gap-2">
          <GoVerified className="w-12 h-12 text-[#ff9f0d]" />
          <div>
            <h2 className="text-[30px] sm:text-[25px] font-semibold text-[#242424]">
            Safe Delivery
            </h2>
            <p className="text-base sm:text-xl font-medium text-[#898989]">
              Quality Guaranteed
            </p>
          </div>
        </div>

        {/* Free Shipping */}
        <div className="h-auto lg:h-[70px] w-full sm:w-[244px] flex items-center gap-2">
                  <Truck className="w-12 h-12 text-[#ff9f0d]" />
          <div>
            <h2 className="text-[30px] sm:text-[25px] font-semibold  text-[#242424]">
              Free Shipping
            </h2>
            <p className="text-base sm:text-xl font-medium text-[#898989]">
              Order over 150 $
            </p>
          </div>
        </div>

        {/* 24/7 Support */}
        <div className="h-auto lg:h-[70px] w-full sm:w-[249px] flex items-center gap-2">
          
                   <FileAudio  className="w-12 h-12 text-[#ff9f0d]" />
          <div>
            <h2 className="text-[30px] sm:text-[25px]font-semibold text-[#242424]">
              24 / 7 Support
            </h2>
            <p className="text-base sm:text-xl font-medium text-[#898989]">
              Dedicated support
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
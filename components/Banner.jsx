import Image from "next/image"
import React from "react"
import { image122 } from "../public/assets/images"
import CustomButton from "./shared/CustomButton"
import { shopping_bag } from "../public/assets/icons"
import { Subtitles } from "lucide-react"

const Banner = ({ bgColor, title, subTitle }) => {
  return (
    <section
      className="mid-container rounded-3xl mb-60 mx-auto mt-40 p-10 lg:p-0"
      style={{ backgroundColor: bgColor }}
    >
      <div className="flex flex-col lg:flex-row  gap-4 p-4 lg:p-0 ">
        <div className="flex flex-1 w-full lg:min-w-[700px] relative min-h-[690px]">
          <Image
            src={image122}
            alt="image122"
            className="absolute -bottom-5 -left-10 z-10"
            width={1000}
            height={300}
          />
          <div className="absolute bottom-28 left-32 lg:min-h-[450px] bg-[#f5fff3] w-[450px] rounded-xl z-0"></div>
        </div>
        <div className="flex-1 w-full lg:min-w-[100px] mt-32">
          <div className="border border-orange-500 text-orange-500 px-4 mb-8 font-bold text-xl block w-[245px] tracking-wide -mt-5">
            Keuze van de week
          </div>
          <h1 className="text-7xl font-bold text-[#1E285F] ">{title}</h1>
          <h2 className="text-[#1E285F] max-w-[350px] mt-6 text-2xl">
            {subTitle}
          </h2>
          <p className="text-3xl mb-6 mt-10">
            <span className="text-[#1E285F] mr-5 italic line-through">
              $49,95 USD
            </span>
            <span className="text-[#22C55E] font-semibold">$35,00 USD</span>
          </p>
          <CustomButton
            title={"In winkelmand"}
            icon={shopping_bag}
            bgColor={"#006CEB"}
            textColor={"white"}
          />
        </div>
      </div>
    </section>
  )
}

export default Banner

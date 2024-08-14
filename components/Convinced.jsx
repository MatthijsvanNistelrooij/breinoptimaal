import Image from "next/image"
import React from "react"
import { stock2 } from "../public/assets/images"
import { arrow_right } from "../public/assets/icons"
import CustomButton from "./shared/CustomButton"

const Convinced = ({ title, subTitle }) => {
  return (
    <section className="rounded-custom bg-[#f7f7f2] text-[#1E285F] border border-gray-100 relative z-10 max-container p-32 pt-10 -mb-12">
      <div className="relative p-10 lg:p-20 lg:pt-5 bg-[#FED7AA] rounded-custom min-h-[440px] flex flex-col lg:flex-row items-center justify-center gap-8">
        <div className="flex flex-col items-center lg:items-start gap-4 lg:gap-6 lg:w-1/2">
          <h3 className="text-4xl lg:text-5xl font-semibold text-[#1E285F] text-center lg:text-left w-full">
            {title}
          </h3>
          <h3 className="text-xl lg:text-2xl text-black text-center lg:text-left mb-8">
            {subTitle}
          </h3>
          <div>
            <CustomButton
              title={"meer bekijken"}
              icon={arrow_right}
              bgColor={"#1E285F"}
              textColor={"white"}
            />
          </div>
        </div>

        <div className="flex flex-col items-center lg:items-end lg:w-1/2">
          <div className="bg-[#ffefdc] rounded-3xl w-full max-w-[450px] h-[300px] relative mt-10"></div>
          <Image
              src={stock2}
              alt="stock2"
              className="absolute bottom-1 right-10 lg:right-10"
            />
        </div>
      </div>
    </section>
  )
}

export default Convinced

import Image from "next/image"
import React from "react"
import {
  arrow_right_circle,
  check_green,
  click_me,
  star_shine,
} from "../public/assets/icons"
import { stock } from "../public/assets/images"
import CustomButton from "./shared/CustomButton"

const Hero = ({ title, wordsToHighlight }) => {
  const styledTitle = title.split(new RegExp(`(${wordsToHighlight})`, "gi"))
  const highlightColor = "#006CEB"

  return (
    <section className="p-4 relative -top-48 bg-[#f7f7f2] rounded-custom max-container">
      <div className="flex flex-row p-60 pt-28 mid-container">
        <h1 className="text-5xl font-semibold text-[#1E285F] leading-tight w-full text-center">
          {styledTitle.map((part, index) =>
            part.toLowerCase() === wordsToHighlight.toLowerCase() ? (
              <span
                key={index}
                className="inline-flex items-center"
                style={{ color: highlightColor }}
              >
                <span className="ml-2">{part}</span>
                <Image src={star_shine} alt="icon" className="w-10 h-10 inline" />

              </span>
            ) : (
              part
            )
          )}
        </h1>
      </div>

      <div className="flex flex-row">
        <div>
          <Image src={stock} alt="stock" className="ml-20" />
        </div>

        <div className=" bg-white rounded-4xl p-16 mt-32 -ml-40">
          <h1 className="text-[#1E285F] text-6xl font-semibold leading-tight">
            3x Waarom je
            <br />
            kiest voor
            <br />
            <span className="text-[#006CEB]">breinoptimaal.</span>
          </h1>

          <div className="flex flex-col gap-5 justify-end mt-5 mb-9">
            <div className="flex flex-row gap-10">
              <Image
                src={check_green}
                alt="check_green"
                className="-mt-1 object-contain"
              />
              <h1 className="text-[#4F6783] text-2xl tracking-wide">
                Snel en gemakkelijk online bestellen
              </h1>
            </div>
            <div className="flex flex-row gap-10">
              <Image
                src={check_green}
                alt="check_green"
                className="-mt-1 object-contain"
              />
              <h1 className="text-[#4F6783] text-2xl tracking-wide">
                Je weet zelf bro, is gewoon beste kwalli.
              </h1>
            </div>
            <div className="flex flex-row gap-10">
              <Image
                src={check_green}
                alt="check_green"
                className="-mt-1 object-contain"
              />
              <h1 className="text-[#4F6783] text-2xl tracking-wide">
                Vandaag besteld, Morgen in huis.
              </h1>
            </div>
          </div>
          <div className="flex flex-row relative mt-20">
            <CustomButton
              title={"Meer bekijken"}
              bgColor={"#006CEB"}
              textColor={"white"}
              icon={arrow_right_circle}
            />
            <Image
              src={click_me}
              alt="icon"
              className="absolute -bottom-40 left-40 rotate-45"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero

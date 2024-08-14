import Image from "next/image"
import React from "react"
import { banner_marquee } from "../public/assets/images"
import { productLinks } from "../constants"
import {
  focus_icon_large,
  shield,
  smile_icon_large,
  strength_icon_large,
} from "../public/assets/icons"

const Marque = () => {
  return (
    <section className="mid-container relative overflow-hidden">
      <div
        className="h-[250px] relative overflow-hidden flex items-center whitespace-nowrap 
            bg-pastel-gradient gap-40 rounded-custom"
      >
        <div className="flex flex-row animate-slide items-center">
          <div className="text-[110px] font-medium font-quicksand text-[#15803D] flex items-center m-32">
            <Image src={shield} alt="icon" className="mr-8" />
            Gezond
          </div>
          <div className="text-[110px] font-medium font-quicksand text-[#0369A1] flex items-center m-32">
            <Image src={focus_icon_large} alt="icon" className="mr-8" />
            Focus
          </div>
          <div className="text-[110px] font-medium font-quicksand text-[#B91C1C] flex items-center m-32">
            <Image src={strength_icon_large} alt="icon" className="mr-8" />
            Sterk
          </div>
          <div className="text-[110px] font-medium font-quicksand text-[#EA580C] flex items-center m-32">
            <Image src={focus_icon_large} alt="icon" className="mr-8" />
            Blij
          </div>
        </div>
      </div>
    </section>
  )
}

export default Marque

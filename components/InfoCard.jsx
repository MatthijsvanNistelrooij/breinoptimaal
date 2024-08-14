import React from "react"
import { shield } from "../public/assets/icons"
import Image from "next/image"

const InfoCard = ({ title, transformOrigin, transform, bgColor }) => {
  return (
    <div
      className="absolute -top-2 left-0 w-[478px] h-[120px] bg-[#DFF6E4] rounded-3xl ml-14 mt-28 "
      style={{ transform: transform, transformOrigin: transformOrigin, backgroundColor: bgColor }}
    >
      <div className="flex flex-row p-8">
        <div className="flex items-center justify-center border-2 border-green-800 rounded-xl min-w-[60px] min-h-[30px] bg-green-50">
          <Image src={shield} alt="shield" height={30} width={30} />
        </div>
        <div className="flex flex-col text-start min-w-[300px]">
          <h1 className="text-[#15803D] ml-8 mt-2">{title}</h1>
        </div>
      </div>
    </div>
  )
}

export default InfoCard

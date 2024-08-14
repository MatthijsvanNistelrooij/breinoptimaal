import React from "react"
import { check_green } from "../public/assets/icons"
import Image from "next/image"

const VerifiedCard = () => {
  return (
    <div className="bg-[white] p-10 rounded-4xl min-w-[478px] h-[200px] flex flex-col gap-4 extend-left">
      <div className="flex flex-row mt-1">
        <div className="">
          <Image src={check_green} alt="check_green" className="mr-5" />
        </div>
        <div className="flex-1 w-full lg:min-w-[300px] ">
          <p className="text-[#4F6783] tracking-wider flex flex-row">
            <span className="text-[#006CEB] font-extrabold tracking-normal mr-1">
              Snel en gemakkelijk
            </span>
            online bestellen
          </p>
        </div>
      </div>

      <div className="flex flex-row p-0">
        <div className="">
          <Image src={check_green} alt="check_green" className="mr-5" />
        </div>
        <div className="flex-1 w-full lg:min-w-[300px] ">
          <p className="text-[#4F6783] tracking-wider flex flex-row">
            Je weet zelf bro, is gewoon
            <span className="text-[#006CEB] font-extrabold tracking-normal ml-1">
              beste kwalli.
            </span>
          </p>
        </div>
      </div>
      <div className="flex flex-row p-0">
        <div className="">
          <Image src={check_green} alt="check_green" className="mr-5" />
        </div>
        <div className="flex-1 w-full lg:min-w-[300px] ">
          <p className="text-[#4F6783] tracking-wider flex flex-row">
            Vandaag besteld,
            <span className="text-[#006CEB] font-extrabold ml-1">
              Morgen in huis.
            </span>
          </p>
        </div>
      </div>
    </div>
  )
}

export default VerifiedCard

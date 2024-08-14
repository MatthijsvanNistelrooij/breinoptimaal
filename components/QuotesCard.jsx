import React from "react"
import CustomButton from "./shared/CustomButton"
import Image from "next/image"
import { stock } from "../public/assets/images"
import { arrow_right_blue } from "../public/assets/icons"

const QuotesCard = ({ title, wordsToHighlight }) => {
  const styledTitle = title.split(new RegExp(`(${wordsToHighlight})`, "gi"))
  const highlightColor = "#006CEB"

  return (
    <div className="bg-[#1E285F] rounded-custom w-full lg:w-[450px] h-[673px] p-12 pt-5">
      <div className="border-2 border-[#006CEB] text-[#BAE6FD] px-4 mb-8 font-bold text-xl block w-[245px] tracking-wide mt-14 ml-5">
        Keuze van de week
      </div>
      <h1 className="text-5xl font-semibold text-[white] leading-tight max-w-[500px] ml-2">
        "
        {styledTitle.map((part, index) =>
          part.toLowerCase() === wordsToHighlight.toLowerCase() ? (
            <span key={index} style={{ color: highlightColor }}>
              {part}
            </span>
          ) : (
            part
          )
        )}
        "
      </h1>
      <h2 className="text-[#FFFFFF] text-xl tracking-widest mt-6 ml-2">
        Snel en gemakkelijk online bestellen. Snel en gemakkelijk
      </h2>
      <div className="flex flex-row p-10 mt-3">
        <div>
          <Image
            src={stock}
            alt="profile"
            width={60}
            height={60}
            className="rounded-full"
          />
        </div>
        <div className="flex flex-col ml-5">
          <p className="text-white"> Alicia Sanders</p>
          <h2 className="text-white">Student</h2>
        </div>
      </div>
      <a
        className="flex flex-row text-[#BAE6FD] text-xl mt-5 tracking-wider ml-5"
        href="/"
      >
        Lees de review
        <span className="mt-1.5 ml-2">
          <Image src={arrow_right_blue} alt="arrow_right_blue" />
        </span>
      </a>
    </div>
  )
}

export default QuotesCard

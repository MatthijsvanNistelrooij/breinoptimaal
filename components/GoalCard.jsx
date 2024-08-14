import Image from "next/image"
import React from "react"
import { arrow_right, focus_icon } from "../public/assets/icons"
import CustomButton from "./shared/CustomButton"

const GoalCard = ({
  title,
  btnColor,
  bgColor,
  borderColor,
  goal,
  icon,
  index,
}) => {
  const offset = -160
  const top = index * offset
  const left = index * offset
  const zIndex = 4 - index

  const wordToHighlight = "alles"
  const styledTitle = title.split(new RegExp(`(${wordToHighlight})`, "gi"))
  const highlightColor = "#0369A1"

  return (
    <div
      className="absolute rounded-4xl p-12"
      style={{
        backgroundColor: bgColor,
        top: `${top}px`,
        zIndex: zIndex,
        width: "821px",
        height: "491px",
      }}
    >
      <div className="flex flex-col p-1">
        <div className="flex flex-row">
          <button
            style={{
              backgroundColor: btnColor,
              borderColor: borderColor,
              color: borderColor,
            }}
            className="flex items-center border-3 rounded-2xl text-4xl font-quicksand font-semibold p-4 gap-4"
          >
            <Image src={icon} alt="icon" className="m-2 mx-4" />
            {goal}
          </button>
          <h1 className="text-6xl font-poppins font-bold text-[#1E285F] ml-4 mt-4 tracking-wide">
            als doel?
          </h1>
        </div>

        <h1 className="text-6xl font-poppins font-bold text-[#1E285F] tracking-wide leading-relaxed mt-5">
          {styledTitle.map((part, index) =>
            part.toLowerCase() === wordToHighlight.toLowerCase() ? (
              <span key={index} style={{ color: highlightColor }}>
                {part}
              </span>
            ) : (
              part
            )
          )}
        </h1>
      </div>
      <div className="flex flex-row gap-6 mt-5">
        <CustomButton
          title={"Shop Sterk"}
          bgColor={"#1E285F"}
          icon={arrow_right}
          textColor={"white"}
        />
        <CustomButton
          title={"Meer Bekijken"}
          bgColor={"#1E285F"}
          icon={arrow_right}
          textColor={"white"}
        />
      </div>
    </div>
  )
}

export default GoalCard

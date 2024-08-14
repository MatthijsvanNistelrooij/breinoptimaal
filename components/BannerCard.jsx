import React from "react"
import CustomButton from "./shared/CustomButton"
import { arrow_right_circle } from "../public/assets/icons"

const BannerCard = ({
  title,
  bgColor,
  textColor,
  btnColor,
  btnIcon,
  btnBgColor,
  btnTitle,
}) => {
  return (
    <div
      className="min-w-[478px] h-[229px] p-10 rounded-4xl flex flex-col gap-4 pt-12 "
      style={{ backgroundColor: bgColor, color: textColor }}
    >
      <h2 className="font-bold text-3xl leading-tight mb-3 max-w-[300px]">
        {title}
      </h2>
      <CustomButton
        icon={btnIcon}
        title={btnTitle}
        bgColor={btnBgColor}
        textColor={btnColor}
      />
    </div>
  )
}

export default BannerCard

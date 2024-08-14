import Image from "next/image"

const CustomButton = ({ bgColor, textColor, title, icon }) => {
  return (
    <button
      style={{ backgroundColor: bgColor, color: textColor }}
      className="rounded-2xl font-semibold text-xl p-3 w-auto md:w-[230px]"
    >
      {title}
      <Image src={icon} alt="arrow_right" className="ml-3 inline-block" />
    </button>
  )
}

export default CustomButton

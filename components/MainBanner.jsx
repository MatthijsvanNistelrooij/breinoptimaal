import React from "react"
import CustomButton from "./shared/CustomButton"
import Image from "next/image"
import {
  arrow_right,
  arrow_right_circle,
  check_green,
  shopping_bag,
} from "../public/assets/icons"
import { product_package } from "../public/assets/images"
import InfoCard from "./BannerCard"
import VerifiedCard from "../components/VerifiedCard"

const MainBanner = ({ title, wordsToHighlight }) => {
  const styledTitle = title.split(new RegExp(`(${wordsToHighlight})`, "gi"))
  const highlightColor = "#006CEB"

  return (
    <section className="p-0 mx-auto mid-container">

      <div className="flex flex-col lg:flex-row mt-12 gap-10">
        <div className="h-[700px] bg-white rounded-4xl p-12 flex-1 md:flex-[1.4] ">
          <div className="p-5 pt-3 relative">
            <h1 className="text-[#1E285F] text-6xl font-semibold font-poppins leading-tight max-w-[450px]">
              {styledTitle.map((part, index) =>
                part.toLowerCase() === wordsToHighlight.toLowerCase() ? (
                  <span key={index} style={{ color: highlightColor }}>
                    {part}
                  </span>
                ) : (
                  part
                )
              )}
            </h1>
          </div>

          <div className="md:min-w-[647px] h-[290px] bg-[#CBE7F6] rounded-4xl p-8 flex flex-row mt-14 relative">
            <div className="flex flex-col flex-1 leading-loose relative">
              <h1 className="font-semibold text-[#1E285F] text-3xl">
                Lion's Mane
              </h1>
              <h2 className="text-[#4F6783] mt-2 tracking-wide text-sm leading-loose">
                Tinktuur, 30ml. Genoeg <br /> voor 30 dagen gebruik
              </h2>
              <h2 className="text-[#006CEB] font-bold text-3xl p-3 pl-0">
                35,-
              </h2>
              <CustomButton
                title={"In winkelmand"}
                bgColor={"#006CEB"}
                textColor={"white"}
                icon={shopping_bag}
              />
            </div>
            <div>
              <Image
                src={product_package}
                alt="product_package"
                className="absolute bottom-20 -right-12 md:bottom-0 md:right-5 "
              />
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-5 flex-1 md:flex-[1.1] p-10 lg:p-0">
          <InfoCard
            title={"Weet je al wat je wilt"}
            bgColor={"#006CEB"}
            textColor={"white"}
            btnBgColor={"white"}
            btnIcon={arrow_right}
            btnColor={"#006CEB"}
            btnTitle={"Naar de shop"}
          />
          <InfoCard
            title={"Meer weten over onze producten?"}
            bgColor={"#FED7AA"}
            textColor={"#1E285F"}
            btnBgColor={"#1E285F"}
            btnIcon={arrow_right}
            btnColor={"white"}
            btnTitle={"Meer bekijken"}
          />

          <VerifiedCard />
        </div>
      </div>
    </section>
  )
}

export default MainBanner

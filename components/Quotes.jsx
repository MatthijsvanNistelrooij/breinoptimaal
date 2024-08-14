import React from "react"
import QuotesCard from "./QuotesCard"
import VerifiedCard from "./VerifiedCard"
import CustomButton from "./shared/CustomButton"
import {
  arrow_right,
  arrow_right_circle,
  check_green,
  click_me,
} from "../public/assets/icons"
import Image from "next/image"

const Quotes = ({ title, wordsToHighlight }) => {
  const styledTitle = title.split(new RegExp(`(${wordsToHighlight})`, "gi"))
  const highlightColor = "#006CEB"

  return (
    <section className="max-container min-h-[700px] md:h-[100px] relative z-10 rounded-custom bg-[#f7f7f2] mt-14 p-10 lg:p-0">
      <div className="mid-container">
        <div className="flex flex-col lg:flex-row gap-16 p-4 lg:p-0 ">
          <div className="flex-1 w-full lg:max-w-[750px] bg-white p-16 rounded-custom lg:max-h-[700px]">
            <h1 className="text-6xl font-semibold text-[#1E285F] leading-tight w-full lg:max-w-[550px] ml-5">
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
            <div className="flex flex-col ml-5 gap-4 text-2xl tracking-wide mt-10">
              <div className="flex">
                <div className="mr-8 mt-1">
                  <Image src={check_green} alt="icon" />
                </div>
                Snel en gemakkelijk online bestellen
              </div>
              <div className="flex">
                <div className="mr-8 mt-1">
                  <Image src={check_green} alt="icon" />
                </div>
                Je weet zelf bro, is gewoon beste kwalli.
              </div>
              <div className="flex">
                <div className="mr-8 mt-1">
                  <Image src={check_green} alt="icon" />
                </div>
                Vandaag besteld, Morgen in huis.
              </div>
            </div>

            <div className="flex flex-row relative ml-5 mt-16">
              <div>
                <CustomButton
                  title={"Meer bekijken"}
                  textColor={"white"}
                  icon={arrow_right}
                  bgColor={"#006CEB"}
                />
              </div>
              <div className="lg:absolute -mt-32 right-0 rotate-45">
                <Image src={click_me} alt="icon" />
              </div>
            </div>
          </div>
          <div className="flex">
            <QuotesCard
              title={"Ik kon me eindelijk weer concentreren"}
              wordsToHighlight={""}
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Quotes

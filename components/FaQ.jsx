import Image from "next/image"
import React from "react"
import { arrow_right_blue } from "../public/assets/icons"
import Collapsible from "./Collapsible"

const FaQ = ({ title }) => {
  return (
    <section className="max-container h-auto border border-gray-100 relative z-10 rounded-custom bg-[#f7f7f2] -mt-12 p-10 lg:p-0 mb-10">
      <div className="mid-container flex flex-col items-center justify-center mt-40 text-center">
        <h1 className="text-6xl font-semibold text-[#1E285F] leading-tight mb-4">
          {title}
        </h1>
        <a
          className="text-[#006CEB] text-xl cursor-pointer font-bold flex items-center"
          href="/faq"
        >
          Alle faq bekijken
          <Image
            src={arrow_right_blue}
            alt="arrow_right_blue"
            width={30}
            height={15}
            className="ml-3"
          />
        </a>
      </div>
      <div className="bg-white mid-container rounded-custom mt-20 overflow-hidden min-h-[400px]">
        <Collapsible
          title={"Do you have a store"}
          descr={
            "Lorem ipsum dolor sit amet consectetur adipiscing elit semper dalar elementum."
          }
          fontSize={"3xl"}
          padding={"16"}
        />
        <Collapsible
          title={"Are these products vegan?"}
          descr={
            "Lorem ipsum dolor sit amet consectetur adipiscing elit semper dalar elementum."
          }
          fontSize={"3xl"}
          padding={"16"}
        />
        <Collapsible
          title={"Can it be used by kids?"}
          descr={
            "Lorem ipsum dolor sit amet consectetur adipiscing elit semper dalar elementum."
          }
          fontSize={"3xl"}
          padding={"16"}
        />
        <Collapsible
          title={"Do you ship outide of Europe?"}
          descr={
            "Lorem ipsum dolor sit amet consectetur adipiscing elit semper dalar elementum."
          }
          fontSize={"3xl"}
          padding={"16"}
        />
      </div>
    </section>
  )
}

export default FaQ

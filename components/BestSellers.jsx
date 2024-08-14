import React from "react"
import ProductCard from "./ProductCard"
import Image from "next/image"
import { arrow_right_blue } from "../public/assets/icons"

const BestSellers = ({ products, title, wordsToHighlight }) => {
  const styledTitle = title.split(new RegExp(`(${wordsToHighlight})`, "gi"))
  const highlightColor = "#006CEB"

  return (
    <section
      className="max-container h-[900px] relative z-10 
    rounded-custom bg-[#f7f7f2] -mt-10 p-10 lg:p-0 mb-32"
    >
      <div className="mid-container overflow-hidden">
        <h1 className="text-6xl font-semibold text-[#1E285F] leading-tight w-full mt-40">
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
        <div className="marquee">
          <div className="maylike-products-container track ">
            {products.map((item) => (
              <ProductCard key={item._id} product={item} />
            ))}
          </div>
        </div>
      </div>
      <div className="absolute -bottom-0 w-full h-[80px] bg-gradient-to-b from-[#f7f7f2] to-[#ffffff] rounded-custom p-10 lg:p-0">
        <div className="flex flex-row justify-end">
          <a
            className="text-[#006CEB] text-xl cursor-pointer font-bold flex mr-10"
            href="/products"
          >
            Naar shop
            <Image
              src={arrow_right_blue}
              alt="arrow_right_blue"
              width={30}
              height={15}
              className="ml-3"
            />
          </a>
        </div>
      </div>
    </section>
  )
}

export default BestSellers

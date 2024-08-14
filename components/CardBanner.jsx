import React from "react"
import { arrow_right_green, shield } from "../public/assets/icons"
import Image from "next/image"
import { ProductCard } from "./index"

const CardBanner = ({ products, title, wordsToHighlight }) => {
  const styledTitle = title.split(new RegExp(`(${wordsToHighlight})`, "gi"))
  const highlightColor = "#15803D"

  return (
    <section className="max-container rounded-custom min-h-[70vh] lg:min-h-[600px] mb-10 bg-gradient-green">
      <div className="mid-container">
        <h1 className="text-blue-900 text-6xl font-semibold ml-10 flex flex-row ">
          {styledTitle.map((part, index) =>
            part.toLowerCase() === wordsToHighlight.toLowerCase() ? (
              <div key={index} className="flex flex-row">
                <div className="ml-8 mt-2">
                  <Image src={shield} alt="icon" />
                </div>

                <span
                  key={index}
                  style={{ color: highlightColor }}
                  className="ml-2 flex flex-row"
                >
                  {part}
                </span>
              </div>
            ) : (
              part
            )
          )}
        </h1>

        <div className="flex flex-col lg:flex-row gap-12 p-10 justify-center mt-10 items-center">
          {products.map((item) => (
            <ProductCard key={item._id} product={item} />
          ))}
        </div>
        <div className="flex flex-row justify-end cursor-pointer z-0 text-[#15803D] font-semibold ">
          <a className="z-20 flex flex-row mr-4 mb-10" href="/products">
            Alle producten voor je gezondheid bekijken
            <Image
              src={arrow_right_green}
              alt="arrow_right_green"
              className="ml-3 mt-0.5 h-5"
            />
          </a>
        </div>
      </div>
    </section>
  )
}

export default CardBanner

import React from "react"
import { product_package, small_bottle } from "../public/assets/images"
import Image from "next/image"
import { productLinks } from "../constants"

const Categories = () => {
  return (
    <section className="bg-[#FFFFFF] -mt-40 p-8 min-h-[520px]">
      <div className="flex flex-row gap-4 mid-container pt-52">
        {productLinks.map((product, idx) => (
          <div key={idx} className="p-2 rounded-2xl hover:shadow-lg cursor-pointer">
            <div
              className="border-3 inline-flex items-center justify-center p-9 px-12 rounded-2xl h-[160px] w-[160px] hover:border-blue-200"
              style={{ backgroundColor: product.bgColor }}
            >
              <Image src={small_bottle} alt="product" />
            </div>
            <p className="m-3 text-[#1E285F] text-xl font-bold">
              {product.name}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Categories

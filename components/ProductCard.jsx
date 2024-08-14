import Image from "next/image"
import React from "react"
import { capsule_bottle } from "../public/assets/images"
import { like, plus, shopping_bag } from "../public/assets/icons"
import Link from "next/link"

const ProductCard = ({ product: { image, name, slug, price }, onAdd }) => {
  return (
    <Link
      href={`/product/${slug.current}`}
      className="group rounded-3xl p-10 bg-white relative hover:bg-[#CBE7F6] shadow-lg min-w-[387px] w-[387px] cursor-pointer"
    >
      <Image src={like} alt="like" />
      <div className="relative bg-[#CBE7F6] rounded-2xl h-32 mt-40 group-hover:bg-[#2D679D] group-hover:h-72 group-hover:mt-0 flex items-center justify-center">
        <Image
          src={capsule_bottle}
          alt={"capsule_bottle"}
          className="w-40 h-auto absolute bottom-0"
        />
      </div>
      <div className="flex flex-row">
        <div className="flex flex-col flex-1">
          <h1 className="text-[#1E285F] text-2xl font-bold mt-2">
            {name}
          </h1>
          <p className="text-[#006CEB] font-bold mt-4">{price} ,-</p>
        </div>
        <div className="flex flex-col flex-1">
          <button
            className="mt-16 bg-[#006CEB] flex flex-row p-3 px-7 rounded-3xl w-28 gap-3 "
            onClick={() => onAdd(product, 1)}
          >
            <Image src={plus} alt="plus" className="mt-1" />
            <Image src={shopping_bag} alt="shopping_bag" />
          </button>
        </div>
      </div>
    </Link>
  )
}

export default ProductCard

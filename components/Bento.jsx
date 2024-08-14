import Image from "next/image"
import React from "react"
import {
  bento1,
  bento2,
  bento3,
  bento4,
  bento5,
  bento6,
} from "../public/assets/images"

const Bento = () => {
  return (
    <section className="max-container w-full h-full">
      <div className="flex flex-col lg:flex-row h-full w-full gap-4">
        <div className="flex flex-row gap-4 flex-1">
          <Image
            src={bento1}
            alt="bento1"
            className="flex-1 object-cover h-full"
          />
          <div className="flex flex-col gap-4 flex-1">
            <Image
              src={bento4}
              alt="bento4"
              className="flex-1 object-cover w-full"
            />
            <Image
              src={bento5}
              alt="bento5"
              className="flex-1 object-cover w-full"
            />
          </div>
        </div>
        <div className="flex flex-row gap-4 flex-1">
          <div className="flex flex-col gap-4 flex-1">
            <Image
              src={bento2}
              alt="bento2"
              className="flex-1 object-cover w-full"
            />
            <Image
              src={bento3}
              alt="bento3"
              className="flex-1 object-cover w-full"
            />
          </div>
          <Image
            src={bento6}
            alt="bento6"
            className="flex-1 object-cover h-full w-full"
          />
        </div>
      </div>
    </section>
  )
}

export default Bento

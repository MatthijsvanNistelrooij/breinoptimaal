"use client"
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react"
import Image from "next/image"
import { chevron_down, chevron_up } from "../public/assets/icons"

const Collapsible = ({ title, descr, fontSize, padding }) => {
  const fontSizeClass = `text-${fontSize}`
  const paddingClass = `p-${padding}`

  return (
    <Disclosure>
      {({ open }) => (
        <>
          <Disclosure.Button
            className={`w-full text-start  ${
              open ? "bg-[#F5FBFF] " : "bg-white"
            } transition-colors duration-300`}
          >
            <div
              className={`flex flex-row justify-between items-center ${paddingClass}`}
            >
              <h1 className={`font-bold text-[#1E285F] ${fontSizeClass}`}>
                {title}
              </h1>
              <div>
                <Image
                  src={open ? chevron_down : chevron_up}
                  alt="Chevron Icon"
                  className="mt-1"
                />
              </div>
            </div>
          </Disclosure.Button>
          <Disclosure.Panel className="text-gray-500 bg-[#F5FBFF] p-1">
            <h1 className="text-2xl max-w-[750px] p-14 pt-0">{descr}</h1>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  )
}

export default Collapsible

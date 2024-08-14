import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react"
import { AiOutlinePlus } from "react-icons/ai"

const OatsCollapsible = ({ title, info }) => {
  return (
    <Disclosure>
      {({ open }) => (
        <div className="border-b border-gray-300">
          <Disclosure.Button className="flex justify-between items-center w-full px-4 py-6 text-left text-[#6B6D76]  hover:text-gray-900 font-inter">
            <span className="text-xl">{title}</span>
            <span className="ml-2">
              {open ? "-" : <AiOutlinePlus />}
            </span>
          </Disclosure.Button>
          <Disclosure.Panel className="px-20 py-8 text-gray-500">
            <p>{info}</p>
          </Disclosure.Panel>
        </div>
      )}
    </Disclosure>
  )
}

export default OatsCollapsible

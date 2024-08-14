"use client"

import Link from "next/link"
import { AiOutlineShoppingCart } from "react-icons/ai"

import { useStateContext } from "../../context/StateContext"
import { vector, shopbutton } from "../../public/assets/images"

import { navLinks } from "../../constants"
import { Menu } from "@headlessui/react"

import Image from "next/image"
import Cart from "../Cart"

import { ChevronDown } from "lucide-react"

const Navbar = () => {
  const { showCart, setShowCart, totalQuantities } = useStateContext()

  return (
    <header className="w-full p-6 bg-white rounded-b-custom z-10 h-[116px] max-container">
      <nav className="flex justify-between items-center mid-container">
        <Link href="/" className="ml-0">
          <Image src={vector} width={160} height={80} alt="logo" />
        </Link>

        <div className="flex justify-end gap-3">
          <div className="flex flex-row mt-4">
            {navLinks.map((link, idx) => (
              <div key={idx}>
                <a
                  href={link.path}
                  className="flex items-center space-x-2 px-4 py-2 rounded-md hover:bg-gray-300  ml-4"
                >
                  {link.name}
                </a>
              </div>
            ))}
          </div>
          <div>
            <Menu as="div" className="relative inline-block text-left">
              <div>
                <Menu.Button className="flex items-center space-x-2 px-4 py-2 rounded-md hover:bg-gray-300 mt-4 ml-2">
                  <span>Producten</span>
                  <ChevronDown className="w-5 h-5" />
                </Menu.Button>
              </div>
              <Menu.Items className="absolute right-0 w-48 mt-2 bg-white border border-gray-200 rounded-md shadow-lg">
                <Menu.Item>
                  {({ active, idx }) => (
                    <a
                      href="#"
                      key={idx}
                      className={`block px-4 py-2 ${active ? "bg-gray-100" : "text-gray-700"}`}
                    >
                      Option 1
                    </a>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => (
                    <a
                      href="#"
                      className={`block px-4 py-2 ${active ? "bg-gray-100" : "text-gray-700"}`}
                    >
                      Option 2
                    </a>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => (
                    <a
                      href="#"
                      className={`block px-4 py-2 ${active ? "bg-gray-100" : "text-gray-700"}`}
                    >
                      Option 3
                    </a>
                  )}
                </Menu.Item>
              </Menu.Items>
            </Menu>
          </div>
          <button
            type="button"
            className="border-2 border-blue-500 rounded-3xl p-5 relative text-blue-600 text-3xl hover:scale-105 h-[72px]"
            onClick={() => setShowCart(true)}
          >
            <AiOutlineShoppingCart />
            <span className="bg-orange-400 text-white rounded-lg absolute -top-2 right-2 text-sm p-0.5 px-3">
              {totalQuantities}
            </span>
          </button>
          <Image
            src={shopbutton}
            alt="shop_button"
            className="-ml-1 hover:scale-105 cursor-pointer ease-in-out"
            width={175}
            height={100}
          />
        </div>

        {showCart && <Cart />}
      </nav>
    </header>
  )
}

export default Navbar

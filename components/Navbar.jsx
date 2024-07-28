"use client"
import React from "react"
import Link from "next/link"
import {
  AiFillCaretDown,
  AiFillShopping,
  AiOutlineShopping,
  AiOutlineShoppingCart,
} from "react-icons/ai"

import { Cart } from "."
import { useStateContext } from "../context/StateContext"
import { vector } from "../public/assets/images"
import Image from "next/image"

const Navbar = () => {
  const { showCart, setShowCart, totalQuantities } = useStateContext()

  return (
    <nav className="navbar-container">
      <p className="logo">
        <Link href="/">
          <Image src={vector} width={163} height={65} alt="logo" />
        </Link>
      </p>
      <div className="nav-container">
        <div className="nav-links">
          <span className="nav-link">Over</span>
          <span className="nav-link">FaQ</span>
          <span className="nav-link-bold">Contact</span>
          <span className="nav-link">Producten</span>
        </div>
        <button
          type="button"
          className="cart-icon"
          onClick={() => setShowCart(true)}
        >
          <AiOutlineShoppingCart />
          <span className="cart-item-qty">{totalQuantities}</span>
        </button>
      </div>

      {showCart && <Cart />}
    </nav>
  )
}

export default Navbar

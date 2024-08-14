"use client"
import React, { useState, useEffect } from "react"
import { AiFillStar, AiOutlineCheck, AiOutlinePlusSquare } from "react-icons/ai"

import { useStateContext } from "../../../../context/StateContext"
import { client, urlFor } from "../../../../sanity/lib/client"
import { circle, circle_check_icon } from "../../../../public/assets/icons"
import Image from "next/image"
import { info, oats } from "../../../../public/assets/images"
import AddButton from "../../../../components/AddButton"
import Bento from "../../../../components/Bento"
import OatsCollapsible from "../../../../components/OatsCollapsible"
import Oats from "../../../../components/Oats"

import { oats_info, flavors } from "../../../../constants"

const fetchProductAndRelated = async (slug) => {
  try {
    const productQuery = `*[_type == "product" && slug.current == $slug][0]`
    const productsQuery = '*[_type == "product"]'

    const product = await client.fetch(productQuery, { slug })
    const products = await client.fetch(productsQuery)

    return { product, products }
  } catch (error) {
    console.error("Error fetching product data:", error)
    return { product: null, products: [] }
  }
}

const ProductDetails = ({ params }) => {
  const [products, setProducts] = useState([])
  const [product, setProduct] = useState(null)
  const { slug } = params

  const [index, setIndex] = useState(0)

  const { decQty, incQty, qty, onAdd, setShowCart, cartItems } =
    useStateContext()

  useEffect(() => {
    const fetchData = async () => {
      const { product: fetchedProduct, products: fetchedProducts } =
        await fetchProductAndRelated(slug)

      setProduct(fetchedProduct)
      setProducts(fetchedProducts)
    }

    fetchData()
  }, [slug])

  const { image, name, details, details2, details3, price } = product || {}
  const images = products.flatMap((prod) => prod.image)

  const handleBuyNow = () => {
    onAdd(product, qty)

    setShowCart(true)
  }

  return (
    <>
      <section className="max-container mt-40">
        <div className="flex flex-col md:flex-row gap-20 p-4 lg:p-0">
          <div className="flex flex-col lg:flex-row gap-4">
            <div className="">
              {image && image[index] && (
                <img
                  src={urlFor(image[index]).url()}
                  className="lg:min-w-[500px] lg:min-h-[500px]"
                  alt={name || "Product Image"}
                />
              )}
            </div>
            <div className="flex flex-col gap-4">
              <Image src={oats} alt="image" className="w-full" />
              <Image src={info} alt="image" className="w-full" />
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <div className="flex flex-col lg:flex-row gap-4 items-start">
              <div className="bg-transparent flex flex-col justify-center items-start p-4 py-0 ">
                <h2 className="text-4xl font-bold mb-4">{name}</h2>
                <div className="flex gap-1">
                  <div className="">
                    <AiFillStar />
                  </div>
                  <p className="text-sm mb-3">
                    4.7 (<a href="/">882 reviews</a>)
                  </p>
                </div>
                <p className="flex text-sm mb-2 mt-2 gap-2">
                  <AiOutlineCheck className="check-icon" />
                  {details}
                </p>
                <p className="flex text-sm mb-2 gap-2">
                  <AiOutlineCheck className="check-icon" />
                  {details2}
                </p>
                <p className="flex text-sm mb-4 gap-2">
                  <AiOutlineCheck className="check-icon" />
                  {details3}
                </p>
              </div>
            </div>
            <div className="flex flex-row border h-[60px] border-gray-300 rounded-md mb-4">
              <div className="h-[20px] p-6">
                <Image src={circle} width={12} height={12} alt="circle" />
              </div>
              <div className="flex flex-col p-1">
                <p className="font-bold text-xl">1KG - €{price}</p>
                <p className="text-gray-400">14 porties (€1.35/portie)</p>
              </div>
            </div>
            {flavors.map((flavor, idx) => {
              return (
                <AddButton
                  key={idx}
                  flavor={flavor.icon.src}
                  name={flavor.name}
                  params={params}
                  onAdd={onAdd}
                  product={product}
                  qty={qty}
                />
              )
            })}
            <div className="flex flex-row mt-10 mb-20">
              <Image
                className="mr-2"
                src={circle_check_icon}
                width={25}
                height={25}
                alt="icon"
              />
              <div>Vandaag besteld = Morgen in huis</div>
            </div>
          </div>
        </div>
      </section>

      <Oats />

      <Bento />

      <section className="mid-container p-32">
        {oats_info.map((info, idx) => {
          return (
            <OatsCollapsible title={info.title} info={info.info} key={idx} />
          )
        })}
      </section>
    </>
  )
}

export default ProductDetails

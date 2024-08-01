"use client"
import React, { useState, useEffect } from "react"
import {
  AiOutlineMinus,
  AiOutlinePlus,
  AiFillStar,
  AiOutlineCheck,
  AiOutlinePlusSquare,
  AiFillPlusCircle,
  AiFillMinusCircle,
} from "react-icons/ai"

import { useStateContext } from "../../../../context/StateContext"
import { Product } from "../../../../components"
import { client, urlFor } from "../../../../sanity/lib/client"
import { circle, circle_check_icon } from "../../../../public/assets/icons"
import Image from "next/image"
import {
  bento1,
  bento2,
  bento3,
  bento4,
  bento5,
  bento6,
  choco,
  aardbei,
  appelkaneel,
  vanille,
  pumpkinspice,
  speculaas,
  banaankaneel,
  info,
  oats,
  no_image,
} from "../../../../public/assets/images"

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
    <div className="product-container-main">
      <div className="product-detail-container">
        <div className="info-container">
          <div className="image-container">
            {image && image[index] ? (
              <img
                src={urlFor(image[index]).url()}
                className="product-detail-image"
                alt={name || "Product Image"}
              />
            ) : (
              <div className="shadow-div">
                <Image src={no_image} alt="img" width={450} height={450} />
              </div>
            )}
            <div className="smaller-image-container">
              <div className="small-image">
                <Image src={oats} alt="img" />
              </div>
              <div className="small-image">
                <Image src={info} alt="img" />
              </div>
            </div>
          </div>
        </div>

        <div className="product-detail-desc">
          <h1 className="product-name">{name}</h1>
          <div className="reviews">
            <div className="star-icon">
              <AiFillStar />
            </div>
            <p>
              4.7 (<a href="/">882 reviews</a>)
            </p>
          </div>
          <div className="details-container">
            <div className="details">
              <AiOutlineCheck className="check-icon" />
              {details}
            </div>
            <div className="details">
              <AiOutlineCheck className="check-icon" />
              {details2}
            </div>
            <div className="details">
              <AiOutlineCheck className="check-icon" />
              {details3}
            </div>
          </div>
          <div className="price">
            <div className="circle">
              <Image src={circle} width={12} height={12} alt="circle" />
            </div>
            <div className="price-info">
              <p>1KG - €{price}</p>
              <p className="price-subtitle">14 porties (€1.35/portie)</p>
            </div>
          </div>

          <div className="quantity">
            <h3>Aantal:</h3>
            <p className="quantity-desc">
              <span className="minus" onClick={decQty}>
                <AiOutlineMinus />
              </span>
              <span className="num">{qty}</span>
              <span className="plus" onClick={incQty}>
                <AiOutlinePlus />
              </span>
            </p>
          </div>

          <div className="buttons">
            <div className="button-container">
              <button
                type="button"
                className="add-to-cart"
                onClick={() => onAdd(product, qty)}
              >
                <div className="button-content">
                  <div className="left-section">
                    <Image src={choco} alt="add" />
                    <span className="button-label">Choco</span>
                  </div>
                  <div className="right-section">
                    <span className="button-action">Voeg toe</span>
                    <i className="button-icon">
                      <AiOutlinePlusSquare />
                    </i>
                  </div>
                </div>
              </button>
              <button
                type="button"
                className="add-to-cart"
                onClick={() => onAdd(product, qty)}
              >
                <div className="button-content">
                  <div className="left-section">
                    <Image src={appelkaneel} alt="add" />
                    <span className="button-label">Appel Kaneel</span>
                  </div>
                  <div className="right-section">
                    <span className="button-action">Voeg toe</span>
                    <i className="button-icon">
                      <AiOutlinePlusSquare />
                    </i>
                  </div>
                </div>
              </button>
              <button
                type="button"
                className="add-to-cart"
                onClick={() => onAdd(product, qty)}
              >
                <div className="button-content">
                  <div className="left-section">
                    <Image src={speculaas} alt="add" />
                    <span className="button-label">Speculaas</span>
                  </div>
                  <div className="right-section">
                    <span className="button-action">Voeg toe</span>
                    <i className="button-icon">
                      <AiOutlinePlusSquare />
                    </i>
                  </div>
                </div>
              </button>
              <button
                type="button"
                className="add-to-cart"
                onClick={() => onAdd(product, qty)}
              >
                <div className="button-content">
                  <div className="left-section">
                    <Image src={banaankaneel} alt="add" />
                    <span className="button-label">Banaan Kaneel</span>
                  </div>
                  <div className="right-section">
                    <span className="button-action">Voeg toe</span>
                    <i className="button-icon">
                      <AiOutlinePlusSquare />
                    </i>
                  </div>
                </div>
              </button>
              <button
                type="button"
                className="add-to-cart"
                onClick={() => onAdd(product, qty)}
              >
                <div className="button-content">
                  <div className="left-section">
                    <Image src={pumpkinspice} alt="add" />
                    <span className="button-label">Pumpkin Spice</span>
                  </div>
                  <div className="right-section">
                    <span className="button-action">Voeg toe</span>
                    <i className="button-icon">
                      <AiOutlinePlusSquare />
                    </i>
                  </div>
                </div>
              </button>
              <button
                type="button"
                className="add-to-cart"
                onClick={() => onAdd(product, qty)}
              >
                <div className="button-content">
                  <div className="left-section">
                    <Image src={vanille} alt="add" />
                    <span className="button-label">Vanille</span>
                  </div>
                  <div className="right-section">
                    <span className="button-action">Voeg toe</span>
                    <i className="button-icon">
                      <AiOutlinePlusSquare />
                    </i>
                  </div>
                </div>
              </button>
              <button
                type="button"
                className="add-to-cart"
                onClick={() => onAdd(product, qty)}
              >
                <div className="button-content">
                  <div className="left-section">
                    <Image src={aardbei} alt="add" />
                    <span className="button-label">Aardbei</span>
                  </div>
                  <div className="right-section">
                    <span className="button-action">Voeg toe</span>
                    <i className="button-icon">
                      <AiOutlinePlusSquare />
                    </i>
                  </div>
                </div>
              </button>
            </div>
          </div>
          <div>
            <div className="delivery">
              <Image
                className="circle_check_icon"
                src={circle_check_icon}
                width={25}
                height={25}
                alt="icon"
              />
              <div>Vandaag besteld = Morgen in huis</div>
            </div>
          </div>
        </div>
      </div>

      <hr
        style={{
          border: "none",
          borderTop: "2px solid #ccc",
          margin: "25px 0",
          opacity: 0.7,
        }}
      />
      <div className="maylike-products-wrapper">
        <div className="info-section">
          <div className="narrow">
            <p className="info-head-text">Eiwit Oats</p>
          </div>
          <div className="wide">
            Door tijdsgebrek is het voor velen van ons een uitdaging een
            voedzaam ontbijt klaar te maken. Upfront Eiwit Oats biedt de
            oplossing. Havervlokken, wei-eiwitten, zaden, pitten, een beetje
            suiker en specerijen, de Upfront eiwit oats bevatten alleen
            ingrediënten die je wel kent. Door deze te mengen met heet water heb
            je direct een compleet ontbijt met een geweldige smaak.
            Tienduizenden van jullie bouwen inmiddels iedere ochtend op de
            Upfront oats. Voeg je liever zelf nog fruit & noten toe? Kies dan
            voor de basis variant.
          </div>
        </div>
        <div className="bento-container">
          <div className="bento-grid">
            <Image src={bento1} alt="bento1" className="image1" />
            <Image src={bento2} alt="bento2" className="image2" />
            <Image src={bento3} alt="bento3" className="image3" />
            <Image src={bento4} alt="bento4" className="image4" />
            <Image src={bento5} alt="bento5" className="image5" />
            <Image src={bento6} alt="bento6" className="image6" />
          </div>
        </div>

        <div className="faq-section">
          <div className="faq-line">
            <h3 className="faq">Waarom de Upfront Oats?</h3>
            <div className="faq-icon">
              <AiOutlinePlus />
            </div>
          </div>
          <hr />
          <div className="faq-line">
            <h3 className="faq">Hoe bereid ik de Upfront Oats?</h3>
            <div className="faq-icon">
              <AiOutlinePlus />
            </div>
          </div>
          <hr />
          <div className="faq-line">
            <h3 className="faq">
              Waarom hebben jullie suiker toegevoegd aan de oats?
            </h3>
            <div className="faq-icon">
              <AiOutlinePlus />
            </div>
          </div>
          <hr />
          <div className="faq-line">
            <h3 className="faq">Allergenen</h3>
            <div className="faq-icon">
              <AiOutlinePlus />
            </div>
          </div>
          <hr />
          <div className="faq-line">
            <h3 className="faq">Wat kost het ons om te maken?</h3>
            <div className="faq-icon">
              <AiOutlinePlus />
            </div>
          </div>
        </div>

        <h2>Anderen kochten ook: </h2>
        <div className="marquee">
          <div className="maylike-products-container track">
            {products.map((item) => (
              <Product key={item._id} product={item} />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductDetails

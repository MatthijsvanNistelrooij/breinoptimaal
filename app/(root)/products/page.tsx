"use client"
import { useEffect, useState } from "react"
import Banner from "../../../components/Banner"

import SmallProductCard from "../../../components/Categories"
import ProductCard from "../../../components/ProductCard"
import { client } from "../../../sanity/lib/client"
import Convinced from "../../../components/Convinced"
import Categories from "../../../components/Categories"
import { useStateContext } from "../../../context/StateContext"

const Products = () => {
  const [products, setProducts] = useState([])
  const [bannerData, setBannerData] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      const query = '*[_type == "product"]'
      const products = await client.fetch(query)
      setProducts(products)

      const bannerQuery = '*[_type == "banner"]'
      const bannerData = await client.fetch(bannerQuery)
      setBannerData(bannerData)
    }

    fetchData()
  }, [])

  const {  onAdd } =
    useStateContext()

  return (
    <section className="max-container">
      <Categories />
      <div className="flex flex-row gap-10 items-center mid-container mt-20">
        {products.map((item) => (
          <ProductCard key={item._id} product={item} onAdd={onAdd} />
        ))}
      </div>
      <div className="flex flex-row gap-10 items-center mid-container mt-20">
        {products.map((item) => (
          <ProductCard key={item._id} product={item} onAdd={onAdd} />
        ))}
      </div>
      <Banner
        bgColor={"#FED7AA"}
        title={"Lions's Mane tabletten"}
        subTitle={
          "Krachtiger dan ooit tevoren. Win je Focus en concentratievermogen terug met deze Lion’s mane."
        }
      />
      <div className="flex flex-row gap-10 items-center mid-container mb-20 ">
        {products.map((item) => (
          <ProductCard key={item._id} product={item} onAdd={onAdd} />
        ))}
      </div>
      <Convinced
        title={"Overtuigd?"}
        subTitle={
          "Lorem ipsum dolor sit amet consectetur adipis cingelit semper dalar elementum."
        }
      />
    </section>
  )
}

export default Products

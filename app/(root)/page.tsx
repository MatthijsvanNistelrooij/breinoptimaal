import React, { useEffect } from "react"
import { Product } from "../../components"
import { client } from "../../sanity/lib/client"
import { useStateContext } from "../../context/StateContext"

const Home = async () => {
  const query = '*[_type == "product"]'
  const products = await client.fetch(query)
  const bannerQuery = '*[_type == "banner"]'
  const bannerData = await client.fetch(bannerQuery)

  return (
    <>
      <div className="products-heading">
        <h2>Best Verkocht</h2>
        <p></p>
      </div>
      <div className="products-container">
        {products?.map((product: any) => (
          <Product key={product._id} product={product} />
        ))}
      </div>
    </>
  )
}

export default Home

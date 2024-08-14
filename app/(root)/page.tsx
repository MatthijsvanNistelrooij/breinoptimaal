"use client"
import { client } from "../../sanity/lib/client"
import { useEffect, useState } from "react"
import {
  FAQ,
  Convinced,
  BgImage2,
  InfoSection,
  Banner,
  MainBanner,
  SubBanner,
  CardBanner,
  Marque,
  Goals,
  Quotes,
  BestSellers,
} from "../../components/index"

const Home = () => {
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

  return (
    <>
      <MainBanner
        title={"De #1 plek om lion's mane te kopen."}
        wordsToHighlight={"lion's mane"}
      />
      <SubBanner
        title={"Laten we samen kijken wat je kan doen met je lichaam!"}
        wordsToHighlight={"wat je kan doen"}
      />
      <Banner
        bgColor={"#DFF6E4"}
        title={"Lion's Mane tabletten"}
        subTitle={
          "Krachtiger dan ooit tevoren. Win je Focus en concentratievermogen terug met deze Lion's mane."
        }
      />
      <CardBanner
        products={products}
        title={"Alles voor jouw gezondheid"}
        wordsToHighlight={"gezondheid"}
      />
      <InfoSection
        title={"Wij werken met doelen zodat je niet hoeft te zoeken."}
        wordsToHighlight={"niet hoeft te zoeken"}
      />
      <Marque />
      <Quotes
        title={"3x Waarom je kiest voor breinoptimaal."}
        wordsToHighlight={"breinoptimaal"}
      />
      <Convinced
        title={"Overtuigd?"}
        subTitle={
          "Lorem ipsum dolor sit amet consectetur adipis cingelit semper dalar elementum."
        }
      />
      <BgImage2
        title={"Ben jij al klaar voor jouw nieuwe jij?"}
        button={true}
      />
      <BestSellers
        products={products}
        title={"Onze Bestsellers"}
        wordsToHighlight={"Bestsellers"}
      />
      <Goals />
      <BgImage2
        title={"Ben jij al klaar voor jouw nieuwe jij?"}
        button={true}
      />
      <FAQ title={"Veelgestelde vragen"} />
      <BestSellers
        products={products}
        title={"Onze Bestsellers"}
        wordsToHighlight={"Bestsellers"}
      />

      <Convinced
        title={"Overtuigd?"}
        subTitle={
          "Lorem ipsum dolor sit amet consectetur adipis cingelit semper dalar elementum."
        }
      />
    </>
  )
}

export default Home

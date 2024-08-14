import BgImage from "../../../components/BgImage"

import Convinced from "../../../components/Convinced"
import InfoSection from "../../../components/InfoSection"
import Hero from "../../../components/Hero"

const About = () => {
  return (
    <section className="max-container">
      <BgImage title={"Over ons"} />
      <Hero
        title={
          "Laten we samen kijken wat je kan doen met je lichaam! Laten we samen kijken wat je kan doen met je lichaam!"
        }
        wordsToHighlight={"wat je kan doen"}
      />
      <InfoSection
        title={"Wij werken met doelen zodat je niet hoeft te zoeken."}
        wordsToHighlight={"niet hoeft te zoeken"}
      />
      <Convinced
        title={"Overtuigd?"}
        subTitle={
          "Lorem ipsum dolor sit amet consectetur adipis cingelit semper dalar elementum."
        }
      />
    </section>
  )
}

export default About

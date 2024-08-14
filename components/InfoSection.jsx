import { arrow_right_blue, shield } from "../public/assets/icons"
import Image from "next/image"
import InfoCard from "./InfoCard"

const InfoSection = ({ title, wordsToHighlight }) => {
  const styledTitle = title.split(new RegExp(`(${wordsToHighlight})`, "gi"))
  const highlightColor = "#006CEB"

  return (
    <section className="mid-container mb-10">
      <div className="flex flex-col lg:flex-row p-4 lg:p-8 min-h-[600px] lg:min-h-[200px]">
        <div className="flex-1 p-4">
          <h1 className="text-5xl font-semibold text-[#1E285F] leading-tight w-full lg:max-w-[500px]">
            {styledTitle.map((part, index) =>
              part.toLowerCase() === wordsToHighlight.toLowerCase() ? (
                <span key={index} style={{ color: highlightColor }}>
                  {part}
                </span>
              ) : (
                part
              )
            )}
          </h1>
          <a
            className="flex flex-row text-[#006CEB] text-xl mt-8 font-semibold"
            href="/"
          >
            Bekijk alle doelen
            <span className="mt-1.5 ml-2">
              <Image src={arrow_right_blue} alt="arrow_right_blue" />
            </span>
          </a>
        </div>
        <div className="flex-1 relative mt-5">
          <InfoCard
            bgColor={"#FED7AA"}
            title="Wordt gezond en vitaal met de producten met een groen label!"
            transformOrigin="0 0"
            transform="translateY(-40px) rotate(-6deg)"
          />
          <InfoCard
            bgColor={"#F2D4D4"}
            title="Wordt gezond en vitaal met de producten met een groen label!"
            transformOrigin="0 0"
            transform="translateY(-40px) rotate(-4deg)"
          />
          <InfoCard
            bgColor={"#BAE6FD"}
            title="Wordt gezond en vitaal met de producten met een groen label!"
            transformOrigin="0 0"
            transform="translateY(-40px) rotate(-2deg)"
          />
          <InfoCard
            bgColor={"#DFF6E4"}
            title="Wordt gezond en vitaal met de producten met een groen label!"
            transformOrigin="0 0"
            transform="translateY(-40px) rotate(-0deg)"
          />
        </div>
      </div>
    </section>
  )
}

export default InfoSection

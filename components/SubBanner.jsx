import Image from "next/image"
import { arrow_right_blue, click_me, star_shine } from "../public/assets/icons"

const SubBanner = ({ title, wordsToHighlight }) => {
  const styledTitle = title.split(new RegExp(`(${wordsToHighlight})`, "gi"))
  const highlightColor = "#006CEB"

  return (
    <section className="mid-container p-5 mt-48">
      <Image
        src={star_shine}
        alt="star_shine"
        className="relative bottom-4 left-4"
      />
      <div className="flex flex-col lg:flex-row gap-4 p-4 lg:p-0">
        <div className="flex-1 w-full lg:min-w-[300px] p-4">
          <h1 className="text-6xl font-semibold text-[#1E285F] leading-tight">
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
        </div>
        <div className="flex-1 w-full min-w-[300px]">
          <div className="flex flex-row">
            <div className="flex-2 text-[#9795B5] text-xl tracking-wider min-w-[500px] p-10">
              Lorem ipsum dolor sit amet consectetur adipiscing elit semper
              dalar elementum. Lorem ipsum dolor sit amet consectetur adipiscing
              elit semper dalar elementum.
            </div>
            <Image
              src={click_me}
              alt="click_me"
              className="flex-1 -ml-40 -mt-40"
            />
          </div>
          <div className="flex flex-row">
            <a
              className="text-[#006CEB] text-xl cursor-pointer font-bold flex ml-10"
              href="/products"
            >
              Naar shop
              <Image
                src={arrow_right_blue}
                alt="arrow_right_blue"
                width={30}
                height={15}
                className="ml-3"
              />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SubBanner

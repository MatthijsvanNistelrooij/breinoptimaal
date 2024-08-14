import Image from "next/image"
import { background } from "../public/assets/images"
import { arrow_right_blue, star_shine_white } from "../public/assets/icons"
import CustomButton from "./shared/CustomButton"

const BgImage2 = ({ title, button }) => {
  return (
    <>
      <section className="max-container">
        <div className="relative w-full mx-auto overflow-hidden h-[700px] -mt-40">
          <Image
            src={background}
            alt="banner_image"
            className="absolute top-12 inset-0 z-0"
          />

          <div className="relative p-1 flex items-center">
            <div className="flex flex-col ml-20 absolute top-80 mt-8 gap-2">
              <div className="flex flex-row">
                <Image
                  src={star_shine_white}
                  alt="star"
                  className="ml-10 mr-4"
                  style={{ width: "auto", height: "4rem" }}
                />
                <h1 className="text-white text-6xl font-semibold mt-1 max-w-[732px] tracking-wider leading-tight">
                  {title}
                </h1>
              </div>

              {button && (
                <div className="ml-28">
                  <CustomButton
                    icon={arrow_right_blue}
                    title={"Meer bekijken"}
                    bgColor={"white"}
                    textColor={"#006CEB"}
                  />
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default BgImage2

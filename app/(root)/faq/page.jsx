import React from "react"
import BgImage from "../../../components/BgImage"
import Convinced from "../../../components/Convinced"
import Collapsible from "../../../components/Collapsible"
import Image from "next/image"
import {
  creditcard_icon,
  info_icon,
  parcel_icon,
} from "../../../public/assets/icons"

const Faq = () => {
  return (
    <section className="max-container">
      <BgImage title={"Veelgestelde vragen"} />
      <section className="p-4 relative -top-48 bg-[#f7f7f2] rounded-custom max-container px-40 pt-40 min-h-[50vh]">
        <div className="flex flex-col lg:flex-row gap-28 p-4 lg:p-0">
          <div className="flex-1 w-full lg:min-w-[300px]">
            <div className="flex items-center ml-8">
              <Image src={parcel_icon} alt="icon" className="mr-2" />
              <h1 className="text-[#1E285F] text-4xl font-bold p-5">
                Shipping
              </h1>
            </div>
            <div className="rounded-3xl overflow-hidden">
              <Collapsible
                title={"Do you have a store?"}
                descr={
                  "Lorem ipsum dolor sit amet consectetur adipiscing elit semper dalar elementum."
                }
                fontSize="2xl"
                padding="10"
              />
              <Collapsible
                title={"Are these products vegan?"}
                descr={
                  "Lorem ipsum dolor sit amet consectetur adipiscing elit semper dalar elementum."
                }
                fontSize="2xl"
                padding="10"
              />
              <Collapsible
                title={"Canit be used by kids?"}
                descr={
                  "Lorem ipsum dolor sit amet consectetur adipiscing elit semper dalar elementum."
                }
                fontSize="2xl"
                padding="10"
              />
              <Collapsible
                title={"Do you ship outside of Europe?"}
                descr={
                  "Lorem ipsum dolor sit amet consectetur adipiscing elit semper dalar elementum."
                }
                fontSize="2xl"
                padding="10"
              />
              <Collapsible
                title={"Canit be used by kids?"}
                descr={
                  "Lorem ipsum dolor sit amet consectetur adipiscing elit semper dalar elementum."
                }
                fontSize="2xl"
                padding="10"
              />
              <Collapsible
                title={"What if my order didnt arrive?"}
                descr={
                  "Lorem ipsum dolor sit amet consectetur adipiscing elit semper dalar elementum."
                }
                fontSize="2xl"
                padding="10"
              />
            </div>
            <div className="flex-1 w-full lg:min-w-[300px] mt-10">
              <div className="flex items-center ml-8">
                <Image src={info_icon} alt="icon" className="mr-2" />
                <h1 className="text-[#1E285F] text-4xl font-bold p-5">
                  Information
                </h1>
              </div>
              <div className="rounded-3xl overflow-hidden">
                <Collapsible
                  title={"Do you have a store"}
                  descr={
                    "Lorem ipsum dolor sit amet consectetur adipiscing elit semper dalar elementum."
                  }
                  fontSize="2xl"
                  padding="10"
                />
                <Collapsible
                  title={"Are these products vegan"}
                  descr={
                    "Lorem ipsum dolor sit amet consectetur adipiscing elit semper dalar elementum."
                  }
                  fontSize="2xl"
                  padding="10"
                />
              </div>
            </div>
          </div>
          <div className="flex-1 w-full lg:min-w-[300px]">
            <div className="flex items-center ml-8">
              <Image src={creditcard_icon} alt="icon" className="mr-2" />
              <h1 className="text-[#1E285F] text-4xl font-bold p-5">Payment</h1>
            </div>
            <div className="rounded-3xl overflow-hidden">
              <Collapsible
                title={"Do you have a store?"}
                descr={
                  "Lorem ipsum dolor sit amet consectetur adipiscing elit semper dalar elementum."
                }
                fontSize="2xl"
                padding="10"
              />
              <Collapsible
                title={"Are these products vegan?"}
                descr={
                  "Lorem ipsum dolor sit amet consectetur adipiscing elit semper dalar elementum."
                }
                fontSize="2xl"
                padding="10"
              />
              <Collapsible
                title={"Canit be used by kids?"}
                descr={
                  "Lorem ipsum dolor sit amet consectetur adipiscing elit semper dalar elementum."
                }
                fontSize="2xl"
                padding="10"
              />
              <Collapsible
                title={"Do you ship outside of Europe?"}
                descr={
                  "Lorem ipsum dolor sit amet consectetur adipiscing elit semper dalar elementum."
                }
                fontSize="2xl"
                padding="10"
              />
            </div>
            <div className="flex-1 w-full lg:min-w-[300px] p-4 mt-5">
              <div className="flex items-center ml-8">
                <Image src={info_icon} alt="icon" className="mr-2" />
                <h1 className="text-[#1E285F] text-4xl font-bold p-5">
                  Information
                </h1>
              </div>
              <div className="rounded-3xl overflow-hidden">
                <Collapsible
                  title={"Do you have a store?"}
                  descr={
                    "Lorem ipsum dolor sit amet consectetur adipiscing elit semper dalar elementum."
                  }
                  fontSize="2xl"
                  padding="10"
                />
                <Collapsible
                  title={"Are these products vegan?"}
                  descr={
                    "Lorem ipsum dolor sit amet consectetur adipiscing elit semper dalar elementum."
                  }
                  fontSize="2xl"
                  padding="10"
                />
                <Collapsible
                  title={"Canit be used by kids?"}
                  descr={
                    "Lorem ipsum dolor sit amet consectetur adipiscing elit semper dalar elementum."
                  }
                  fontSize="2xl"
                  padding="10"
                />
                <Collapsible
                  title={"Do you ship outside of Europe?"}
                  descr={
                    "Lorem ipsum dolor sit amet consectetur adipiscing elit semper dalar elementum."
                  }
                  fontSize="2xl"
                  padding="10"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <Convinced
        title={"Overtuigd?"}
        subTitle={
          "Lorem ipsum dolor sit amet consectetur adipis cingelit semper dalar elementum."
        }
      />
    </section>
  )
}

export default Faq

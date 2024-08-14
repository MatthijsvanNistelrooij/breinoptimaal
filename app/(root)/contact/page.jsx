import Image from "next/image"
import BgImage from "../../../components/BgImage"
import Convinced from "../../../components/Convinced"
import { contact_square, divider, elipse } from "../../../public/assets/images"
import CustomButton from "../../../components/shared/CustomButton"
import {
  arrow_right_circle,
  shipping_icon_group,
  whatsapp_icon_group,
} from "../../../public/assets/icons"

const Contact = () => {
  return (
    <section className="max-container">
      <BgImage title={"Contact"} />
      <section className="p-4 relative -top-48 bg-[#f7f7f2] rounded-custom max-container pt-20 ">
        <div className="mid-container">
          <h1 className="text-4xl font-bold mb-20 text-[#1E285F]">
            We helpen je graag
          </h1>
          <div className="bg-white min-h-[800px] rounded-4xl p-2 px-10 flex flex-row">
            <div className="flex flex-col lg:flex-row gap-4">
              <div className="flex-1 w-full ">
                <div className="relative text-white min-h-[600px] rounded-3xl flex-1">
                  <Image
                    src={contact_square}
                    alt="square"
                    layout="fill"
                    objectFit="cover"
                    className="absolute inset-0 z-0 rounded-3xl min-h-[680px]"
                  />
                  <Image
                    src={elipse}
                    alt="elipse"
                    className="absolute inset-0 z-1 mt-14"
                  />
                  <div className="relative z-10 p-5 flex flex-col gap-4 m-8">
                    <h2 className="font-quicksand text-xl max-w-[350px] mt-8">
                      Heeft u vragen? Bekijk onze veelgestelde vragen! Wellicht
                      vindt u daar uw antwoord.
                    </h2>

                    <CustomButton
                      title={"Naar FAQ"}
                      icon={arrow_right_circle}
                      bgColor={"white"}
                      textColor={"#006CEB"}
                    />
                    <h2 className="text-[#FFFFFF] mt-10 font-quicksand text-xl">
                      Heeft u geen antwoord kunnen vinden op uw vraag, en u wilt
                      nog steeds contact met ons opnemen? Vul het formulier in
                      en wij nemen zo snel mogelijk contact met u op.
                    </h2>
                    <h3 className="text-[#FFFFFF] font-quicksand">
                      U kunt binnen 2 werkdagen antwoord verwachten.
                    </h3>
                    <h2 className="text-xl text-[#FFFFFF] font-lighter max-w-[200px] mt-16">
                      Bereikbaar op werkdagen tussen 09:00 en 17:00
                    </h2>
                    <p className="font-bold text-3xl">020 21010 75</p>
                  </div>
                </div>
              </div>
              <div className="flex-1 w-full text-end">
                <div className="min-h-[660px]"></div>
                <CustomButton
                  title={"Verstuur"}
                  icon={arrow_right_circle}
                  bgColor={"#006CEB"}
                  textColor={"white"}
                />
              </div>
            </div>
          </div>
          <div className="bg-white rounded-4xl mt-10">
            <div className="flex flex-col lg:flex-row gap-4 p-4 lg:p-20 justify-evenly">
              <div className="flex flex-col items-center gap-5">
                <Image src={whatsapp_icon_group} alt="icon" />
                <h1 className="text-[#1E285F] text-2xl font-bold">Whatsapp</h1>
                <p className="text-[#0369A1] text-xl max-w-[200px] text-center ">
                  Ma - Vr tussen 09:00 en 17:00
                </p>
              </div>
              <div className="flex flex-col items-center gap-5">
                <Image src={divider} alt="icon" />
              </div>
              <div className="flex flex-col items-center gap-5">
                <Image src={shipping_icon_group} alt="icon" />
                <h1 className="text-[#1E285F] text-2xl font-bold">Post</h1>
                <p className="text-[#0369A1] text-xl max-w-[200px] text-center ">
                  herengracht 123 1037BR Amsterdam
                </p>
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

export default Contact

import React from "react"
import { AiFillStar, AiOutlineCheck } from "react-icons/ai"

const TopNav = () => {
  return (
    <section className=" bg-[#BBF7D0] py-2 relative z-10">
      <div className="text-[#15803D] flex flex-row text-lg max-container justify-between">
        <div className="mr-2 flex flex-row">
          <div className="mt-1 mr-2">
            <AiOutlineCheck />
          </div>
          Snel en gemakkelijk online bestellen
        </div>

        <div className="text-[#15803D] flex flex-row text-lg">
          <div className="mt-1 mr-2">
            <AiOutlineCheck />
          </div>
          Vandaag besteld, morgen in huis
        </div>
        <div className="text-[#15803D] flex flex-row text-lg">
          <div className="flex flex-row mt-1 mr-4">
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
          </div>
          4,7/5 Trustpilot
        </div>
      </div>
    </section>
  )
}

export default TopNav

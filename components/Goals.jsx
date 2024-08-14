import React from "react"
import GoalCard from "./GoalCard"
import {
  focus_icon,
  smile_icon,
  health_icon,
  strength_icon,
} from "../public/assets/icons"

const Goals = () => {
  return (
    <section className="max-container relative z-10 rounded-custom bg-[#f7f7f2] mt-40">
      <div className="mid-container">
        <div className="flex flex-col lg:flex-row gap-4 p-4 lg:p-0">
          <div className="flex-shrink-0 p-10 lgg:p-0">
            <h1 className="text-5xl mt-5 font-bold text-[#1E285F]">Doelen</h1>
            <p className="font-sans text-2xl mt-5 text-[#4F3E35] w-[400px]">
              Breinoptimaal draagt bij aan je doelen. Welk doel kies jij?
            </p>
          </div>
          <div className="flex-1 w-full ml-10">
            <div className="relative w-[821px] h-[700px] mt-100">
              <GoalCard
                title={"We vertellen je er alles over."}
                btnColor={"#DFF6E4"}
                bgColor={"#DFF6E4"}
                borderColor={"#15803D"}
                goal={"GEZOND"}
                icon={health_icon}
                index={3}
              />
              <GoalCard
                title={"We vertellen je er alles over."}
                btnColor={"#FECACA"}
                bgColor={"#F2D4D4"}
                borderColor={"#B91C1C"}
                goal={"STERK"}
                icon={strength_icon}
                index={2}
              />
              <GoalCard
                title={"We vertellen je er alles over."}
                btnColor={"#F2DDC1"}
                bgColor={"#F2DDC1"}
                borderColor={"#EA580C"}
                goal={"BLIJ"}
                icon={smile_icon}
                index={1}
              />
              <GoalCard
                title={"We vertellen je er alles over."}
                btnColor={"#BAE6FD"}
                bgColor={"#CBE7F6"}
                borderColor={"#0369A1"}
                goal={"GEFOCUST"}
                icon={focus_icon}
                index={0}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Goals

import React from "react";
import { MdOutlineQuestionMark } from "react-icons/md";
import { IoBusOutline } from "react-icons/io5";
import { CiHeadphones } from "react-icons/ci";
import { LuLandmark } from "react-icons/lu";
import { CiMobile2 } from "react-icons/ci";
import { CiCloudSun } from "react-icons/ci";
import { LuFerrisWheel } from "react-icons/lu";

const Features = () => {
  return (
    <div id="feature">
      <div className="flex flex-col mx-auto xl:max-w-screen-2xl md:flex-row px-0 xl:px-28">
        <div class="p-6 md:w-[50%]">
          <a href="#">
            <h5 class="mb-2 text-[28px] md:text-[45px] text-center md:text-left font-bold tracking-tight text-primary">
              Why Book a San Francisco Bus Tour?
            </h5>
          </a>
          <p class="mb-6 font-light text-text-light text-center md:text-left text-[16px] md:text-[20px]">
            Our San Francisco bus tours offer the perfect introduction to this
            colourful city and the best photo opportunities of iconic landmarks
            from the top deck.
          </p>
          <div  className="text-text-dark font-semibold text-[16px] md:text-[20px] border p-4 rounded-lg">
            Hop on and discover your destination, then hop off to explore more
            for as long as you like
          </div>
        </div>
        <div className="grid grid-cols-4 gap-2 md:w-[50%] p-4">
          <div className="flex flex-col items-center gap-2">
            <div className="relative border hover:border-primary rounded-lg p-4 h-max w-max">
              <IoBusOutline className="w-16 h-16 text-primary" />
              <MdOutlineQuestionMark className="absolute text-white rounded-full bottom-0 right-0 bg-accent-blue" />
            </div>
            <p class="mb-6 font-medium text-text-light text-center md:text-left text-[14px] md:text-[16px]">
              Open-top Buses
            </p>
          </div>
          <div className="flex flex-col items-center gap-2">
            <div className="relative border hover:border-primary rounded-lg p-4 h-max w-max">
              <CiHeadphones className="w-16 h-16 text-primary" />
              <MdOutlineQuestionMark className="absolute text-white rounded-full bottom-0 right-0 bg-accent-blue" />
            </div>
            <p class="mb-6 font-medium text-text-light text-center md:text-left text-[14px] md:text-[16px]">
              CiHeadphones
            </p>
          </div>{" "}
          <div className="flex flex-col items-center gap-2">
            <div className="relative border hover:border-primary rounded-lg p-4 h-max w-max">
              <CiMobile2 className="w-16 h-16 text-primary" />
              <MdOutlineQuestionMark className="absolute text-white rounded-full bottom-0 right-0 bg-accent-blue" />
            </div>
            <p class="mb-6 font-medium text-text-light text-center md:text-left text-[14px] md:text-[16px]">
              Free Mobile App
            </p>
          </div>
          <div className="flex flex-col items-center gap-2">
            <div className="relative border hover:border-primary rounded-lg p-4 h-max w-max">
              <LuLandmark className="w-16 h-16 text-primary" />
              <MdOutlineQuestionMark className="absolute text-white rounded-full bottom-0 right-0 bg-accent-blue" />
            </div>
            <p class="mb-6 font-medium text-text-light text-center md:text-left text-[14px] md:text-[16px]">
              See all the Top Landmarks
            </p>
          </div>
          <div className="flex flex-col items-center gap-2">
            <div className="relative border hover:border-primary rounded-lg p-4 h-max w-max">
              <CiCloudSun className="w-16 h-16 text-primary" />
              <MdOutlineQuestionMark className="absolute text-white rounded-full bottom-0 right-0 bg-accent-blue" />
            </div>
            <p class="mb-6 font-medium text-text-light text-center md:text-left text-[14px] md:text-[16px]">
              Day & Night Tours
            </p>
          </div>
          <div className="flex flex-col items-center gap-2">
            <div className="relative border hover:border-primary rounded-lg p-4 h-max w-max">
              <LuLandmark className="w-16 h-16 text-primary" />
              <MdOutlineQuestionMark className="absolute text-white rounded-full bottom-0 right-0 bg-accent-blue" />
            </div>
            <p class="mb-6 font-medium text-text-light text-center md:text-left text-[14px] md:text-[16px]">
              Private Hires
            </p>
          </div>
          <div className="flex flex-col items-center gap-2">
            <div className="relative border hover:border-primary rounded-lg p-4 h-max w-max">
              <LuFerrisWheel className="w-16 h-16 text-primary" />
              <MdOutlineQuestionMark className="absolute text-white rounded-full bottom-0 right-0 bg-accent-blue" />
            </div>
            <p class="mb-6 font-medium text-text-light text-center md:text-left text-[14px] md:text-[16px]">
              $5000 PRIZE GIVEAWAY
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;

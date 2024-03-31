import React from "react";
import BreadCrumb from "../components/BreadCrumb";
import { MdOutlineDateRange } from "react-icons/md";
import { FaRegClock } from "react-icons/fa";
import { GrLocation } from "react-icons/gr";
import Calender from "../components/Calender";

const Bookings = () => {
  return (
    <div className="mb-16 md:gap-6 mx-auto xl:max-w-screen-2xl px-4 xl:px-36 pt-8 md:pt-12">
      <BreadCrumb current="Bookings" />
      <div className="flex flex-col md:flex-row justify-between mt-8">
        <div className="md:w-[70%]">
          <h5 className="w-full mb-2 text-[26px] md:text-[20px] text-left font-bold tracking-tight text-text-light">
            Bookings
          </h5>
          <Calender />
        </div>
        <div className="md:w-[30%] shadow-md p-4 border">
          <h5 className="w-full mb-2 text-[26px] md:text-[20px] text-left font-bold tracking-tight text-text-light">
            Checkout
          </h5>
          <div className="mb-3">
            <p className="text-text-light mb-1">Selected Date:</p>
            <p className="inline-flex text-text-light items-center gap-2 font-bold">
              <MdOutlineDateRange className="w-6 h-6" />
              Wed, 1 May
            </p>
          </div>
          <div className="mb-3">
            <p className="text-text-light mb-1">Selected Time:</p>
            <p className="inline-flex text-text-light items-center gap-2 font-bold">
              <FaRegClock className="w-6 h-6" />
              12:00pm
            </p>
          </div>
          <hr className="mb-3" />
          <div className="mb-3">
            <p className="text-text-light mb-1">Selected Venue:</p>
            <p className="inline-flex text-text-light items-center gap-2 font-bold">
              <GrLocation className="w-6 h-6" />
              FERRY BUILDING
            </p>
          </div>
          <div className="mb-3">
            <p className="text-text-light mb-1">
              Number of people for photoshoot:
            </p>
            <p className="inline-flex text-text-light items-center gap-2 font-extralight">
              x 5 people
            </p>
          </div>
          <hr className="mb-3" />{" "}
          <div className="mb-3">
            <p className="flex justify-between text-text-light items-center gap-2 font-bold">
              Total <span>$79.00</span>
            </p>
          </div>
          <button className="mb-3 w-full font-semibold items-center px-8 py-4 text-sm  text-center border-2 shadow border-transparent text-primary bg-secondary rounded-lg hover:bg-white transition-all duration-150 hover:text-primary hover:border-primary">
            CHECKOUT
          </button>
        </div>
      </div>
    </div>
  );
};

export default Bookings;

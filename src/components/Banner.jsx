import React from "react";
import design from "../assets/img-1.jpg";
import ServiceAlert from "./ServiceAlert";

const Banner = () => {
  return (
    <div className="bg-dark-primary">
      <div className="mb-16 flex flex-col md:gap-6 mx-auto xl:max-w-screen-2xl md:flex-row px-4 xl:px-36 pt-12">
        <div className="py-6 px-6 md:px-0">
          <a href="/bookings">
            <h5 className="mb-2 text-[28px] md:text-[28px] xl:text-[45px] text-center md:text-left font-bold tracking-tight text-white">
              Photography Services for San Francisco Tourists
            </h5>
          </a>
          <p className="mb-6 font-normal text-white text-center md:text-left text-[16px] md:text-[20px] xl:text-[26px]">
            Experience San Francisco like never before with our tailored
            photography services.
          </p>
          <div className="mb-8 flex flex-col md:flex-row justify-start items-center">
            <a
              href="/bookings"
              className="w-max bg-secondary text-primary text-[14px] md:text-[16px] font-semibold items-center px-12 py-6 text-sm text-center rounded-md"
            >
              BOOK A SESSION
            </a>
            {/* <a
              href="#"
              className="bg-transparent  text-[16px] md:text-[18px] text-secondary font-medium items-center px-3 py-2 text-sm text-center rounded-md"
            >
              Adult tickets from <strong>US$63.00</strong>
            </a> */}
          </div>
          <ServiceAlert isMobile={false} />
        </div>
        <img
          className="-mb-8 rounded-xl sm:h-[] w-[80%] md:w-[400px] xl:w-[600px] object-cover mx-auto"
          src={design}
          alt="design"
        />
      </div>
    </div>
  );
};

export default Banner;

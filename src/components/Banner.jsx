import React from "react";
import design from "../assets/img-1.jpg";
import ServiceAlert from "./ServiceAlert";

const Banner = () => {
  return (
    <div className="bg-dark-red">
      <div className="flex flex-col mx-auto xl:max-w-screen-2xl md:flex-row px-0 xl:px-36 pt-12">
        <div class="p-6">
          <a href="#">
            <h5 class="mb-2 text-[28px] md:text-[45px] text-center md:text-left font-bold tracking-tight text-white">
              San Francisco Bus Tours
            </h5>
          </a>
          <p class="mb-6 font-normal text-white text-center md:text-left text-[16px] md:text-[26px]">
            Experience the best of San Francisco on a Hop-on, Hop-off San
            Francisco Big Bus Tour!
          </p>
          <div className="mb-8 flex flex-col md:flex-row justify-start items-center">
            <a
              href="#"
              class="w-max bg-secondary text-primary text-[14px] md:text-[16px] font-semibold items-center px-12 py-6 text-sm text-center rounded-md"
            >
              BUY TICKETS
            </a>
            <a
              href="#"
              class="bg-transparent  text-[16px] md:text-[18px] text-secondary font-medium items-center px-3 py-2 text-sm text-center rounded-md"
            >
              Adult tickets from <strong>US$63.00</strong>
            </a>
          </div>
          <ServiceAlert isMobile={false} />
        </div>
        <img
          className="-mb-8 rounded-md w-[80%] md:w-[400px] xl:w-full object-contain mx-auto"
          src={design}
          alt="design"
        />
      </div>
    </div>
  );
};

export default Banner;

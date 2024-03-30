import React from "react";
import { FaBell } from "react-icons/fa";
import { MdOutlineNavigateNext } from "react-icons/md";

const ServiceAlert = ({ isMobile }) => {
  return (
    <div className={`${!isMobile ? "hidden md:block " : "flex md:hidden justify-center mt-14"}`}>
      <a
        href="#"
        className={` inline-flex items-center gap-2 rounded-3xl bg-accent-blue border border-white md:border-transparent px-4 py-[1px] text-[14px] text-white`}
      >
        <FaBell className="w-4 h-4" />
        <strong>Service: </strong>tours operating daily!
        <MdOutlineNavigateNext className="w-8 h-8" />
      </a>
    </div>
  );
};

export default ServiceAlert;

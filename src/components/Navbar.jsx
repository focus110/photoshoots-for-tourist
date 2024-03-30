import React from "react";
import { IoMenu } from "react-icons/io5";
import { IoLocationSharp } from "react-icons/io5";

const Navbar = () => {
  return (
    <nav className="bg-primary border-gray-200 relative z-[2]">
      <div className="h-[67px] flex flex-wrap items-center justify-between max-w-screen-2xl mx-auto px-4 md:px-16">
        <IoMenu className="md:hidden h-8 w-8 text-white cursor-pointer" />

        <a href="#" className="flex items-center space-x-3 rtl:space-x-reverse">
          {/* <img src="" className="h-8" alt="Logo" /> */}
          <span className="self-center text-[14px] 3xl:text-[18px] font-semibold whitespace-nowrap text-white">
            BIGBUS SAN FRANCISCO
          </span>
        </a>

        <div
          id="mega-menu-icons"
          className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
        >
          <ul className="flex flex-col mt-4 font-medium md:flex-row md:mt-0 md:space-x-8 rtl:space-x-reverse">
            <li>
              <a
                href="#"
                className="block font-bold text-[14px] 3xl:text-[18px] text-white py-2 px-3 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:opacity-60 transition duration-150 md:p-0 "
                aria-current="page"
              >
                MANAGE MY BOOKING
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block font-bold text-[14px] 3xl:text-[18px] py-2 px-3 text-white border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:opacity-60 transition duration-150 md:p-0"
              >
                FIND A BUS STOP
              </a>
            </li>
            <li>
              <button
                id="mega-menu-icons-dropdown-button"
                data-dropdown-toggle="mega-menu-icons-dropdown"
                className="flex font-bold text-[14px] 3xl:text-[18px] items-center justify-between w-full py-2 px-3 text-white border-b border-gray-100 md:w-auto hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:opacity-60 transition-all duration-150 md:p-0"
              >
                ENGLISH / USD $
                <svg
                  className="w-2.5 h-2.5 ms-3"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 10 6"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="m1 1 4 4 4-4"
                  />
                </svg>
              </button>
              <div
                id="mega-menu-icons-dropdown"
                className="absolute z-10 grid hidden w-auto grid-cols-2 text-sm bg-white border border-gray-100 rounded-lg shadow-md dark:border-gray-700 md:grid-cols-3 dark:bg-gray-700"
              ></div>
            </li>
          </ul>
        </div>

        <IoLocationSharp className="md:hidden h-6 w-6 text-white cursor-pointer" />
      </div>
    </nav>
  );
};

export default Navbar;

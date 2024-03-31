import React from "react";

const Menu = ({ scrollToSection }) => {
  return (
    <nav class="hidden md:block bg-dark-red border-gray-200 shadow-xl relative z-[1]">
      <div class="flex flex-wrap items-center justify-between max-w-screen-2xl mx-auto p-3 px-4 md:px-16">
        <div></div>
        <div></div>
        <div class="flex items-center md:order-2 space-x-1 md:space-x-2 rtl:space-x-reverse">
          <a
            href="/bookings"
            class="text-primary text-[14px] 3xl:text-[18px] font-semibold bg-secondary transition-all duration-150 hover:bg-white rounded-lg text-sm px-4 py-2 md:px-5 md:py-2.5"
          >
            BOOK A SESSION
          </a>
        </div>
        <div
          id="mega-menu"
          class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
        >
          <ul class="flex flex-col mt-4 font-medium md:flex-row md:mt-0 md:space-x-8 rtl:space-x-reverse">
            <li>
              <button
                onClick={() => scrollToSection("venues")}
                class="block py-2 px-3 text-[14px] 3xl:text-[18px] font-bold text-white border-b border-dark-red transition-all duration-150 hover:border-white md:border-b md:p-0"
                aria-current="page"
              >
                PHOTOSHOOTS VENUES
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection("faqs")}
                class="block py-2 px-3 text-white text-[14px] 3xl:text-[18px] font-bold border-b border-dark-red transition-all duration-150 hover:border-white md:border-b md:p-0 "
              >
                FAQs
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection("footer")}
                class="block py-2 px-3 text-white text-[14px] 3xl:text-[18px] font-bold border-b border-dark-red transition-all duration-150 hover:border-white md:border-b md:p-0 "
              >
                CONTACT
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Menu;

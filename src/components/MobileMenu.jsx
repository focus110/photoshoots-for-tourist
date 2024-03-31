import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { IoMdClose } from "react-icons/io";

const MobileMenu = ({ isOpen, toggleMenu, menuRef, scrollToSection }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          ref={menuRef}
          className="absolute z-10 bg-primary shadow-xl w-[80%] h-screen"
          initial={{ x: "-100%", opacity: 0 }}
          animate={{ x: "0%", opacity: 1 }}
          exit={{ x: "-100%", opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          <div className="px-4 py-8 flex items-center justify-between">
            <a
              href="/"
              className="flex items-center space-x-3 rtl:space-x-reverse"
            >
              {/* <img src="" className="h-8" alt="Logo" /> */}
              <span className="self-center text-[14px] 3xl:text-[18px] font-semibold whitespace-nowrap text-white">
                TOURIST PHOTO SAN FRANCISCO
              </span>
            </a>{" "}
            <IoMdClose
              onClick={toggleMenu}
              className="md:hidden h-8 w-8 text-white cursor-pointer"
            />
          </div>{" "}
          <hr className="opacity-20" />
          <ul>
            <li className="p-4">
              <button
                onClick={() => {
                  toggleMenu();
                  scrollToSection("venues");
                }}
                className="block font-bold text-[14px] 3xl:text-[18px] py-2 px-3 text-white md:hover:opacity-60 transition duration-150"
              >
                PHOTOSHOOTS VENUES
              </button>
            </li>
            <hr className="opacity-20" />{" "}
            <li className="p-4">
              <button
                onClick={() => {
                  toggleMenu();
                  scrollToSection("faqs");
                }}
                className="block font-bold text-[14px] 3xl:text-[18px] py-2 px-3 text-white md:hover:opacity-60 transition duration-150"
              >
                FAQs
              </button>
            </li>
            <hr className="opacity-20" />{" "}
            <li className="p-4">
              <button
                onClick={() => {
                  toggleMenu();
                  scrollToSection("footer");
                }}
                className="block font-bold text-[14px] 3xl:text-[18px] py-2 px-3 text-white md:hover:opacity-60 transition duration-150"
              >
                CONTACT
              </button>
            </li>
            <hr className="opacity-20" />
          </ul>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default MobileMenu;

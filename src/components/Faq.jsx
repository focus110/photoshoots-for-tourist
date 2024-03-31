import React, { useState } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { motion, AnimatePresence } from "framer-motion";

const Faq = ({ title, description }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="py-5">
      <h3
        onClick={toggleOpen}
        className="flex items-center justify-between gap-2 cursor-pointer font-bold text-text-light text-left md:text-left text-[16px] md:text-[20px]"
      >
        <span> {title}</span>
        {isOpen ? (
          <IoIosArrowDown className="w-8 h-8 text-primary md:w-5 md:h-5 cursor-pointer" />
        ) : (
          <IoIosArrowUp className="w-8 h-8 text-primary md:w-5 md:h-5 cursor-pointer" />
        )}
      </h3>
      <AnimatePresence>
        {isOpen && (
          <motion.p
            initial={{ height: 0, opacity: 0 }}
            exit={{ height: 0, opacity: 0 }}
            animate={{ height: isOpen ? "auto" : 0, opacity: isOpen ? 1 : 0 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="max-w-screen-sm mb-6 font-light text-text-light text-left md:text-left text-[16px] md:text-[18px] mt-3"
          >
            {description}
          </motion.p>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Faq;

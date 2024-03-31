import React, { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
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
        class="flex items-center justify-between gap-2 cursor-pointer font-bold text-text-light text-left md:text-left text-[16px] md:text-[20px]"
      >
        <span> {title}</span>
        <IoIosArrowDown className="w-8 h-8 text-primary md:w-5 md:h-5 cursor-pointer" />
      </h3>
      <AnimatePresence>
        {isOpen && (
          <motion.p
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="max-w-screen-sm mb-6 font-light text-text-light text-left md:text-left text-[16px] md:text-[18px] mt-3"
          >
            {description}
          </motion.p>
        )}{" "}
      </AnimatePresence>
    </div>
  );
};

export default Faq;

import React from "react";
import { motion, AnimatePresence } from "framer-motion";

const MobileMenu = ({ isOpen, toggleMenu, menuRef }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          ref={menuRef}
          className="absolute z-10 bg-white w-[80%] h-screen"
          initial={{ x: "-100%", opacity: 0 }}
          animate={{ x: "0%", opacity: 1 }}
          exit={{ x: "-100%", opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          <ul>
            <li>Menu Item 1</li>
            <li>Menu Item 2</li>
            <li>Menu Item 3</li>
            {/* Add more menu items as needed */}
          </ul>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default MobileMenu;

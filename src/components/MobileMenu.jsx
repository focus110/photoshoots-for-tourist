import React from "react";
import { motion } from "framer-motion";

const MobileMenu = ({ isOpen, toggleMenu }) => {
  return (
    <div className="mobile-menu">
      <button className="menu-button" onClick={toggleMenu}>
        {isOpen ? "Close Menu" : "Open Menu"}
      </button>
      <motion.div
        className="menu-panel"
        initial={{ height: 0, opacity: 0 }}
        animate={{ height: isOpen ? "auto" : 0, opacity: isOpen ? 1 : 0 }}
        transition={{ duration: 0.3 }}
      >
        <ul>
          <li>Menu Item 1</li>
          <li>Menu Item 2</li>
          <li>Menu Item 3</li>
          {/* Add more menu items as needed */}
        </ul>
      </motion.div>
    </div>
  );
};

export default MobileMenu;

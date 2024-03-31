import "./App.css";
import Banner from "./components/Banner";
import Menu from "./components/Menu";
import Navbar from "./components/Navbar";
import ServiceAlert from "./components/ServiceAlert";
import Venues from "./components/Venues";
import Topbar from "./components/Topbar";
import Faqs from "./components/Faqs";
import Footer from "./components/Footer";
import { useEffect, useRef, useState } from "react";
import MobileMenu from "./components/MobileMenu";

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    section.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }

    return () => {
      document.body.classList.remove("no-scroll");
    };
  }, [isOpen]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  return (
    <div className="w-full">
      <MobileMenu
        scrollToSection={scrollToSection}
        isOpen={isOpen}
        toggleMenu={toggleMenu}
        menuRef={menuRef}
      />
      <Topbar />
      <Navbar toggleMenu={toggleMenu} />
      <Menu scrollToSection={scrollToSection} />
      <Banner />
      <ServiceAlert isMobile={true} />
      <Venues />
      <Faqs />
      <Footer scrollToSection={scrollToSection} />
    </div>
  );
}

export default App;

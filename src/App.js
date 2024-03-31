import "./App.css";
import Menu from "./components/Menu";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Topbar from "./components/Topbar";
import { useEffect, useRef, useState } from "react";
import MobileMenu from "./components/MobileMenu";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Bookings, Home, NoPage } from "./pages";

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section.scrollIntoView({ behavior: "smooth" }))
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
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="bookings" element={<Bookings />} />
          <Route path="*" element={<NoPage />} />
        </Routes>
      </BrowserRouter>
      <Footer scrollToSection={scrollToSection} />
    </div>
  );
}

export default App;

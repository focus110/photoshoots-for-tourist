import "./App.css";
import Banner from "./components/Banner";
import Menu from "./components/Menu";
import Navbar from "./components/Navbar";
import ServiceAlert from "./components/ServiceAlert";
import Venues from "./components/Venues";
import Topbar from "./components/Topbar";
import Faqs from "./components/Faqs";
import Footer from "./components/Footer";
import { useState } from "react";
import MobileMenu from "./components/MobileMenu";

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="w-full">
      <MobileMenu isOpen={isOpen} toggleMenu={toggleMenu} />
      <Topbar />
      <Navbar />
      <Menu />
      <Banner />
      <ServiceAlert isMobile={true} />
      <Venues />
      <Faqs />
      <Footer />
    </div>
  );
}

export default App;

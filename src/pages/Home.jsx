import React from "react";
import Banner from "../components/Banner";
import ServiceAlert from "../components/ServiceAlert";
import Venues from "../components/Venues";
import Faqs from "../components/Faqs";

const Home = ({ isMobile, scrollToSection }) => {
  return (
    <div>
      <Banner />
      <ServiceAlert isMobile={true} />
      <Venues />
      <Faqs />
    </div>
  );
};

export default Home;

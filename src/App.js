import "./App.css";
import Banner from "./components/Banner";
import ContentMenu from "./components/ContentMenu";
import Features from "./components/Features";
import Menu from "./components/Menu";
import Navbar from "./components/Navbar";
import ServiceAlert from "./components/ServiceAlert";
import Tickets from "./components/Tickets";
import Topbar from "./components/Topbar";

function App() {
  document.addEventListener("DOMContentLoaded", function () {
    const sections = document.querySelectorAll("section");

    sections.forEach((section) => {
      section.addEventListener("click", scrollToSection);
    });

    function scrollToSection() {
      const targetId = this.getAttribute("id");
      const targetSection = document.getElementById(targetId);

      // Scroll smoothly to the target section
      targetSection.scrollIntoView({
        behavior: "smooth",
      });
    }
  });
  return (
    <div className="w-full">
      <Topbar />
      <Navbar />
      <Menu />
      <Banner />
      <ServiceAlert isMobile={true} />
      <ContentMenu />
      <Features />
      <Tickets />
    </div>
  );
}

export default App;

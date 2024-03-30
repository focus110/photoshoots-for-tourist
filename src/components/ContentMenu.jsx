import React, { useState } from "react";

const ContentMenu = () => {
  const [isActive, setIsActive] = useState("FEATURES");

  document.addEventListener("DOMContentLoaded", function () {
    const sections = document.querySelectorAll("button");

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
    <div className="max-w-screen-xl flex justify-between md:justify-start gap-4 py-8 mx-auto px-4">
      <button
        id="features"
        type="button"
        class={`${
          isActive === "FEATURES"
            ? "bg-dark-red text-white"
            : "bg-accent-light text-primary hover:border-primary hover:bg-white"
        } font-semibold border-2 rounded-lg text-sm px-5 py-2.5 me-2 mb-2`}
      >
        FEATURES
      </button>
      <button
        type="button"
        class={`${
          isActive === "TICKETS"
            ? "bg-dark-red text-white"
            : "bg-accent-light text-primary hover:border-primary hover:bg-white"
        } font-semibold border-2 rounded-lg text-sm px-5 py-2.5 me-2 mb-2`}
      >
        TICKETS
      </button>
      <button
        type="button"
        class={`${
          isActive === "ROUTES"
            ? "bg-dark-red text-white"
            : "bg-accent-light text-primary hover:border-primary hover:bg-white"
        } font-semibold border-2 rounded-lg text-sm px-5 py-2.5 me-2 mb-2`}
      >
        ROUTES
      </button>
    </div>
  );
};

export default ContentMenu;

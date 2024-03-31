import React from "react";
import { AiFillInstagram } from "react-icons/ai";
import { IoIosCall } from "react-icons/io";
import { IoMail } from "react-icons/io5";

const Footer = ({ scrollToSection }) => {
  return (
    <footer id="footer" className="bg-primary">
      <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        <div className="md:flex md:justify-between">
          <div className="mb-8 md:mb-0">
            <a href="/" className="flex items-center mb-6">
              {/* <img
                src="#"
                className="h-8 me-3"
                alt="FlowBite Logo"
              /> */}
              <span className="self-center text-white text-xl font-semibold whitespace-nowrap">
                TOURIST PHOTO SAN FRANCISCO
              </span>
            </a>
            <ul className="text-white font-medium grid">
              <li className="inline-flex items-center gap-2 mb-4">
                <IoIosCall className="w-6 h-8" />
                <a href="#" className="hover:underline ">
                  +1 (555) 123-4567
                </a>
              </li>
              <li className="inline-flex items-center gap-2">
                <IoMail className="w-6 h-8" />
                <a href="#" className="hover:underline">
                  info@tourisphotosanfrancisco.com
                </a>
              </li>
            </ul>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
            <div>
              <h2 className="mb-6 text-sm font-semibold text-white uppercase">
                Quick Links
              </h2>
              <ul className="text-white font-medium">
                <li className="mb-4">
                  <button
                    onClick={() => scrollToSection("venues")}
                    className="hover:underline capitalize"
                  >
                    Photoshoot venues
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection("faqs")}
                    className="hover:underline"
                  >
                    FAQs
                  </button>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold text-white uppercase">
                Tourist Photoshoot
              </h2>
              <ul className="text-white font-medium">
                <li className="mb-4">
                  <a href="#" className="hover:underline ">
                    Private Hires
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Group Bookings
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold text-white uppercase">
                Legal
              </h2>
              <ul className="text-white font-medium">
                <li className="mb-4">
                  <a href="#" className="hover:underline">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Terms &amp; Conditions
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <hr className="my-6 opacity-15 sm:mx-auto lg:my-8" />
        <div className="sm:flex sm:items-center sm:justify-between">
          <span className="text-sm text-white sm:text-center">
            © 2023 . All Rights Reserved.
          </span>
          <div className="flex mt-4 sm:justify-center sm:mt-0">
            <a href="#" className="text-white hover:text-white">
              <svg
                className="w-4 h-4"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 8 19"
              >
                <path
                  fill-rule="evenodd"
                  d="M6.135 3H8V0H6.135a4.147 4.147 0 0 0-4.142 4.142V6H0v3h2v9.938h3V9h2.021l.592-3H5V3.591A.6.6 0 0 1 5.592 3h.543Z"
                  clip-rule="evenodd"
                />
              </svg>
              <span className="sr-only">Facebook page</span>
            </a>

            <a href="#" className="text-white hover:text-white ms-5">
              <svg
                className="w-4 h-4"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 17"
              >
                <path
                  fill-rule="evenodd"
                  d="M20 1.892a8.178 8.178 0 0 1-2.355.635 4.074 4.074 0 0 0 1.8-2.235 8.344 8.344 0 0 1-2.605.98A4.13 4.13 0 0 0 13.85 0a4.068 4.068 0 0 0-4.1 4.038 4 4 0 0 0 .105.919A11.705 11.705 0 0 1 1.4.734a4.006 4.006 0 0 0 1.268 5.392 4.165 4.165 0 0 1-1.859-.5v.05A4.057 4.057 0 0 0 4.1 9.635a4.19 4.19 0 0 1-1.856.07 4.108 4.108 0 0 0 3.831 2.807A8.36 8.36 0 0 1 0 14.184 11.732 11.732 0 0 0 6.291 16 11.502 11.502 0 0 0 17.964 4.5c0-.177 0-.35-.012-.523A8.143 8.143 0 0 0 20 1.892Z"
                  clip-rule="evenodd"
                />
              </svg>
              <span className="sr-only">Twitter page</span>
            </a>
            <a href="#" className="text-white hover:text-white ms-5">
              <AiFillInstagram className="w-4 h-4" />
              <span className="sr-only">Twitter page</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

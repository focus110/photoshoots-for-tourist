import React from "react";
import { FaCheckCircle } from "react-icons/fa";
import wharf from "../assets/Wharf.jpg";
import ferrybuilding from "../assets/ferrybuilding.jpg";
import golden_gate_bridge from "../assets/golden_gate_bridge.webp";

const Venues = () => {
  return (
    <div className="w-full flex flex-col mx-auto xl:max-w-screen-2xl px-0 xl:px-36 pb-12">
      <h5 className="w-full mb-2 text-[28px] md:text-[45px] text-center md:text-left font-bold tracking-tight text-primary">
        VENUES FOR PHOTOSHOOTS
      </h5>

      <p className="max-w-screen-sm mb-6 font-light text-text-light text-center md:text-left text-[16px] md:text-[20px]">
        We capture your journey through the city's iconic landmarks and hidden
        gems, preserving unforgettable memories for a lifetime.
      </p>

      <div className="mt-8 grid md:grid-cols-3 p-4 md:p-0 mx-auto gap-4">
        <div className=" bg-white border border-gray-200 rounded-lg shadow">
          <a href="#">
            <img
              className="rounded-t-lg object-cover w-full h-[260px]"
              src={wharf}
              alt=""
            />
          </a>
          <h4 className="font-semibold text-center bg-secondary p-4 text-white">
            FISHERMAN’S WHARF
          </h4>

          <div className="p-5 grid items-center bg-accent-light pb-8">
            <p className="text-text-light text-2xl font-bold text-center mb-2">
              $269,00
            </p>
            <a
              href="#"
              className="mb-3 w-full font-semibold items-center px-8 py-4 text-sm  text-center border-2 text-primary bg-secondary rounded-lg hover:bg-white transition-all duration-150 hover:text-primary hover:border-primary"
            >
              BOOK NOW
            </a>
            <div className="m-auto p-2 text-white rounded-lg bg-primary w-max mb-3">
              1 Hour Shoot
            </div>
            <p className="text-text-light font-semibold mb-2">
              What's included{" "}
            </p>
            <p className="mb-1 inline-flex items-start gap-2 text-text-light font-light">
              <FaCheckCircle className="w-4 h-4 text-accent-green rounded-full" />
              1 Hour Shoot
            </p>{" "}
            <p className="mb-1 inline-flex items-start gap-2 text-text-light font-light">
              <FaCheckCircle className="w-4 h-4 text-accent-green rounded-full" />
              20 Edited Photos
            </p>
          </div>
        </div>
        <div className=" bg-white border border-gray-200 rounded-lg shadow">
          <a href="#">
            <img
              className="rounded-t-lg object-cover w-full h-[260px]"
              src={ferrybuilding}
              alt=""
            />
          </a>
          <h4 className="font-semibold text-center bg-gray-500 p-4 text-white">
            FERRY BUILDING
          </h4>

          <div className="p-5 grid items-center bg-accent-light pb-8">
            <p className="text-text-light text-2xl font-bold text-center mb-2">
              $399,00
            </p>
            <a
              href="#"
              className="mb-3 w-full font-semibold items-center px-8 py-4 text-sm  text-center border-2 text-primary bg-secondary rounded-lg hover:bg-white transition-all duration-150 hover:text-primary hover:border-primary"
            >
              BOOK NOW
            </a>
            <div className="m-auto p-2 text-white rounded-lg bg-primary w-max mb-3">
              1 Hour Shoot
            </div>
            <p className="text-text-light font-semibold mb-2">
              What's included{" "}
            </p>
            <p className="mb-1 inline-flex items-start gap-2 text-text-light font-light">
              <FaCheckCircle className="w-4 h-4 text-accent-green rounded-full" />
              1 Hour Shoot
            </p>{" "}
            <p className="mb-1 inline-flex items-start gap-2 text-text-light font-light">
              <FaCheckCircle className="w-4 h-4 text-accent-green rounded-full" />
              20 Edited Photos
            </p>
          </div>
        </div>
        <div className=" bg-white border border-gray-200 rounded-lg shadow">
          <a href="#">
            <img
              className="rounded-t-lg object-cover w-full h-[260px]"
              src={golden_gate_bridge}
              alt=""
            />
          </a>
          <h4 className="font-semibold text-center bg-purple-500 p-4 text-white">
            GOLDEN GATE BRIDGE
          </h4>

          <div className="p-5 grid items-center bg-accent-light pb-8">
            <p className="text-text-light text-2xl font-bold text-center mb-2">
              $599,00
            </p>
            <a
              href="#"
              className="mb-3 w-full font-semibold items-center px-8 py-4 text-sm  text-center border-2 text-primary bg-secondary rounded-lg hover:bg-white transition-all duration-150 hover:text-primary hover:border-primary"
            >
              BOOK NOW
            </a>
            <div className="m-auto p-2 text-white rounded-lg bg-primary w-max mb-3">
              1 Hour Shoot
            </div>
            <p className="text-text-light font-semibold mb-2">
              What's included{" "}
            </p>
            <p className="mb-1 inline-flex items-start gap-2 text-text-light font-light">
              <FaCheckCircle className="w-4 h-4 text-accent-green rounded-full" />
              1 Hour Shoot
            </p>{" "}
            <p className="mb-1 inline-flex items-start gap-2 text-text-light font-light">
              <FaCheckCircle className="w-4 h-4 text-accent-green rounded-full" />
              20 Edited Photos
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Venues;

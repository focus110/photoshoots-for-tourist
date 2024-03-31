import React from "react";
import wharf from "../assets/Wharf.jpg";
import ferrybuilding from "../assets/ferrybuilding.jpg";
import golden_gate_bridge from "../assets/golden_gate_bridge.webp";
import Venue from "./Venue";

const Venues = () => {
  return (
    <div
      id="venues"
      className="w-full flex flex-col mx-auto xl:max-w-screen-2xl px-4 xl:px-36 pb-12"
    >
      <h5 className="w-full mb-2 text-[28px] md:text-[28px] xl:text-[45px] text-center md:text-left font-bold tracking-tight text-primary">
        VENUES FOR PHOTOSHOOTS
      </h5>

      <p className="max-w-screen-sm mb-6 font-light text-text-light text-center md:text-left text-[16px] md:text-[20px] xl:text-[26px]]">
        We capture your journey through the city's iconic landmarks and hidden
        gems, preserving unforgettable memories for a lifetime.
      </p>

      <div className="mt-8 grid md:grid-cols-3 p-4 md:p-0 mx-auto gap-4">
        <Venue
          img={wharf}
          title="FISHERMAN’S WHARF"
          price="$269,00"
          cta="BOOK NOW"
          hrOfShoot="1 Hour Shoot"
          editedPhotos="20 Edited Photos"
          url="/bookings"
        />
        <Venue
          img={ferrybuilding}
          title="FERRY BUILDING"
          price="$399,00"
          cta="BOOK NOW"
          hrOfShoot="1 Hour Shoot"
          editedPhotos="20 Edited Photos"
          url="/bookings"
        />
        <Venue
          img={golden_gate_bridge}
          title="GOLDEN GATE BRIDGE"
          price=" $599,00"
          cta="BOOK NOW"
          hrOfShoot="1 Hour Shoot"
          editedPhotos="20 Edited Photos"
          url="/bookings"
        />
      </div>
    </div>
  );
};

export default Venues;

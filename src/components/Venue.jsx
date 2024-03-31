import React from "react";
import { FaCheckCircle } from "react-icons/fa";

const Venue = ({ img, title, price, cta, hrOfShoot, editedPhotos, url }) => {
  return (
    <div className=" bg-white border border-gray-200 rounded-lg shadow">
      <a href={url}>
        <img
          className="rounded-t-lg object-cover w-full h-[260px]"
          src={img}
          alt=""
        />
      </a>
      <h4 className="font-semibold text-center bg-secondary p-4 text-white">
        {title}
      </h4>

      <div className="p-5 grid items-center bg-accent-light pb-8">
        <p className="text-text-light text-2xl font-bold text-center mb-2">
          {price}
        </p>
        <a
          href={url}
          className="mb-3 w-full font-semibold items-center px-8 py-4 text-sm  text-center border-2 text-primary bg-secondary rounded-lg hover:bg-white transition-all duration-150 hover:text-primary hover:border-primary"
        >
          {cta}
        </a>
        <div className="m-auto p-2 text-white rounded-lg bg-primary w-max mb-3">
          {hrOfShoot}
        </div>
        <p className="text-text-light font-semibold mb-2">What's included </p>
        <p className="mb-1 inline-flex items-start gap-2 text-text-light font-light">
          <FaCheckCircle className="w-4 h-4 text-accent-green rounded-full" />
          {hrOfShoot}
        </p>{" "}
        <p className="mb-1 inline-flex items-start gap-2 text-text-light font-light">
          <FaCheckCircle className="w-4 h-4 text-accent-green rounded-full" />
          {editedPhotos}
        </p>
      </div>
    </div>
  );
};

export default Venue;

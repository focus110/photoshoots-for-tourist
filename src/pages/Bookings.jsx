import React, { useState } from "react";
import BreadCrumb from "../components/BreadCrumb";
import { MdOutlineDateRange } from "react-icons/md";
import { FaRegClock } from "react-icons/fa";
import { GrLocation } from "react-icons/gr";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { format, addHours, setHours, setMinutes } from "date-fns";
import { calculatePrice } from "../util/cal";

const Bookings = () => {
  const [bookDate, setBookDate] = useState(
    setHours(setMinutes(new Date(), 0), 7)
  );
  const availabilityStartTime = addHours(new Date(), 5);
  const availabilityEndTime = addHours(new Date(), 16);
  const [price, setPrice] = useState(0);
  const [numberOfPeople, setNumberOfPeople] = useState(1);
  const [selectedVenue, setSelectedVenue] = useState("FISHERMAN’S WHARF");

  const handleDateChange = (date) => {
    const newDate = setHours(setMinutes(date, 0), 7);
    setBookDate(date);
    setPrice(calculatePrice(bookDate, numberOfPeople));
  };

  const handleNumberOfPeopleChange = (event) => {
    const newNumberOfPeople = parseInt(event.target.value, 10); // Parse the input value as an integer
    setNumberOfPeople(newNumberOfPeople);
    setPrice(calculatePrice(bookDate, numberOfPeople)); // Recalculate price when the number of people changes
  };

  const handleVenueSelect = (event) => {
    setSelectedVenue(event.target.value);
  };

  return (
    <div className="mb-16 md:gap-6 mx-auto xl:max-w-screen-2xl px-4 sm:px-8 xl:px-36 pt-8 md:pt-12">
      <BreadCrumb current="Bookings" />
      <div className=" flex flex-col md:flex-row justify-between mt-8">
        <div className=" md:w-[70%]">
          <h5 className="w-full mb-2 text-[26px] md:text-[20px] text-left font-bold tracking-tight text-text-light">
            Bookings
          </h5>

          <form className="max-w-[200px] mb-6">
            <div className="mb-6">
              <label className="block mb-2 text-sm font-medium text-text-light ">
                Number Of People
              </label>
              <input
                type="number"
                min="1"
                className="bg-gray-50 border border-gray-300 text-text-light text-sm rounded-lg block w-full p-2.5 "
                value={numberOfPeople}
                onChange={handleNumberOfPeopleChange}
              />
            </div>

            <div className="max-w-sm mx-auto">
              <label className="block mb-2 text-sm font-medium text-text-white">
                Select Venue
              </label>
              <select
                onChange={handleVenueSelect}
                className="bg-gray-50 border border-gray-300 text-text-light text-sm rounded-lg block w-full p-2.5 "
              >
                <option value="FISHERMAN’S WHARF">FISHERMAN’S WHARF</option>
                <option value="FERRY BUILDING">FERRY BUILDING</option>
                <option value="GOLDEN GATE BRIDGE">GOLDEN GATE BRIDGE</option>
              </select>
            </div>
          </form>

          <label className="block mb-2 text-sm font-medium text-text-light ">
            Select Date
          </label>
          <div className="w-[300px] flex flex-col items-center h-[360px]">
            <DatePicker
              selected={bookDate}
              showTimeSelect
              dateFormat="Pp"
              onChange={(date) => handleDateChange(date)}
              timeIntervals={60}
              minTime={availabilityStartTime}
              maxTime={availabilityEndTime}
              className="w-[300px] bg-gray-50 border border-gray-300 text-text-light text-sm rounded-lg block p-2.5 "
            />
          </div>
          {/* <Calender /> */}
        </div>
        <div className="md:w-[30%] shadow-md p-4 border">
          <h5 className="w-full mb-2 text-[26px] md:text-[20px] text-left font-bold tracking-tight text-text-light">
            Checkout
          </h5>
          <div className="mb-3">
            <p className="text-text-light mb-1">Selected Date:</p>
            <p className="inline-flex text-text-light items-center gap-2 font-bold">
              <MdOutlineDateRange className="w-6 h-6" />
              {format(bookDate, "E d MMM")}
            </p>
          </div>
          <div className="mb-3">
            <p className="text-text-light mb-1">Selected Time:</p>
            <p className="inline-flex text-text-light items-center gap-2 font-bold">
              <FaRegClock className="w-6 h-6" />
              {format(bookDate, "h:mm a")}
            </p>
          </div>
          <hr className="mb-3" />
          <div className="mb-3">
            <p className="text-text-light mb-1">Selected Venue:</p>
            <p className="inline-flex text-text-light items-center gap-2 font-bold">
              <GrLocation className="w-6 h-6" />
              {selectedVenue}
            </p>
          </div>
          <div className="mb-3">
            <p className="text-text-light mb-1">
              Number of people for photoshoot:
            </p>
            <p className="inline-flex text-text-light items-center gap-2 font-extralight">
              x {numberOfPeople}{" "}
              {numberOfPeople.length > 1 ? "people" : "person"}
            </p>
          </div>
          <hr className="mb-3" />{" "}
          <div className="mb-3">
            <p className="flex justify-between text-text-light items-center gap-2 font-bold">
              Total <span>${price + ".00"}</span>
            </p>
          </div>
          <button className="mb-3 w-full font-semibold items-center px-8 py-4 text-sm  text-center border-2 shadow border-transparent text-primary bg-secondary rounded-lg hover:bg-white transition-all duration-150 hover:text-primary hover:border-primary">
            CHECKOUT
          </button>
        </div>
      </div>
    </div>
  );
};

export default Bookings;

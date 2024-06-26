import React, { useEffect, useState } from "react";
import BreadCrumb from "../components/BreadCrumb";
import { MdOutlineDateRange } from "react-icons/md";
import { FaRegClock } from "react-icons/fa";
import { GrLocation } from "react-icons/gr";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { format, addHours } from "date-fns";
import { calculatePrice, pricing } from "../util/cal";
import { Toaster, toast } from "sonner";

const Bookings = () => {
  const [bookDate, setBookDate] = useState(new Date());
  const [price, setPrice] = useState(0);
  const [numberOfPeople, setNumberOfPeople] = useState(1);
  const [selectedVenue, setSelectedVenue] = useState("FISHERMAN’S WHARF");
  const [isLoading, setIsLoading] = useState(false);
  const [pricePerPerson, setPricePerPerson] = useState(0);
  const [calenderTime, setCalenderTime] = useState("");

  
  
  const setMinTime = (date) => {
    const hours = 6;
    const newDate = new Date(date);
    newDate.setHours(hours);
    return newDate;
  };

  const setMaxTime = (date) => {
    const hours = 18;
    const newDate = new Date(date);
    newDate.setHours(hours);
    return newDate;
  };


  useEffect(() => {
    const selectedTime = new Date();
    const minutes = selectedTime.getMinutes();

    if (minutes > 0) {
      selectedTime.setHours(selectedTime.getHours() - 1, 0, 0, 0);
    } else {
      selectedTime.setMinutes(0, 0, 0);
    }

    const sT = selectedTime.getHours();

    if (sT > 18 || sT < 7) {
      selectedTime.setHours(12, 0, 0, 0);
    }
    setBookDate(selectedTime);
  }, []);

  useEffect(() => {
    setCalenderTime(format(bookDate, "h:mm a"));
  }, [bookDate]);

  const handleDateChange = (date) => {
    const selectedTime = new Date(date);
    const minutes = selectedTime.getMinutes();

    if (minutes > 0) {
      selectedTime.setHours(12, 0, 0, 0);
    } else {
      selectedTime.setMinutes(0, 0, 0);
    }

    setBookDate(selectedTime);
    setPrice(calculatePrice(selectedTime, numberOfPeople, pricePerPerson));
  };

  const handleNumberOfPeopleChange = (event) => {
    const newNumberOfPeople = parseInt(event.target.value, 10);
    setNumberOfPeople(newNumberOfPeople);
    setPrice(calculatePrice(bookDate, numberOfPeople, pricePerPerson));
  };

  const handleVenueSelect = (event) => {
    setSelectedVenue(event.target.value);
  };

  const handleCheckout = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      toast.error("Coming soon...");
    }, 3000);
  };

  const renderCustomDayContents = (day, date) => {
    const formattedDay = date.toLocaleDateString("en-US", { weekday: "long" });
    const formattedHour =
      bookDate.getHours().toString().padStart(2, "0") + ":00";
    const price = getPriceForDayAndTime(formattedDay, formattedHour);

  
    return (
      <div className="grid rounded">
        <span className="mb-[2px]">{day}</span>
        <span className="-mt-2 text-xs">${price}</span>
      </div>
    );
  };

  const getPriceForDayAndTime = (day, time) => {
    return pricing[day][time];
  };

  return (
    <div className="mb-16 md:gap-6 mx-auto xl:max-w-screen-2xl px-4 sm:px-8 xl:px-36 pt-8 md:pt-12">
      <Toaster richColors />
      <BreadCrumb current="Bookings" />
      <div className=" flex flex-col md:flex-row justify-between mt-8">
        <div className=" md:w-[70%] mb-8">
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
          <div className="w-[300px] flex flex-col items-center ">
            <DatePicker
              selected={bookDate}
              showTimeSelect
              dateFormat="Pp"
              onChange={handleDateChange}
              timeIntervals={60}
              minTime={setMinTime(new Date())}
              maxTime={setMaxTime(new Date())}
              minDate={new Date()}
              className="w-[300px] bg-gray-50 border border-gray-300 text-text-light text-sm rounded-lg block p-2.5 "
              renderDayContents={renderCustomDayContents}
            />
          </div>
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
          <button
            onClick={handleCheckout}
            className="mb-3 w-full font-semibold items-center px-8 py-4 text-sm  text-center border-2 shadow border-transparent text-primary bg-secondary rounded-lg hover:bg-white transition-all duration-150 hover:text-primary hover:border-primary"
          >
            {!isLoading ? (
              "CHECKOUT"
            ) : (
              <div className="text-center">
                <svg
                  aria-hidden="true"
                  className="w-6 h-6 mx-auto animate-spin fill-primary"
                  viewBox="0 0 100 101"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                    fill="currentColor"
                  />
                  <path
                    d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                    fill="currentFill"
                  />
                </svg>
              </div>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Bookings;



import { format } from "date-fns";

export const pricing = {
  Sunday: {
    "7:00": 125,
    "8:00": 185,
    "9:00": 230,
    "10:00": 325,
    "11:00": 455,
    "12:00": 570,
    "13:00": 895,
    "14:00": 925,
    "15:00": 925,
    "16:00": 570,
    "17:00": 455,
    "18:00": 325,
  },
  Monday: {
    "7:00": 125,
    "8:00": 185,
    "9:00": 230,
    "10:00": 325,
    "11:00": 455,
    "12:00": 570,
    "13:00": 895,
    "14:00": 925,
    "15:00": 925,
    "16:00": 570,
    "17:00": 455,
    "18:00": 325,
  },
  Tuesday: {
    "7:00": 125,
    "8:00": 185,
    "9:00": 230,
    "10:00": 325,
    "11:00": 455,
    "12:00": 570,
    "13:00": 895,
    "14:00": 925,
    "15:00": 925,
    "16:00": 570,
    "17:00": 455,
    "18:00": 325,
  },
  Wednesday: {
    "7:00": 125,
    "8:00": 185,
    "9:00": 230,
    "10:00": 325,
    "11:00": 455,
    "12:00": 570,
    "13:00": 895,
    "14:00": 925,
    "15:00": 925,
    "16:00": 570,
    "17:00": 455,
    "18:00": 325,
  },
  Thursday: {
    "7:00": 125,
    "8:00": 185,
    "9:00": 230,
    "10:00": 325,
    "11:00": 455,
    "12:00": 570,
    "13:00": 895,
    "14:00": 925,
    "15:00": 925,
    "16:00": 570,
    "17:00": 455,
    "18:00": 325,
  },
  Friday: {
    "7:00": 125,
    "8:00": 185,
    "9:00": 230,
    "10:00": 325,
    "11:00": 455,
    "12:00": 570,
    "13:00": 895,
    "14:00": 925,
    "15:00": 925,
    "16:00": 570,
    "17:00": 455,
    "18:00": 325,
  },
  Saturday: {
    "7:00": 125,
    "8:00": 185,
    "9:00": 230,
    "10:00": 325,
    "11:00": 455,
    "12:00": 570,
    "13:00": 895,
    "14:00": 925,
    "15:00": 925,
    "16:00": 570,
    "17:00": 455,
    "18:00": 325,
  },
};

// Function to calculate the price based on the selected date and time
export const calculatePrice = (selectedDate, person) => {
  const selectedDay = format(selectedDate, "EEEE"); // Get the day of the week (e.g., "Sunday")
  const selectedTime = format(selectedDate, "H:00"); // Get the time in hour format (e.g., "7:00")

  // Retrieve the price from the pricing mapping
  const selectedPrice = pricing[selectedDay]?.[selectedTime];
  const total = selectedPrice + person * 250;
  // If a price is found, update the state, otherwise set it to 0
  return total || 0;
};

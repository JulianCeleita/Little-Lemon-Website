import { useEffect, useState } from "react";
import "./bookingForm.css";
import { fetchAPI } from "https://raw.githubusercontent.com/Meta-Front-End-Developer-PC/capstone/master/api.js";

export const BookingForm = (props) => {
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [guests, setGuests] = useState(1);
  const [occasion, setOccasion] = useState("Birthday");
  const [availableTimes, setAvailableTimes] = useState([]);

  const initializeTimes = async () => {
    const today = new Date();
    const formattedDate = today.toISOString().split("T")[0]; // Format date as YYYY-MM-DD
    const times = await fetchAPI(formattedDate);
    setAvailableTimes(times);
  };
  
  //This function will change the availableTimes based on the selected date.
  const updateTimes = async (selectedDate) => {
    const times = await fetchAPI(selectedDate);
    setAvailableTimes(times);
    setDate(selectedDate);
  };

  useEffect(() => {
    initializeTimes();
  }, []);
  
  /* const [availableTimes, dispatch] = useReducer(
    (state, action) => {
      switch (action.type) {
        case "UPDATE_TIMES":
          return updateTimes(action.selectedDate);
        default:
          return state;
      }
    },
    [],
    initializeTimes
  ); */



  const handleDateChange = (event) => {
    const selectedDate = event.target.value;
    setAvailableTimes({ type: "UPDATE_TIMES", selectedDate });
    setDate(selectedDate);
  };

  const handleTimeChange = (event) => {
    setTime(event.target.value);
  };

  const handleGuestsChange = (event) => {
    setGuests(event.target.value);
  };

  const handleOccasionChange = (event) => {
    setOccasion(event.target.value);
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    const formData = {
      date,
      time,
      guests,
      occasion,
    };
    props.submitForm(formData);
  };

  return (
    <div className="form-container">
      <form className="reservation-form">
        <label htmlFor="res-date">Choose date</label>
        <input
          type="date"
          id="res-date"
          value={date}
          onChange={handleDateChange}
        />

        <label htmlFor="res-time">Choose time</label>
        <select id="res-time" value={time} onChange={handleTimeChange}>
          {availableTimes.map((availableTime) => (
            <option key={availableTime} value={availableTime}>
              {availableTime}
            </option>
          ))}
        </select>

        <label htmlFor="guests">Number of guests</label>
        <input
          type="number"
          placeholder="1"
          min="1"
          max="10"
          id="guests"
          value={guests}
          onChange={handleGuestsChange}
        />

        <label htmlFor="occasion">Occasion</label>
        <select id="occasion" value={occasion} onChange={handleOccasionChange}>
          <option value="Birthday">Birthday</option>
          <option value="Anniversary">Anniversary</option>
        </select>

        <input type="submit" value="Make Your Reservation" />
      </form>
    </div>
  );
};

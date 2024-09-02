import React, { useEffect, useContext, useState } from "react";
import DigitalClock from './DigitalClock'; // Import the DigitalClock component
import "../Css/LastBookingDetails.css";
import BsContext from "../Context/BsContext";
import { seats } from "../data";

const LastBookingDetails = () => {
  const context = useContext(BsContext);
  const { handleGetLastBooking, lastBookingDetails } = context;
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        await handleGetLastBooking();
      } catch (error) {
        console.error("Failed to fetch last booking details:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [handleGetLastBooking]);

  if (loading) {
    return <p className="loading_message">Loading...</p>;
  }

  return (
    <div className="last_booking_details_container">
      <DigitalClock /> {/* Display the digital clock */}
      {!loading && lastBookingDetails && (
        <div className="booking_details" style={{ marginTop: "20px" }}>
          <SeatsContainer seats={seats} lastBookingDetails={lastBookingDetails} />
          <BookingDetailsSummary
            slot={lastBookingDetails.slot}
            movie={lastBookingDetails.movie}
          />
        </div>
      )}
    </div>
  );
};

const SeatsContainer = ({ seats, lastBookingDetails }) => (
  <div className="seats_container">
    <p className="seats_header">Seats:</p>
    <ul className="seats_list">
      {seats.map((seat, index) => (
        <li className="seat_item" key={index}>
          {seat}: <span className="seat_count">{Number(lastBookingDetails.seats[seat])}</span>
        </li>
      ))}
    </ul>
  </div>
);

const BookingDetailsSummary = ({ slot, movie }) => (
  <div className="details_summary">
    <p className="slot_detail">
      Slot: <span className="detail_value">{slot}</span>
    </p>
    <p className="movie_detail">
      Movie: <span className="detail_value">{movie}</span>
    </p>
  </div>
);

export default LastBookingDetails;

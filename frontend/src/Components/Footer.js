import React, { useContext } from 'react';
import { Link } from 'react-router-dom'; // Import Link for internal navigation
import LastBookingDetails from '../Components/LastBookingDetails';
import SelectMovie from '../Components/SelectMovie';
import SelectSeats from '../Components/SelectSeats';
import TimeShedule from '../Components/TimeShedule';
import Modal from '../Components/ModalComponent';
import VideoPlayer from '../Components/VideoPlayer'; // Import VideoPlayer component
import Footer from '../Components/Footer'; // Import Footer component
import '../Css/Home.css';
import BsContext from '../Context/BsContext'; // Import context

const Home = () => {
  const context = useContext(BsContext);
  const {
    movie,
    time,
    noOfSeat,
    handlePostBooking,
    setErrorPopup,
    setErrorMessage,
  } = context;

  // Validation for negative seat values
  const checkNegativeSeatsValidity = (seats) => {
    for (let seat in seats) {
      if (Number(seats[seat]) < 0) {
        return true;
      }
    }
    return false;
  };

  // Validation for zero seat selection
  const checkZeroSeatsValidity = (seats) => {
    for (let seat in seats) {
      if (Number(seats[seat]) > 0) {
        return false;
      }
    }
    return true;
  };

  // Book Now button click handler
  const handleBookNow = () => {
    if (!movie) {
      setErrorPopup(true);
      setErrorMessage('Please select a movie!');
    } else if (!time) {
      setErrorPopup(true);
      setErrorMessage('Please select a time slot!');
    } else if (
      checkNegativeSeatsValidity(noOfSeat) ||
      checkZeroSeatsValidity(noOfSeat)
    ) {
      setErrorPopup(true);
      setErrorMessage('Invalid Seats!');
    } else {
      handlePostBooking();
    }
  };

  return (
    <>
      {/* Video Player */}
      <VideoPlayer />

      {/* Navbar */}
      <nav className="nav">
        <div className="logo">
          <img src="https://via.placeholder.com/56" alt="Logo" />
          <div className="title">TheatreTix</div>
        </div>
        <ul>
          <li className="active"><Link to="/">Home</Link></li> {/* Use Link for navigation */}
          <li><Link to="/movies">PLAYS</Link></li>
          <li><Link to="/bookings">My Bookings</Link></li>
        </ul>
      </nav>

      {/* Modal */}
      <Modal />

      <div className="container">
        <div className="selection_container">
          <div className="wrapper">
            {/* Movie Selection */}
            <div className="select_movie_component">
              <SelectMovie />
            </div>

            {/* Last Booking Details */}
            <div className="last_booking_details_container">
              <LastBookingDetails />
            </div>
          </div>

          {/* Time Schedule and Seat Selection */}
          <div className="time_seats_container">
            <TimeShedule />
            <SelectSeats />

            {/* Book Now Button */}
            <button onClick={handleBookNow} className="BN-btn">
              Book Now
            </button>
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </>
  );
};

export default Home;

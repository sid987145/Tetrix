import React, { useContext } from 'react';
import { Link } from 'react-router-dom'; // Import Link for internal navigation
import LastBookingDetails from '../Components/LastBookingDetails';
import SelectMovie from '../Components/SelectMovie';
import SelectSeats from '../Components/SelectSeats';
import TimeShedule from '../Components/TimeShedule';
import Modal from '../Components/ModalComponent';
import VideoPlayer from '../Components/VideoPlayer'; // Import VideoPlayer component
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
          <img src="https://upload.wikimedia.org/wikipedia/en/3/31/Batman_v_Superman_Dawn_of_Justice_poster.jpg" alt="Logo" />
          <div className="title">TheatreTix</div>
        </div>
        <ul>
        <li className="active"><Link to="/">Logout</Link></li> {/* Use Link for navigation */}
          <li><Link to="/home">Home</Link></li>
          <li><Link to="/movies">PLAYS</Link></li>
          <li><Link to="/about">About</Link></li>
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
      <footer className="footer">
  <div className="footer-content">
    <p>© 2024 Official Theatre Websites. All Rights Reserved.</p>
    <ul className="footer-links">
      <li><a href="/about">Privacy Policy</a></li>
      <li><a href="/about">Terms of Service</a></li>
      <li><a href="/about">About Us</a></li>
      <li><a href="/about">Contact Us</a></li>
    </ul>
    <p className="footer-address">123 Theatre Lane, City Name, Country, 12345</p>
    <p className="footer-contact">Email: <a href="mailto:support@theatrewebsite.com">support@theatrewebsite.com</a> | Phone: (123) 456-7890</p>
    <div className="social-media">
      <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a> |
      <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a> |
      <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
    </div>
  </div>
</footer>

    </>
  );
};

export default Home;

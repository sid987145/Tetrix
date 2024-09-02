import React from 'react';
import '../Css/Navbar.css'; // Add appropriate styling for the navbar

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <a href="/" className="navbar-logo">
          MovieBookingApp
        </a>
        <ul className="nav-menu">
          <li className="nav-item">
            <a href="/" className="nav-links">
              Home
            </a>
          </li>
          <li className="nav-item">
            <a href="/movies" className="nav-links">
              Movies
            </a>
          </li>
          <li className="nav-item">
            <a href="/bookings" className="nav-links">
              My Bookings
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;

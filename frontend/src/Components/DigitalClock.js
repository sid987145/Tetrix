import React, { useState, useEffect } from 'react';
import '../Css/DigitalClock.css'; // Import the CSS file for styling

const DigitalClock = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timerId = setInterval(() => {
      setTime(new Date());
    }, 1000); // Update every second

    return () => clearInterval(timerId); // Clean up the interval on component unmount
  }, []);

  const formatNumber = (number) => {
    return number < 10 ? `0${number}` : number;
  };

  const hours = formatNumber(time.getHours());
  const minutes = formatNumber(time.getMinutes());
  const seconds = formatNumber(time.getSeconds());

  return (
    <div className="digital-clock">
      <div className="time">
        <span>{hours}</span>:<span>{minutes}</span>:<span>{seconds}</span>
      </div>
    </div>
  );
};

export default DigitalClock;

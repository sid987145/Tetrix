import React, { useEffect, useState, useMemo } from 'react';
import '../Css/AnalogClock.css'; // Import the CSS file for styling

const AnalogClock = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timerId = setInterval(() => {
      setTime(new Date());
    }, 1000); // Update every second

    return () => clearInterval(timerId); // Clean up the interval on component unmount
  }, []);

  const { seconds, minutes, hours } = useMemo(() => {
    const now = new Date();
    return {
      seconds: now.getSeconds(),
      minutes: now.getMinutes(),
      hours: now.getHours(),
    };
  }, [time]);

  const secondsStyle = useMemo(() => ({
    transform: `rotate(${seconds * 6}deg)`,
  }), [seconds]);

  const minutesStyle = useMemo(() => ({
    transform: `rotate(${minutes * 6 + minutes / 2}deg)`,
  }), [minutes]);

  const hoursStyle = useMemo(() => ({
    transform: `rotate(${hours * 30 + minutes / 2}deg)`,
  }), [hours, minutes]);

  return (
    <div className="clock">
      <div className="hand hour-hand" style={hoursStyle}></div>
      <div className="hand minute-hand" style={minutesStyle}></div>
      <div className="hand second-hand" style={secondsStyle}></div>
      <div className="center-dot"></div>
    </div>
  );
};

export default AnalogClock;

import React, { useState, useEffect } from 'react';
import '../Css/Toast.css'; // Add this CSS file for styling

const Toast = ({ message, show, duration }) => {
  const [visible, setVisible] = useState(show);

  useEffect(() => {
    if (show) {
      setVisible(true);
      const timer = setTimeout(() => {
        setVisible(false);
      }, duration);

      return () => clearTimeout(timer);
    }
  }, [show, duration]);

  return (
    visible && (
      <div className="toast">
        {message}
      </div>
    )
  );
};

export default Toast;

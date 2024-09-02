import React from 'react';

const ErrorMessage = ({ message }) => {
  if (!message) return null;

  return (
    <div style={styles.errorMessage}>
      {message}
    </div>
  );
};

const styles = {
  errorMessage: {
    width: '100%',
    padding: '10px 20px',
    backgroundColor: '#D71920',
    color: 'white',
    textAlign: 'center',
    position: 'fixed',
    top: 0,
    left: 0,
    zIndex: 1000,
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)',
  },
};

export default ErrorMessage;

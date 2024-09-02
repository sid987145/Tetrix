import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; // Import useNavigate from react-router-dom
import '../Css/Auth.css';

const randomBackgrounds = [
  'url(https://images.pexels.com/photos/956999/milky-way-starry-sky-night-sky-star-956999.jpeg?auto=compress&cs=tinysrgb&w=800)',
  'url(https://images.pexels.com/photos/743986/pexels-photo-743986.jpeg?auto=compress&cs=tinysrgb&w=800)',
  'url(https://images.pexels.com/photos/303383/pexels-photo-303383.jpeg?auto=compress&cs=tinysrgb&w=800)',
  'url(https://images.pexels.com/photos/268533/pexels-photo-268533.jpeg?auto=compress&cs=tinysrgb&w=800)',
  'url(https://images.pexels.com/photos/1509534/pexels-photo-1509534.jpeg?auto=compress&cs=tinysrgb&w=800)',
  'url(https://images.pexels.com/photos/346529/pexels-photo-346529.jpeg?auto=compress&cs=tinysrgb&w=800)',
  'url(https://images.pexels.com/photos/949587/pexels-photo-949587.jpeg?auto=compress&cs=tinysrgb&w=800)',
  'url(https://images.pexels.com/photos/177598/pexels-photo-177598.jpeg?auto=compress&cs=tinysrgb&w=800)',
  'url(https://images.pexels.com/photos/696680/pexels-photo-696680.jpeg?auto=compress&cs=tinysrgb&w=800)',
  'url(https://images.pexels.com/photos/1269968/pexels-photo-1269968.jpeg?auto=compress&cs=tinysrgb&w=800)',
];

function Auth() {
  const [isLogin, setIsLogin] = useState(true); // Toggle between Login and Registration
  const [isForgotPassword, setIsForgotPassword] = useState(false); // Toggle for forgot password form
  const [formData, setFormData] = useState({ name: '', email: '', password: '' });
  const [email, setEmail] = useState(''); // For forgot password email input
  const [message, setMessage] = useState('');
  const [background, setBackground] = useState('');
  const [registrationSuccess, setRegistrationSuccess] = useState(false); // State to track registration success
  const navigate = useNavigate(); // Initialize useNavigate hook

  useEffect(() => {
    // Set a random background image
    const randomBg = randomBackgrounds[Math.floor(Math.random() * randomBackgrounds.length)];
    setBackground(randomBg);
  }, []);

  // Toggle between Login and Register
  const toggleForm = () => {
    setIsLogin(!isLogin);
    setIsForgotPassword(false); // Ensure forgot password form is closed
    setMessage(''); // Clear any previous messages
    setRegistrationSuccess(false); // Reset registration success state
    setFormData({ name: '', email: '', password: '' }); // Clear form fields
    setEmail(''); // Clear forgot password email field
  };

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle form submit for Login/Register
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const url = isLogin ? 'http://localhost:8080/api/login' : 'http://localhost:8080/api/register';
      const response = await axios.post(url, formData);
      
      if (isLogin) {
        setMessage(response.data.message);
        navigate('/home'); // Redirect to /home on successful login
      } else {
        setRegistrationSuccess(true); // Set registration success state
        setTimeout(() => {
          toggleForm(); // Automatically switch to Login form after registration
          setMessage(''); // Clear message after switching form
        }, 2000); // Adjust timeout duration as needed
      }
    } catch (error) {
      setMessage(`Error ${isLogin ? 'logging in' : 'registering'} user`);
    }
  };

  // Handle forgot password email submission
  const handleForgotPasswordSubmit = async (e) => {
    e.preventDefault();
    //Api Creating issues On Sending Gmail 
    // try {
    //   const response = await axios.post('http://localhost:8080/forgot-password', { email });
    //   setMessage(response.data.message);
    // } catch (error) {
    //   setMessage('Error sending password reset link');
    // }
  };

  return (
    <div className="auth-container" style={{ backgroundImage: background }}>
      <div className="auth-box">
        {!isForgotPassword ? (
          <>
            <h2>Welcome to Tetrix!</h2>
            <div className="welcome-message">
              {isLogin
                ? 'Login to book your TICKET TO ADVENTURE'
                : 'Create a profile and get ready for adventure!'}
            </div>
            <h2>{isLogin ? 'Login' : 'Register'}</h2>
            <form onSubmit={handleSubmit}>
              {!isLogin && (
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              )}
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                required
              />
              <input
                type="password"
                name="password"
                placeholder="Password"
                value={formData.password}
                onChange={handleChange}
                required
              />
              <button type="submit">{isLogin ? 'Login' : 'Register'}</button>
            </form>
            {message && <p className="message">{message}</p>}
            {registrationSuccess && (
              <p className="message">You have registered successfully! Please <a onClick={toggleForm}>login here</a>.</p>
            )}
            {isLogin && (
              <p>
                <a onClick={() => setIsForgotPassword(true)}>Forgot Password?</a>
              </p>
            )}
            <p>
              {isLogin ? "Don't have an account?" : 'Already have an account?'}{' '}
              <a onClick={toggleForm}>{isLogin ? 'Register here' : 'Login here'}</a>
            </p>
          </>
        ) : (
          <>
            <h2>Forgot Password</h2>
            <form onSubmit={handleForgotPasswordSubmit}>
              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <button type="submit">Send Reset Link</button>
            </form>
            {message && <p className="message">{message}</p>}
            <p>
              <a onClick={() => setIsForgotPassword(false)}>Back to Login</a>
            </p>
          </>
        )}
      </div>
    </div>
  );
}

export default Auth;

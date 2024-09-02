import React from 'react';
import '../Css/About.css';

const About = () => {
    return (
        <div className="about-container">
            <h1 className="about-title">About Us</h1>
            <p className="about-description">
                Welcome to our theatre booking website! We are dedicated to providing a seamless and enjoyable experience for booking tickets to the best plays in town. 
                Our mission is to connect theatre enthusiasts with unforgettable performances through an easy-to-use platform.
            </p>

            <div className="about-content">
                <div className="about-section">
                    <h2 className="about-subtitle">Our History</h2>
                    <p className="about-text">
                        Founded in 2020, our company has quickly become the go-to platform for theatre lovers. Starting with a small selection of plays, we have expanded our offerings to include a diverse range of performances.
                    </p>
                </div>
                
                <div className="about-section">
                    <h2 className="about-subtitle">Our Vision</h2>
                    <p className="about-text">
                        Our vision is to make theatre accessible to everyone. We aim to become the leading theatre booking platform, known for our user-friendly interface and exceptional customer service.
                    </p>
                </div>

                <div className="about-section">
                    <h2 className="about-subtitle">Our Team</h2>
                    <p className="about-text">
                        Our team consists of theatre enthusiasts and tech experts who are passionate about bringing the magic of live performances to your fingertips. 
                        We believe in the power of collaboration and creativity to deliver the best experiences to our users.
                    </p>
                </div>

                <div className="about-section">
                    <h2 className="about-subtitle">Why Choose Us?</h2>
                    <p className="about-text">
                        With our platform, you get access to exclusive deals, early-bird tickets, and a wide variety of shows to choose from. We partner with top theatres to bring you the best performances, all in one place.
                    </p>
                    <p className="about-text">
                        Our user-friendly interface, secure payment options, and dedicated customer support make us the preferred choice for theatre lovers.
                    </p>
                </div>

                <div className="about-section">
                    <h2 className="about-subtitle">Contact Information</h2>
                    <p className="about-text">
                        If you have any questions or need assistance with your bookings, feel free to reach out to us. 
                    </p>
                    <ul className="about-contact-info">
                        <li>Email: <a href="mailto:support@theatrewebsite.com">support@theatrewebsite.com</a></li>
                        <li>Phone: (123) 456-7890</li>
                        <li>Address: 123 Theatre Lane, City Name, Country, 12345</li>
                    </ul>
                </div>

                <div className="about-section">
                    <h2 className="about-subtitle">Terms and Conditions</h2>
                    <p className="about-text">
                        By using our website to book tickets, you agree to the following terms and conditions:
                    </p>
                    <ul className="about-terms">
                        <li>All sales are final, and tickets cannot be refunded or exchanged unless the event is canceled.</li>
                        <li>Our platform is not responsible for changes in event dates or venues made by the event organizers.</li>
                        <li>Users are responsible for ensuring they have provided accurate information when making bookings.</li>
                        <li>All personal data will be handled in accordance with our privacy policy.</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default About;

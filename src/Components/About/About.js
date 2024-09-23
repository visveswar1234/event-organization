import React from 'react';
import './About.css';
import pic from '../../assets/pic.png';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

const About = () => {
    return (
        <div className="about-container">
            <div className="about-text">
                <h1>About Us</h1>
                <p>Welcome to our website! We are dedicated to providing exceptional event planning and coordination services.</p>
                <p>Our team of experts is committed to making your event memorable and stress-free.</p>
            </div>
            <div className="team-container">
                <div className="team-member">
                    <img src={pic} alt="Team Member 1" />
                    <h3>A Pavan Kumar</h3>
                    <p>Event Coordinator</p>
                </div>
                <div className="team-member">
                    <img src={pic} alt="Team Member 2" />
                    <h3>Visveswar</h3>
                    <p>Team Member 1</p>
                </div>
                <div className="team-member">
                    <img src={pic} alt="Team Member 3" />
                    <h3>Harshitha</h3>
                    <p>Team Member 2</p>
                </div>
            </div>
            <div className="social-icons">
                <FaFacebook className="icon" />
                <FaTwitter className="icon" />
                <FaInstagram className="icon" />
            </div>
        </div>
    );
};

export default About;
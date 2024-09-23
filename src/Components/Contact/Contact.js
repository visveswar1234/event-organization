import React from 'react';
import './Contact.css';

const Contact = () => {
    return (
        <section className="contact-section">
            <div className="contact-info">
                <h2>Contact Us</h2>
                <p>
                    At our Events website, we are committed to and passionate
                    about providing you with an amazing experience from planning
                    to execution. Our team of experts will ensure that your vision
                    becomes a reality.
                </p>
                <ul>
                    <li>
                        <i className="fas fa-phone"></i> 310-925-3999
                    </li>
                    <li>
                        <i className="fas fa-envelope"></i> info@elleaevents.com
                    </li>
                    <li>
                        <i className="fas fa-map-marker-alt"></i> Location: Los Angeles, CA
                    </li>
                </ul>
            </div>
            <form className="contact-form">
                <h3>Get a Quote</h3>
                <div className="form-group">
                    <label htmlFor="name">Name:</label>
                    <input type="text" id="name" name="name" required />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email:</label>
                    <input type="email" id="email" name="email" required />
                </div>
                <div className="form-group">
                    <label htmlFor="event_type">Event Type:</label>
                    <select id="event_type" name="event_type">
                        <option value="">Select an option</option>
                        <option value="wedding">Wedding</option>
                        <option value="corporate">Corporate Event</option>
                        <option value="nonprofit">Non-Profit Event</option>
                        <option value="other">Other</option>
                    </select>
                </div>
                <div className="form-group">
                    <label htmlFor="event_date">Event Date:</label>
                    <input type="date" id="event_date" name="event_date" />
                </div>
                <div className="form-group">
                    <label htmlFor="message">Message:</label>
                    <textarea id="message" name="message" rows="5" required></textarea>
                </div>
                <button type="submit">Send Inquiry</button>
            </form>
        </section>
    );
};

export default Contact;

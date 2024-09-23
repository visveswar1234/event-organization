// CardSlide.js

import React from 'react';
import { Link } from 'react-router-dom';
import { eventList } from '../EventDatabase';
import './cardslide.css';

const CardSlide = () => {
  const categorizedEvents = {
    "Comic Conventions": [],
    "Festivals": [],
    "College Events": [],
    "Public Events": [],
    "Other": []
  };

  // Categorize events
  eventList.forEach(event => {
    categorizedEvents[event.category].push(event);
  });

  return (
    <div className="card-slider-container">
      <div className="card-category-container">
        {Object.keys(categorizedEvents).map((category, index) => (
          <div className="card-category" key={index}>
            <h2>{category}</h2>
            <div className="card-slider-content">
              {categorizedEvents[category].map((event, index) => (
                <Link to={`/events/${event.id}`} className="event-card-link" key={index}>
                  <div className="card">
                    <div className="card-img-wrapper">
                      <img src={event.img} alt="Event" />
                    </div>
                    <div className="card-content">
                      <h3>{event.heading}</h3>
                      <p>
                        <span>Year: {event.date.year}</span>
                        <span>Month: {event.date.month}</span>
                      </p>
                      <p>{event.location}</p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CardSlide;

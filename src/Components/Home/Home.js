import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { eventList } from '../EventDatabase';
import './Home.css';
import CardSlide from '../cardslide/cardslide'; // Import the CardSlide component


const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [showControls, setShowControls] = useState(false);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'ArrowLeft') prevSlide();
      else if (event.key === 'ArrowRight') nextSlide();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [currentSlide]);

  useEffect(() => {
    let intervalId;
    if (isPlaying) {
      intervalId = setInterval(nextSlide, 5000);
    }
    return () => clearInterval(intervalId);
  }, [currentSlide, isPlaying]);

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % eventList.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === 0 ? eventList.length - 1 : prevSlide - 1
    );
  };

  const toggleAutoplay = () => {
    setIsPlaying((prev) => !prev);
  };

  const toggleControls = () => {
    setShowControls((prev) => !prev);
  };

  return (
    <div>
      <div className="slideshow-wrapper" onMouseEnter={toggleControls} onMouseLeave={toggleControls}>
        <div className={`slideshow ${showControls ? 'show-controls' : ''}`}>
          {eventList.map((event, index) => (
            <div
              key={index}
              className={`slide ${currentSlide === index ? 'active' : ''}`}
              style={{
                transform: `translateX(${(index - currentSlide) * 100}%)`,
                opacity: currentSlide === index ? 1 : 0.5,
                zIndex: currentSlide === index ? 2 : 1
              }}
            >
              <div className="background-image" style={{ backgroundImage: `url(${event.img})` }}></div>
              <Link to={`/events/${event.id}`} className="slide-content">
                <img src={event.img} alt="Event" loading="lazy" />
                <div className="caption">{event.caption}</div>
              </Link>
            </div>
          ))}
          <button className="control prev" onClick={prevSlide}>&#10094;</button>
          <button className="control next" onClick={nextSlide}>&#10095;</button>
          <div className="pagination">
            {eventList.map((_, index) => (
              <button
                key={index}
                className={currentSlide === index ? 'active' : ''}
                onClick={() => setCurrentSlide(index)}
              ></button>
            ))}
          </div>
        </div>
      </div>

      {/* Render the CardSlide component at the bottom */}
      <CardSlide />
    </div>
  );
};

export default Home;

import React, { useState } from 'react';
import './Service.css'; // Import the CSS file

const Service = () => {
  const services = [
    { title: 'Weddings', description: 'Create your dream wedding with our expert planning and coordination.' },
    { title: 'Corporate', description: 'Plan unforgettable corporate events that leave a lasting impression.' },
    { title: 'Non-Profit', description: 'We help non-profit organizations host successful fundraising events.' },
    { title: 'Party Planning', description: 'Let us take care of the details so you can enjoy your next party.' },
    { title: 'Venue Management', description: 'We can help you manage all aspects of your event venue.' },
    { title: 'Bar Services', description: 'Upgrade your event with our professional bar services.' },
    { title: 'Design Services', description: 'Create a beautiful and stylish event space with our design expertise.' },
    { title: 'Event Artist Management', description: 'Book entertainment for your event with our event artist management services.' },
    { title: 'Video Production', description: 'Capture the memories of your event with our video production services.' },
  ];

  const [selectedService, setSelectedService] = useState(null);

  const handleCardClick = (service) => {
    setSelectedService(service);
  };

  const closePopup = () => {
    setSelectedService(null);
  };

  return (
    <div className="services">
      {services.map((service) => (
        <div key={service.title} className="card" onClick={() => handleCardClick(service)}>
          <h3>{service.title}</h3>
          <p>Click to see details</p>
        </div>
      ))}
      {selectedService && (
        <div className={`popup ${selectedService ? 'active' : ''}`}>
          <h2>{selectedService.title}</h2>
          <p>{selectedService.description}</p>
          <button className="close-button" onClick={closePopup}>Close</button>
        </div>
      )}
    </div>
  );
};

export default Service;

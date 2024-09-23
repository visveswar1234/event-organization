import React, { useState, useEffect } from 'react';
import EventCard from '../EventCard/EventCard';
import { eventList } from '../EventDatabase';
import { categories } from '../DataRender';
import './EventList.css';

const EventList = () => {
    const [eventData, setEventData] = useState({});

    useEffect(() => {
        // Fetching data from "EnterDataPage.json" is not necessary if you already have eventList
        // You can remove this useEffect block if not needed
        fetch('EnterDataPage.json')
            .then((response) => response.json())
            .then((data) => setEventData(data.eventData))
            .catch((error) => console.error('Error fetching data:', error));
    }, []);

    const renderEventCards = (category) => {
        const eventsByCategory = eventList.filter(
            (event) => event.category.toLowerCase() === category.toLowerCase()
        );

        return eventsByCategory.map(({ id, date, heading, location, img, category }) => (
            <EventCard
                key={id}
                id={id}
                date={date}
                heading={heading}
                location={location}
                img={img}
                category={category}
                eventData={eventData} // Pass eventData as prop
            />
        ));
    };

    const renderCategorySections = () => {
        return categories.map((category) => (
            <div key={category}>
                <h2>{category}</h2>
                <div className="event-list">{renderEventCards(category)}</div>
            </div>
        ));
    };

    return (
        <div>
            <div className="event-list-wrapper">
                {eventList.length > 0 ? (
                    renderCategorySections()
                ) : (
                    <p>No events available</p>
                )}
            </div>
        </div>
    );
};

export default EventList;

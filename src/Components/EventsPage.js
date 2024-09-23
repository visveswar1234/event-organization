import React, { useState } from 'react';
// src/Components/EventsPage.js
import { eventList, itemsPerPage } from '../EnterDataPage';


function EventsPage() {
    const [currentPage, setCurrentPage] = useState(1);

    const indexOfLastEvent = currentPage * itemsPerPage;
    const indexOfFirstEvent = indexOfLastEvent - itemsPerPage;
    const currentEvents = eventList.slice(indexOfFirstEvent, indexOfLastEvent);

    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    return (
        <div>
            {/* Display events */}
            {currentEvents.map(event => (
                <div key={event.id}>
                    <h2>{event.heading}</h2>
                    <p>{event.date.month} {event.date.year} - {event.location}</p>
                    <p>{event.description}</p>
                    <img src={event.img} alt={event.heading} />
                </div>
            ))}

            {/* Pagination */}
            <ul className="pagination">
                {Array.from({ length: Math.ceil(eventList.length / itemsPerPage) }).map((_, index) => (
                    <li key={index} onClick={() => paginate(index + 1)}>
                        <a href="!#">{index + 1}</a>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default EventsPage;

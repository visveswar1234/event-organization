// EventDetail.js
import { useParams } from "react-router-dom";
import { eventList } from "../EventDatabase";
import { MdCalendarMonth } from "react-icons/md";
import { IoLocationSharp } from "react-icons/io5"
import "./EventDetail.css";

const EventDetail = () => {
    const { id } = useParams();
    const numId = Number(id);

    const filteredEvent = eventList.find(
        eventDetail => eventDetail.id === numId
    );

    return (
        <div className="event-details-container">
            <div className="event-details-wrapper">
                <img src={filteredEvent.img} alt="Event" />
                <div className="event-details-content">
                    <h3>Event Name : {filteredEvent.heading}</h3>
                    <div className="small-details">
                        <p className="date">
                            <MdCalendarMonth className="icon" />
                            <span className="font-weight-med">
                                {filteredEvent.date.month}
                            </span>
                            <span className="font-weight-med">{filteredEvent.date.year}</span>
                        </p>
                        <p className="location font-weight-med">
                            <IoLocationSharp className="icon" />
                            {filteredEvent.location}
                        </p>
                        <p className="category font-weight-med">
                            Category: {filteredEvent.category}
                        </p>
                    </div>
                    <p className="description">
                        <span className="description-heading">Event Description:</span>
                        <span className="description-heading-para">
                            {filteredEvent.description}
                        </span>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default EventDetail;

// SearchEventList.js
import EventCard from "../EventCard/EventCard";
import { eventList } from "../EventDatabase";
import { categories } from "../DataRender";
import "./SearchEventList.css";

const SearchEventList = ({ monthYear }) => {
    const { selectedMonth, selectedYear, selectedCategory } = monthYear;

    const filteredEvents = eventList.filter((eventDetail) => {
        return (
            (!selectedMonth || eventDetail.date.month === selectedMonth) &&
            (!selectedYear || eventDetail.date.year === selectedYear) &&
            (!selectedCategory || eventDetail.category === selectedCategory)
        );
    });

    const renderEventCards = () => {
        if (filteredEvents.length === 0) {
            return <p>No Events in the selected date and category</p>;
        } else {
            return filteredEvents.map(({ id, date, heading, location, img, category }) => {
                return (
                    <EventCard
                        key={id}
                        id={id}
                        date={date}
                        heading={heading}
                        location={location}
                        img={img}
                        category={category}
                    />
                );
            });
        }
    };

    return (
        <>
            {renderEventCards()}
        </>
    );
};

export default SearchEventList;

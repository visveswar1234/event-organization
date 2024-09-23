// FilterEvents.js
import { useCallback, useState } from "react";
import FilterBox from "../FilterBox/FilterBox";
import SearchEventList from "../SearchEventList/SearchEventList";
import { categories } from "../DataRender";
import './FilterEvents.css';

const FilterEvents = () => {
    const [monthYear, setMonthYear] = useState({
        selectedMonth: null,
        selectedYear: null,
        selectedCategory: null // Initialize selectedCategory
    });

    const getMonthYear = useCallback((selectedMonth, selectedYear, selectedCategory) => {
        setMonthYear({ selectedYear, selectedMonth, selectedCategory }); // Include selectedCategory
    }, []);

    return (
        <div>
            <div className="find-events-wrapper">
                <FilterBox getMonthYear={getMonthYear} />
                <SearchEventList monthYear={monthYear} />
            </div>
        </div>
    );
};

export default FilterEvents;

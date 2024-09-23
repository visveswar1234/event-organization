// FilterBox.js
import { useState, useEffect } from "react";
import { generateDataOptions, months, years, categories } from "../DataRender";
import "./FilterBox.css";

const FilterBox = ({ getMonthYear }) => {
    const [selectedMonth, setSelectedMonth] = useState("January");
    const [selectedYear, setSelectedYear] = useState(2023);
    const [selectedCategory, setSelectedCategory] = useState("Comic Conventions");

    const monthToRender = () => generateDataOptions(months);
    const yearsToRender = () => generateDataOptions(years);
    const categoriesToRender = () => generateDataOptions(categories);

    const handleMonthChange = (e) => setSelectedMonth(e.target.value);
    const handleYearChange = (e) => setSelectedYear(Number(e.target.value));
    const handleCategoryChange = (e) => setSelectedCategory(e.target.value);

    useEffect(() => {
        const updateParent = () => {
            getMonthYear(selectedMonth, selectedYear, selectedCategory); // Include selectedCategory
        };
        updateParent();
    }, [selectedMonth, selectedYear, selectedCategory, getMonthYear]);

    return (
        <div>
            <form className="filter-card">
                <div className="wrapper">
                    <div className="date">
                        <label htmlFor="month">Month : </label>
                        <select value={selectedMonth} onChange={handleMonthChange}>
                            {monthToRender()}
                        </select>
                    </div>
                    <div className="date">
                        <label htmlFor="year">Year : </label>
                        <select value={selectedYear} onChange={handleYearChange}>
                            {yearsToRender()}
                        </select>
                    </div>
                    <div className="date">
                        <label htmlFor="category">Category : </label>
                        <select value={selectedCategory} onChange={handleCategoryChange}>
                            {categoriesToRender()}
                        </select>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default FilterBox;

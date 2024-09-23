import React, { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./EnterDataPage.css";

const EnterDataPage = () => {
    const [eventData, setEventData] = useState({
        id: "",
        heading: "",
        date: { year: "", month: "" },
        location: "",
        description: "",
        img: "",
        category: ""
    });

    const handleChange = (e) => {
        const { name, value } = e.target;

        if (name.startsWith("date.")) {
            const dateField = name.split(".")[1];
            setEventData((prevData) => ({
                ...prevData,
                date: {
                    ...prevData.date,
                    [dateField]: value
                }
            }));
        } else {
            setEventData((prevData) => ({
                ...prevData,
                [name]: value
            }));
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        
        fetch("http://localhost:8000/eventListj", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(eventData),
        })
        .then(response => response.json())
        .then(data => {
            console.log(data);
            toast.success("Event data saved successfully!");
        })
        .catch(error => {
            console.error("Error:", error);
            toast.error("Failed to save event data!");
        });
    };

    return (
        <div className="enter-data-container">
            <ToastContainer />
            <div className="enter-data-card">
                <div className="enter-data-header">
                    <h2>Enter Event Data</h2>
                </div>
                <div className="enter-data-body">
                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label>Event ID</label>
                            <input type="text" name="id" value={eventData.id} onChange={handleChange} className="form-control" />
                        </div>
                        <div className="form-group">
                            <label>Event Heading</label>
                            <input type="text" name="heading" value={eventData.heading} onChange={handleChange} className="form-control" />
                        </div>
                        <div className="form-group">
                            <label>Year</label>
                            <select name="date.year" value={eventData.date.year} onChange={handleChange} className="form-control">
                                <option value="">Select Year</option>
                                <option value="2023">2023</option>
                                <option value="2024">2024</option>
                            </select>
                        </div>
                        <div className="form-group">
                            <label>Month</label>
                            <select name="date.month" value={eventData.date.month} onChange={handleChange} className="form-control">
                                <option value="">Select Month</option>
                                <option value="January">January</option>
                                <option value="February">February</option>
                                <option value="March">March</option>
                                <option value="April">April</option>
                                <option value="May">May</option>
                                <option value="June">June</option>
                                <option value="July">July</option>
                                <option value="August">August</option>
                                <option value="September">September</option>
                                <option value="October">October</option>
                                <option value="November">November</option>
                                <option value="December">December</option>
                            </select>
                        </div>
                        <div className="form-group">
                            <label>Location</label>
                            <input type="text" name="location" value={eventData.location} onChange={handleChange} className="form-control" />
                        </div>
                        <div className="form-group">
                            <label>Description</label>
                            <textarea name="description" value={eventData.description} onChange={handleChange} className="form-control" />
                        </div>
                        <div className="form-group">
                            <label>Image URL</label>
                            <input type="text" name="img" value={eventData.img} onChange={handleChange} className="form-control" />
                        </div>
                        <div className="form-group">
                            <label>Category</label>
                            <select name="category" value={eventData.category} onChange={handleChange} className="form-control">
                                <option value="">Select Category</option>
                                <option value="Comic Conventions">Comic Conventions</option>
                                <option value="Festivals">Festivals</option>
                                <option value="College Events">College Events</option>
                                <option value="Public Events">Public Events</option>
                                <option value="Other">Other</option>
                            </select>
                        </div>
                        <div className="form-group">
                            <button type="submit" className="btn btn-primary">Save Event</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default EnterDataPage;

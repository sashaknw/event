import React from "react";
import { Link } from "react-router-dom"; // To navigate to the single event page
import "./EventsCard.css";

const EventCard = ({ event }) => {
  // Parse the date from the database format (YYYY-MM-DD HH:MM:SS)
  const eventDate = new Date(event.date_time); // Converts the string to a Date object

  // Extract day, month, and year
  const day = eventDate.getDate(); // Get the day of the month
  const month = eventDate.toLocaleString("default", { month: "long" }); // Get the month name in words
  const year = eventDate.getFullYear(); // Get the year

  return (
    <div className="event-card">
      <Link to={`/events/${event.id}`} className="view-details-link">
        <img
          src={event.img || "../assets/Carteles/ex-squeezit.jpg"}
          alt={event.name}
          className="event-image"
        />
      </Link>
        
        <h3>{event.name}</h3>
        <p>{event.location}</p>

        <div className="date">
          <span className="date-month">{month}</span>
          <span className="date-day">{day}</span>
        </div>
      <button className="btn">¡APÚNTATE!</button>
    </div>
  );
};

export default EventCard;

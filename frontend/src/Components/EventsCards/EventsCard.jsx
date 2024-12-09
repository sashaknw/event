import React from "react";
import { Link } from "react-router-dom"; // To navigate to the single event page
import "./EventsCard.css";

const EventCard = ({ event }) => {
  // Parse the date from the database format (YYYY-MM-DD HH:MM:SS)
  const eventDate = new Date(event.date_time); // Converts the string to a Date object
  console.log(event); // Debugging to see the event data

  // Extract day, month, and year
  const day = eventDate.getDate(); // Get the day of the month
  const month = eventDate.toLocaleString("default", { month: "long" }); // Get the month name in words
  const year = eventDate.getFullYear(); // Get the year

  return (
    <div className="event-card">
      <Link to={`/events/${event.id}`} className="view-details-link">
        {/* Use the image path from the event object */}
        <img src={event.image_path} alt={event.name} className="event-image" />
      </Link>
      <h3 className="tituloEvento">{event.name}</h3>
      {/* Add a fallback for missing location */}
      <div className="date">
        <span className="date-month">{month}</span>
        <span className="date-day">{day}</span>
        
        {/* Optionally display the year */}
      </div>
      
      <button className="btn-apuntate">¡APÚNTATE!</button>
    </div>
  );
};

export default EventCard;

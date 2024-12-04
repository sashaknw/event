import React from "react";
import { Link } from "react-router-dom"; // To navigate to the single event page

const EventCard = ({ event }) => {
  return (
    <div className="event-card">
      <h3>{event.name}</h3>
      <p>{new Date(event.date_time).toLocaleString()}</p> {/* Format date */}
      {" "}
    
    </div>
  );
};

export default EventCard;

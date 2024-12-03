import React, { useState, useEffect } from "react";
import EventCard from "../../Components/EventsCards/EventsCard";
import { getAllEvents } from "../../Services/EventsServices";
import axios from "axios";
import { Link } from "react-router-dom";

const Events = () => {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        // Fetch only 3 events from the backend
        const data = await getAllEvents();
        setEvents(data.slice(0, 3)); // Display only the first 3 events
      } catch (error) {
        console.error("Error fetching events:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchEvents();
  }, []);

  if (loading) return <p>Cargando eventos...</p>;

  return (
    <div>
      <h2> Events</h2>
      <ul className="events-list">
        {events.map((event) => (
          <li key={event.id}>
            <EventCard event={event} />
            <Link to={`/events/${event.id}`}>View Details</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Events;

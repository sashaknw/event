import React, { useState, useEffect } from "react";
import EventCard from "../../Components/EventsCards/EventsCard"; // Import EventCard component
import "./Events.css"; // Ensure you import the appropriate CSS file
import { getAllEvents } from "../../Services/EventsServices"; 
import Header from "../../Components/Header/Header"; 

const Events = () => {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        // Fetch events from the API
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
    <div className="events-page">
      
      <Header />

      {/* Main Section */}
      <main>
        <section className="title-section">
          <h1>Eventos en la isla</h1>
          <p className="subtitle">No te los pierdas</p>
        </section>

        {/* Cards Section */}
        <section className="events-grid">
          {events.map((evento) => (
            <EventCard key={evento.id} event={evento} /> // Use EventCard component
          ))}
        </section>
      </main>
    </div>
  );
};

export default Events;

import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Events.css"; // Ensure you import the appropriate CSS file
import { getAllEvents } from "../../Services/EventsServices"; // Adjust if the path is different

const EventosPage = () => {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        // Fetch events from the API (you can also limit the data here if needed)
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
    <div className="container">
      {/* Header */}
      <header className="header">
        <div className="logo">
          <img
            src="https://via.placeholder.com/50"
            alt="Logo"
            className="logo-img"
          />
        </div>
        <nav className="nav">
          <a href="#eventos">Eventos</a>
          <a href="#artistas">Artistas</a>
          <a href="#comunidad">Comunidad</a>
          <div className="user">
            <button className="login-button">
              <Link to="/auth/login">INICIAR SESIÓN</Link>
            </button>
          </div>
        </nav>
      </header>

      {/* Main Section */}
      <main>
        <section className="title-section">
          <h1>Eventos en la isla</h1>
          <p className="subtitle">No te los pierdas</p>
        </section>

        {/* Cards Section */}
        <section className="cards">
          {events.map((evento) => (
            <article className="card" key={evento.id}>
              <img
                src={evento.img || "https://via.placeholder.com/370x502"}
                alt={evento.title}
                className="card-img"
              />
              <h2>{evento.title}</h2>
              <p>{evento.location}</p>
              <div className="date">
                <span>{evento.date?.month}</span>
                <strong>{evento.date?.day}</strong>
                <span>{evento.date?.dayLabel}</span>
              </div>
              <button className="btn">Comprar Entrada</button>
              <Link to={`/events/${evento.id}`} className="view-details-link">
                Ver detalles
              </Link>
            </article>
          ))}
        </section>
      </main>
    </div>
  );
};

export default EventosPage;

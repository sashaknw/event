import React, { useState } from "react";
import "./Home.css";
import Header from "../../Components/Header/Header";
import { getEventByName } from "../../Services/EventsServices";
import Footer from "../../Components/Footer/Footer";
import { Link } from "react-router-dom";
import EventCard from "../../Components/EventsCards/EventsCard"; // Import EventCard component
import Register from "../../Components/Register/Register"; // Import Register component

const Home = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [events, setEvents] = useState([]); // Store event data
  const [loading, setLoading] = useState(false);
  const [searchCompleted, setSearchCompleted] = useState(false);
  const [isRegisterPopupOpen, setIsRegisterPopupOpen] = useState(false); // State for Register Popup

  // Handle search by event name
  const handleSearch = async () => {
    setSearchCompleted(true); // Mark search as completed
    if (searchTerm) {
      setLoading(true);
      try {
        const result = await getEventByName(searchTerm);
        console.log("Event found:", result);
        setEvents(result); // Set events data
      } catch (error) {
        console.error("Error fetching event", error);
        setEvents([]); // Clear events on error
      } finally {
        setLoading(false);
      }
    } else {
      setEvents([]); // Clear events if search term is empty
    }
  };

  const openRegisterPopup = () => {
    setIsRegisterPopupOpen(true); // Open the Register popup
  };

  const closeRegisterPopup = () => {
    setIsRegisterPopupOpen(false); // Close the Register popup
  };

  return (
    <div className="home">
      <Header />

      {/* Main Content */}
      <main>
        <section className="main-lettering">
          <img
            src="/assets/Elementos/title letters chuchango.png"
            alt="Chuchango"
          />
        </section>

        <section className="content">
          <div className="left">
            <div className="video-container">
              <video className="video" autoPlay loop muted>
                <source src="/assets/videos/2M4A9381_6.mp4" type="video/mp4" />
              </video>
            </div>
          </div>
          <div className="right">
            <img
              src="/assets/Elementos/palette.png"
              alt="Palette"
              className="palette-image"
            />
            <h2>EVENTOS DE MÚSICA ELECTRÓNICA EN LAS PALMAS</h2>
            <p className="description">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
              vitae ante vel enim placerat laoreet. Aliquam erat volutpat.
            </p>
          </div>
        </section>

        <div className="seccion-ver-eventos-y-buscar">
          <div className="button-ver-eventos">
            <div className="button-ver-eventos-child" />
            <Link to="/events">
              <button className="ver-eventos">VER EVENTOS</button>
            </Link>
          </div>

          {/* Search Section */}
          <section className="search-section">
            <div className="buscar-eveto-y-artista-parent">
              <input
                className="buscar-eveto-y-artista"
                placeholder="Busca eventos y artistas"
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <button className="btn-buscar" onClick={handleSearch}>
                Buscar
              </button>

              {loading && <p className="loading-text">Cargando...</p>}
              {searchCompleted && events.length === 0 && (
                <p className="no-results">No se encontraron eventos.</p>
              )}
            </div>
          </section>
        </div>

        {/* Render the event cards */}
        <div className="event-cards-container">
          {events.length > 0 && !loading
            ? events.map((event) => (
                <EventCard key={event.id} event={event} /> // Display each event as a card
              ))
            : null}{" "}
          {/* Removed the "No events to display" text */}
        </div>

        <div className="image-container">
          <img
            src="/assets/artistas/Babylia.jpg"
            alt="Descripción de la imagen"
          />
        </div>

        <section className="cta">
          <h2>Crea tu perfil de artista</h2>
          <p>Promociona tu evento</p>
          <button className="btn" onClick={openRegisterPopup}>
            <b>REGÍSTRATE</b>
          </button>
        </section>
      </main>

      {/* Register Popup */}
      {isRegisterPopupOpen && (
        <div className="popup-overlay">
          <div className="popup-content">
            <Register
              onRegisterSuccess={() => {}}
              onClose={closeRegisterPopup}
            />
          </div>
        </div>
      )}

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Home;

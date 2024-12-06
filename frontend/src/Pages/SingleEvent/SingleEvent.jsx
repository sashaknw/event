import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom"; // To get the event ID from the URL
import { getOneEvent } from "../../Services/EventsServices"; // Assuming this function exists to fetch event data
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import "./SingleEvent.css"; // Your custom styles

const SingleEvent = () => {
  const { id } = useParams(); // Get event ID from URL
  const [event, setEvent] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchEventData = async () => {
      try {
        const eventData = await getOneEvent(id); // Fetch event data based on the ID
        setEvent(eventData);
      } catch (error) {
        console.error("Error fetching event data:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchEventData();
  }, [id]); // Run effect when ID changes

  if (loading) return <p>Cargando evento...</p>; // Show loading text while fetching data
  if (!event) return <p>Evento no encontrado</p>; // Show error message if event not found

  // Hardcoded list of DJs (add/remove as needed)
  const djs = [
    "Lwci",
    "Masanet",
    "Monzoon",
    "DGAS",
    "Tanasoul",
    "Techno",
    "Hardgroove",
    "Hard Techno",
  ];

  return (
    <div className="single-event-container">
      <Header />

      {/* Event Name */}
      <h1 className="event-title">{event.name}</h1>

      {/* Event Poster */}
      <div className="event-poster">
        <img
          src={event.image_path || "../assets/Carteles/ex-squeezit.jpg"} // Fallback image
          alt={event.name}
          className="poster-image"
        />
      </div>

      {/* DJ Buttons */}
      <div className="djs-buttons-container">
        {djs.map((dj, index) => (
          <button key={index} className="dj-button">
            {dj}
          </button>
        ))}
      </div>
      <div className="event-description-and-date-container">
        {/* Event Date */}
        <div className="event-date">
          <img
            src="../../../public/assets/Elementos/date.png"
            alt="date"
            className="date-image"
          />
        </div>

        {/* Event Description */}
        <div className="event-description">
          <p>
            En esta ocasión y aprovechando que buscamos un evento más íntimo,
            con entradas más limitadas nos encontraremos una escena cargada de
            obras, donde artistas de diferentes partes de las islas estaremos
            colaborando para vivir una experiencia musical a la altura de las
            anteriores.
          </p>
        </div>
      </div>

      <div className="sign-up-button-container">
        <button className="sign-up-button">¡APÚNTATE!</button>
      </div>

      {/* Social Media Icons */}
      <div className="social-media-icons">
        <a
          href={`https://facebook.com/sharer/sharer.php?u=${window.location.href}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-facebook-square"></i>
        </a>
        <a
          href={`https://twitter.com/intent/tweet?url=${window.location.href}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-twitter-square"></i>
        </a>
      </div>

      <Footer />
    </div>
  );
};

export default SingleEvent;

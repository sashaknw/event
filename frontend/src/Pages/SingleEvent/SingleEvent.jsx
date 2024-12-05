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

  // Parse the date from the database format (YYYY-MM-DD HH:MM:SS)
  const eventDate = new Date(event.date_time); // Converts the string to a Date object
  const day = eventDate.getDate(); // Get the day of the month
  const month = eventDate.toLocaleString("default", { month: "long" }); // Get the month name in words
  const year = eventDate.getFullYear(); // Get the year

  return (
    <div className="single-event-container">
      <Header />

      {/* Event Name */}
      <h1 className="event-title">{event.name}</h1>

      {/* Event Poster */}
      <div className="event-poster">
        <img
          src={event.image_path || "../assets/Carteles/ex-squeezit.jpg"} // Use the event's image path (with fallback)
          alt={event.name}
          className="poster-image"
        />
      </div>

      {/* Artists Buttons */}
      <div className="BotonesArtistas">
        <button className="Lwci">Lwci</button>
        <button className="Masanet">Masanet</button>
        <button className="Monzoon">Monzoon</button>
        <button className="Dgas">DGAS</button>
        <button className="Techno">Techno</button>
        <button className="Hardgroove">Hardgroove</button>
        <button className="HardTechno">Hard Techno</button>
        <button className="Tanasoul">Tanasoul</button>
      </div>

      {/* Event Date */}
      <div className="event-date">
        <img src= "../../../public/assets/Elementos/date.png"></img>
      </div>
      <div className="event-description">
        <p>
          En esta ocasión y aprovechando que buscamos un evento más íntimo, con
          entradas más limitadas nos encontraremos una escena cargada de obras,
          donde artistas de diferentes partes de las islas estaremos colaborando
          para vivir una experiencia musical a la altura de las anteriores.{" "}
        </p>
      </div>
      {/* Sign Up Button */}
      <button className="sign-up-button">¡APÚNTATE!</button>

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

import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom"; // To get the event ID from the URL
import { getOneEvent } from "../../Services/EventsServices";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import "./SingleEvent.css"; // You can add your custom styles here

const SingleEvent = () => {
  const { id } = useParams();
  const [event, setEvent] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchEventData = async () => {
      try {
        const eventData = await getOneEvent(id);
        setEvent(eventData);
      } catch (error) {
        console.error("Error fetching event data:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchEventData();
  }, [id]);

  if (loading) return <p>Cargando evento...</p>;
  if (!event) return <p>Evento no encontrado</p>;

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
          src={event.img || "../assets/Carteles/ex-squeezit.jpg"}
          alt={event.name}
          className="poster-image"
        />
      </div>

      {/* Artists Buttons */}
      <div className="artists-buttons">
        {event.artists &&
          event.artists.map((artist, index) => (
            <button key={index} className="artist-button">
              {artist.name}
            </button>
          ))}
      </div>

      {/* Event Date */}
      <div className="event-date">
        <span className="date-month">{month}</span>
        <span className="date-day">{day}</span>
        <span className="date-year">{year}</span>
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
          <i className="fab fa-facebook-square"></i>{" "}
          {/* Add FontAwesome or other icon library */}
        </a>
        <a
          href={`https://twitter.com/intent/tweet?url=${window.location.href}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-twitter-square"></i>
        </a>
        {/* Add more social media buttons as needed */}
      </div>

      <Footer />
    </div>
  );
};

export default SingleEvent;

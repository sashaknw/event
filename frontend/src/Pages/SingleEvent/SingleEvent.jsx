import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getOneEvent } from "../../Services/EventsServices";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import "./SingleEvent.css";

const SingleEvent = () => {
  const { id } = useParams();
  const [event, setEvent] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isArtistPopupOpen, setIsArtistPopupOpen] = useState(false);

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

  // Hardcoded DJs
  const djs = [
    "Lwci",
    "Masanet",
    "Monzoon",
    "DGAS",
    "Tanasoul", // We will handle this one differently
    "Techno",
    "Hardgroove",
    "Hard Techno",
  ];

  // Open the artist popup
  const openArtistPopup = () => {
    setIsArtistPopupOpen(true);
  };

  // Close the artist popup
  const closeArtistPopup = () => {
    setIsArtistPopupOpen(false);
  };

  return (
    <div className="single-event-container">
      <Header />

      <h1 className="event-title">{event.name}</h1>

      <div className="event-poster">
        <img
          src={event.image_path || "../assets/Carteles/ex-squeezit.jpg"}
          alt={event.name}
          className="poster-image"
        />
      </div>

      <div className="djs-buttons-container">
        {djs.map((dj, index) => (
          <button
            key={index}
            className="dj-button"
            onClick={dj === "Tanasoul" ? openArtistPopup : undefined}
          >
            {dj}
          </button>
        ))}
      </div>

      <div className="event-description-and-date-container">
        <div className="event-date">
          <img
            src="../../../public/assets/Elementos/date.png"
            alt="date"
            className="date-image"
          />
        </div>

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

      {/* Artist Popup */}
      {isArtistPopupOpen && (
        <div className="popup-overlay">
          <div className="artist-popup-content">
            <button className="close-btn" onClick={closeArtistPopup}>
              ×
            </button>

            {/* Artist Background */}
            <div
              className="artist-popup-background"
              
            >
              <div className="artist-info">
                <h3>Tanasoul</h3>
                <p>
                  DJ y productor basado en Las Palmas de Gran Canaria. Fundador
                  del sello Soulsense Records, evento VERTIGO y parte del duo
                  Bangerlore.
                </p>

                {/* Genre Buttons */}
                <div className="genre-buttons">
                  <button className="genre-button">Hardgroove</button>
                  <button className="genre-button">Techno</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SingleEvent;

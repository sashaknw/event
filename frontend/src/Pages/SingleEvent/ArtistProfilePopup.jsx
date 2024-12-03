// src/Pages/SingleEvent/ArtistProfilePopup.jsx
import React from "react";
import "./ArtistProfilePopup.css";

const ArtistProfilePopup = ({ artist, onClose }) => {
  if (!artist) return null;

  return (
    <div className="popup-overlay">
      <div className="popup-content">
        <button className="close-btn" onClick={onClose}>
          X
        </button>
        <h3>{artist.name}</h3>
        <img src={artist.image} alt={artist.name} className="artist-image" />
        <p>{artist.bio}</p>
      </div>
    </div>
  );
};

export default ArtistProfilePopup;

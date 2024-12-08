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
        <img src={artist.image_path} alt={artist.name} className="artist-image" />
        <p>{artist.description}</p>
      </div>
    </div>
  );
};

export default ArtistProfilePopup;

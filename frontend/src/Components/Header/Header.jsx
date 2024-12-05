import React, { useState } from "react";
import { Link } from "react-router-dom";
import Access from "../Access/Access"; // Now directly import Access (no AccessPopup needed)
import "./Header.css"; // Import the necessary CSS

const Header = () => {
  const [isAccessOpen, setAccessOpen] = useState(false); // State to control popup visibility
  const [isPageBlurred, setPageBlurred] = useState(false); // State to apply blur effect

  const handleAccessButtonClick = () => {
    setAccessOpen(true); // Open the login popup
    setPageBlurred(true); // Apply the blur effect
  };

  const handleClosePopup = () => {
    setAccessOpen(false); // Close the login popup
    setPageBlurred(false); // Remove the blur effect
  };

  return (
    <header className="header">
      {/* Logo */}
      <button className="logo-button">
        <img
          src="/assets/Logo/chuchango-logo.png"
          alt="Logo"
          className="logo-img"
          onClick={() => {
            window.location.href = "/";
          }}
        />
      </button>

      <nav className="nav">
        <Link to="/events">EVENTOS</Link>
        <Link to="/artists">ARTISTAS</Link>
        <Link to="/community">COMUNIDAD</Link>

        {/* Access Artist Button */}
        <div className="groupArtista">
          <div className="groupAccesoArtista">
            <button
              className="acceso-artista"
              onClick={handleAccessButtonClick}
            >
              ACCESO ARTISTA
            </button>
          </div>
        </div>
      </nav>

      {/* Access Popup */}
      {isAccessOpen && (
        <div className="popup-overlay">
          <div className="popup-content">
            <button className="close-btn" onClick={handleClosePopup}>
              ×
            </button>
            <Access onAccessSuccess={handleClosePopup} />
          </div>
        </div>
      )}

      {/* Content with blur effect */}
      <div className={`content ${isPageBlurred ? "blurred" : ""}`}>
        {/* Other page content */}
      </div>
    </header>
  );
};

export default Header;

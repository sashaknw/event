import React, { useState } from "react";
import { Link } from "react-router-dom";
import Access from "../Access/Access";
import Register from "../Register/Register";
import "./Header.css"; // Import the necessary CSS

const Header = () => {
  const [isAccessOpen, setAccessOpen] = useState(false); // State to control popup visibility
  const [isRegisterOpen, setRegisterOpen] = useState(false); // State to control popup visibility
  const [isPageBlurred, setPageBlurred] = useState(false); // State to apply blur effect

  const handleAccessButtonClick = () => {
    setAccessOpen(true); // Open the login popup
    setPageBlurred(true); // Apply the blur effect
  };

  const handleRegisterButtonClick = () => {
    setRegisterOpen(true); // Open the registration popup
    setPageBlurred(true); // Apply the blur effect
  };

  const handleClosePopup = () => {
    setAccessOpen(false); // Close the login popup
    setRegisterOpen(false); // Close the registration popup
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
      {isAccessOpen && !isRegisterOpen && (
        <div className="popup-overlay">
          <div className="popup-content">
            {/* Close button inside popup content */}
            <button className="close-btn" onClick={handleClosePopup}>
              ×
            </button>
            <Access
              onAccessSuccess={handleClosePopup}
              openRegisterPopup={() => setRegisterOpen(true)}
            />
          </div>
        </div>
      )}

      {/* Register Popup */}
      {isRegisterOpen && (
        <div className="popup-overlay">
          <div className="register-popup-content">
            {/* Close button inside popup content */}
            <button className="close-btn" onClick={handleClosePopup}>
              ×
            </button>
            <Register
              onRegisterSuccess={handleClosePopup}
              openAccessPopup={() => setAccessOpen(true)}
              onClose={handleClosePopup}
            />
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

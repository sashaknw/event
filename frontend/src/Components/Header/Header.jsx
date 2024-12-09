import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Access from "../Access/Access";
import Register from "../Register/Register";
import "./Header.css"; // Import the necessary CSS

const Header = () => {
  const [isAccessOpen, setAccessOpen] = useState(false);
  const [isRegisterOpen, setRegisterOpen] = useState(false);
  const [isPageBlurred, setPageBlurred] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    // Check if token exists in local storage to determine login status
    const token = localStorage.getItem("authToken");
    setIsLoggedIn(!!token); // Set true if token exists, false otherwise
  }, []);

  const handleAccessButtonClick = () => {
    setAccessOpen(true);
    setPageBlurred(true);
  };

  const handleRegisterButtonClick = () => {
    setRegisterOpen(true);
    setPageBlurred(true);
  };

  const handleClosePopup = () => {
    setAccessOpen(false);
    setRegisterOpen(false);
    setPageBlurred(false);
  };

  const handleLogout = () => {
    localStorage.removeItem("authToken");
    localStorage.removeItem("authRole");
    setIsLoggedIn(false); // Update state to reflect logout
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

        {/* Access or Logout Button */}
        <div className="groupArtista">
          <div className="groupAccesoArtista">
            {isLoggedIn ? (
              <button className="acceso-artista" onClick={handleLogout}>
                CERRAR SESIÓN
              </button>
            ) : (
              <button
                className="acceso-artista"
                onClick={handleAccessButtonClick}
              >
                ACCESO ARTISTA
              </button>
            )}
          </div>
        </div>
      </nav>

      {/* Access Popup */}
      {isAccessOpen && !isRegisterOpen && (
        <div className="popup-overlay-access">
          <div className="popup-content-access">
            <button className="close-btn-access" onClick={handleClosePopup}>
              ×
            </button>
            <Access
              onAccessSuccess={() => {
                handleClosePopup();
                setIsLoggedIn(true); // Update login status after successful login
              }}
              openRegisterPopup={() => setRegisterOpen(true)}
            />
          </div>
        </div>
      )}

      {/* Register Popup */}
      {isRegisterOpen && (
        <div className="popup-overlay">
          <div className="register-popup-content">
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

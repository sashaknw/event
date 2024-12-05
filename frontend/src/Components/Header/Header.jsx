
import React from "react";
import { Link } from "react-router-dom";
import "./Header.css"; // Include your styles

const Header = () => {
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

      {/* Navigation Links */}
      <nav className="nav">
        <a href="events">EVENTOS</a>
        <a href="artists">ARTISTAS</a>
        <a href="community">COMUNIDAD</a>
        <button className="btn acceso-artista">ACCESO ARTISTA</button>
      </nav>
    </header>
  );
};

export default Header;


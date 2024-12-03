
import React from "react";
import { Link } from "react-router-dom";
import "./Header.css"; // Include your styles

function Header() {
  return (
    <header className="header">
      <div className="logo">
        <h1>Event Website</h1>
      </div>
      <nav>
        <ul>
          <li>
            <Link to="/events">Events</Link>
          </li>
          <li>
            <Link to="/artists">Artists</Link>
          </li>
          <li>
            <Link to="/community">Community</Link>
          </li>
          <li>
            <Link to="/auth/login">Login</Link>
          </li>
          <li>
            <Link to="/auth/signup">Signup</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;


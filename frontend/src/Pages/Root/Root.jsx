import React from "react";
import Header from "../../Components/Header/Header"; // Import Header component
import { Outlet } from "react-router-dom"; // Outlet renders page-specific content
import "./Root.css"; // Optional styling for layout

const Root = () => {
  return (
    <div className="root-container">
     
      <main>
        <Outlet /> {/* This will render the page-specific content */}
      </main>
      {/* Footer - This will appear on every page */}
      <footer className="footer">
        <p>&copy; 2024 Event Website. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Root;

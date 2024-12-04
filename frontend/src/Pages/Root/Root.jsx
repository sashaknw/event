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
      
    
    </div>
  );
};

export default Root;

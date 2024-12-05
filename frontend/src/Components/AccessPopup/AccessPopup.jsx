import React from "react";
import "./AccessPopup.css";

const AccessPopup = ({ onClose, children }) => {
  return (
    <div className="popup-overlay">
      <div className="popup-content">
        {children} {/* Render the children (Access form) here */}
      </div>
    </div>
  );
};

export default AccessPopup;

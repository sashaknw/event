import React from "react";
import "./Footer.css"; // Import the CSS file for styling

const Footer = () => {
  return (
   <footer className="footer">
  <div className="left">
    <p>
      En <span className="highlight">Chuchango</span> difundimos y apoyamos los
      eventos locales para promover la cultura underground
    </p>
  </div>
  <div className="right">
    <p>
      Eventos
      <br />
      Artistas
      <br />
      Comunidad
    </p>
  </div>
</footer>
  );
};

export default Footer;

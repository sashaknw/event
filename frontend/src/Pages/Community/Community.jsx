import React, { useState } from "react";
import "./Community.css";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import Register from "../../Components/Register/Register"; // Import Register component

const Community = () => {
  const [isRegisterOpen, setIsRegisterOpen] = useState(false); // State to control the Register popup

  // Function to open the Register popup
  const openRegisterPopup = () => {
    setIsRegisterOpen(true);
  };

  // Function to close the Register popup
  const closeRegisterPopup = () => {
    setIsRegisterOpen(false);
  };

  return (
    <div className="Community">
      <Header />
      <main className="main-community">
        <div className="text-row">
          <h1 className="title-community">Comunidad</h1>
          <h1 className="subtitle-community">entérate</h1>
        </div>

        <div className="search-bar">
          <input type="text" placeholder="Buscar en el foro" />
        </div>
        <div className="categories">
          <div className="category">
            <div className="icon star"></div>
            <p>Compartir Música</p>
          </div>
          <div className="category">
            <div className="icon cross"></div>
            <p>Compra Venta</p>
          </div>
          <div className="category">
            <div className="icon wave"></div>
            <p>Organización Evento</p>
          </div>
          <div className="category">
            <div className="icon polygon"></div>
            <p>Otros</p>
          </div>
        </div>
        <div className="cta-community">
          <h2 className="crea-perfil-community">
            Crea tu perfil de artista
            <br />
            promociona tu evento
          </h2>
          <button
            className="register-button-community"
            onClick={openRegisterPopup}
          >
            REGÍSTRATE
          </button>
          <div className="animation-snail"></div>
        </div>
      </main>

      {/* Conditionally render Register popup */}
      {isRegisterOpen && (
        <Register
          onRegisterSuccess={() => {}}
          openAccessPopup={() => {}}
          onClose={closeRegisterPopup}
        />
      )}

      <Footer />
    </div>
  );
};

export default Community;

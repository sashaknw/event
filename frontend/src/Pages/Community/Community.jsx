import React from "react";
import "./Community.css";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";

const Community = () => {
  return (
    <div className="Community">
      <Header />
      <main className="main">
        <div className="text-row">
          <h1 className="title">Comunidad</h1>
          <h1 className="subtitle">entérate</h1>
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
        <div className="cta">
          <h2>
            Crea tu perfil de artista
            <br />
            promociona tu evento
          </h2>
          <button className="register-button">REGÍSTRATE</button>
        </div>
      </main>
      <Footer />
    </div>
  );
};
export default Community;

import React from "react";
import "./Home.css";
const Home = () => {
  return (
    <div className="home">
      {/* Header */}
      <header className="header">
        <div className="logo">
          <img
            src="https://via.placeholder.com/50"
            alt="Logo"
            className="logo-img"
          />
        </div>
        <nav className="nav">
          <a href="events">EVENTOS</a>
          <a href="artists">ARTISTAS</a>
          <a href="community">COMUNIDAD</a>
          <button className="btn acceso-artista">ACCESO ARTISTA</button>
        </nav>
      </header>
      {/* Main Content */}
      <main>
        <section className="hero">
          <h1 className="title">CHUCHANGO</h1>
          <p className="subtitle">Gran Canaria</p>
        </section>
        <section className="content">
          <div className="left">
            <img
              src="https://via.placeholder.com/682x645"
              alt="Portada 1"
              className="main-image"
            />
          </div>
          <div className="right">
            <h2>EVENTOS DE MÚSICA ELECTRÓNICA EN LAS PALMAS</h2>
            <p className="description">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
              vitae ante vel enim placerat laoreet. Aliquam erat volutpat.
            </p>
            <button className="btn">VER EVENTOS</button>
            <div className="search-bar">
              <input type="text" placeholder="Busca eventos y artistas" />
              <button className="search-btn">�</button>
            </div>
          </div>
        </section>
        <section className="cta">
          <h2>Crea tu perfil de artista</h2>
          <p>Promociona tu evento</p>
          <button className="btn">REGÍSTRATE</button>
        </section>
      </main>

      {/* Footer */}
      <footer className="footer">
        <div className="left">
          <p>
            En <span className="highlight">Chuchango</span> difundimos y
            apoyamos los eventos locales para promover la cultura underground
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
    </div>
  );
};

export default Home;

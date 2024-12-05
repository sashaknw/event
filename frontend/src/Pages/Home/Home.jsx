import React from "react";
import "./Home.css";
const Home = () => {
  return (
    <div className="home">
      {/* Header */}
      <header className="header">
        <div className="logo">
          <img
            src="/assets/Logo/chuchango-logo.png"
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
        <section className="main-lettering">
          <img
            src="/assets/Elementos/title letters chuchango.png"
            alt="Chuchango"
          ></img>
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
            <img
              src="/assets/Elementos/palette.png"
              alt="Palette"
              className="palette-image"
            />
            <h2>EVENTOS DE MÚSICA ELECTRÓNICA EN LAS PALMAS</h2>
            <p className="description">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
              vitae ante vel enim placerat laoreet. Aliquam erat volutpat.
            </p>
            <div className="seccion-ver-eventos-y-buscar">
              <div className="button-ver-eventos">
                <div className="button-ver-eventos-child" />
                <button className="ver-eventos">VER EVENTOS</button>
              </div>
              <div className="buscar-eveto-y-artista-parent">
                <input
                  className="buscar-eveto-y-artista"
                  placeholder="Busca eventos y artistas"
                />
                {/* aqui falta icono buscar */}
              </div>
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

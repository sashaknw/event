import React from "react";
import "./Home.css";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <div className="home">
      <Header />
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
            <div className="video-container">
              <video className="video" autoPlay={true} loop muted>
                <source src="/assets/videos/2M4A9381_6.mp4" type="video/mp4" />
              </video>
            </div>
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
                <Link to="/events">
                  <button className="ver-eventos">VER EVENTOS</button>
                </Link>
              </div>
              <div className="buscar-eveto-y-artista-parent">
                <input
                  className="buscar-eveto-y-artista"
                  placeholder="Busca eventos y artistas"
                />
                {/* aqui falta icono buscar */}
              </div>
            </div>
            <div className="image-container">
              <img
                src="/assets/artistas/Babylia.jpg"
                alt="Descripción de la imagen"
              />
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

      <Footer />
    </div>
  );
};

export default Home;

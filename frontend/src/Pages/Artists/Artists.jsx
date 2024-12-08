import React, { useState } from "react";
import { getArtistByName } from "../../Services/ArtistsServices";
import ArtistsCard from "../../Components/ArtistsCards/ArtistsCard";
import "./Artists.css"; // The CSS file to style this component
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";

// Sample DJs data (static)
const djData = [
  {
    name: "STRAWBERRY PUNCH",
    img: "/assets/artistas/Strawberry_punch.jpg",
  },
  {
    name: "INRRA",
    img: "/assets/artistas/Inrra.JPEG",
  },
  {
    name: "DAMASO",
    img: "/assets/artistas/Damaso.jpg",
  },
  {
    name: "ASTRO BABE",
    img: "/assets/artistas/astro_babe.jpg",
  },
];

const Artists = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [artists, setArtists] = useState([]); // Store artists data
  const [loading, setLoading] = useState(false);
  const [searchCompleted, setSearchCompleted] = useState(false); // Track search status

  // Handle search by artist name
  const handleSearch = async () => {
    setSearchCompleted(true); // Mark search as completed
    if (searchTerm) {
      setLoading(true);
      try {
        const result = await getArtistByName(searchTerm);
        console.log("Artists found:", result);
        setArtists(result);
      } catch (error) {
        console.error("Error fetching artist", error);
        setArtists([]);
      } finally {
        setLoading(false);
      }
    } else {
      setArtists([]);
    }
  };

  return (
    <div className="artistas-page">
      <Header />

      {/* Main Content */}
      <main>
        {/* Hero Section */}
        <section className="hero-section">
          <h1 className="title">Artistas de la isla</h1>
          <span className="conocelos">Conócelos</span>
        </section>

        {/* Search Section */}
        <section className="search-section">
          <div className="search-input-container">
            <input
              type="text"
              placeholder="Buscar artista..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <button className="search-btn" onClick={handleSearch}>
              Buscar
            </button>
          </div>
          {loading && <p className="loading-text">Cargando...</p>}
          {searchCompleted && artists.length === 0 && (
            <p className="no-results">No se encontraron artistas.</p>
          )}
        </section>

        {/* DJs Section (static section) */}
        <section className="djs-section">
          <div className="djs-cards-container">
            {djData.map((dj, index) => (
              <div className="dj-card" key={index}>
                <img src={dj.img} alt={dj.name} />
                <div className="dj-info">
                  <h3>{dj.name}</h3>
                  <p className="dj-description">{dj.description}</p>
                  <div className="social-icons">
                    <img
                      className="small_icon"
                      src="/assets/RRSS/tiktok.svg"
                      style={{ width: "30px", height: "30px" }}
                      alt="tiktok"
                    />
                    <img
                      className="small_icon"
                      src="/assets/RRSS/🦆 icon _soundcloud_.svg"
                      style={{ width: "30px", height: "30px" }}
                      alt="soundcloud"
                    />
                    <img
                      className="small_icon"
                      src="/assets/RRSS/Instagram.svg"
                      style={{ width: "30px", height: "30px" }}
                      alt="instagram"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Artists Display Section */}
        <section className="artists-display">
          {artists.length > 0
            ? artists.map((artist) => (
                <ArtistsCard key={artist.id} artist={artist} />
              ))
            : null}
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Artists;

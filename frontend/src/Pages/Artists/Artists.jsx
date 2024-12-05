import React, { useState } from "react";
import { getArtistByName } from "../../Services/ArtistsServices";
import ArtistsCard from "../../Components/ArtistsCards/ArtistsCard"; // Assuming you have a card component for individual artists
import "./Artists.css"; // The CSS file to style this component
import Header from "../../Components/Header/Header";

const Artists = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [artists, setArtists] = useState([]); // Store artists data
  const [loading, setLoading] = useState(false);

  // Handle search by artist name
  const handleSearch = async () => {
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
        </section>

        {/* Artists Display Section */}
        <section className="artists-display">
          {artists.length > 0 ? (
            artists.map((artist) => (
              <ArtistsCard key={artist.id} artist={artist} />
            ))
          ) : (
            <p>No se encontraron artistas.</p>
          )}
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

export default Artists;

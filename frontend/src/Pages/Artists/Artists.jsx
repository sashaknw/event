import React, { useState, useEffect } from "react";
import { getArtistByName } from "../../Services/ArtistsServices";
import EditArtistProfile from "../../Components/EditArtistProfile/EditArtistProfile";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import { Link } from "react-router-dom";
import "./Artists.css"; // The CSS file to style this component

const djData = [
  {
    name: "TANASOUL",
    description:
      "DJ y productor basado en Las Palmas de Gran Canaria. Fundador del sello SoulsenseRecords.",
    img: "/assets/DJs/Tanasoul2.jpg",
  },
  {
    name: "DAMASO",
    description:
      "DJ de raíces argentinas basada en Las Palmas de Gran Canaria, mezcla industrial techno, tekno y más.",
    img: "/assets/artistas/Damaso.jpg",
  },
  {
    name: "INRRA",
    description:
      "Conocido por el evento Platatonik, es un representante de hard techno de la isla. Actualmente activo también en Madrid, trae sets de muy alta energía y BPM.",
    img: "/assets/artistas/Inrra.JPEG",
  },
  {
    name: "astro babe",
    description:
      "DJ colaboradora en el evento VERTIGO. Explora hard techno e industrial para conseguir un vibe nostálgico, oscuro, pero con ocasionales melodías dulces.",
    img: "/assets/artistas/astro_babe.jpg",
  },
];

const Artists = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [artists, setArtists] = useState([]);
  const [loading, setLoading] = useState(false);
  const [showEditPopup, setShowEditPopup] = useState(false);
  const [selectedArtist, setSelectedArtist] = useState(null);
  const [searchCompleted, setSearchCompleted] = useState(false);

  // Quick Fix: Hardcoding the current user (simulate logged-in user)
  const [currentUser, setCurrentUser] = useState({
    token: "dummy_token",
    role: "Artist",
    name: "astro babe", // Hardcoded name for testing
  });

  useEffect(() => {
    console.log("Current User Loaded:", currentUser);
  }, [currentUser]);

  const openEditPopup = (artist) => {
    setSelectedArtist(artist);
    setShowEditPopup(true);
    console.log("Selected Artist:", artist); // Added console log for debugging
    console.log("Show Edit Popup:", true); // Added console log for debugging
  };

  const closeEditPopup = () => {
    setShowEditPopup(false);
    setSelectedArtist(null);
    console.log("Edit Popup Closed:", true); // Added console log for debugging
  };

  const handleSearch = async () => {
    setSearchCompleted(true);
    if (searchTerm) {
      setLoading(true);
      try {
        const result = await getArtistByName(searchTerm);
        setArtists(result);
        console.log("Search Result:", result); // Added console log for debugging
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

  const handleClear = () => {
    setSearchTerm("");
    setArtists([]);
    setSearchCompleted(false);
    console.log("Search Cleared:", true); // Added console log for debugging
  };

  return (
    <div className="artistas-page">
      <Header />
      <main>
        <section className="hero-section">
          <h1 className="title-artistas">Artistas de la isla</h1>
          <span className="conocelos">Conócel@s</span>
        </section>
       

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
            <button className="clear-btn" onClick={handleClear}>
              Limpiar
            </button>
          </div>
          {loading && <p className="loading-text">Cargando...</p>}
          {searchCompleted && artists.length === 0 && (
            <p className="no-results">No se encontraron artistas.</p>
          )}
        </section>

        {artists.length > 0 && (
          <section className="djs-section">
            <h2 className="search-results-title">Resultados de búsqueda</h2>
            <div className="djs-cards-container">
              {artists.map((artist, index) => (
                <div className="dj-card" key={index}>
                  <img src={artist.image_path} alt={artist.name} />
                  <div className="dj-info">
                    <h3>{artist.name}</h3>
                    <p className="dj-description">{artist.description}</p>
                    <div className="social-icons">
                      <img
                        className="small_icon"
                        src="/assets/RRSS/tiktok.svg"
                        alt="tiktok"
                      />
                      <img
                        className="small_icon"
                        src="/assets/RRSS/soundcloud2.png"
                        alt="soundcloud"
                      />
                      <img
                        className="small_icon"
                        src="/assets/RRSS/instagram2.png"
                        alt="instagram"
                      />
                    </div>
                    {currentUser?.role === "Artist" &&
                      currentUser?.name.toLowerCase() ===
                        artist.name.toLowerCase() && (
                        <button
                          onClick={() => openEditPopup(artist)}
                          className="edit-btn"
                        >
                          Editar
                        </button>
                      )}
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

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
                      alt="tiktok"
                    />
                    <img
                      className="small_icon"
                      src="/assets/RRSS/soundcloud2.png"
                      alt="soundcloud"
                    />
                    <img
                      className="small_icon"
                      src="/assets/RRSS/instagram2.png"
                      alt="instagram"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
      {showEditPopup && selectedArtist && (
        <EditArtistProfile artist={selectedArtist} onClose={closeEditPopup} />
      )}
      <Footer />
    </div>
  );
};

export default Artists;

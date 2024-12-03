import React, { useState } from "react";
import { searchArtistsByName } from "../../Services/ArtistsServices";
import ArtistsCard from "../../Components/ArtistsCards/ArtistsCard";

const Artists = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [artists, setArtists] = useState([]); // Store artists data
  const [loading, setLoading] = useState(false);

 
  // Handle search by artist name
  const handleSearch = async () => {
    if (searchTerm) {
      setLoading(true); 
      try {
        const result = await searchArtistsByName(searchTerm); 
        setArtists(result); 
      } catch (error) {
        console.error("Error fetching artists", error);
        setArtists([]); 
      } finally {
        setLoading(false); 
      }
    } else {
      setArtists([]); 
    }
  };

  return (
    


    <div>
      
      <h2>Artists</h2>
      <input
        type="text"
        placeholder="Buscar artista..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)} 
      />
      <button onClick={handleSearch}>Buscar</button>

      {loading && <p>Loading...</p>}

      <div className="artist-list">
  {artists.length > 0 ? (
          artists.map((artist) => (
            <ArtistsCard key={artist.id} artist={artist} />  
          ))
        ) : (
          <p>No encontrado</p>  
        )}
      </div>
    </div>
  );
};

export default Artists;

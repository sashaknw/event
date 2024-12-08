import React from "react";
import { Link } from "react-router-dom"; // To link to artist profile page

const ArtistsCard = ({ artist }) => {
  return (
    <div className="artist-card">
      
      <Link to={`/artists/${artist.id}`} >
        
        <h3>{artist.name}</h3>
        <img src={artist.image_path} alt={artist.name} className="artist-image" />
        <p className="artist-description">{artist.description}</p>
      </Link>
    </div>
  );
};

export default ArtistsCard;

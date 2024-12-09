import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom"; // To get the artist's ID from the URL
import axios from "axios"; // Make sure axios is imported
import "./ArtistProfile.css";

const ArtistProfile = () => {
  const { id } = useParams(); // Get artist ID from URL
  const [artist, setArtist] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchArtistProfile = async () => {
      try {
        // Update the API request to use the correct endpoint
        const response = await axios.get(`/api/artists/${id}`);
        setArtist(response.data); // Set the artist data from the response
      } catch (error) {
        console.error("Error fetching artist profile:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchArtistProfile();
  }, [id]);

  if (loading) return <p>Loading...</p>;

  if (!artist) return <p>Artist not found</p>;

  return (
    <div
      className="popup-container"
      style={{ backgroundImage: `url(${artist.image_path})` }}
    >
      <div className="popup-content">
        <h2>{artist.name}</h2>
        <p>{artist.description}</p>
        <button onClick={() => window.history.back()} className="close-btn">
          Close
        </button>{" "}
        {/* Close button */}
      </div>
    </div>
  );
};
export default ArtistProfile;

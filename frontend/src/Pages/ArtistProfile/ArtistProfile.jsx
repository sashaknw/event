import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom"; // To get the artist's ID from the URL
import axios from "axios"; // Make sure axios is imported

const ArtistProfile = () => {
  const { id } = useParams(); // Get artist ID from URL
  const [artist, setArtist] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchArtistProfile = async () => {
      try {
        // Update the API request to use the correct endpoint
        const response = await axios.get(`http://localhost:5000/artists/${id}`);
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
    <div>
      <h2>{artist.name}</h2>
      <p>{artist.description}</p>
      
    </div>
  );
};

export default ArtistProfile;

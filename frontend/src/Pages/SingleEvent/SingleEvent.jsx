import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom"; // To get the event ID from the URL
import { getOneEvent } from '../../Services/EventsServices';
import { searchArtistsByName } from "../../Services/ArtistsServices";
import ArtistCard from '../../Components/ArtistsCards/ArtistsCard';
import axios from "axios";
import ArtistProfilePopup from '../../Components/ArtistProfilePopup/ArtistProfilePopup'; // Import ArtistProfilePopup


const SingleEvent = () => {
  const { id } = useParams();
  const [event, setEvent] = useState(null);
  const [loading, setLoading] = useState(true);
  const [artists, setArtists] = useState([]);
  const [isPopupVisible, setIsPopupVisible] = useState(false);
  const [selectedArtist, setSelectedArtist] = useState(null);

  useEffect(() => {
    const fetchEventData = async () => {
      try {
        const eventData = await getOneEvent(id);
        setEvent(eventData);
        const artistsData = await searchArtistsByName(id);
        setArtists(artistsData);
      } catch (error) {
        console.error("Error fetching event data:", error);
      } finally {
        setLoading(false);
      }

    };
    fetchEventData();
  }, [id]);

  const handleArtistClick = (artist) => {
    setSelectedArtist(artist);
    setIsPopupVisible(true); // Show the popup when an artist is clicked
  };

  const handleClosePopup = () => {
    setIsPopupVisible(false); // Hide the popup
    setSelectedArtist(null);
  };

  if (loading) return <p>Cargando evento...</p>;
  if (!event) return <p>Evento no encontrado</p>;


  return (
    
    <div>
      <h2>{event?.name}</h2>
      <p>{event?.description}</p>
      <div className="artist-list">
        {artists.map((artist) => (
          <div key={artist.id} onClick={() => handleArtistClick(artist)}>
            <ArtistCard artist={artist} />
          </div>
        ))}
      </div>

      {isPopupVisible && selectedArtist && (
        <ArtistProfilePopup
          artist={selectedArtist}
          onClose={handleClosePopup}
        />
      )}
    </div>
  );
};

export default SingleEvent;
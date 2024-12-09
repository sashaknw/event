// import React, { useState, useEffect } from "react";
// import axios from "axios";

// const ArtistProfilePopup = ({ eventId, closePopup }) => {
//   const [artist, setArtist] = useState(null);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchArtist = async () => {
//       try {
//         const response = await axios.get(
//           `http://localhost:3000/api/event/${eventId}/artists`
//         );
//         const artistData = response.data.artists[0]; // Assuming the response contains an artist array
//         setArtist(artistData);
//       } catch (error) {
//         console.error("Error fetching artist profile:", error);
//       } finally {
//         setLoading(false);
//       }
//     };
//     fetchArtist();
//   }, [eventId]);

//   if (loading) return <p>Loading artist profile...</p>;

//   if (!artist) return <p>Artist not found</p>;

//   return (
//     <div className="popup">
//       <div className="popup-content">
//         <button onClick={closePopup}>Close</button>
//         <h3>{artist.name}</h3>
//         <p>{artist.description}</p>
//         <img src={artist.image_path} alt={artist.name} />
//       </div>
//     </div>
//   );
// };

// export default ArtistProfilePopup;

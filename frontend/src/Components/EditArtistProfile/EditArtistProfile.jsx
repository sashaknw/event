import React, { useState, useEffect } from "react";
import { updateArtist } from "../../Services/ArtistsServices"; // Import update artist service
import "./EditArtistProfile.css";

const EditArtistProfile = ({ artist, onClose }) => {
  const [artistData, setArtistData] = useState({
    name: artist.name,
    description: artist.description,
    image_path: artist.img,
  });

  const [error, setError] = useState("");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setArtistData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const updatedData = {};

    // Add only changed fields to the updatedData object
    if (artistData.name !== artist.name) updatedData.name = artistData.name;
    if (artistData.description !== artist.description)
      updatedData.description = artistData.description;
    if (artistData.image_path !== artist.img)
      updatedData.image_path = artistData.image_path;

    try {
      if (Object.keys(updatedData).length > 0) {
        await updateArtist(artist.name, updatedData); // Send only updated fields to backend
      }
      onClose(); // Close the popup after successful update
    } catch (err) {
      setError("Error al actualizar el perfil.", err);
    }
  };

  // To prevent closing the popup when clicking inside
  const handlePopupClick = (e) => {
    e.stopPropagation(); // Prevent the click from propagating to the backdrop
  };

  // Close the popup when clicking outside of it
  useEffect(() => {
    const closePopupOnClickOutside = (e) => {
      if (e.target.classList.contains("popup")) {
        onClose();
      }
    };
    window.addEventListener("click", closePopupOnClickOutside);
    return () => {
      window.removeEventListener("click", closePopupOnClickOutside);
    };
  }, [onClose]);

  return (
    <div className="popup" onClick={handlePopupClick}>
      <div className="popup-content">
        <h2>Edita tu perfil</h2>
        {error && <p className="error">{error}</p>}
        <form onSubmit={handleSubmit}>
          <label htmlFor="name">Nombre</label>
          <input
            type="text"
            id="name"
            name="name"
            value={artistData.name}
            onChange={handleInputChange}
          />

          <label htmlFor="description">Bio</label>
          <textarea
            id="description"
            name="description"
            value={artistData.description}
            onChange={handleInputChange}
          />

          <label htmlFor="image_path">Foto</label>
          <input
            type="file"
            id="image_path"
            name="image_path"
            value={artistData.image_path}
            onChange={handleInputChange}
          />

          <button type="submit">Guardar cambios</button>
        </form>
        <button className="close-btn" onClick={onClose}>
          X
        </button>
      </div>
    </div>
  );
};

export default EditArtistProfile;

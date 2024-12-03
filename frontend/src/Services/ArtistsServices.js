import api from "./api";
import axios from "axios";

export const searchArtistsByName = async (name) => {
  try {
    const response = await api.get(`/artists/search?name=${name}`); // API call with query parameter
    return response.data; // Return the found artists
  } catch (error) {
    console.error("Error al buscar artista", error);
    throw error;
  }
};
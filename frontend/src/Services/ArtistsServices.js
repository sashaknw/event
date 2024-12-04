import api from "./api";
import axios from "axios";

export const getArtistByName = async (name) => {
  try {
    const response = await axios.get('/api/artist/search', {
      params: { name }, 
    });

    console.log("Response from backend:", response.data);

    
   return Array.isArray(response.data) ? response.data : [];
  } catch (error) {
    console.error("Error fetching artist:", error);
    throw error; 
  }
};

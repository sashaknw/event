import api from "./api";

export const getArtistByName = async (name) => {
  try {
    const response = await api.get("/artist/search", {
      params: { name },
    });
    console.log("Response from backend:", response.data);
    return Array.isArray(response.data) ? response.data : [];
  } catch (error) {
    console.error("Error fetching artist:", error);
    throw error;
  }
};

export const getArtistById = async (artistId) => {
  return api.get(`/artist/${artistId}`);
};



export const updateArtist = async (name, artistData) => {
  const response = await api.put(
    `/artist/name/${encodeURIComponent(name)}`,artistData
  );
  return response.data;
};

import axios from "axios";
import api from "./api";

// Define the base URL for your API (you can modify this if you have a different base URL)
const API_URL = "http://localhost:3000/api/event";

// Function to get all events
export const getAllEvents = async () => {
  try {
    const response = await axios.get(API_URL); // Making GET request to /api/event
    return response.data; // Returning the list of events
  } catch (error) {
    console.error("Error fetching events:", error);
    throw error; // Rethrow the error for handling at the component level
  }
};

// Function to get a single event by its ID
export const getOneEvent = async (id) => {
  try {
    const response = await axios.get(`${API_URL}/${id}`); // Making GET request to /api/event/:id
    return response.data; // Returning the event data
  } catch (error) {
    console.error(`Error fetching event with ID ${id}:`, error);
    throw error;
  }
};

// Function to get artists associated with a specific event by event ID
export const getArtistsByEvent = async (eventId) => {
  try {
    const response = await axios.get(`${API_URL}/${eventId}/artists`); // Making GET request to /api/event/:id/artists
    return response.data.artists; // Returning the list of artists
  } catch (error) {
    console.error(
      `Error fetching artists for event with ID ${eventId}:`,
      error
    );
    throw error;
  }
};

// Function to search for events by name
export const getEventByName = async (name) => {
  try {
    const response = await axios.get(`${API_URL}/search`, {
      params: { name }, // Pass the name as a query parameter
    });
    return Array.isArray(response.data) ? response.data : []; // Ensure it returns an array
  } catch (error) {
    console.error("Error fetching events by name:", error);
    throw error;
  }
};

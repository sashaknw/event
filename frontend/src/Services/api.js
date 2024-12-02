import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3000/api", // Change this URL to your backend API's base URL
  headers: {
    "Content-Type": "application/json",
  },
});

export default api; 
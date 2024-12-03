import React, { useState } from "react";
import "./Home.css"; // Import the CSS file for styling
import Header from "../../Components/Header/Header"; // Import the Header component
import SearchBar from "../../Components/SearchBar/SearchBar"; // Import the SearchBar component
import Footer from "../../Components/Footer/Footer"; // Import the Footer component

const Home = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (query) => {
    setSearchQuery(query);
    // Perform any action here like calling a function to search for artists or events
    // For example, call an API or filter a list of data based on `searchQuery`
  };

  return (
    

    <div className="home-page">
      <div className="home-center">
        <div className="center-image">
          {/* Background image for the center section */}
          <img src="path-to-your-image.jpg" alt="Event or Artist" />
        </div>

        <div className="search-container">
          <SearchBar onSearch={handleSearch} /> {/* Search bar component */}
          <div className="search-result">
            {/* Render search results here (artists/events) */}
            {searchQuery && <p>Searching for: {searchQuery}</p>}
          </div>
        </div>
      </div>

    
    </div>
  );
};

export default Home;

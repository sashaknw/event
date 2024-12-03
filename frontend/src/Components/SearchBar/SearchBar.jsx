import React, { useState } from "react";
import "./SearchBar.css"; // Import the CSS file for styling

const SearchBar = ({ onSearch }) => {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(inputValue); // Pass the search value to the parent (Home.jsx)
  };

  return (
    <div className="search-bar">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          placeholder="Search for an artist or event..."
        />
        <button type="submit">Search</button>
      </form>
    </div>
  );
};

export default SearchBar;

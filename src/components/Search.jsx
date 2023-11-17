// Search.js

import React from 'react';
import '../styles/Search.css';

function Search({ onSearch }) {
  const handleChange = (event) => {
    onSearch(event.target.value);
  };

  return (
    <div className="search-container">
      <input
        type="text"
        className="search-input"
        placeholder="Search"
        onChange={handleChange}
      />
    </div>
  );
}

export default Search;

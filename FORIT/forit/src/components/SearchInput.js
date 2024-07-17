import React, { useState } from 'react';

function SearchInput({ onSearch }) {
  const [searchTerm, setSearchTerm] = useState('');

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
    onSearch(event.target.value);
  };

  return (
    <input
      type="text"
      className="search-input"  // Buscador
      placeholder="Search by name, email, or city..."
      value={searchTerm}
      onChange={handleChange}
    />
  );
}

export default SearchInput;
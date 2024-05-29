import React, { useEffect, useState } from "react";

function Filter({ search, onCategoryChange, onSearchChange }) {
  const [searchText, setSearchText] = useState(search);

  useEffect(() => {
    setSearchText(search);
  }, [search]);

  const handleSearchChange = (e) => {
    setSearchText(e.target.value);
    onSearchChange(e);
  };

  return (
    <div className="Filter">
      <input
        type="text"
        name="search"
        placeholder="Search..."
        value={searchText}
        onChange={handleSearchChange}
      />
      <select name="filter" onChange={onCategoryChange}>
        <option value="All">Filter by category</option>
        <option value="Produce">Produce</option>
        <option value="Dairy">Dairy</option>
        <option value="Dessert">Dessert</option>
      </select>
    </div>
  );
}

export default Filter;


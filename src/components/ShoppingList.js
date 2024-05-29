import React, { useState } from "react";
import Filter from "./Filter";

function ShoppingList({ items }) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchText, setSearchText] = useState("");

  const handleCategoryChange = (event) => setSelectedCategory(event.target.value);
  const handleSearchChange = (event) => setSearchText(event.target.value);

  const itemsToDisplay = items.filter((item) => {
    if (selectedCategory === "All" && searchText === "") return true;
    if (selectedCategory !== "All" && searchText === "") return item.category === selectedCategory;
    if (selectedCategory === "All" && searchText !== "") return item.name.toLowerCase().includes(searchText.toLowerCase());
    return item.category === selectedCategory && item.name.toLowerCase().includes(searchText.toLowerCase());
  });

  return (
    <div className="ShoppingList">
      <Filter search={searchText} onSearchChange={handleSearchChange} />
      <ul className="Items">
        {itemsToDisplay.map((item) => (
          <li key={item.id} className={item.category}>
            {item.name}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;



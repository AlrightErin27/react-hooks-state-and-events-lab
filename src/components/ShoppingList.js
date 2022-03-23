import React, { useState } from "react";
import Item from "./Item";

function ShoppingList({ items }) {
  const [filterCat, setFilterCat] = useState("All");

  function handleFilter(e) {
    setFilterCat(e.target.value);
  }
  console.log(filterCat);

  //need to use .filter to only display items with matching value,
  //then map thru filtered items and return rendered items
  const itemDisplay = items.filter((item) => {
    if (filterCat === "All") return true;
    return item.category === filterCat;
  });

  return (
    <div className="ShoppingList">
      <div className="Filter">
        <select name="filter" onChange={handleFilter}>
          <option value="All">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>
      <ul className="Items">
        {itemDisplay.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;

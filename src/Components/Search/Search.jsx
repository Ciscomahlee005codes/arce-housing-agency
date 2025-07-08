import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { FaSliders } from "react-icons/fa6";
import { house_List, lodge_List } from "../../../house_List";
import { useNavigate } from "react-router-dom";
import "./Search.css";

const Search = () => {
  const [category, setCategory] = useState("All Categories");
  const [showFilters, setShowFilters] = useState(false);
  const [query, setQuery] = useState("");
  const [filteredItems, setFilteredItems] = useState([]);

  const categories = [
    "All Categories",
    "By State",
    "By Location",
    "By Bedrooms",
    "By House Type",
    "By Rent",
  ];

  const allProperties = [...house_List, ...lodge_List];

  const handleCategorySelect = (cat) => {
    setCategory(cat);
    setQuery("");
    setFilteredItems([]);
  };

  const handleInputChange = (e) => {
    const value = e.target.value;
    setQuery(value);

    if (value.trim().length === 0) {
      setFilteredItems([]);
      return;
    }

    const lowerQuery = value.toLowerCase();

    const results = allProperties.filter((item) => {
      switch (category) {
        case "By State":
          return item.state.toLowerCase().includes(lowerQuery);

        case "By Location":
          return item.location.toLowerCase().includes(lowerQuery);

        case "By Bedrooms":
          return item.name.toLowerCase().includes(lowerQuery);

        case "By House Type": {
          const type = house_List.some((h) => h.id === item.id)
            ? "house"
            : lodge_List.some((l) => l.id === item.id)
            ? "lodge"
            : "";
          return type.includes(lowerQuery);
        }

        case "By Rent":
          return false; // Not implemented yet

        case "All Categories":
        default:
          return (
            item.name.toLowerCase().includes(lowerQuery) ||
            item.location.toLowerCase().includes(lowerQuery) ||
            item.state.toLowerCase().includes(lowerQuery)
          );
      }
    });

    setFilteredItems(results);
  };
  const navigate = useNavigate();

  const handleSelectItem = (item) => {
    const isHouse = house_List.some((h) => h.id === item.id);
    const path = isHouse ? `/viewHomes/${item.id}` : `/lodge/${item.id}`;
    navigate(path);
  };

  return (
    <div className="container" id="searchBar">
      <div className="searchBar searchBar-new">
        <button
  className="filter-icon-button"
  onClick={() => setShowFilters(!showFilters)}
  title={showFilters ? "Hide Filters" : "Show Filters"} 
>
 <FaSliders />
</button>


        <input
          type="text"
          id="inputField"
          placeholder={`Search ${category.toLowerCase()}`}
          value={query}
          onChange={handleInputChange}
        />

        <div className="search-pic">
          <FaSearch className="search-icon" />
        </div>
      </div>

      {showFilters && (
        <div className="category-row">
          {categories.map((cat, index) => (
            <button
              key={index}
              className={`category-button ${category === cat ? "active" : ""}`}
              onClick={() => handleCategorySelect(cat)}
            >
              {cat}
            </button>
          ))}
        </div>
      )}

      {query && (
        <ul className="search-dropdown">
          {filteredItems.length > 0 ? (
            filteredItems.map((item) => (
              <li
                key={item.id + item.name}
                className="search-dropdown-item"
                onClick={() => handleSelectItem(item)} // ← ADDED
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="dropdown-img"
                />
                <div className="dropdown-info">
                  <h4>{item.name}</h4>
                  <span>
                    {item.location} — {item.state}
                  </span>
                </div>
              </li>
            ))
          ) : (
            <li className="search-no-result">No results found for "{query}"</li>
          )}
        </ul>
      )}
    </div>
  );
};

export default Search;

//import React, { useState } from "react";
import "./SearchBar.css";

function SearchBar({ search, setSearch }) {
  /* const [search, setSearch] = useState("");
  console.log(search); */

  /*  const handleSearch = (e) => {
    const searchText = e.target.value;
    setSearch(searchText);
    const filteredCountries = countries.filter((country) =>
      country.name.common.toLowerCase().includes(searchText.toLowerCase())
    );
    setFilteredCountries(filteredCountries);
  }; */

  return (
    <div className="search">
      <h1 className="title">CountrieSearch</h1>
      <input
        className="input"
        type="text"
        placeholder="Search for a country..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
    </div>
  );
}

export default SearchBar;

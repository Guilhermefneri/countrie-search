import React from "react";

function SelectFilter({ region, setRegion }) {
  return (
    <div>
      <label htmlFor="selectRegion">Filter for region: </label>

      <select
        id="selectRegion"
        value={region}
        onChange={(e) => setRegion(e.target.value)}
      >
        <option value="">All Regions</option>
        <option value="Africa">Africa</option>
        <option value="Americas">Americas</option>
        <option value="Asia">Asia</option>
        <option value="Europe">Europe</option>
        <option value="Oceania">Oceania</option>
      </select>
    </div>
  );
}

export default SelectFilter;

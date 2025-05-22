import React from "react";

function SelectFilter({ region, setRegion, language, setLanguage }) {
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

      <label htmlFor="selectLanguage">Filter for language: </label>

      <select
        id="selectLanguage"
        value={language}
        onChange={(e) => setLanguage(e.target.value)}
      >
        <option value="">All Languages</option>
        <option value="English">English</option>
        <option value="Spanish">Spanish</option>
        <option value="French">French</option>
        <option value="Arabic">Arabic</option>
        <option value="Portuguese">Portuguese</option>
        <option value="German">German</option>
        <option value="Chinese">Chinese</option>
      </select>
    </div>
  );
}

export default SelectFilter;

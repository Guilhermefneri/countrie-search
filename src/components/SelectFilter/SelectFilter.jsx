import React from "react";

function SelectFilter({
  region,
  setRegion,
  language,
  setLanguage,
  subregion,
  setSubregion,
  currencies,
  setCurrencies,
  population,
  setPopulation,
}) {
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

      <label htmlFor="selectSubregion">Filter for subregion</label>
      <select
        id="selectSubregion"
        value={subregion}
        onChange={(e) => setSubregion(e.target.value)}
      >
        <option value="">All subregions</option>
        <option value="Southern Asia">Southern Asia</option>
        <option value="South-Eastern Asia">South-Eastern Asia</option>
        <option value="Eastern Asia">Eastern Asia</option>
        <option value="Western Europe">Western Europe</option>
        <option value="Northern Europe">Northern Europe</option>
        <option value="Southern Europe">Southern Europe</option>
        <option value="South America">South America</option>
        <option value="Northern America">Northern America</option>
        <option value="Eastern Africa">Eastern Africa</option>
        <option value="Western Africa">Western Africa</option>
        <option value="Northern Africa">Northern Africa</option>
        <option value="Middle Africa">Middle Africa</option>
        <option value="Southern Africa">Southern Africa</option>
        <option value="Caribbean">Caribbean</option>
        <option value="Central America">Central America</option>
        <option value="Melanesia">Melanesia</option>
        <option value="Micronesia">Micronesia</option>
        <option value="Polynesia">Polynesia</option>
        <option value="Australia and New Zealand">
          Australia and New Zealand
        </option>
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

      <label htmlFor="selectCurrencies">Filter for Currencie: </label>
      <select
        id="selectCurrencies"
        value={currencies}
        onChange={(e) => setCurrencies(e.target.value)}
      >
        <option value="">All Currencies</option>
        <option value="Australian dollar">Australian dollar</option>
        <option value="Brazilian real">Brazilian real</option>
        <option value="British pound">British pound</option>
        <option value="Canadian dollar">Canadian dollar</option>
        <option value="Chinese yuan">Chinese yuan</option>
        <option value="Indian rupee">Indian rupee</option>
        <option value="Japanese yen">Japanese yen</option>
        <option value="Swiss franc">Swiss franc</option>
        <option value="United States dollar">United States dollar</option>
      </select>

      <label htmlFor="selectPopulation">Filter for population: </label>
      <select
        id="selectPopulation"
        value={population}
        onChange={(e) => setPopulation(e.target.value)}
      >
        <option value="">All</option>
        <option value="small">Less than 1M</option>
        <option value="medium">1M - 10M</option>
        <option value="large">10M - 50M</option>
        <option value="veryLarge">More than 50M</option>
      </select>
    </div>
  );
}

export default SelectFilter;

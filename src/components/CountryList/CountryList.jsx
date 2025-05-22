import React from "react";
import CountryCard from "../CountryCard/CountryCard";
import "./CountryList.css";

function CountryList({ countries }) {
  return (
    <ul className="countryList">
      {countries
        // ordena os países em ordem alfabética
        .sort((a, b) => a.name.common.localeCompare(b.name.common))
        .map((country) => (
          <li key={country.cca3} className="infoLi">
            <CountryCard country={country} />
          </li>
        ))}
    </ul>
  );
}

export default CountryList;

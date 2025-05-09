import React from "react";
import CountryCard from "../CountryCard/CountryCard";
import "./CountryList.css";

function CountryList({ countries }) {
  return (
    <ul className="countryList">
      {countries.map((country) => (
        <li key={country.cca3} className="infoLi">
          <CountryCard country={country} />
        </li>
      ))}
    </ul>
  );
}

export default CountryList;

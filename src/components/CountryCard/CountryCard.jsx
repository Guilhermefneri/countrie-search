import React from "react";
import "./CountryCard.css";
import Modal, { useModal } from "../Modal/Modal";

function CountryCard({ country }) {
  const { modal, toggleModal } = useModal();

  return (
    <>
      <div className="countryCard" onClick={toggleModal}>
        <img
          src={country.flags.png}
          alt={`Bandeira de ${country.name.common}`}
          className="flags"
        />
        <h3 className="countryName">{country.name.common}</h3>
        <h4>
          Population: <span className="span">{country.population}</span>
        </h4>
        <h4>
          Region: <span className="span">{country.region}</span>
        </h4>
      </div>
      <Modal modal={modal} toggleModal={toggleModal} countries={country} />
    </>
  );
}

export default CountryCard;

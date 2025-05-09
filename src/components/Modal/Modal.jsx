import React, { useState } from "react";
import "./Modal.css";

const useModal = () => {
  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
  };

  return { modal, toggleModal };
};

export { useModal };

function Modal({ modal, toggleModal, countries }) {
  return (
    <>
      {modal && (
        <div className="modalBackground">
          <div className="modalContainer">
            <button className="closeButton" onClick={toggleModal}>
              ×
            </button>

            <div className="modalHeader">
              <img
                src={countries.flags?.png}
                alt="Flag"
                className="flagModal"
              />
              <h2>{countries.name?.common}</h2>
            </div>

            <div className="modalContent">
              <div className="infoGroup">
                <span>Capital:</span> {countries.capital || "N/A"}
              </div>
              <div className="infoGroup">
                <span>Region:</span> {countries.region || "N/A"}
              </div>
              <div className="infoGroup">
                <span>Subregion:</span> {countries.subregion || "N/A"}
              </div>
              <div className="infoGroup">
                <span>Population:</span>{" "}
                {countries.population?.toLocaleString() || "N/A"}
              </div>
              <div className="infoGroup">
                <span>Area:</span> {countries.area?.toLocaleString()} km²
              </div>
              <div className="infoGroup">
                <span>Languages:</span>{" "}
                {countries.languages
                  ? Object.values(countries.languages).join(", ")
                  : "N/A"}
              </div>
              <div className="infoGroup">
                <span>Timezone:</span>{" "}
                {countries.timezones?.join(", ") || "N/A"}
              </div>
              <div className="infoGroup">
                <span>TLD:</span> {countries.tld?.join(", ") || "N/A"}
              </div>
              <div className="infoGroup">
                <span>Dialing Code:</span> {countries.idd?.root}
                {countries.idd?.suffixes?.join(", ") || ""}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Modal;

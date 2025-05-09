import { useEffect, useState } from "react";
import "./App.css";
import { fetchCountries } from "./api";
import SearchBar from "./components/SearchBar/SearchBar";
import CountryList from "./components/CountryList/CountryList";
import Modal from "./components/Modal/Modal";
import SelectFilter from "./components/SelectFilter/SelectFilter";

function App() {
  const [countries, setCountries] = useState([]);
  const [search, setSearch] = useState("");
  const [region, setRegion] = useState("");

  // const [filteredCountries, setFilteredCountries] = useState([]);

  useEffect(() => {
    const getCountries = async () => {
      const data = await fetchCountries(); //chama a funcao da API
      console.log(data);
      setCountries(data);
    };

    getCountries();
  }, []);

  const filteredCountries = countries
    // filtro por regiao
    .filter((country) => {
      if (!region) return true;
      return country.region === region;
    })
    // pesquisa dos paises no input
    .filter((country) =>
      country.name.common.toLowerCase().includes(search.toLowerCase())
    );

  return (
    <div>
      <title>CountryFinder</title>
      <SearchBar search={search} setSearch={setSearch} />
      <SelectFilter region={region} setRegion={setRegion} />

      <h1>Lista de Países</h1>
      <CountryList countries={filteredCountries} />
    </div>
  );
}

export default App;

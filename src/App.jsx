import { useEffect, useState } from "react";
import "./App.css";
import { fetchCountries } from "./api";
import SearchBar from "./components/SearchBar/SearchBar";
import CountryList from "./components/CountryList/CountryList";
//import Modal from "./components/Modal/Modal";
import SelectFilter from "./components/SelectFilter/SelectFilter";

function App() {
  const [countries, setCountries] = useState([]);
  const [search, setSearch] = useState("");
  const [region, setRegion] = useState("");
  const [language, setLanguage] = useState("");

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
    // filtro por idioma
    .filter((country) => {
      if (!language) return true;
      // se o idioma for null ou undefined usa um objeto vazio {}, evitando erro
      const langValue = Object.values(country.languages || {});
      return langValue.includes(language);
    })
    // pesquisa dos paises no input
    .filter((country) =>
      country.name.common.toLowerCase().includes(search.toLowerCase())
    );

  return (
    <div>
      <title>CountryFinder</title>
      <SearchBar search={search} setSearch={setSearch} />
      <SelectFilter
        region={region}
        setRegion={setRegion}
        language={language}
        setLanguage={setLanguage}
      />

      <h1>Lista de Países</h1>
      <CountryList countries={filteredCountries} />
    </div>
  );
}

export default App;

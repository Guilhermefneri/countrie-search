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
  const [subregion, setSubregion] = useState("");
  const [language, setLanguage] = useState("");
  const [currencies, setCurrencies] = useState("");
  const [population, setPopulation] = useState("");

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
    // filtro por subregiao
    .filter((country) => {
      if (!subregion) return true;
      return country.subregion === subregion;
    })
    // filtro por idioma
    .filter((country) => {
      if (!language) return true;
      // se o idioma for null ou undefined usa um objeto vazio {}, evitando erro
      const langValue = Object.values(country.languages || {});
      return langValue.includes(language);
    })
    // filtra por moeda
    .filter((country) => {
      if (!currencies) return true;
      const countryCurrencie = Object.values(country.currencies ?? {})[0]?.name;
      return countryCurrencie === currencies;
    })
    .filter((country) => {
      if (!population) return true;

      if (population === "small") return country.population < 1000000;
      if (population === "medium")
        return country.population >= 1000000 && country.population < 10000000;
      if (population === "large")
        return country.population >= 10000000 && country.population < 50000000;
      if (population === "veryLarge") return country.population >= 50000000;
    })
    // pesquisa dos paises no input
    .filter((country) =>
      country.name.common.toLowerCase().includes(search.toLowerCase())
    );

  return (
    <div>
      <title>CountrieSearch</title>
      <SearchBar search={search} setSearch={setSearch} />
      <SelectFilter
        region={region}
        setRegion={setRegion}
        subregion={subregion}
        setSubregion={setSubregion}
        language={language}
        setLanguage={setLanguage}
        currencies={currencies}
        setCurrencies={setCurrencies}
        population={population}
        setPopulation={setPopulation}
      />

      {filteredCountries.length > 0 ? (
        <CountryList countries={filteredCountries} />
      ) : (
        <p className="noResults">
          No results found. Try a different name or check your search.
        </p>
      )}
    </div>
  );
}

export default App;

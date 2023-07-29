import React, { useEffect, useState } from 'react';

import Countries from './component/countries';
import Search from './component/search';
import './app.css';

const App = () => {
  const url = 'https://restcountries.com/v3.1/all';
  const [countriesData, setCountriesData] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [filterCountries, setFilterCountries] = useState(countriesData);

  const dataFetch = async (url) => {
    setLoading(true);

    try {
      const response = await fetch(url);
      const data = await response.json();

      setCountriesData(data);
      setFilterCountries(data);
      setLoading(false);
      setError(null);
    } catch (error) {
      setError(error);
      console.log(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    dataFetch(url);
  }, [url]);

  const handleRemoveCountry = (nameValue) => {
    const filter = filterCountries.filter(
      (country) => country.name.common !== nameValue
    );
    setCountriesData(filter);
  };

  const handleSearchValue = (inputValue) => {
    let value = inputValue.toLowerCase();
    const countryNew = countriesData.filter((country) => {
      const countryName = country.name.common.toLowerCase();
      return countryName.startsWith(value);
    });
    setFilterCountries(countryNew);
  };

  return (
    <div>
      <h1>Country App</h1>
      <Search searchCountry={handleSearchValue} />
      {loading && <h2>Loading ...</h2>}
      {error && <h2>Error: {error.message}</h2>}
      {countriesData && (
        <Countries
          countryObject={filterCountries}
          removeCountry={handleRemoveCountry}
        />
      )}
    </div>
  );
};

export default App;

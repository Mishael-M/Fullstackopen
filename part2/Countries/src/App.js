import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Country from './components/Country';
import CountryData from './components/CountryData';

const App = () => {
  const api_key = process.env.REACT_APP_OPENWEATHERMAP_API_KEY;

  const [country, setCountry] = useState('');
  const [countryInformation, setCountryInformation] = useState([]);

  useEffect(() => {
    axios.get('https://restcountries.com/v3.1/all').then((response) => {
      setCountryInformation(response.data);
    });
  }, []);

  // axios
  //   .get(
  //     `http://api.openweathermap.org/data/2.5/weather?q=London&appid=${api_key}`
  //   )
  //   .then((response) => {
  //     console.log(response);
  //   });

  return (
    <div>
      <Country country={country} setCountry={setCountry} />
      <CountryData
        key={0}
        country={country}
        countryInformation={countryInformation}
      />
    </div>
  );
};

export default App;

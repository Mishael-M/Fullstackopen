import React, { useState } from 'react';
const SingularCountry = ({ countryInformation }) => {
  let languagesArray = Object.values(countryInformation.languages);
  let finalLanguageArray = [];

  languagesArray.map((language) =>
    finalLanguageArray.push(<li key={language}>{language}</li>)
  );

  return (
    <div key={countryInformation.name.common}>
      <h1>{countryInformation.name.common}</h1>
      {countryInformation.capital ? (
        <p>Capital: {countryInformation.capital[0]}</p>
      ) : (
        <p>No capital</p>
      )}
      <p>Population: {countryInformation.population}</p>
      <h2>Languages</h2>
      <ul key={countryInformation.name.common}>{finalLanguageArray}</ul>
      <img src={countryInformation.flags.png} alt='Flag' />
    </div>
  );
};

const SingleCountryData = ({ countryInformation }) => {
  const [showCountry, setShowCountry] = useState(false);

  if (showCountry) {
    let languagesArray = Object.values(countryInformation.languages);
    let finalLanguageArray = [];

    languagesArray.map((language) =>
      finalLanguageArray.push(<li key={language}>{language}</li>)
    );

    return (
      <div key={countryInformation.name.common}>
        <h1>
          {countryInformation.name.common}{' '}
          <button onClick={() => setShowCountry(!showCountry)}>Hide</button>
        </h1>
        {countryInformation.capital ? (
          <p>Capital: {countryInformation.capital[0]}</p>
        ) : (
          <p>No capital</p>
        )}
        <p>Population: {countryInformation.population}</p>
        <h2>Languages</h2>
        <ul key={countryInformation.name.common}>{finalLanguageArray}</ul>
        <img src={countryInformation.flags.png} alt='Flag' />
      </div>
    );
  }

  return (
    <div>
      {countryInformation.name.common}
      <button onClick={() => setShowCountry(!showCountry)}>Show</button>
    </div>
  );
};

const CountryData = ({ country, countryInformation }) => {
  if (country) {
    let realCountry = Object.values(country).join('').toLowerCase();
    let filterArray = countryInformation.map(
      (currentCountry) =>
        currentCountry.name.common.toLowerCase().indexOf(realCountry) > -1
    );
    let returnArray = [];
    filterArray.forEach((element, index) => {
      if (element) {
        returnArray = returnArray.concat(countryInformation[index]);
      }
    });

    if (returnArray.length > 0 && returnArray.length < 10) {
      if (returnArray.length > 1) {
        let singleCountry = returnArray.filter(
          (currentCountry) =>
            currentCountry.name.common.toLowerCase() === realCountry
        );

        if (singleCountry.length === 1) {
          return (
            <SingularCountry
              key={singleCountry[0].name.common}
              countryInformation={singleCountry[0]}
            />
          );
        }

        return returnArray.map((country) => (
          <SingleCountryData
            key={country.name.common}
            countryInformation={country}
          />
        ));
      }

      return returnArray.map((country) => (
        <SingularCountry
          key={country.name.common}
          countryInformation={country}
        />
      ));
    }

    if (returnArray.length > 10) {
      return <p>Too many matches found, please specify another filter</p>;
    }
  }

  return <p>No countries found</p>;
};

export default CountryData;

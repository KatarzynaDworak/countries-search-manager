import React, { useEffect, useState } from 'react';
import { useCountries } from '../providers/CountriesProvider';

const FILTERABLE_CAPITALS = [
  "Warsaw",
  "Berlin",
  "Paris",
  "London",
  "Madrid",
];

function Countries() {
  const { countries, selectedCountry, setSelectedCountry } = useCountries();
  const [selectedCapital, setSelectedCapital] = useState('');

  const handleCapitalChange = (e) => {
    setSelectedCapital(e.target.value);
  };

  const filteredCountries = selectedCountry
  ? countries.filter((country) => country.name.common === selectedCountry)
  : countries;

  return (
        <div>
            <select onChange={(e) => setSelectedCountry(e.target.value)}>
                <option value="">All Countries</option>
                {countries.map((country) => (
                    <option key={country.cca3} value={country.name.common}>
                        {country.name.common}
                    </option>
                ))}
            </select>

            {filteredCountries.map((country) => (
                <p key={country.cca3}>
                    {country.name.common} - {country.capital}
                </p>
            ))}
        </div>
    
  );
}

export default Countries;

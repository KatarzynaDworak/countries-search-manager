import React, { createContext, useContext, useEffect, useState } from 'react';
import { getCountries } from '../services/getCountries';

const CountriesContext = createContext();

const useCountries = () => useContext(CountriesContext);

export default function CountriesProvider({ children }) {
    const [isLoading, setIsLoading] = useState(false);
    const [errors, setErrors] = useState(null);
    const [countries, setCountries] = useState([]);
    const [selectedCountry, setSelectedCountry] = useState([]);

    const fetchCountries = async () => {
        setIsLoading(true);
        try {
            const data = await getCountries();
            setCountries(data);
        } catch (error) {
            setErrors(error.message);
            setCountries([]);
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        fetchCountries(); // Wywołanie fetchCountries przy montowaniu komponentu
    }, []);

    return (
        <CountriesContext.Provider value={{ isLoading, errors, countries, selectedCountry, setSelectedCountry }}>
            {children}
        </CountriesContext.Provider>
    );
}

export { useCountries };

import { createContext, useEffect, useState } from 'react';
import { CountryType } from '../types';

interface CountriesContextType {
  countries: CountryType[];
  isLoading: boolean;
  error: boolean;
}

// Public Api
const url =
  'https://restcountries.com/v3.1/independent?status=true&fields=name,capital,region,subregion,flags,cca3,';

export const CountriesContext = createContext<CountriesContextType | undefined>(undefined);

// fetch all countries, store in state to reduce api calls
export function CountryProvider({ children }: { children: React.ReactNode }) {
  const [countries, setCountries] = useState<CountryType[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        setIsLoading(true);
        setError(false);
        const res = await fetch(url);
        const data = await res.json();
        const formattedData: CountryType[] = data.map((country: any) => ({
          // cca3 country code as an id
          id: country.cca3,
          name: country.name.common,
          capitals: country.capital,
          region: country.region,
          subregion: country.subregion,
          flag: country.flags.svg,
          flagDescription: country.flags.alt,
        }));
        setCountries(formattedData);
      } catch (error) {
        setError(true);
      } finally {
        setIsLoading(false);
      }
    };
    fetchCountries();
  }, []);

  const value = {
    countries,
    isLoading,
    error,
  };

  return <CountriesContext.Provider value={value}>{children}</CountriesContext.Provider>;
}

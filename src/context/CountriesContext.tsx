import { createContext, useEffect, useState } from 'react';
import { CountryType } from '../types';
import { useTranslation } from 'react-i18next';

interface CountriesContextType {
  countries: CountryType[];
  isLoading: boolean;
  error: null | string;
}

// Public Api
const url =
  'https://restcountries.com/v3.1/independent?status=true&fields=name,capital,region,subregion,flags,';

export const CountriesContext = createContext<CountriesContextType | undefined>(undefined);

// fetch all countries, store in state to reduce api calls
export function CountryProvider({ children }: { children: React.ReactNode }) {
  const [countriesData, setCountriesData] = useState<CountryType[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<null | string>(null);
  const { t } = useTranslation();
  const errorString = t('error');

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        setIsLoading(true);
        setError(null);
        const res = await fetch(url);
        const data = await res.json();
        const formattedData = data.map((country: any) => ({
          name: country.name.common,
          capital: country.capital,
          region: country.region,
          subregion: country.subregion,
          flag: country.flags.svg,
          flagDescription: country.flags.alt,
        }));
        setCountriesData(formattedData);
      } catch (error) {
        setError(errorString);
      } finally {
        setIsLoading(false);
      }
    };
    fetchCountries();
  }, [errorString]);

  const value = {
    countries: countriesData,
    isLoading,
    error,
  };

  return <CountriesContext.Provider value={value}>{children}</CountriesContext.Provider>;
}

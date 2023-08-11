import { useEffect, useState } from 'react';
import { CountryDetails, CountryResponse } from '../types';
import { useCountriesContext } from './useCountriesContext';

const url = 'https://restcountries.com/v3.1/alpha/';

export const useCountryDetails = (get: boolean, id: string) => {
  const { countries } = useCountriesContext();
  const [countryDetails, setCountryDetails] = useState<CountryDetails | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (get && id) {
      const fetchCountryDetails = async (id: string) => {
        try {
          setError(null);
          setIsLoading(true);
          const res = await fetch(url + id);
          const data: CountryResponse[] = await res.json();

          const borderCodes = data[0].borders;

          // take borders codes and return country names from cca3 codes
          const borders = countries.reduce((accumulator: string[], currentValue) => {
            if (borderCodes && borderCodes.includes(currentValue.id)) {
              accumulator.push(currentValue.name);
            }
            return accumulator;
          }, []);

          const details: CountryDetails = {
            region: data[0].region,
            subregion: data[0].subregion,
            mapLink: data[0].maps.googleMaps,
            population: data[0].population,
            coatOfArms: data[0].coatOfArms.svg,
            borders: borders,
            carSide: data[0].car.side,
          };

          setCountryDetails(details);
        } catch (e) {
          console.log(e);
          setError('failed to fetch details');
        } finally {
          setIsLoading(false);
        }
      };
      fetchCountryDetails(id);
    }
  }, [get, id]);

  return { countryDetails, isLoading, error };
};

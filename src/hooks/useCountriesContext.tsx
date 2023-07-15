import { useContext } from 'react';
import { CountriesContext } from '../context/CountriesContext';

export function useCountriesContext() {
  const context = useContext(CountriesContext);
  if (context === undefined) {
    throw new Error('useCountriesContext must be used within a CountriesContext Provider');
  }
  return context;
}

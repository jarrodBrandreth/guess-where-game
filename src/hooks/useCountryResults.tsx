import { useTranslation } from 'react-i18next';
import { CountryType, RegionFilter, SubregionFilter } from '../types';
import { useLanguageContext } from './useLanguageContext';
import { useCountriesContext } from './useCountriesContext';

type Filters = {
  searchValue: string;
  regionFilter: RegionFilter | null;
  subregionFilter: SubregionFilter[];
};

export const useCountryResults = () => {
  const { t } = useTranslation('countries');
  const { countries } = useCountriesContext();
  const { currentLanguage } = useLanguageContext();

  const sortByTranslatedNameAtoZ = (countries: CountryType[]): CountryType[] => {
    return countries.sort((a, b) => {
      const nameA = t(a.name).toLowerCase();
      const nameB = t(b.name).toLowerCase();
      return nameA.localeCompare(nameB, currentLanguage);
    });
  };

  const countriesSortedAtoZ = sortByTranslatedNameAtoZ(countries);

  // filters countries translated name key against query string
  const getCountriesByNameQuery = (query: string) => {
    return countriesSortedAtoZ.filter((country) =>
      t(country.name).toLowerCase().includes(query.toLowerCase()),
    );
  };

  // filter countries by filter args
  const getCountriesByAllFilters = ({
    searchValue,
    regionFilter,
    subregionFilter,
  }: Filters): CountryType[] => {
    return countriesSortedAtoZ.filter((country) => {
      const { name, region, subregion } = country;
      const hasSearch = t(name).toLowerCase().includes(searchValue.toLowerCase());
      const includesRegion = !regionFilter || regionFilter === region;
      const includesSubRegion = !subregionFilter.length || subregionFilter.includes(subregion);
      return [hasSearch, includesRegion, includesSubRegion].every((value) => value === true);
    });
  };

  return { getCountriesByNameQuery, getCountriesByAllFilters };
};

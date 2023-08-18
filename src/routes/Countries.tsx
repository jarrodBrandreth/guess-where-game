import { useCallback, useState } from 'react';
import { useCountriesContext } from '../hooks/useCountriesContext';
import RegionFilters from '../components/RegionFilters';
import SubregionFilters from '../components/SubregionFilters';
import { CountryType, RegionFilter, SubregionFilter } from '../types';
import SearchBar from '../components/SearchBar';
import { useTranslation } from 'react-i18next';
import CountriesResults from '../components/CountriesResults';
import FilterBar from '../components/FilterBar';
import NoResults from '../components/NoResults';

export default function Countries() {
  const { countries } = useCountriesContext();
  const [regionFilter, setRegionFilter] = useState<RegionFilter | null>(null);
  const [subregionFilter, setSubregionFilter] = useState<SubregionFilter[]>([]);
  const [searchValue, setSearchValue] = useState('');
  const updateSearchValue = useCallback((e: string) => setSearchValue(e), []);
  const { t } = useTranslation(['country', 'countries']);

  const applyFilters = (countries: CountryType[]) => {
    return countries.filter((country) => {
      const { name, region, subregion } = country;
      const hasSearch = t(name, { ns: 'countries' })
        .toLocaleLowerCase()
        .includes(searchValue.toLocaleLowerCase());
      const includesRegion = !regionFilter || regionFilter === region;
      const includesSubRegion = !subregionFilter.length || subregionFilter.includes(subregion);
      return [hasSearch, includesRegion, includesSubRegion].every((value) => value === true);
    });
  };

  // updates region filter and resets subregion filter when updating
  const updateRegionFilter = (r: RegionFilter | null) => {
    setSubregionFilter([]);
    setRegionFilter(r);
  };

  // update subregion filter
  const updateSubregionFilter = (chosenSubregion: SubregionFilter | null) => {
    if (!chosenSubregion) return setSubregionFilter([]);
    if (subregionFilter.includes(chosenSubregion)) {
      setSubregionFilter((prev) => prev.filter((subregion) => subregion !== chosenSubregion));
    } else {
      setSubregionFilter((prev) => [...prev, chosenSubregion]);
    }
  };

  const clearAllFilters = () => {
    updateRegionFilter(null);
    updateSearchValue('');
  };

  const hasFilters = regionFilter !== null || searchValue !== '';
  const filteredResults = applyFilters(countries);
  const resultsLength = filteredResults.length;

  return (
    <section className="bg-inherit">
      <FilterBar
        hasFilters={hasFilters}
        clearFilters={clearAllFilters}
        resultsLength={resultsLength}
      >
        <RegionFilters currentFilter={regionFilter} updateFilter={updateRegionFilter} />
        {regionFilter && (
          <SubregionFilters
            currentRegion={regionFilter}
            currentSelected={subregionFilter}
            updateFilters={updateSubregionFilter}
          />
        )}
        <SearchBar
          placeholder={t('searchCountries')}
          searchValue={searchValue}
          updateSearch={updateSearchValue}
        />
      </FilterBar>
      {filteredResults.length ? (
        <CountriesResults countries={filteredResults} />
      ) : (
        <NoResults searchValue={searchValue} clearFilters={clearAllFilters} />
      )}
    </section>
  );
}

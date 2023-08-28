import { useState } from 'react';
import RegionFilters from '../components/RegionFilters';
import SubregionFilters from '../components/SubregionFilters';
import { RegionFilter, SubregionFilter } from '../types';
import { useTranslation } from 'react-i18next';
import CountriesResults from '../components/CountriesResults';
import FilterBar from '../components/FilterBar';
import NoResults from '../components/NoResults';
import { useCountryResults } from '../hooks/useCountryResults';
import SearchBar from '../components/SearchBar';

export default function Countries() {
  const [regionFilter, setRegionFilter] = useState<RegionFilter | null>(null);
  const [subregionFilter, setSubregionFilter] = useState<SubregionFilter[]>([]);
  const [searchValue, setSearchValue] = useState('');
  const updateSearchValue = (e: string) => setSearchValue(e);
  const { getCountriesByAllFilters } = useCountryResults();
  const { t } = useTranslation('country');

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
  const results = getCountriesByAllFilters({
    searchValue,
    regionFilter,
    subregionFilter,
  });

  return (
    <section className="bg-inherit">
      <FilterBar
        hasFilters={hasFilters}
        clearFilters={clearAllFilters}
        resultsLength={results.length}
      >
        <RegionFilters currentFilter={regionFilter} updateFilter={updateRegionFilter} />
        {regionFilter && (
          <SubregionFilters
            currentRegion={regionFilter}
            currentSelected={subregionFilter}
            updateFilters={updateSubregionFilter}
          />
        )}
        <div className="w-[min(100%,224px)]">
          <SearchBar
            placeholder={t('searchCountries')}
            searchValue={searchValue}
            updateSearch={updateSearchValue}
          />
        </div>
      </FilterBar>
      {results.length ? (
        <CountriesResults countries={results} />
      ) : (
        <NoResults searchValue={searchValue} clearFilters={clearAllFilters} />
      )}
    </section>
  );
}

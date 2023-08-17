import { useCallback, useState } from 'react';
import { useCountriesContext } from '../hooks/useCountriesContext';
import Country from '../components/Country';
import RegionFilters from '../components/RegionFilters';
import SubregionFilters from '../components/SubregionFilters';
import { CountryType, RegionFilter, SubregionFilter } from '../types';
import SearchBar from '../components/SearchBar';
import { useTranslation } from 'react-i18next';
import Accordion from '../components/Accordion';

export default function Countries() {
  const { countries } = useCountriesContext();
  const [regionFilter, setRegionFilter] = useState<RegionFilter | null>(null);
  const [subregionFilter, setSubregionFilter] = useState<SubregionFilter[]>([]);
  const [searchValue, setSearchValue] = useState('');
  const updateSearchValue = useCallback((e: string) => setSearchValue(e), []);
  const { t } = useTranslation(['common', 'country', 'countries']);

  const filteredResults = (countries: CountryType[]) => {
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

  const ClearFiltersButton = (
    <button
      className="flex w-fit items-center justify-start rounded-md px-2 py-1"
      onClick={clearAllFilters}
    >
      <span className="text-xs">{t('clearFilters')}</span>
    </button>
  );

  const hasFilters = regionFilter || searchValue;

  return (
    <section className="bg-inherit">
      <Accordion
        title={t('filters')}
        containerStyles="sticky top-[70px] md:top-[63px]"
        childrenAbsolute
        additionalElements={hasFilters ? ClearFiltersButton : <></>}
      >
        <div className="flex max-w-[700px] flex-wrap items-start justify-start gap-x-5 gap-y-4">
          <RegionFilters currentFilter={regionFilter} updateFilter={updateRegionFilter} />
          {regionFilter && (
            <SubregionFilters
              currentRegion={regionFilter}
              currentSelected={subregionFilter}
              updateFilters={updateSubregionFilter}
            />
          )}
          <SearchBar
            placeholder={t('searchCountries', { ns: 'country' })}
            searchValue={searchValue}
            updateSearch={updateSearchValue}
          />
        </div>
      </Accordion>
      <div className="grid grid-cols-3 gap-4 p-4 sm:grid-cols-5 md:grid-cols-6 lg:grid-cols-7 xl:grid-cols-8 2xl:grid-cols-10">
        {filteredResults(countries).map((c) => (
          <Country key={c.id} id={c.id} name={c.name} capitals={c.capitals} flagSrc={c.flag} />
        ))}
      </div>
    </section>
  );
}

import { useState } from 'react';
import { useCountriesContext } from '../hooks/useCountriesContext';
import Country from '../components/Country';
import RegionFilters from '../components/RegionFilters';
import SubregionFilters from '../components/SubregionFilters';
import { CountryType, RegionFilter, SubregionFilter } from '../types';

export default function Countries() {
  const { countries } = useCountriesContext();
  const [regionFilter, setRegionFilter] = useState<RegionFilter | null>(null);
  const [subregionFilter, setSubregionFilter] = useState<SubregionFilter[]>([]);
  const [searchValue, setSearchValue] = useState('');

  const filteredResults = (countries: CountryType[]) => {
    return countries.filter((country) => {
      const { name, region, subregion } = country;
      const hasSearch = name.includes(searchValue);
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

  return (
    <section className="p-4">
      <div className="flex flex-wrap items-start gap-x-4 gap-y-2">
        <RegionFilters currentFilter={regionFilter} updateFilter={updateRegionFilter} />
        {regionFilter && (
          <SubregionFilters
            currentRegion={regionFilter}
            currentSelected={subregionFilter}
            updateFilters={updateSubregionFilter}
          />
        )}
      </div>
      <div className="grid grid-cols-3 gap-4 sm:grid-cols-5 md:grid-cols-6 lg:grid-cols-7 xl:grid-cols-8 2xl:grid-cols-10">
        {filteredResults(countries).map((c) => (
          <Country key={c.id} id={c.id} name={c.name} capitals={c.capitals} flagSrc={c.flag} />
        ))}
      </div>
    </section>
  );
}

import { useTranslation } from 'react-i18next';
import Dropdown from './Dropdown/Dropdown';
import DropdownOption from './Dropdown/DropdownOption';
import { countriesFilters } from '../constants';
import { RegionFilter } from '../types';

interface Props {
  currentFilter: RegionFilter | null;
  updateFilter: (r: RegionFilter | null) => void;
}

export default function RegionFilters({ currentFilter, updateFilter }: Props) {
  const { t } = useTranslation('country');
  return (
    <div className="z-10 px-2 text-sm">
      <Dropdown label={t('region')} selected={t(currentFilter ?? 'World')}>
        {Object.keys(countriesFilters).map((filter) => (
          <DropdownOption
            key={filter}
            label={t(filter)}
            currentSelected={filter === currentFilter}
            onClick={() => updateFilter(filter as RegionFilter)}
          />
        ))}
        <DropdownOption
          key={'World'}
          label={t('World')}
          currentSelected={currentFilter === null}
          onClick={() => updateFilter(null)}
        />
      </Dropdown>
    </div>
  );
}

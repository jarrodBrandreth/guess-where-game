import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import ExpandLessIcon from './icons/ExpandLessIcon';
import ExpandMoreIcon from './icons/ExpandMoreIcon';
import Toolbar from './Toolbar';
import Checkbox from './Checkbox';
import { useOutsideClick } from '../hooks/useOutsideClick';
import { countriesFilters } from '../constants';
import { RegionFilter, SubregionFilter } from '../types';

interface Props {
  currentRegion: RegionFilter;
  currentSelected: SubregionFilter[];
  updateFilters: (f: SubregionFilter | null) => void;
}

export default function SubregionFilters({ currentRegion, currentSelected, updateFilters }: Props) {
  const { t } = useTranslation(['common', 'country']);
  const [showFilters, setShowFilters] = useState(false);
  const { containerRef } = useOutsideClick<HTMLDivElement>(() => setShowFilters(false));
  const noneSelected = !currentSelected.length;
  const numberOfSelected = currentSelected.length;

  return (
    <div ref={containerRef} className="relative z-10 w-fit text-sm">
      <button
        className={`flex items-center rounded-md px-2 py-1.5 hover:bg-pop hover:text-neutral-100 ${
          showFilters ? 'bg-pop text-neutral-100' : 'bg-transparent'
        }`}
        onClick={() => setShowFilters((prev) => !prev)}
      >
        <span className="font-semibold">{t('subregion', { ns: 'country' })}</span>
        <span className="">{showFilters ? <ExpandLessIcon /> : <ExpandMoreIcon />}</span>
      </button>
      {showFilters && (
        <Toolbar positioning="bottom-center">
          <fieldset className="grid w-max grid-cols-1 gap-3 p-3 md:grid-cols-2">
            <legend className="sr-only">{t('subregion', { ns: 'country' })}</legend>
            {countriesFilters[currentRegion].map((filter) => {
              return (
                <div key={filter}>
                  <Checkbox
                    label={t(filter, { ns: 'country' })}
                    isChecked={currentSelected.includes(filter)}
                    onChange={() => updateFilters(filter)}
                  />
                </div>
              );
            })}
          </fieldset>
          <div className="mt-3 flex justify-center ">
            <button
              className={`p-2 font-semibold text-pop ${noneSelected ? 'opacity-60' : ''}`}
              disabled={noneSelected}
              onClick={() => updateFilters(null)}
            >
              {t('clear', { ns: 'common' })}
            </button>
          </div>
        </Toolbar>
      )}
      {numberOfSelected > 0 && (
        <span className="absolute left-full top-0 flex h-5 w-5 -translate-x-3/4 -translate-y-1/2 items-center justify-center rounded-full bg-red-500 dark:bg-red-600">
          <span className="text-xs text-neutral-100 opacity-100">{numberOfSelected}</span>
        </span>
      )}
    </div>
  );
}

import { useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useOutsideClick } from '../hooks/useOutsideClick';
import SearchResults from './SearchResults';
import SearchBar from './SearchBar';
import LogoIcon from './icons/LogoIcon';
import { useCountryResults } from '../hooks/useCountryResults';
import { CountryType } from '../types';

interface Props {
  applyGuess: (guess: string) => void;
}

export default function GuessInput({ applyGuess }: Props) {
  const { t } = useTranslation(['game', 'countries']);
  const { getCountriesByNameQuery } = useCountryResults();
  const [searchValue, setSearchValue] = useState('');
  const [showResults, setShowResults] = useState(false);
  const hideResults = useCallback(() => setShowResults(false), []);
  const { containerRef } = useOutsideClick<HTMLDivElement>(hideResults);
  const updateSearchValue = (value: string) => setSearchValue(value);
  const chooseResult = (value: CountryType) => {
    applyGuess(t(value.name, { ns: 'countries' }) as string);
    setSearchValue(t(value.name, { ns: 'countries' }) as string);
    hideResults();
  };

  const results = getCountriesByNameQuery(searchValue);

  return (
    <div ref={containerRef} className="group relative w-full">
      <SearchBar
        searchValue={searchValue}
        updateSearch={updateSearchValue}
        placeholder={t('yourGuess')}
        Icon={LogoIcon}
        onFocus={() => setShowResults(true)}
      />
      {showResults && searchValue !== '' && (
        <SearchResults results={results} chooseResult={chooseResult} searchValue={searchValue} />
      )}
    </div>
  );
}

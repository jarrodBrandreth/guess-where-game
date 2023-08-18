import SearchIcon from './icons/SearchIcon';
import CloseIcon from './icons/CloseIcon';
import { useTranslation } from 'react-i18next';

interface Props {
  searchValue: string;
  updateSearch: (s: string) => void;
  // translated input placeholder
  placeholder: string;
}

export default function SearchBar({ placeholder, searchValue, updateSearch }: Props) {
  const { t } = useTranslation();
  const nameId = placeholder.replaceAll(' ', '');
  return (
    <div className="group relative h-fit w-[min(100%,224px)]">
      <span className="pointer-events-none absolute top-1/2 -translate-y-1/2 pl-3 opacity-60">
        <SearchIcon />
      </span>
      <label className="sr-only" htmlFor={nameId}>
        {placeholder}
      </label>
      <input
        className="w-full overflow-ellipsis rounded-2xl border-2 border-neutral-300 bg-transparent px-9 py-1 caret-pop outline-none group-focus-within:border-pop group-hover:border-pop dark:border-neutral-600 dark:focus:border-pop"
        type="text"
        id={nameId}
        name={nameId}
        placeholder={placeholder}
        value={searchValue}
        onChange={(e) => updateSearch(e.target.value)}
      />
      {searchValue && (
        <button
          className="absolute right-3 top-1/2 flex h-6 w-6 -translate-y-1/2 items-center justify-center rounded-sm opacity-60 outline-none hover:bg-neutral-300 hover:opacity-100 focus:bg-neutral-300 dark:hover:bg-neutral-600 dark:focus:bg-neutral-600"
          onClick={() => updateSearch('')}
        >
          <span className="sr-only">{t('clearSearch')}</span>
          <CloseIcon aria-hidden size="18px" />
        </button>
      )}
    </div>
  );
}

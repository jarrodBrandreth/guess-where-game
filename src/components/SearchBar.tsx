import SearchIcon from './icons/SearchIcon';
import CloseIcon from './icons/CloseIcon';
import { useTranslation } from 'react-i18next';
import { SvgIconProps } from '../types';

interface Props {
  searchValue: string;
  updateSearch: (query: string) => void;
  // translated input placeholder
  placeholder: string;
  // optional icon to change, defaults to search icon if none provided
  Icon?: ({ className, size }: SvgIconProps) => JSX.Element;
  onBlur?: () => void;
  onFocus?: () => void;
}

export default function SearchBar({
  placeholder,
  searchValue,
  updateSearch,
  Icon,
  onBlur,
  onFocus,
}: Props) {
  const { t } = useTranslation();
  const nameId = placeholder.replaceAll(' ', '');
  const SearchBarIcon = Icon ?? SearchIcon;

  return (
    <div className="group relative h-fit w-full">
      <span className="pointer-events-none absolute top-1/2 -translate-y-1/2 pl-2 opacity-40 group-focus-within:opacity-80">
        <SearchBarIcon size="24px" />
      </span>
      <label className="sr-only" htmlFor={nameId}>
        {placeholder}
      </label>
      <input
        className="w-full overflow-ellipsis rounded-md border border-neutral-300 bg-transparent px-9 py-1 caret-green-600 outline-none focus:border-green-700 group-hover:border-green-700 dark:border-neutral-600 dark:caret-green-500 dark:focus:border-green-600 group-hover:dark:border-green-600"
        type="text"
        id={nameId}
        name={nameId}
        placeholder={placeholder}
        value={searchValue}
        onChange={(e) => updateSearch(e.target.value)}
        onFocus={onFocus}
        onBlur={onBlur}
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

import { useTranslation } from 'react-i18next';
import NEArrowIcon from './icons/NorthEastArrow';
import { CountryType } from '../types';

interface Props {
  results: CountryType[];
  chooseResult: (value: CountryType) => void;
  searchValue: string;
}

export default function SearchResults({ chooseResult, results, searchValue }: Props) {
  const { t } = useTranslation(['common', 'countries']);
  const hasResults = results.length > 0;

  return (
    <div className="absolute left-0 top-full w-full px-0.5 py-1 ">
      <ul className="flex max-h-52 flex-col gap-3 overflow-y-auto rounded-bl-md rounded-br-md py-2 shadow-lg dark:bg-neutral-700">
        {hasResults ? (
          results.map((result) => (
            <li key={result.id} className="">
              <button
                className="flex w-full items-center justify-between p-2 text-start hover:bg-neutral-200 focus:bg-neutral-200 dark:hover:bg-neutral-500 dark:focus:bg-neutral-500"
                onClick={() => chooseResult(result)}
              >
                <span>{t(result.name, { ns: 'countries' })}</span>
                <span className="opacity-50">
                  <NEArrowIcon />
                </span>
              </button>
            </li>
          ))
        ) : (
          <li className="">
            <span className="flex items-center  p-1.5 text-start ">
              {t('noResultsFound', { query: searchValue })}
            </span>
          </li>
        )}
      </ul>
    </div>
  );
}

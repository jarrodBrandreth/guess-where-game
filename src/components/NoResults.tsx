import { useTranslation } from 'react-i18next';
import ButtonOutlined from './ButtonOutlined';

interface Props {
  searchValue: string;
  clearFilters: () => void;
}

export default function NoResults({ searchValue, clearFilters }: Props) {
  const { t } = useTranslation();

  return (
    <div className="flex h-full w-full flex-col items-center justify-center gap-6 p-4">
      <p className="text-center text-lg font-semibold">
        {t('noResultsFound', { query: searchValue })}
      </p>
      <ButtonOutlined content={t('clearFiltersTryAgain')} squared onClick={clearFilters} />
    </div>
  );
}

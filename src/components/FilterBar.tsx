import { useTranslation } from 'react-i18next';
import Accordion from './Accordion';
import ButtonSolid from './ButtonSolid';

interface Props {
  hasFilters: boolean;
  clearFilters: () => void;
  resultsLength: number;
  children: React.ReactNode;
}

export default function FilterBar({ hasFilters, clearFilters, resultsLength, children }: Props) {
  const { t } = useTranslation();

  return (
    <Accordion
      title={t('filters')}
      containerStyles="sticky top-0 border-b border-neutral-300 dark:border-neutral-600"
      additionalElements={
        hasFilters ? (
          <div className="flex flex-wrap items-baseline justify-between gap-4 pr-14">
            <ButtonSolid content={t('clearFilters')} size="text-xs" onClick={clearFilters} />
            <span>{t('numberOfResults', { resultsNumber: resultsLength })}</span>
          </div>
        ) : (
          <></>
        )
      }
    >
      <div className="flex max-w-[700px] flex-wrap items-center justify-start gap-x-5 gap-y-4">
        {children}
      </div>
    </Accordion>
  );
}

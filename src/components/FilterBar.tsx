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
      containerStyles="sticky top-[70px] md:top-[63px]"
      additionalElements={
        hasFilters ? (
          <div className="flex flex-wrap items-baseline justify-between gap-4">
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

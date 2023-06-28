import { useTranslation } from 'react-i18next';
import ButtonRoundOutline from '../ButtonRoundOutline';
import ExpandLessIcon from '../icons/ExpandLessIcon';
import LanguageOptions from './LanguageOptions';

interface LanguageSelectProps {
  show: boolean;
  // function to hide language options
  close: () => void;
}

export default function LanguageSelect({ show, close }: LanguageSelectProps) {
  const { t } = useTranslation();
  return (
    <div
      className={`${
        show
          ? 'absolute left-0 top-full mt-2.5 w-52 rounded-lg p-4 md:left-auto md:right-0'
          : 'sr-only'
      } bg-neutral-100 shadow-md focus-within:shadow-xl hover:shadow-xl dark:bg-neutral-800`}
    >
      <h2 className="mb-3.5 mt-1 flex items-center justify-between">
        <span className="font-medium capitalize md:text-xl">{t('languages')}</span>
        <ButtonRoundOutline tabbable={show} onClick={close}>
          <ExpandLessIcon />
          <span className="sr-only">{t('hideLanguageOptions')}</span>
        </ButtonRoundOutline>
      </h2>
      <LanguageOptions show={show} />
    </div>
  );
}

import { useTranslation } from 'react-i18next';
import LoadingIcon from './icons/LoadingIcon';

export default function Loader() {
  const { t } = useTranslation();
  return (
    <div className="flex items-center justify-center gap-2 px-2 py-1">
      <span className="animate-spin opacity-50">
        <LoadingIcon />
      </span>
      <span>{t('loading')}</span>
    </div>
  );
}

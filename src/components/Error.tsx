import { useTranslation } from 'react-i18next';
import ErrorIcon from './icons/ErrorIcon';

interface Props {
  message?: string;
}

export default function Error({ message }: Props) {
  const { t } = useTranslation();
  return (
    <div className="flex w-full justify-center">
      <article className="w-fit rounded-md border-2 border-red-300 px-2 py-1 dark:border-red-400">
        <h1 className="my-4 text-center text-xl font-semibold">Error</h1>
        <p className="my-4 flex items-center">
          <span className="mr-2 text-red-600 dark:text-red-500" aria-hidden>
            <ErrorIcon />
          </span>
          {message ?? t('error')}
        </p>
      </article>
    </div>
  );
}

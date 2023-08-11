import { useTranslation } from 'react-i18next';
import { useOutsideClick } from '../hooks/useOutsideClick';
import CloseIcon from './icons/CloseIcon';
import { createPortal } from 'react-dom';
import { useFocusTrap } from '../hooks/useFocusTrap';
import Loader from './Loader';

interface Props {
  isOpen: boolean;
  isLoading?: boolean;
  closeModal: () => void;
  heading: string;
  children: React.ReactNode;
}

export default function Modal({ isOpen, isLoading = false, closeModal, children, heading }: Props) {
  const { t } = useTranslation();
  const { containerRef } = useOutsideClick<HTMLElement>(closeModal);
  const enableFocusTrap = isOpen && !isLoading;
  const { focusTrapRef } = useFocusTrap<HTMLDivElement>(enableFocusTrap, closeModal);
  const portal = document.getElementById('modal');

  if (!isOpen || !portal) return null;
  return createPortal(
    <div
      ref={focusTrapRef}
      className="fixed left-0 top-0 z-50 flex h-screen w-screen items-center justify-center backdrop-blur-xs"
    >
      <article
        ref={containerRef}
        className="relative max-h-[80vh] w-[min(98%,500px)] overflow-y-auto rounded-md border border-neutral-200 bg-neutral-50 p-4 pt-6 shadow-xl outline-none dark:border-neutral-600 dark:bg-neutral-950"
      >
        <h1 className="mb-4 text-center text-xl font-semibold">{heading}</h1>
        {isLoading ? <Loader /> : children}
        <button
          className="absolute right-0 top-0 flex items-center justify-center p-3"
          onClick={closeModal}
        >
          <CloseIcon />
          <span className="sr-only">{t('closeModal')}</span>
        </button>
      </article>
    </div>,
    portal,
  );
}

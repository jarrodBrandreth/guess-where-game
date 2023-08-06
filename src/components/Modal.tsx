import { useTranslation } from 'react-i18next';
import { useOutsideClick } from '../hooks/useOutsideClick';
import CloseIcon from './icons/CloseIcon';
import { createPortal } from 'react-dom';
import { useFocusTrap } from '../hooks/useFocusTrap';

interface Props {
  isOpen: boolean;
  closeModal: () => void;
  // translation should be available in locales/modals
  heading: string;
  children: React.ReactNode;
}

export default function Modal({ isOpen, closeModal, children, heading }: Props) {
  const { t } = useTranslation();
  const { containerRef } = useOutsideClick<HTMLElement>(closeModal);
  const { focusTrapRef } = useFocusTrap<HTMLDivElement>(isOpen, closeModal);
  const portal = document.getElementById('modal');

  if (!isOpen || !portal) return null;
  return createPortal(
    <div
      ref={focusTrapRef}
      className="fixed left-0 top-0 z-50 flex h-screen w-screen items-center justify-center backdrop-blur-xs"
    >
      <section
        ref={containerRef}
        className="relative w-[min(98%,500px)] rounded-md border border-neutral-200 bg-neutral-50 p-4 pt-6 shadow-xl outline-none dark:border-neutral-600 dark:bg-neutral-950"
      >
        <h1 className="mb-4 text-center text-xl font-semibold">{t(heading)}</h1>
        {children}
        <button
          className="absolute right-0 top-0 flex items-center justify-center p-3"
          onClick={closeModal}
        >
          <CloseIcon />
          <span className="sr-only">{t('closeModal')}</span>
        </button>
      </section>
    </div>,
    portal,
  );
}

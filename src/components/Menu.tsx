import NavLink from './NavLink';
import PlayIcon from './icons/PlayIcon';
import BookIcon from './icons/BookIcon';
import { useTranslation } from 'react-i18next';
import Info from './Info';
import ThemeSwitcher from './ThemeSwitcher';
import LanguageSwitcher from './LanguageSwitcher';
import MenuIcon from './icons/MenuIcon';
import { useCallback, useEffect, useState } from 'react';
import CloseIcon from './icons/CloseIcon';
import { useOutsideClick } from '../hooks/useOutsideClick';
import { debounce } from 'lodash';
import { mobileScreenSize } from '../constants';
import { useFocusTrap } from '../hooks/useFocusTrap';

export default function Menu() {
  const { t } = useTranslation();
  const [open, setOpen] = useState(false);
  const [isMobileSize, setIsMobileSize] = useState<boolean>(window.innerWidth < mobileScreenSize);
  const closeMenu = useCallback(() => setOpen(false), []);
  const { containerRef } = useOutsideClick<HTMLDivElement>(closeMenu);
  const { focusTrapRef } = useFocusTrap(open, closeMenu);

  useEffect(() => {
    const handleResize = debounce(() => {
      if (window.innerWidth < mobileScreenSize) {
        setIsMobileSize(true);
      } else {
        setOpen(false);
        setIsMobileSize(false);
      }
    }, 250);

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      handleResize.cancel();
    };
  }, []);

  return (
    <>
      <button
        className="fixed right-0 top-0 z-40 mr-3.5 mt-3 rounded-full bg-green-700 p-2 sm:hidden"
        onClick={(e) => {
          e.stopPropagation();
          setOpen(true);
        }}
      >
        <span className="text-neutral-50">
          <MenuIcon size="22px" />
        </span>
      </button>

      <section
        ref={focusTrapRef}
        className={`fixed right-0 top-0 z-40 flex h-screen ${
          open
            ? 'bg-neutral-300/50 p-3 dark:bg-neutral-700/50 sm:bg-transparent sm:dark:bg-transparent'
            : 'translate-x-full sm:translate-x-0'
        } w-screen items-start justify-end backdrop-blur-sm sm:relative sm:block sm:h-auto sm:w-auto sm:rounded-none sm:p-0 sm:backdrop-blur-none`}
      >
        <div
          ref={containerRef}
          className="w-[min(86%,320px)] rounded-2xl bg-neutral-50 p-3 pb-32 dark:bg-neutral-800 sm:w-auto sm:rounded-none sm:bg-transparent sm:p-0"
        >
          <div className="relative mb-6 sm:hidden">
            <h2 className="p-2 text-center font-semibold">{t('menu')}</h2>
            <button className="absolute right-0 top-0 p-2" onClick={() => setOpen(false)}>
              <span>
                <CloseIcon />
              </span>
            </button>
          </div>
          <div className="flex flex-col gap-4 sm:flex-row sm:pr-6">
            <nav className="flex flex-col gap-4 sm:flex-row">
              <NavLink path="game" label={t('game')} Icon={PlayIcon} />
              <NavLink path="countries" label={t('countries')} Icon={BookIcon} />
            </nav>
            <div className="flex flex-col gap-4 sm:flex-row">
              <Info />
              <ThemeSwitcher />
              <LanguageSwitcher isMobileSize={isMobileSize} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

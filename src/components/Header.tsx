import Logo from './Logo';
import ThemeSwitcher from './ThemeSwitcher';
import Navigation from './Navigation';
import LanguageSwitcher from './LanguageSwitcher';

export default function Header() {
  return (
    <header className="sticky top-0 flex w-screen items-center justify-between bg-neutral-200 px-4 dark:bg-neutral-900 md:border-b md:border-neutral-300 md:bg-neutral-50 md:px-7 dark:md:border-neutral-600 dark:md:dark:bg-neutral-800 lg:justify-end">
      <Logo />
      <div className="flex items-baseline bg-inherit py-5 md:mr-4 md:py-4">
        <Navigation />
        <ThemeSwitcher />
        <LanguageSwitcher />
      </div>
    </header>
  );
}

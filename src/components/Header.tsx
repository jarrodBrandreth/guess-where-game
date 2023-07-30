import Logo from './Logo';
import LanguageSwitcher from './LanguageSwitcher';
import ThemeSwitcher from './ThemeSwitcher';
import Navigation from './Navigation';

export default function Header() {
  return (
    <header className="fixed flex h-16 w-screen justify-start bg-neutral-200 px-4 py-3 dark:bg-neutral-900 md:bg-transparent md:py-6 dark:md:bg-transparent lg:justify-center">
      <Logo />
      <div className="absolute right-0 top-0 mr-4 flex h-full items-center bg-inherit md:mr-6">
        <Navigation />
        <ThemeSwitcher />
        <LanguageSwitcher />
      </div>
    </header>
  );
}

import Logo from './Logo';
import Menu from './Menu';

export default function Header() {
  return (
    <header className="flex w-full items-center justify-between p-4 sm:pb-6">
      <Logo />
      <Menu />
    </header>
  );
}

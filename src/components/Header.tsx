import Logo from './Logo';
import { Menu } from './Menu';

export default function Header() {
  return (
    <header className="relative flex w-full items-center justify-start p-4">
      <Logo />
      <Menu />
    </header>
  );
}

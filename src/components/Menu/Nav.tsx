import NavLink from './NavLink';

export default function Nav() {
  return (
    <nav className="flex w-full flex-grow flex-col items-start gap-6 border-b py-6 md:w-auto md:flex-row md:border-none md:px-6 md:py-0">
      <NavLink path="game" name="game" />
      <NavLink path="countries" name="countries" />
      <NavLink path="about" name="about" />
    </nav>
  );
}

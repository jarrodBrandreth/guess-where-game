import { useTranslation } from 'react-i18next';
import { Link, useLocation } from 'react-router-dom';

interface NavLinkProps {
  // route to navigate to
  path: string;
  // text between link tag
  name: string;
}

export default function NavLink({ path, name }: NavLinkProps) {
  const { t } = useTranslation('routes');
  const currentRoute = useLocation().pathname.includes(path);

  return (
    <Link
      className={`group flex flex-col items-center outline-none transition-transform duration-200 ${
        currentRoute
          ? 'cursor-default md:scale-125'
          : 'opacity-60 hover:opacity-100 focus:opacity-100'
      }`}
      to={path}
    >
      <span className="font-semibold capitalize">{t(name)}</span>
      <span
        className={`hidden h-0.5 w-0 bg-pop-600 transition-all delay-75 duration-200 ease-out dark:bg-pop-500 ${
          currentRoute ? 'w-full' : ''
        } md:block`}
        aria-hidden
      />
    </Link>
  );
}

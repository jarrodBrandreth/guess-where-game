import { useTranslation } from 'react-i18next';
import { SvgIconProps } from '../types';
import { Link } from 'react-router-dom';

interface Props {
  Icon: ({ className, size }: SvgIconProps) => JSX.Element;
  path: string;
  // label should have a matching translation in translation/routes
  label: string;
}

export default function NavigationLink({ Icon, path, label }: Props) {
  const { t } = useTranslation('routes');
  return (
    <Link
      className="group relative px-2 outline-none hover:text-pop focus:text-pop"
      to={path}
      onClick={(e) => e.currentTarget.blur()}
    >
      <Icon />
      <span className="pointer-events-none absolute left-2/4 top-full -translate-x-1/2 opacity-0 group-hover:opacity-100 group-focus:opacity-100">
        {t(label)}
      </span>
    </Link>
  );
}

import { Link } from 'react-router-dom';
import { SvgIconProps } from '../types';

interface Props {
  Icon: ({ className, size }: SvgIconProps) => JSX.Element;
  path: string;
  label: string;
}

export default function NavLink({ path, label, Icon }: Props) {
  return (
    <Link
      className="group relative flex w-fit items-center gap-2 px-2 py-1 sm:p-0.5 sm:outline-none sm:hover:text-green-700 sm:focus:text-green-700 sm:dark:hover:text-green-500 sm:dark:focus:text-green-500"
      to={path}
      onClick={(e) => e.currentTarget.blur()}
    >
      <span>
        <Icon size="30px" />
      </span>
      <span className=" capitalize sm:pointer-events-none sm:absolute sm:left-1/2 sm:top-full sm:-translate-x-1/2 sm:opacity-0 sm:group-hover:opacity-100 sm:group-focus:opacity-100">
        {label}
      </span>
    </Link>
  );
}

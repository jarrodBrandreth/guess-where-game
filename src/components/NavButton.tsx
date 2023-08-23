import { SvgIconProps } from '../types';

interface Props {
  label: string;
  Icon: ({ className, size }: SvgIconProps) => JSX.Element;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
  // if belonging to a modal or dropdown you can set to true to set color to icon
  isActive?: boolean;
}

export default function NavButton({ label, Icon, onClick, isActive }: Props) {
  return (
    <button
      className={`group relative flex w-fit items-center gap-2 px-2 py-1 sm:p-0.5 sm:outline-none ${
        isActive && 'text-green-700 dark:text-green-500'
      } sm:hover:text-green-700 sm:focus:text-green-700 sm:dark:hover:text-green-500 sm:dark:focus:text-green-500`}
      onClick={(e) => {
        e.currentTarget.blur();
        onClick(e);
      }}
    >
      <span>
        <Icon size="30px" />
      </span>
      <span className="capitalize sm:pointer-events-none sm:absolute sm:left-1/2 sm:top-full sm:-translate-x-1/2 sm:opacity-0 sm:group-hover:opacity-100 sm:group-focus:opacity-100">
        {label}
      </span>
    </button>
  );
}

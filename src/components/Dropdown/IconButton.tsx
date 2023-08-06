interface Props {
  label: string;
  selected: string;
  showing: boolean;
  onClick: () => void;
  children: React.ReactNode;
}

export default function IconButton({ label, selected, showing, onClick, children }: Props) {
  return (
    <>
      <button
        className={`group relative px-2 outline-none hover:text-pop focus:text-pop ${
          showing ? 'text-pop' : ''
        }`}
        aria-labelledby="dropdownSelection"
        onClick={(e) => {
          e.currentTarget.blur();
          onClick();
        }}
      >
        {children}
        <span
          className={`pointer-events-none absolute left-1/2 top-full -translate-x-1/2 text-xs uppercase group-hover:opacity-0 group-focus:opacity-0 ${
            showing ? 'opacity-0' : 'opacity-100'
          }`}
        >
          {selected}
        </span>
        <span
          id="dropdownSelection"
          className={`pointer-events-none absolute left-1/2 top-full -translate-x-1/2 text-sm  md:text-base ${
            showing ? 'opacity-0' : 'opacity-0 group-hover:opacity-100 group-focus:opacity-100'
          }`}
        >
          {label}
        </span>
      </button>
    </>
  );
}

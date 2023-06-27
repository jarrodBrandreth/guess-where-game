interface ButtonRoundOutlineProps {
  onClick: () => void;
  children: React.ReactNode;
}

export default function ButtonRoundOutline({ onClick, children }: ButtonRoundOutlineProps) {
  return (
    <button
      className="flex items-center justify-center rounded-full border-2 p-1 outline-none hover:opacity-60 focus:opacity-60"
      onClick={(e) => {
        e.currentTarget.blur();
        onClick();
      }}
    >
      {children}
    </button>
  );
}

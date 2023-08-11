interface Props {
  name: string;
  flag: { src: string; alt: string };
  onClick: () => void;
}

export default function CountryButton({ name, flag, onClick }: Props) {
  return (
    <button
      className="flex flex-col items-center justify-end rounded-md border border-neutral-300 p-2 transition-all hover:border-neutral-500 hover:shadow-xl focus:shadow-xl focus:outline-pop dark:border-neutral-600 dark:hover:border-neutral-400"
      onClick={(e) => {
        e.stopPropagation();
        onClick();
      }}
    >
      <img src={flag.src} alt={flag.alt} />
      <span className="responsive-text">{name}</span>
    </button>
  );
}

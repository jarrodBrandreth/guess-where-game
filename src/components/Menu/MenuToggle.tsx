import CloseIcon from '../icons/CloseIcon';
import MenuIcon from '../icons/MenuIcon';

interface MenuToggleProps {
  open: boolean;
  onClick: () => void;
}

export default function MenuToggle({ open, onClick }: MenuToggleProps) {
  return (
    <button className="absolute right-0 top-0 p-4 md:hidden" onClick={onClick}>
      {open ? <CloseIcon /> : <MenuIcon />}
    </button>
  );
}

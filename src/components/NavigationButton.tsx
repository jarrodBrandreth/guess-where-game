import { useTranslation } from 'react-i18next';
import { SvgIconProps } from '../types';

interface Props {
  Icon: ({ className, size }: SvgIconProps) => JSX.Element;
  // label should have a translation available in locales/common
  label: string;
  onClick: () => void;
}

export default function NavigationButton({ Icon, label, onClick }: Props) {
  const { t } = useTranslation('common');
  return (
    <button
      className="group relative px-2 outline-none hover:text-pop focus:text-pop"
      onClick={(e) => {
        e.currentTarget.blur();
        e.stopPropagation();
        onClick();
      }}
    >
      <Icon />
      <span className="pointer-events-none absolute left-2/4 top-full -translate-x-1/2 opacity-0 group-hover:opacity-100 group-focus:opacity-100">
        {t(label)}
      </span>
    </button>
  );
}

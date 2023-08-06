import { useCallback, useState } from 'react';
import { useOutsideClick } from '../../hooks/useOutsideClick';
import { SvgIconProps } from '../../types';
import TextBoxButton from './TextBoxButton';
import IconButton from './IconButton';
import Toolbar from '../Toolbar';

interface Props {
  label: string;
  selected: string;
  buttonStyle?: 'textbox' | 'icon';
  // use DropdownOption component as children
  children: React.ReactNode;
  Icon?: ({ className, size }: SvgIconProps) => JSX.Element;
}

export default function Dropdown({
  label,
  selected,
  buttonStyle = 'textbox',
  children,
  Icon,
}: Props) {
  const [showOptions, setShowOptions] = useState(false);
  const closeOptions = useCallback(() => setShowOptions(false), []);
  const toggleOptions = () => setShowOptions((prev) => !prev);
  const { containerRef } = useOutsideClick<HTMLDivElement>(closeOptions);

  return (
    <div ref={containerRef} className="relative flex w-fit items-center justify-start gap-2">
      {buttonStyle === 'textbox' && (
        <TextBoxButton
          label={label}
          selected={selected}
          showing={showOptions}
          onClick={toggleOptions}
        />
      )}
      {buttonStyle === 'icon' && Icon && (
        <IconButton label={label} selected={selected} showing={showOptions} onClick={toggleOptions}>
          <Icon />
        </IconButton>
      )}
      {showOptions && (
        <Toolbar positioning="bottom-right">
          <div className="flex flex-col gap-2">
            <h2
              className={`mx-4 my-2 text-center text-lg font-semibold ${
                buttonStyle === 'textbox' ? 'sr-only' : 'not-sr-only'
              }`}
            >
              {label}
            </h2>
            <ul className="">{children}</ul>
          </div>
        </Toolbar>
      )}
    </div>
  );
}

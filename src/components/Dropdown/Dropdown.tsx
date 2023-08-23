import { useCallback, useState } from 'react';
import { useOutsideClick } from '../../hooks/useOutsideClick';
import { SvgIconProps } from '../../types';
import TextBoxButton from './TextBoxButton';
import Toolbar, { ToolBarPositioning } from '../Toolbar';

interface ButtonProps {
  label: string;
  Icon: ({ className, size }: SvgIconProps) => JSX.Element;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
  isActive?: boolean;
}

interface Props {
  label: string;
  selected: string;
  children: React.ReactNode;
  Button?: ({ label, onClick, Icon, isActive }: ButtonProps) => JSX.Element | undefined;
  Icon?: ({ className, size }: SvgIconProps) => JSX.Element;
  dropDownPositioning?: ToolBarPositioning;
}

export default function Dropdown({
  label,
  selected,
  children,
  Button,
  Icon,
  dropDownPositioning = 'bottom-right',
}: Props) {
  const [showOptions, setShowOptions] = useState(false);
  const closeOptions = useCallback(() => setShowOptions(false), []);
  const toggleOptions = () => setShowOptions((prev) => !prev);
  const { containerRef } = useOutsideClick<HTMLDivElement>(closeOptions);

  return (
    <div ref={containerRef} className="relative flex w-fit items-center justify-start gap-2">
      {Button && Icon ? (
        <Button label={label} onClick={toggleOptions} Icon={Icon} isActive={showOptions} />
      ) : (
        <TextBoxButton
          label={label}
          selected={selected}
          showing={showOptions}
          onClick={toggleOptions}
        />
      )}
      {showOptions && (
        <Toolbar positioning={dropDownPositioning}>
          <div className="flex flex-col gap-2">
            <h2
              className={`mx-4 my-2 text-center text-lg font-semibold ${
                Button ? 'sr-only' : 'not-sr-only'
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

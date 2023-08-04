import { useCallback, useState } from 'react';
import { useOutsideClick } from '../hooks/useOutsideClick';
import LanguageButton from './LanguageButton';
import LanguageOptions from './LanguageOptions';

export default function LanguageSwitcher() {
  const [showOptions, setShowOptions] = useState(false);
  const closeOptions = useCallback(() => setShowOptions(false), []);
  const { containerRef } = useOutsideClick<HTMLDivElement>(closeOptions);

  return (
    <div ref={containerRef} className="relative w-fit leading-none">
      <LanguageButton showing={showOptions} onClick={() => setShowOptions((prev) => !prev)} />
      <LanguageOptions showing={showOptions} />
    </div>
  );
}

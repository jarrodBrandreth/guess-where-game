import { useEffect, useRef } from 'react';

export const useOutsideClick = <T extends HTMLElement>(callback: () => void) => {
  const containerRef: React.MutableRefObject<T | null> = useRef(null);

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        callback();
      }
    };
    document.addEventListener('click', handleClick);

    return () => {
      document.removeEventListener('click', handleClick);
    };
  }, [containerRef, callback]);

  return { containerRef };
};

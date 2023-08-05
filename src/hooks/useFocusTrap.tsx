import { useEffect, useRef } from 'react';

export const useFocusTrap = <T extends HTMLElement>(isEnabled: boolean, disable: () => void) => {
  const focusTrapRef: React.MutableRefObject<T | null> = useRef(null);
  const lastFocusedElementRef: React.MutableRefObject<HTMLElement | null> = useRef(null);

  useEffect(() => {
    // early exit
    if (!isEnabled || !focusTrapRef.current) return;

    const containerElement = focusTrapRef.current;
    // get all focusable elements of container
    const focusableElements = containerElement.querySelectorAll(
      'a, button, textarea, input, select, [tabindex="0"]',
    );
    const firstFocusable = focusableElements[0] as HTMLElement;
    const lastFocusable = focusableElements[focusableElements.length - 1] as HTMLElement;

    firstFocusable.focus();

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Tab') {
        if (event.shiftKey && document.activeElement === firstFocusable) {
          event.preventDefault();
          lastFocusable.focus();
        } else if (!event.shiftKey && document.activeElement === lastFocusable) {
          event.preventDefault();
          firstFocusable.focus();
        }
      } else if (event.key === 'Escape') {
        disable();
      }
    };

    lastFocusedElementRef.current = document.activeElement as HTMLElement;
    containerElement.addEventListener('keydown', handleKeyDown);

    // return focus to the last focused element when the trap is removed
    return () => {
      containerElement.removeEventListener('keydown', handleKeyDown);
      if (lastFocusedElementRef.current) {
        lastFocusedElementRef.current.focus();
      }
    };
  }, [isEnabled, disable]);

  return { focusTrapRef };
};

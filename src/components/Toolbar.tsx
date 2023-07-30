type Positioning = 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';

// function to return position based on 'positioning' prop
const positionStyle = (p: Positioning) => {
  switch (p) {
    case 'top-left':
      return 'top-0 -translate-y-full origin-bottom pb-2';
    case 'top-right':
      return 'top-0 right-0 -translate-y-full origin-bottom pb-2';
    case 'bottom-left':
      return 'top-full pt-2';
    case 'bottom-right':
      return 'top-full right-0 pt-2';
    default:
      // default to top-left styles
      return 'top-0 -translate-y-full origin-bottom pb-2';
  }
};

// function to return pseudo element position based on 'positioning' prop
const tipPosition = (p: Positioning) => {
  switch (p) {
    case 'top-left':
      return 'before:top-full before:left-4 before:-translate-y-2/4 before:border-r-neutral-200 before:border-b-neutral-200 dark:before:border-r-neutral-600 dark:before:border-b-neutral-600';
    case 'top-right':
      return 'before:top-full before:right-4 before:-translate-y-2/4 before:border-r-neutral-200 before:border-b-neutral-200 dark:before:border-r-neutral-600 dark:before:border-b-neutral-600';
    case 'bottom-left':
      return 'before:top-0 before:left-4 before:-translate-y-2/4 before:border-l-neutral-200 before:border-t-neutral-200 dark:before:border-l-neutral-600 dark:before:border-t-neutral-600';
    case 'bottom-right':
      return 'before:top-0 before:right-4 before:-translate-y-2/4 before:border-l-neutral-200 before:border-t-neutral-200 dark:before:border-l-neutral-600 dark:before:border-t-neutral-600';
    default:
      // default to top-left styles
      return 'before:top-full before:left-4 before:-translate-y-2/4';
  }
};

interface Props {
  // position relative to the parent container
  positioning: Positioning;
  additionalStyles?: string;
  children: React.ReactNode;
}

export default function Toolbar({ positioning, additionalStyles = '', children }: Props) {
  return (
    <div className={`absolute ${positionStyle(positioning)} p-1 ${additionalStyles}`}>
      <div
        className={`relative rounded-sm border border-neutral-200 bg-neutral-100 p-6 shadow-md before:absolute before:h-3 before:w-3 before:rotate-45 before:border before:border-transparent before:bg-inherit dark:border-neutral-600 dark:bg-neutral-700 ${tipPosition(
          positioning,
        )}`}
      >
        {children}
      </div>
    </div>
  );
}

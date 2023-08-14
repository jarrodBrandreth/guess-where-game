type Positioning =
  | 'top-left'
  | 'top-right'
  | 'top-center'
  | 'bottom-left'
  | 'bottom-right'
  | 'bottom-center';

const positionStyle = {
  'top-left': 'top-0 -translate-y-full origin-bottom pb-3',
  'top-right': 'top-0 right-0 -translate-y-full origin-bottom pb-3',
  'bottom-left': 'top-full',
  'bottom-right': 'top-full right-0',
  'top-center': 'top-0 origin-bottom left-1/2 -translate-x-1/2 -translate-y-full pb-3',
  'bottom-center': 'top-full origin-center left-1/2 -translate-x-1/2',
};

const tipPosition = {
  'top-left':
    'before:top-full before:left-3 before:-translate-y-2/4 before:border-r-neutral-200 before:border-b-neutral-200 dark:before:border-r-neutral-600 dark:before:border-b-neutral-600',
  'top-right':
    'before:top-full before:right-3 before:-translate-y-2/4 before:border-r-neutral-200 before:border-b-neutral-200 dark:before:border-r-neutral-600 dark:before:border-b-neutral-600',
  'bottom-left':
    'before:top-0 before:left-3 before:-translate-y-2/4 before:border-l-neutral-200 before:border-t-neutral-200 dark:before:border-l-neutral-600 dark:before:border-t-neutral-600',
  'bottom-right':
    'before:top-0 before:right-3 before:-translate-y-2/4 before:border-l-neutral-200 before:border-t-neutral-200 dark:before:border-l-neutral-600 dark:before:border-t-neutral-600',
  'top-center':
    'before:top-full before:left-1/2 before:-translate-y-1/2 before:-translate-x-1/2 before:border-r-neutral-200 before:border-b-neutral-200 dark:before:border-r-neutral-600 dark:before:border-b-neutral-600',
  'bottom-center':
    'before:top-0 before:left-1/2 before:-translate-y-2/4 before:-translate-x-1/2 before:border-l-neutral-200 before:border-t-neutral-200 dark:before:border-l-neutral-600 dark:before:border-t-neutral-600',
};

interface Props {
  // position relative to the parent container
  positioning: Positioning;
  additionalStyles?: string;
  children: React.ReactNode;
}

export default function Toolbar({ positioning, additionalStyles = '', children }: Props) {
  return (
    <div className={`absolute my-1.5 ${positionStyle[positioning]} p-1 ${additionalStyles}`}>
      <div
        className={`relative rounded-sm border border-neutral-200 bg-neutral-100 p-1 shadow-md before:absolute before:h-3 before:w-3 before:rotate-45 before:border before:border-transparent before:bg-inherit dark:border-neutral-600 dark:bg-neutral-700 ${tipPosition[positioning]}`}
      >
        {children}
      </div>
    </div>
  );
}

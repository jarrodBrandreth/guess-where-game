import { useState } from 'react';
import ExpandLessIcon from './icons/ExpandLessIcon';
import ExpandMoreIcon from './icons/ExpandMoreIcon';

interface Props {
  title: string;
  // any elements to add in heading area
  additionalElements?: JSX.Element;
  children: React.ReactNode;
  // set to true for children nodes to be taken out of regular flow of document
  childrenAbsolute?: boolean;
  // additional tailwind styles to be applied to container
  containerStyles?: string;
}

export default function Accordion({
  title,
  additionalElements,
  containerStyles,
  children,
  childrenAbsolute = false,
}: Props) {
  const [showing, setShowing] = useState(false);

  return (
    <div className={`relative bg-neutral-50 p-3 dark:bg-neutral-800 ${containerStyles}`}>
      <div className="flex items-baseline justify-start gap-4">
        <button
          className="flex items-center justify-start px-2 py-1"
          onClick={() => setShowing((prev) => !prev)}
        >
          <span className="font-semibold">{title}</span>
          <span>{showing ? <ExpandLessIcon /> : <ExpandMoreIcon />}</span>
        </button>
        {additionalElements}
      </div>
      <div
        className={`${showing ? 'block' : 'hidden'} w-full bg-inherit pb-3 pt-8 ${
          childrenAbsolute ? 'absolute left-0 top-full' : ''
        }`}
      >
        {children}
      </div>
    </div>
  );
}

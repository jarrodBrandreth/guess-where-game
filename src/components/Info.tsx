import { useState } from 'react';
import InfoIcon from './icons/InfoIcon';
import NavigationButton from './NavigationButton';

export default function Info() {
  const [showing, setShowing] = useState(false);
  return (
    <>
      <NavigationButton Icon={InfoIcon} label="info" onClick={() => null} />
    </>
  );
}

import { useCallback, useState } from 'react';
import InfoIcon from './icons/InfoIcon';
import NavigationButton from './NavigationButton';
import InfoModal from './InfoModal';

export default function Info() {
  const [showModal, setShowModal] = useState(false);
  const closeModal = useCallback(() => setShowModal(false), []);
  return (
    <>
      <NavigationButton
        Icon={InfoIcon}
        label="info"
        onClick={(e) => {
          e.stopPropagation();
          setShowModal(true);
        }}
      />

      <InfoModal isOpen={showModal} closeModal={closeModal} />
    </>
  );
}

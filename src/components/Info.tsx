import { useCallback, useState } from 'react';
import InfoIcon from './icons/InfoIcon';
import InfoModal from './InfoModal';
import NavButton from './NavButton';
import { useTranslation } from 'react-i18next';

export default function Info() {
  const [showModal, setShowModal] = useState(false);
  const { t } = useTranslation();
  const closeModal = useCallback(() => setShowModal(false), []);

  return (
    <>
      <NavButton
        Icon={InfoIcon}
        label={t('info')}
        onClick={(e) => {
          e.stopPropagation();
          setShowModal(true);
        }}
        isActive={showModal}
      />

      <InfoModal isOpen={showModal} closeModal={closeModal} />
    </>
  );
}

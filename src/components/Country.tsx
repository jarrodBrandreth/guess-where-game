import { useCallback, useState } from 'react';
import CountryButton from './CountryButton';
import CountryModal from './CountryModal';
import { useTranslation } from 'react-i18next';

interface Props {
  id: string;
  name: string;
  capitals: string[];
  flagSrc: string;
}

export default function Country({ id, name, capitals, flagSrc }: Props) {
  const [showModal, setShowModal] = useState(false);
  const closeModal = useCallback(() => setShowModal(false), []);
  const { t } = useTranslation(['common', 'countries', 'capitals']);
  const translatedName = t(name, { ns: 'countries' });
  const translatedCapitals = capitals.map((c) => t(c, { ns: 'capitals' }));
  const flagAlt = t('countryFlagAlt', { countryName: translatedName });

  return (
    <>
      <CountryButton
        name={translatedName}
        flag={{ src: flagSrc, alt: flagAlt }}
        onClick={() => setShowModal(true)}
      />

      <CountryModal
        id={id}
        name={translatedName}
        capitals={translatedCapitals}
        flag={{ src: flagSrc, alt: flagAlt }}
        isOpen={showModal}
        closeModal={closeModal}
      />
    </>
  );
}

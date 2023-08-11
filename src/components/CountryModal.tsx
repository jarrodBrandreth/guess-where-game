import Modal from './Modal';
import { useCountryDetails } from '../hooks/useCountryDetails';
import { useTranslation } from 'react-i18next';
import noImage from '../assets/noImage.svg';
import CarIcon from './icons/CarIcon';
import MapIcon from './icons/MapIcon';
import Error from './Error';

interface Props {
  id: string;
  name: string;
  capitals: string[];
  flag: { src: string; alt: string };
  isOpen: boolean;
  closeModal: () => void;
}

export default function CountryModal({ id, name, flag, capitals, isOpen, closeModal }: Props) {
  const { countryDetails, isLoading, error } = useCountryDetails(isOpen, id);
  const { t } = useTranslation(['common', 'country', 'countries']);
  const coatOfArmsAlt = t('countryFlagAlt', { countryName: name });

  return (
    <Modal isOpen={isOpen} isLoading={isLoading} closeModal={closeModal} heading={name}>
      {error && <Error message={error} />}
      {!error && countryDetails && (
        <div className="grid grid-cols-2 items-center justify-items-center gap-4">
          <img className="h-40 object-contain" src={flag.src} alt={flag.alt} />
          <img
            className="h-40 object-contain"
            src={countryDetails.coatOfArms ?? noImage}
            alt={coatOfArmsAlt}
          />
          <section className="self-start justify-self-start text-sm">
            <article className="flex flex-col items-start">
              <h2 className="font-semibold uppercase text-neutral-500 dark:text-neutral-400">
                {t(capitals.length ? 'capitals' : 'capitals', { ns: 'country' })}
              </h2>
              <p className="">{capitals.toString().replaceAll(',', ', ')}</p>
            </article>
            <article>
              <h2 className="font-semibold uppercase text-neutral-500 dark:text-neutral-400">
                {t('region', { ns: 'country' })}
              </h2>
              <p>{t(countryDetails.region, { ns: 'country' })}</p>
            </article>
            <article>
              <h2 className="font-semibold uppercase text-neutral-500 dark:text-neutral-400">
                {t('subregion', { ns: 'country' })}
              </h2>
              <p>{t(countryDetails.subregion, { ns: 'country' })}</p>
            </article>
            <article>
              <h2 className="font-semibold uppercase text-neutral-500 dark:text-neutral-400">
                {t('population', { ns: 'country' })}
              </h2>
              <p>{countryDetails.population.toLocaleString()}</p>
            </article>
            <article>
              <h2 className="font-semibold uppercase text-neutral-500 dark:text-neutral-400">
                {t('borders', { ns: 'country' })}
              </h2>
              <p className="">
                {countryDetails.borders.length
                  ? countryDetails.borders
                      .map((b) => t(b, { ns: 'countries' }))
                      .toString()
                      .replaceAll(',', ', ')
                  : t('none', { ns: 'country' })}
              </p>
            </article>
          </section>
          <section className="self-start justify-self-start">
            <div>
              <span className="text-neutral-500 dark:text-neutral-400">
                <CarIcon />
              </span>
              <span>{t(countryDetails.carSide, { ns: 'country' })}</span>
            </div>
            <a href={countryDetails.mapLink} target="_blank">
              <span className="text-neutral-500 dark:text-neutral-400">
                <MapIcon />
              </span>
              <span>
                <span>{t('map', { ns: 'country' })}</span>
              </span>
            </a>
          </section>
        </div>
      )}
    </Modal>
  );
}

import { useTranslation } from 'react-i18next';
import Modal from './Modal';
import GitHubIcon from './icons/GitHubIcon';

interface Props {
  isOpen: boolean;
  closeModal: () => void;
}

export default function InfoModal({ isOpen, closeModal }: Props) {
  const { t } = useTranslation();
  return (
    <Modal isOpen={isOpen} closeModal={closeModal} heading={t('info')}>
      <div>
        <a className="" href="https://github.com/" target="_blank">
          <GitHubIcon className="fill-pop" size="24px" />
          <span className="sr-only">view on github</span>
        </a>
      </div>
    </Modal>
  );
}

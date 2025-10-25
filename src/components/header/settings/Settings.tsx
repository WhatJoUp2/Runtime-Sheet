import { useContext, type FC } from 'react';
import './Settings.css';
import { ModalContext } from '../../../contexts/modalContext/ModalContext';
import { SettingsModal } from './SettingsModal';

export const Settings: FC = () => {
  const modalContext = useContext(ModalContext);

  const openSettingsModal = () => {
    if (modalContext) {
      modalContext.openModal({title: "Who wants to know?", content: <SettingsModal />});
    }
  };

  return (
    <div className="settings-container">
      <button className="text-button" onClick={openSettingsModal}>
        {"< swap >"}
      </button>
    </div>
  );
};

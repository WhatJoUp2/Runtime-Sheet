import { createContext, useContext, useState } from 'react';
import { Modal } from '../../components/ui/Modal/Modal';
import { lockScroll, unlockScroll } from '../../utils/generalUtils';

interface ModalContextType {
  isOpen: boolean;
  openModal: (data: { title?: string; content: React.ReactNode }) => void;
  closeModal: () => void;
}

export const ModalContext = createContext<ModalContextType>({
  isOpen: false,
  openModal: () => {},
  closeModal: () => {},
});

export const ModalProvider = ({ children }: { children: React.ReactNode }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [modalContent, setModalContent] = useState<React.ReactNode>(null);
  const [modalTitle, setModalTitle] = useState<string | undefined>(undefined);

  const openModal = (data: { title?: string; content: React.ReactNode }) => {
    setIsOpen(true);
    setModalContent(data.content);
    setModalTitle(data.title);
    lockScroll();
  };

  const closeModal = () => {
    setIsOpen(false);
    setModalContent(null);
    setModalTitle(undefined);
    unlockScroll();
  };

  return (
    <ModalContext.Provider value={{ isOpen, openModal, closeModal }}>
      {children}
      {isOpen && (
        <Modal title={modalTitle} onClose={closeModal}>
          {modalContent}
        </Modal>
      )}
    </ModalContext.Provider>
  );
};

export const useModal = () => {
  const context = useContext(ModalContext);
  if (!context) {
    throw new Error('useModal must be used within a ModalProvider');
  }
  return context;
};

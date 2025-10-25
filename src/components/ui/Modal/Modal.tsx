import type { FC } from 'react';
import './Modal.css';

interface ModalProps {
  children: React.ReactNode;
  title?: string;
  onClose: () => void;
}

export const Modal: FC<ModalProps> = ({ children, onClose, title }) => {
  return (
    <div className="modal-background" onClick={onClose}>
      <div className="modal-container" onClick={(ev) => ev.stopPropagation()}>
        {title && (
          <div className="modal-title">
            <div>{title}</div>
            <div onClick={onClose} className='modal-title-close'>x</div>
          </div>
        )}
        {children}
      </div>
    </div>
  );
};

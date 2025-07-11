import { useEffect } from 'react';
import { ModalContainer, ModalContent, CloseButton } from "./styled";

const Modal = ({ isModalOpen, onClose, children }) => {
  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, [isModalOpen]);
  return (
    <ModalContainer onClick={onClose} isModalOpen={isModalOpen}>
      <ModalContent onClick={(e) => e.stopPropagation()}>
        <CloseButton onClick={onClose}>&times;</CloseButton>
        {children}
      </ModalContent>
    </ModalContainer>
  );
};

export default Modal;
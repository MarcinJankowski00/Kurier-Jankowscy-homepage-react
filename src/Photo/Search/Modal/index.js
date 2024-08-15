import React from 'react';
import { ModalContainer, ModalContent, CloseButton } from "./styled";

const Modal = ({ isModalOpen, onClose, children }) => {
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
import React from 'react';
import { ModalContainer, ModalContent, CloseButton } from "./styled";

const Modal = ({ isOpen, onClose, children }) => {
    return (
      <ModalContainer isOpen={isOpen}>
        <ModalContent>
          <CloseButton onClick={onClose}>&times;</CloseButton>
          {children}
        </ModalContent>
      </ModalContainer>
    );
  };

  export default Modal;
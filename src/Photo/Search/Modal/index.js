import React from 'react';
import { ModalContainer, ModalContent, CloseButton } from "./styled";

const Modal = ({ isopen, onClose, children }) => {
    return (
      <ModalContainer onClick={onClose} isopen={isopen}>
        <ModalContent onClick={(e) => e.stopPropagation()}>
          <CloseButton onClick={onClose}>&times;</CloseButton>
          {children}
        </ModalContent>
      </ModalContainer>
    );
  };

  export default Modal;
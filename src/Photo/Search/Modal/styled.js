import styled, { keyframes } from 'styled-components';

const fadeIn = keyframes`
  from {
    transform: translateY(-20px);
  }
  to {
    transform: translateY(0);
  }
`;

const show = keyframes`
  from {
    opacity: 0;
    display: none;
  }
  to {
    opacity: 1;
    display: flex;
  }
`;

const hide = keyframes`
  from {
    opacity: 1;
    display: flex;
  }
  to {
    opacity: 0;
    display: none;
  }
`;

export const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 999;
  justify-content: center;
  align-items: center;
  animation: ${({ isModalOpen }) => (isModalOpen ? show : hide)} 0.3s ease-in-out;
  display: ${({ isModalOpen }) => (isModalOpen ? 'flex' : 'none')};
`;

export const ModalContent = styled.div`
  color: ${({ theme }) => theme.color.teal};
  background-color: ${({ theme }) => theme.color.section};
  margin: 10px;
  padding: 20px;
  border: 1px solid ${({ theme }) => theme.color.sectionShadow};
  width: 100%;
  max-width: 460px;
  max-height: 90%;
  overflow-y: auto;
  animation: ${fadeIn} 0.5s ease-in-out;
`;

export const CloseButton = styled.span`
  color: #aaa;
  float: right;
  font-size: 28px;
  font-weight: bold;
  cursor: pointer;
  &:hover {
    color: black;
  }
`;
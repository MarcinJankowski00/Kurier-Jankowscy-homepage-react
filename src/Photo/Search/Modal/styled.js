import styled, { keyframes } from 'styled-components';

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(-20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const ModalContainer = styled.div`
  display: ${({ isopen }) => (isopen==="true" ? 'flex' : 'none')};
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 999;
  justify-content: center;
  align-items: center;
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
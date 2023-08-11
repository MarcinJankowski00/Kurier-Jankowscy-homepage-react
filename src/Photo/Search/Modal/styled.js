import styled from 'styled-components';

export const ModalContainer = styled.div`
  display: ${({ isOpen }) => (isOpen ? 'flex' : 'none')};
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
  background-color: #fff;
  margin: 10px;
  padding: 20px;
  border: 1px solid #888;
  width: 100%;
  max-width: 460px;
  max-height: 90%;
  overflow-y: auto;
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
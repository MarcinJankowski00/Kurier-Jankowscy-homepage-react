import styled from 'styled-components';

export const ModalContainer = styled.div`
  display: ${({ isOpen }) => (isOpen ? 'block' : 'none')};
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 999;
  overflow-y: auto;
`;

export const ModalContent = styled.div`
  color: ${({ theme }) => theme.color.teal};
  background-color: #fff;
  margin: 140px auto;
  padding: 20px;
  border: 1px solid #888;
  max-width: 450px;
  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    width: 95%;
    margin-top: 90px;
  }
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
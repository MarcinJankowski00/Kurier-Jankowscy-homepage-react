import styled, { keyframes } from "styled-components";
const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;

  }
`;

export const Div = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: ${({ theme }) => theme.color.loader};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 999;
  animation: ${fadeIn} 1.25s ease-in-out;
`;

export const Img = styled.img`
    
    width: 650px;
    @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax2}px) {
      width: 270px;
    }
`;
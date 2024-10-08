import styled, { keyframes, css } from "styled-components";
const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;

  }
`;

const fadeOut = keyframes`
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
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
  justify-content: center;
  align-items: center;
  z-index: 999;
  
  ${({ hidden }) => hidden && css`
        animation: ${fadeOut} 1.25s ease-in-out;
    `}

`;

export const Img = styled.img`
    animation: ${fadeIn} 1.25s ease-in-out;
    width: 600px;
    @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax2}px) {
            width: 270px;
        }
`;
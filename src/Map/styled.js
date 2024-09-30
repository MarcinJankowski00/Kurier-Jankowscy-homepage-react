import styled, { keyframes } from 'styled-components';

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

export const LoaderWrapper = styled.div`
    display: flex;
    width: 100%;
    margin: 95px 0;
    justify-content: center;
    align-items: center;
    background-color: ${({ theme }) => theme.color.background};
    @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax2}px) {
        margin: 95px 0;
    }
`;

export const Content = styled.iframe`
    width: 100%;
    height: 350px;
    animation: ${fadeIn} 1s ease-in-out;
    @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax3}px) {
            height: 350px;
        }

`;
export const Wrapper = styled.div`
    margin-top: -130px;
    background-color: ${({ theme }) => theme.color.background};
    animation: ${fadeIn} 1s ease-in-out;
    @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax2}px) {
        margin-top: -40px;
    }
`;
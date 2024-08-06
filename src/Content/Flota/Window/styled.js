import styled, { keyframes } from 'styled-components';

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

export const Container = styled.div`
    margin-top: 30px;
    height: 100%;
    width: 100%;
    display: ${({ isopen }) => ({isopen} ? 'grid' : 'none')};
    grid-template-columns: 3fr 1fr;
    animation: ${fadeIn} 0.7s ease-in-out;
    @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax2}px) {
        display: flex;
        flex-direction: column;
    }

`;

export const Photo = styled.div`
    width: 100%;
    height: 100%;
    z-index: 997;
`;

export const Title = styled.h2`
    text-align: center;
    @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax2}px) {
        margin-bottom: 0;
        font-size: smaller;
    }
`;

export const Info = styled.ul`
    list-style: none;
    padding: 10px;
    padding-top: 0%;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 0;
    margin-bottom: 15.5%;
    text-align: center;
    font-size: smaller;
`;

export const Item = styled.li`
    margin-top: 3.5%;
    margin-bottom: 4%;
    padding-bottom: 3px;
    width: 100%;
    border-bottom: 1px solid ${({ theme }) => theme.color.teal};
`;

export const Content = styled.span`

`;

export const LoaderWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 100px;
`;
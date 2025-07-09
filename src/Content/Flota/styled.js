import { Link } from "react-router-dom/cjs/react-router-dom.min";
import styled, { keyframes } from 'styled-components';
import { ReactComponent as PersonIcon } from "../../icons/person.svg"

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
    margin: 100px 0 600px 0;
    justify-content: center;
    align-items: center;
    animation: ${fadeIn} 0.7s ease-in-out;
    @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax21}px) {
        margin: 50px 0 300px 0;
    }
`;

export const Container = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 30px;
    animation: ${fadeIn} 0.7s ease-in-out;
    @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
        grid-template-columns: 1fr 1fr;
    }
    @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax21}px) {
        grid-template-columns: 1fr;
    }
`;

export const Content = styled(Link)`
    color: ${({ theme }) => theme.color.font};
    box-shadow: 0px 4px 12px 0px rgba(186, 199, 213, 0.5);
    text-decoration: none;
    display: flex;
    flex-direction: column;
    justify-content: start;
    max-width: 500px;
    transition: 0.5s;
    background-color: ${({ theme }) => theme.color.white};
    border-radius: 5px;
    &:hover {
        transform: scale(102%);
    }
`;

export const Photo = styled.img`
    width: 100%;
    border-radius: 5px 5px 0 0;
`;

export const Info = styled.div`
    width: 100%;
    padding: 12px;
`;

export const Title = styled.div`
    font-size: 25px;
    font-weight: bold;
    margin-bottom: 10px;
    @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax21}px) {
        font-size: 20px;
    }
`;

export const Bottom = styled.div`
    display: flex;
    font-size: 16px;
    justify-content: space-between;
    align-items: center;
    @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax21}px) {
        font-size: 14px;
    }
`;

export const More = styled.div`
    padding: 6px;
    border-radius: 10%;
    color: ${({ theme }) => theme.color.lessImportant};
    background-color: ${({ theme }) => theme.color.gallery};
    &:hover {
        filter: brightness(103%);
    }
`;

export const StyledPersonIcon = styled(PersonIcon)`
    width: 14px;
    margin-right: 5px;
    fill: ${({ theme }) => theme.color.font};
`;


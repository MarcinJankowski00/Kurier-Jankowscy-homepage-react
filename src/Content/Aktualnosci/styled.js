import { Link } from "react-router-dom/cjs/react-router-dom.min";
import styled from "styled-components";

export const Container = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 40px 100px;
    @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
        grid-template-columns: 1fr;
        grid-gap: 30px 100px;
    }
`;

export const Content = styled(Link)`
    color: ${({ theme }) => theme.color.font};
    text-decoration: none;
    display: flex;
    justify-self: start;
    align-items: center;
    transition: 0.5s;
    border-radius: 5px;
    &:hover {
        background-color: ${({ theme }) => theme.color.white};
        box-shadow: 0px 4px 12px 0px rgba(186, 199, 213, 0.5);
    }
    @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax21}px) {
        background-color: ${({ theme }) => theme.color.white};
        box-shadow: 0px 4px 12px 0px rgba(186, 199, 213, 0.5);
    }
`;

export const Photo = styled.img`
    width: 50%;
    margin: 16px;
    border-radius: 5px;
    @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
        width: 35%;
    }
`;

export const Info = styled.div`
    width: 50%;
    margin: 16px 16px 16px 0;
    @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
        width: 65%;
    }

`;

export const Title = styled.div`
    font-size: 25px;
    font-weight: bold;
    margin-bottom: 10px;
    @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax21}px) {
        font-size: 16px;
    }
`;

export const FirstSentence = styled.div`
    margin-bottom: 10px;
    color: ${({ theme }) => theme.color.lessImportant};
    @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax21}px) {
        font-size: 12px;
    }
`;

export const Bottom = styled.div`
    display: flex;
    justify-content: space-between;
    font-size: 15px;
    align-items: center;
    @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax21}px) {
        font-size: 12px;
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

export const Date = styled.div`
    color: ${({ theme }) => theme.color.lessImportant};
`;
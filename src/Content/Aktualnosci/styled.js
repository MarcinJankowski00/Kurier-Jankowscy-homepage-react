import { Link } from "react-router-dom/cjs/react-router-dom.min";
import styled from "styled-components";

export const Container = styled.div`
    display: grid;
    grid-template-columns: 1fr auto;
    @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
        display: flex;
        flex-direction: column;
        align-items: center;
    }
`;

export const Content = styled(Link)`
    color: ${({ theme }) => theme.color.font};
    text-decoration: none;
    display: flex;
    justify-self: start;
    align-items: center;
    max-width: 500px;
    margin: 30px 0;
    padding-right: 12px;
    transition: 0.5s;
    &:hover {
        background-color: ${({ theme }) => theme.color.white};
    }
    @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax21}px) {
        margin: 15px 0;
    }
`;

export const Photo = styled.img`
    width: 50%;
    margin-right: 20px;
    @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax22}px) {
        width: 35%;
        margin-right: 10px;
    }
`;

export const Info = styled.div`
    width: 50%;
    @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax22}px) {
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
    @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax22}px) {
        display: none;
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
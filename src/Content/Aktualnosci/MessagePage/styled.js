import { Link } from "react-router-dom/cjs/react-router-dom.min";
import styled from "styled-components";

export const ReturnButton = styled(Link)`
    display: inline-block;
    text-decoration: none;
    color: ${({ theme }) => theme.color.lessImportant};
    background-color: ${({ theme }) => theme.color.gallery};
    cursor: pointer;
    padding: 5px 10px;
    border-radius: 5%;
    margin: 60px 0 0 15px;
`;

export const Date = styled.div`
    color: ${({ theme }) => theme.color.lessImportant};
`;

export const Content = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 20px;
    @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax21}px) {
        flex-direction: column;
    }
`;

export const Photo = styled.img`
    width: 25%;
    border-radius: 5px;
    @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax21}px) {
        width: 80%;
    }
`;

export const Container = styled.div`
    max-width: 760px;
    padding: 20px 0;
`;

export const Div = styled.div`
    font-weight: bold;
    margin: 0;
    padding: 0;
`;


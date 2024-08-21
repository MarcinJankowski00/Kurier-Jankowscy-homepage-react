import { Link } from "react-router-dom/cjs/react-router-dom.min";
import styled from "styled-components";

export const Container = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
        display: flex;
        flex-direction: column;
        align-items: center;
    }
`;

export const Content = styled(Link)`
    color: ${({ theme }) => theme.color.font};
    box-shadow: 0px 0px 15px -2px rgba(223, 223, 223, 1);
    text-decoration: none;
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-content: center;
    max-width: 500px;
    margin: 30px 10px;
    transition: 0.5s;
    background-color: ${({ theme }) => theme.color.white};
    border-radius: 3%;
    &:hover {
        transform: scale(103%);
    }
    @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax21}px) {
        margin: 15px 0;
    }
`;

export const Photo = styled.img`
    width: 100%;
    margin-right: 20px;
`;

export const Info = styled.div`
    width: 100%;
    padding: 12px;
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

export const Bottom = styled.div`
    display: flex;
    font-size: 15px;
    justify-content: space-between;
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

export const Icon = styled.img`
    width: 15px;
    margin-right: 4px;
`;


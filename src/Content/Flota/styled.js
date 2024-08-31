import { Link } from "react-router-dom/cjs/react-router-dom.min";
import styled from "styled-components";

export const LoaderWrapper = styled.div`
    width: 100%;
    padding-top: 23.12%;
    padding-bottom: 23.12%;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const Container = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 30px;
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


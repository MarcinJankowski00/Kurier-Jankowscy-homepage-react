import styled from "styled-components";

export const Date = styled.div`
    color: ${({ theme }) => theme.color.lessImportant};
`;

export const Content = styled.div`
    display: flex;
    align-items: start;
    justify-content: space-between;
    margin-top: 40px;
    @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax21}px) {
        flex-direction: column;
        align-items: center;
    }
`;

export const Photo = styled.img`
    width: 25%;
    border-radius: 5px;
    margin-right: 20px;
    @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax21}px) {
        width: 80%;
        margin-right: 0px;
        margin-bottom: 20px;
    }
`;

export const Container = styled.div`
    max-width: 760px;
`;

export const Div = styled.div`
    font-weight: bold;
    margin: 0;
    padding: 0;
`;

export const Link = styled.a`
    display: contents;
    text-decoration: none;
    transition: 0.2s;
    color: ${({ theme }) => theme.color.font};
    &:hover {
        color: #4c90f4;
    }  
`;


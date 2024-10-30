import { Link } from "react-router-dom/cjs/react-router-dom.min";
import styled from "styled-components";

export const Container = styled.div`
    justify-items: center;
    font-size: 22px;
    @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax2}px) {
        font-size: 18px;
    }
`;

export const Content = styled.div`
    display: flex;
    flex-direction: column;
    text-align: justify;
    max-width: 1100px;
`;

export const Segment = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 20px 0;
    max-width: 1100px;
    text-align: start;
`;

export const Wrapper = styled.div`
    max-width: 540px;
`;

export const ImageWrapper = styled.div`
    position: relative;
    max-width: 500px;
    width: 100%;
    border-radius: 5px;
    padding: 30px;
    overflow: hidden;
    @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax2}px) {
        display: none;
    }
`;

export const Image = styled.img`
    position: relative;
    z-index: 2;
    max-width: 440px;
    width: 100%;
    border-radius: 5px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
`;

export const Button = styled(Link)`
    text-align: center;
    align-self: center;
    background-color: transparent;
    text-decoration: none;
    padding: 16px 32px;
    cursor: pointer;
    color: ${({ theme }) => theme.color.teal};
    border: 2px solid ${({ theme }) => theme.color.teal};
    transition: 0.5s;
    margin-top: 30px;
    &:hover {
        background-color: ${({ theme }) => theme.color.teal};
        border: 2px solid ${({ theme }) => theme.color.teal};
        color: ${({ theme }) => theme.color.white};;
    }
    @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax21}px) {
        font-size: 15px;
    }
`;
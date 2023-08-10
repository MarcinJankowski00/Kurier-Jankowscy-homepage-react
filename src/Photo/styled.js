import styled from "styled-components";
import background from "./background.jpg";

export const Image = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    height: 770px;
    padding-top: 50px;
    padding-left: 10%;
    padding-right: 10%;
    justify-content: center;
    align-items: center;
    background-image: url("${background}");
    background-size: cover;
    background-position: center;
    @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
            flex-direction: column-reverse;
            padding-left: 5%;
            padding-right: 5%;
        }
`;

export const Text = styled.div`
    color: white;
    font-weight: bold;
    font-size: 45px;
    margin-right: 130px;
    @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
            display: none;
        }
`;
export const Buttons = styled.div`
    color: white;
    font-weight: bold;
    font-size: 45px;
    margin-right: 130px;
    @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
            margin: 0;
        }
`;

export const Span = styled.span`
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
`;

export const Button = styled.button`
    font-size: 20px;
    border: 1px solid ${({ theme }) => theme.color.crimson};
    background-color: ${({ theme }) => theme.color.crimson};
    color: #fff;
    margin-right: 10px;
    padding: 12px 24px;
    cursor: pointer;
    &:hover {
        background-color: ${({ theme }) => theme.color.black};
        border: 1px solid ${({ theme }) => theme.color.black};
        transition: 0.5s;
        color: ${({ theme }) => theme.color.white};;
    }
    @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
            width: 100%;
        }
`;

export const DownloadButton = styled.button`
    font-size: 20px;
    border: 1px solid ${({ theme }) => theme.color.white};
    background-color: transparent;
    color: ${({ theme }) => theme.color.white};
    padding: 12px 24px;
    cursor: pointer;
    &:hover {
        background-color: ${({ theme }) => theme.color.white};
        border: 1px solid ${({ theme }) => theme.color.white};
        transition: 0.5s;
        color: ${({ theme }) => theme.color.teal};
    }
`;
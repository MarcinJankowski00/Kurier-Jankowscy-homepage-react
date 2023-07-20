import styled from "styled-components";
import background from "./background.jpg";

export const Image = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 880px;
    padding-left: 20%;
    justify-content: center;
    background-image: url("${background}");
    background-size: cover;
    background-position: center;
`;

export const Text = styled.div`
    color: white;
    font-weight: bold;
    font-size: 45px;
    padding-top: 100px;
    
`;

export const Span = styled.span`
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
`;

export const Button = styled.button`
    font-size: 20px;
    border: 1px solid ${({ theme }) => theme.color.crimson};
    background-color: ${({ theme }) => theme.color.crimson};
    color: #fff;
    padding: 12px 24px;
    cursor: pointer;
    &:hover {
        background-color: ${({ theme }) => theme.color.black};
        border: 1px solid ${({ theme }) => theme.color.black};
        transition: 0.5s;
        color: ${({ theme }) => theme.color.white};;
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
        color: ${({ theme }) => theme.color.teal};;
    }
`;